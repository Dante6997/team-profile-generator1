const Employee = require('../lib/Employee');
const employee = new Employee('Dante', '1', 'dante@yahoo.com');


test('creates employee object', () => {
    expect(employee.name).toBe('Dante');
    expect(employee.id).toEqual('1');
    expect(employee.email).toBe('dante@yahoo.com');
    expect(employee.getName()).toBe('Dante');
    expect(employee.getId()).toEqual('1');
    expect(employee.getEmail()).toBe('dante@yahoo.com');
    expect(employee.getRole()).toBe('Employee');
});