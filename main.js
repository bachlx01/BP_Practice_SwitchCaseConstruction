
function excercise1 () {
    var browser = prompt("Input browser's name");
    switch (browser) {
        case 'Edge':
            alert("You've got the Edge!");
            break;
        case 'Chrome':
        case 'Firefox':
        case 'Safari':
        case 'Opera':
            alert('Okay we support these browsers too');
            break;
        default:
            alert('We hope that this page looks ok!');
    }
}

function excercise2 () {
    let inputa = prompt('a?', '');
    let a = parseInt(inputa);
    switch (a) {
        case 0:
            alert(0);
            break;
        case 1:
            alert(1);
            break;
        case 2:
        case 3:
            alert('2,3');
            break;
    }
}

function excercise3 () {
    let value = prompt('Input a number', 0)
    let v = parseInt(value)>0;
    switch (v) {
        case 0:
            alert(0);
            break;
        case true:
            alert('This number is the positive number');
            break;
        case false:
            alert('This number is the nagative number');
            break;
    }
}