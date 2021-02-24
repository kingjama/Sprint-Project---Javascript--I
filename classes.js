// 1. Copy and paste your prototype in here and refactor into class syntax.

function cuboidMaker(attributes){
    this.height= attributes.height; this .length= attributes.length; this.width=attributes.width;
    this.volume=function(){return this.height * this.width * this.length};
    this.surfaceArea = function(){return 2*this.length*this.width + 2*this.length*this.height + 2*this.width*this.height}
  
  }
  const cuboid = new cuboidMaker({
    length: 4, width: 5, height: 5
  })
  console.log(cuboid.volume())
  console.log(cuboid.surfaceArea())
// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class cubeMaker extends cuboidMaker{
    constructor(cubeMakerAttributes) {
      super(cubeMakerAttributes);
      this.height = cubeMakerAttributes.height;
      this.width= cubeMakerAttributes.width; 
      this.length = cubeMakerAttributes.length;
     this.volume=function(){return this.height * this.width * this.length};
    this.surfaceArea = function(){return 2*this.length*this.width + 2*this.length*this.height + 2*this.width*this.height}
    }
  }
  const cuboid1 = new cubeMaker({length: 5, width: 6, height: 2})
  console.log(cuboid1.volume())