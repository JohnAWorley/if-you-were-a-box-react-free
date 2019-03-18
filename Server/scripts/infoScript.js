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
        positionsToFace(positions); 
    }
    else{
        POSITIONS= null;
    }
}

function positionsToFace(positions) {
    var face = {};

    face.upperMouth = positions.slice(59, 62) // slice is not inclusive
    face.lowerMouth = positions.slice(56, 59) // slice is not inclusive
    face.rightMouth = [positions[44]];
    face.leftMouth = [positions[50]];
    face.pupilLeft = [positions[27]];
    face.pupilRight = [positions[32]];

    face.eyebrowLeft = positions.slice(19, 23);
    face.eyebrowRight = positions.slice(15, 19);

    face.nose = positions.slice(34, 41);
    face.bridge = [positions[33], positions[41], positions[62]];
    face.upperLip = positions.slice(44, 51);
    face.lowerLip = positions.slice(50, 58);

    // the eye has the upper, the lower and the middle portions
    // Q: can each part can correspond to an instrument piece?
    face.eyeLeft = [];
    face.eyeRight = [];

    face.positions = positions;
    console.log(face);
    return face;
}


// function positionLoop() {
//     console.log('in poistion loop');
//     var frames = requestAnimationFrame(positionLoop);
//     var positions = ctrack.getCurrentPosition();

//     console.log(positions);


// }
