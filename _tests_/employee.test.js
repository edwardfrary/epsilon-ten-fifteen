const { TestWatcher } = require('jest');
const Employee = require('../lib/Employee.js');

test("Enter and store the employee's name, employee ID and email", () =>{
    const employee = new Employee('Helga', '2142', 'helga2142@epsilon15.net');
    expect(employee.name).toBe('Helga');
    expect(employee.empID).toBe('2142');
    expect(employee.email).toBe('helga2142@epsilon15.net');
});