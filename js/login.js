var Web = namespace("TIH.ToromontCAT.Web");

Web.Security = function (authURL) {
    var _authURL = authURL + "/login"; ;
    var that = this;
    var tokenName = "xToken";

    this.Login = function (loginInfo) {
        var obj = new Object();
        obj.loginUser = loginInfo;

        processLogin(obj);
    };

    this.ClearLogin = function () {
        processLoginClear();
    };

    this.ProcessSlide = function () {
        processSlide();
    };

    var processSlide = function () {
        var actionUrl = _authURL + "/slide";
        $.ajax({
            url: actionUrl
                    , type: "GET"
        })
        .done(function (data) {
            $("#divRes").html(data);
        })
        .fail(function (data) {
            LoginFailed(data);
        })
    }

    var processLoginClear = function () {
        var actionUrl = _authURL + "/clear";
        var token = $.jStorage.get(tokenName);

        $.ajax({
            url: actionUrl
                    , type: "GET"
                    , beforeSend: function (xhr) {
                        xhr.setRequestHeader("AuthX", "WRAP access_token=" + token);
                    }
        })
        .done(function (data) {
            bootstrap_alert.success("Signed Out");
            $("#pnlAuthenticated").hide();
            $("#pnlNotAuthenticated").show();
        })
        .fail(function (data) {
            LoginFailed(data);
        })
        .always(function () {
            $.jStorage.deleteKey(tokenName);
        })
    }

    var processLogin = function (loginUser) {
        var d = JSON.stringify(loginUser);
        var actionUrl = _authURL + "/";
        $('#btnSignIn').button('Validating Credentials...')
        $.ajax({
            url: actionUrl
                    , type: "POST"
                    , contentType: "application/json"
                    , data: d

        })
        .done(function (data) {
            LoginSuccess(data);
        })
        .fail(function (data) {
            LoginFailed(data);
        })
        .always(function () {
            $('#btnSignIn').button('reset');
        });
    };

    var LoginSuccess = function (data) {

        $.jStorage.set(tokenName, data.Token);
        that.OnLoginSuccess(data);
    };

    var LoginFailed = function (data) {
        that.OnLoginFailed(data);
    };

    this.OnLoginSuccess = function (data) {
        if (data.hasOwnProperty("IsLogin")) {
            bootstrap_alert.success(data.IsLogin ? "Signed In" : "Signed Out");
            if (data.IsLogin) {
                $("#pnlNotAuthenticated").hide();
                $("#pnlAuthenticated").show();

            }
            else {
                $("#pnlAuthenticated").hide();
                $("#pnlNotAuthenticated").show();
            }
        }
        else
            alert("Sign In Failed.");
    };
    this.OnLoginFailed = function (data) {
        bootstrap_alert.error("Sign In Failed");
    };

}
