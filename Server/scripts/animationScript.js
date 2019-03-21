var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(500, 500);
document.body.appendChild(renderer.domElement);

let boxColor = 0x2d33d2;
let geometryOne= 1;
let geometryTwo= 1;
let geometryThree=1;


var geometry = new THREE.BoxGeometry(geometryOne, geometryTwo, geometryThree);
var material = new THREE.MeshBasicMaterial({ color: boxColor });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;


var animate = function () {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
    
    if(face){
        let hexOne = (Math.round(face.eyebrowLeft[0][0])).toString(16);
        let hexTwo = (Math.round(face.eyebrowLeft[0][0])).toString(16);
        let hexThree = (Math.round(face.eyebrowLeft[0][0])).toString(16);
        return boxColor = `0x${hexOne}${hexTwo}${hexThree}`;
        
        
    }else{
        return boxColor= 0x2d33d2;
        
    }
    
};

animate();



