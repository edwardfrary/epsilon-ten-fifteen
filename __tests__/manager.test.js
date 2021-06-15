const { TestWatcher } = require('jest');
const Manager = require('../lib/Manager.js');

test('Enter and store the managers name, employee ID, email and office number', () => {
    const manager = new Manager('Dave', '08830', 'daveonthetrain@scooter.net', 13);
    expect(manager.name).toBe('Dave');
    expect(manager.empID).toBe('08830');
    expect(manager.email).toBe('daveonthetrain@scooter.net');
    expect(manager.office).toBe(13);
});