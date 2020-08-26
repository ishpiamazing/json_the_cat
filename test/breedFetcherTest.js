const fetchBreedDescription  = require('../breedFetcher');
const  chai  = require('../node_modules/chai');
const assert = chai.assert;

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      // console.log(typeof desc);
      // console.log(desc);

      assert.equal(err, null);

      const expectedDesc = 'The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ';

      // compare returned description
      assert.equal(expectedDesc, desc);
  



      done();
    });
  });
  it('returns error and description as null as description invalid/non-existent breed', (done) => {
    fetchBreedDescription('Siberiangeg', (err, desc) => {
      // we expect no error for this scenario
      // console.log(typeof desc);
      // console.log(desc);
      //console.log(err);
      const expectedDesc = null;
      assert.equal(expectedDesc, err);

      // // compare returned description
      assert.equal(expectedDesc, desc);

      done();
    });
  });






});