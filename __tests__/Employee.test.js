const Employee = require('../lib/Employee.js');

// Tests if the employee has a name of Bob
test("Has a name", () => {
    const testName = "Bob";
    const employee = new Employee(testName, "test", "test");
    expect(employee.name).toBe("Bob");
  });