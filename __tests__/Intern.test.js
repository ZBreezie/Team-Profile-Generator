const Intern = require('../lib/Intern.js');

// Tests if the employee has a name
test("Has a name", () => {
    const testName = "Bob";
    const intern = new Intern(testName, "test", "test", "test");
    expect(intern.name).toBe("Bob");
  });