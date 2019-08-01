var hourNow = prompt('what is the current hour?');
var greeting;

if (hourNow > 18) {
    greeting = 'good evening';
} else if (hourNow > 12) {
    greeting = 'good afternoon';
} else if (hourNow > 0) {
    greeting = 'good morning';
} else {
    greeting = 'welcome to class'
}

alert(greeting + ' brian');

// this will update the HTML
document.write('<h2>' + greeting + '</h2>');