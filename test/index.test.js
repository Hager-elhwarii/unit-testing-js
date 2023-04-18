const {
  capitalizeText,
  createArray
} = require("../index");
var chai = require("chai");
var expect = chai.expect;


describe('capitalizeText', () => {

  it('should take a string and return a string', () => {
    const result = capitalizeText('hager');
    expect(typeof result).to.be.a('string');
  });

  it('should take a string and return it capitalized', () => {
    const result = capitalizeText('hager');
    expect(result).to.equal('HAGER');
  });
  
  it('should throw a type error if a non-string parameter is passed', () => {
    expect(() => capitalizeText(268)).throw(TypeError);
  });
});

// test cases:
//test that the function takes a string it will return a string
//test that the function takes a string and return it after capitalize it
//test if the function takes number it will throw type error says parameter should be string


describe('createArray', () => {
  
  it('should return an array', () => {
    expect(createArray(2)).to.be.a("array");
  });

  it('should return an array of length 2 that includes 1 when passed 2', () => {
    expect(createArray(2)).to.length(2).to.include(1);

  });

  it('should return an array of length 3 that does not include 3 when passed 3', () => {
    expect(createArray(3)).to.length(3).to.not.include(3);
  });
});
