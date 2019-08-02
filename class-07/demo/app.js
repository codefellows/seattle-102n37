function createGreeting(question, eveningGreeting, name) {
    var hourNow = prompt(question);
    var greeting;

    if (hourNow > 18) {
        greeting = eveningGreeting;
    } else if (hourNow > 12) {
        greeting = 'good afternoon';
    } else if (hourNow > 0) {
        greeting = 'good morning';
    } else {
        greeting = 'welcome to class'
    }

    alert(greeting + ' ' + name);

    // this will update the HTML
    document.write('<h2>' + greeting + '</h2>');
}

createGreeting('what is the current time hour?', 'top of the evening to ya', 'brian');

function howMany() {
    var count = prompt('how many things do you want?');

    while( isNaN(count) ) {
        count = prompt('please enter a number');
    }

    console.log('number of things i want:', count)
    return Number(count);
}

howMany();

