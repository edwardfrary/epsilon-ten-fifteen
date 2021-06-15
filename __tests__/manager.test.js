const { TestWatcher } = require('jest');
const Manager = require('../lib/Manager.js');

test('Enter and store the managers name, employee ID, email and office number', () => {
    const manager = new Manager('Dave');
    expect(manager.name).toBe('Dave');
    expect(manager.empID).toBe(expect.any(Number));
    expect(manager.email).toBe(expect.any(String));
    expect(manager.office).toBe(expect.any(Number));
});