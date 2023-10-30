//your JS code here. If requir
document.addEventListner(DOMContentLoaded,fucntion(){
let div = getElementById("browser-info");
let appName = navigator.appName;
let versionName = navigator.appVersion;
div.innerText = You are using " + appName + " version " + versionName

})