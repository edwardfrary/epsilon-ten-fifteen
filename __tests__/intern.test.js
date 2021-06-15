const { TestWatcher } = require('jest');
const Intern = require('../lib/Intern.js');

test('Enter and store name, id, email and school', () => {
    const intern = new Intern('Eric', 664646, 'eric@rutgers.edu', 'Rutgers');
    expect(intern.name).toBe('Eric');
    expect(intern.empID).toBe(664646);
    expect(intern.email).toBe('eric@rutgers.edu');
    expect(intern.school).toBe('Rutgers');
})