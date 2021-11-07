const Engineer = require('../lib/Engineer.js');

// Tests if the employee has a name
test("Has a name", () => {
    const testName = "Bob";
    const engineer = new Engineer(testName, "test", "test", "test");
    expect(engineer.name).toBe("Bob");
  });