//your JS code here. If requir
document.addEventListener('DOMContentLoaded', function() {
    var browserInfoDiv = document.getElementById('browser-info');
    if (browserInfoDiv) {
        var browserName = navigator.appName;
        var version = navigator.appVersion;
        browserInfoDiv.innerText = "You are using " + browserName + " version " + version;
    }
});