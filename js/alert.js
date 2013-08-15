/* Alerts */
bootstrap_alert = function () { }
bootstrap_alert.warning = function (message) { $('#alert_placeholder').append('<div class="alert alert-block"><a class="close" href="#" data-dismiss="alert">×</a><span>' + message + '</span></div>'); } //.fadeIn().delay(3000).fadeOut('slow'); }
bootstrap_alert.success = function (message) { $('#alert_placeholder').append('<div class="alert alert-block alert-success"><a class="close" href="#" data-dismiss="alert">×</a><span>' + message + '</span></div>'); } //.fadeIn().delay(3000).fadeOut('slow'); }
bootstrap_alert.error = function (message) { $('#alert_placeholder').append('<div class="alert alert-block alert-error"><a class="close"href="#" data-dismiss="alert">×</a><span>' + message + '</span></div>'); } //.fadeIn().delay(3000).fadeOut('slow'); }
bootstrap_alert.info = function (message) { $('#alert_placeholder').append('<div class="alert alert-block alert-info"><a class="close" href="#" data-dismiss="alert">×</a><span>' + message + '</span></div>'); } //.fadeIn().delay(3000).fadeOut('slow'); }
        
       