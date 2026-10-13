```javascript
// Event Registration
function register(eventName) {
    let name = prompt("Enter your name:");

    if (name) {
        alert("Congratulations " + name +
              "! You registered for " + eventName);
    } else {
        alert("Please enter your name.");
    }
}

// Event Search
function searchEvent() {
    let search = prompt("Enter event name:");

    if (search) {
        alert("Searching for: " + search);
    }
}

// Welcome Message
window.onload = function() {
    console.log("Welcome to College Event Portal!");
};
```