var pictureSource;   // picture source
var destinationType; // sets the format of returned value 

// Wait for PhoneGap to connect with the device
//
document.addEventListener("deviceready",onDeviceReady,false);

// PhoneGap is ready to be used!
//
function onDeviceReady() {
    pictureSource=navigator.camera.PictureSourceType;
    destinationType=navigator.camera.DestinationType;
}


// A button will call this function
//
function capturePhoto() {
	navigator.camera.getPicture(onSuccess, onFail, { quality : 20, 
	  destinationType : 1, 
	  sourceType : 1, 
	  allowEdit : false,
	  encodingType: Camera.EncodingType.JPEG,
	  targetWidth: 1280,
	  targetHeight: 960 }
  	); 
    }

function onSuccess(imageURI) {
	//var date = new date();
    //var ticks = date.getTime();
    var ticks = "1111";
    alert(ticks);
    
    var imgLightBoxLink = $('<a />').attr({ 'href': '#', 'rel': 'lightbox', 'id': 'imgLBox_' + ticks }).appendTo($('#pictureContainer'));
    var imgThumbnail = $('<img />').attr({ 'class': 'imgStandard', 'id': 'img_' + ticks, 'src': imageURI}).appendTo($('#imgLBox_' + ticks));    
    }

function onFail(message) {
    alert('Failed because: ' + message);
}