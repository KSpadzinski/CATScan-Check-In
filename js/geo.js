function getLocation() {
    navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFail, { enableHighAccuracy: true });
}

function onGeoFail(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED: bootstrap_alert.error("user did not share geolocation data");
            break;
        case error.POSITION_UNAVAILABLE: bootstrap_alert.error("could not detect current position");
            break;
        case error.TIMEOUT: bootstrap_alert.error("retrieving position timed out");
            break;
        default: bootstrap_alert.error("unknown GPS error");
            break;
    }
}

function onGeoSuccess(position) {
    Latitude = position.coords.latitude;
    Longitude = position.coords.longitude;

    Latitude = Math.round(Latitude * 10000) / 10000;
    Longitude = Math.round(Longitude * 10000) / 10000;
}

if (!window.cordova) {
    getLocation();  
}
