var pictureSource;   // picture source
var destinationType; // sets the format of returned value 
var pictureFiles = [];

// A button will call this function
//
function capturePhoto() {
    navigator.camera.getPicture(onSuccess, onFail, { 
        quality : 10, 
        destinationType : 1, 
        sourceType : 1, 
        allowEdit : false,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 500 }); 
    }

// Upload files to server
var totalImages = 0;
var imageProgressCount = 0;

function onSuccess(imageURI) {
    pictureFiles.push(imageURI);
    var index = pictureFiles.indexOf(imageURI);
    totalImages = pictureFiles.length;
    $('<img />').attr({ 'class': 'imgStandard', 'id': 'imageCapture' + index, 'src': imageURI }).appendTo($('#pictureContainer'));
}

function onFail(message) {
    bootstrap_alert.error('Failed because: ' + message);
}


function uploadPhotos(qrid, imageName, imageTag) {
    $.each(pictureFiles, function () {
        var ft = new FileTransfer(),
        path = this,
        name = 'Image' + imageProgressCount;

        ft.upload(path,
        "http://ws.toromont.ca/touch/file/" + qrid + "/Add?tag=" + escape(imageTag),
        function (result) {
            $('#imageCapture' + imageProgressCount).fadeOut('slow');
            AssociationMessage += "Image " + (imageProgressCount + 1) + " upload success</br>";
            imageProgressCount += 1;
            if (totalImages == imageProgressCount)
                endAssociation();
        },
        function (error) {
            AssociationMessage += "Image " + (imageProgressCount + 1) + " upload failed</br>";
            imageProgressCount += 1;
            if (totalImages == imageProgressCount)
                endAssociation();
        },
        { fileName: name });
    })
}