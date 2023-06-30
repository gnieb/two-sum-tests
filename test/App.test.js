const twoSum = require('../src/twoSum.js');
const expect = require('chai').expect;

describe('Testing the Two Sum algorithm solution', function(){
    it('It can handle an array with only two integers', function(done){
        expect(twoSum([1,2], 3)).to.equal([1,0]);
        done();
    })
})