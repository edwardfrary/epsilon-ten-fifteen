const { TestWatcher } = require('jest');
const Engineer = require('../lib/Engineer.js');

test('Enter and store the engineers name, employee ID, email and gitHub', () =>{
    const engineer = new Engineer('Daveyboi', '36544', 'caff@nurg.ling', 'caffnurg');
    expect(engineer.name).toBe('Daveyboi');
    expect(engineer.empID).toBe('36544');
    expect(engineer.email).toBe('caff@nurg.ling');
    expect(engineer.gitHub).toBe('caffnurg');
});