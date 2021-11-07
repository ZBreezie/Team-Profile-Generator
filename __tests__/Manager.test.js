const Manager = require('../lib/Manager.js');

// Tests if the employee has a name
test("Has a name", () => {
    const testName = "Bob";
    const manager = new Manager(testName, "test", "test", "test");
    expect(manager.name).toBe("Bob");
  });