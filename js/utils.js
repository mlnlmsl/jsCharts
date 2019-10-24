/**
 * 
 * @param {DOM element} elem parent element in which canvas lies
 */
function _createCanvas(elem) {
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    // console.log(elem.offsetWidth);
    var cw = canvas.width = 600;
    var ch = canvas.height = 500;
    elem.appendChild(canvas);
    canvas.style.border = '1px solid red';
    return ctx;
}

function calcPercentage(data, total) {
    if (total != 0) {
        return data / total * 100;
    }
    console.error('total sum is zero');
}

//converts any string in data array to number
function parseIntInArray(data) {
    if (data instanceof Array) {
        return data.map((x) => parseInt(x));
    }
}

//get closest multiple fo 5 
function getClosestMultipleofFive(n) {
    if (n > 0)
        return Math.ceil(n / 5.0) * 5;
    else if (n < 0)
        return Math.floor(n / 5.0) * 5;
    else
        return 5
}

// global function to draw line
// function drawLine(ctx, from, to) {

// }

// function to find distance

function distance(fron, to) {

}

