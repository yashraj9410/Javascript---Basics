// The navigator object in JavaScript provides information about the user's browser and system.
//  It contains properties and methods that allow you to access details like the user agent, platform,
//  language, and more. Here are five basic examples of using the navigator object:


console.log("User Agent:", navigator.userAgent);


console.log("Browser Language:", navigator.language);

// console.log("Operating System:", navigator.platform);


if (navigator.cookieEnabled) {
    console.log("Cookies are enabled");
} else {
    console.log("Cookies are disabled");
}


if (navigator.onLine) {
    console.log("Online");
} else {
    console.log("Offline");
}