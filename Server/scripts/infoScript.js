$(document).ready(readyNow);


function readyNow() {
    console.log('jquery ready');
    $('#frameButton').on('click', getFaceCordinates);
}


function getFaceCordinates() {
    console.log('in frame getter');
    positionLoop();
}


function positionLoop() {
    if (ctrack.getCurrentPosition()) {
        var positions = ctrack.getCurrentPosition();
        console.log(positions);
        
    }
    else{
        POSITIONS= null;
    }
}




// function positionLoop() {
//     console.log('in poistion loop');
//     var frames = requestAnimationFrame(positionLoop);
//     var positions = ctrack.getCurrentPosition();

//     console.log(positions);


// }
