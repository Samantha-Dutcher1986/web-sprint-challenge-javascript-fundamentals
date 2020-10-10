// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(length, width, height){
//     this.length = length;
//     this.width = width;
//     this.height = height;
//   };

// CuboidMaker.prototype.volume = function(){
//     return this.length * this.width * this.height;
//   };

// CuboidMaker.prototype.surfaceArea = function(){
//     return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
//   };

//Class Syntax
class CuboidMaker2{
    constructor(length, width, height){
        this.length = length;
        this.width = width;
        this.height = height;
    };
    volume(){
        return this.length * this.width * this.height;
    };
    surfaceArea(){
        return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
    };
};

class CubeMaker extends CuboidMaker2{
    constructor(length, width, height){
        super(length, width, height);
    }
    cubeVolume(){
        return this.length * this.width * this.height;
    }
    cubeSurfaceArea(){
        return (this.length * this.width) * 10;
    }
};

const classCuboid = new CuboidMaker2(7, 7, 8);
const cube = new CubeMaker( 6, 6, 7);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
console.log(cube.cubeVolume());
console.log(cube.cubeSurfaceArea());