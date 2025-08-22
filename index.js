// Write your solution in this file!
// Define the employee object for the tests to use
const employee = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    occupation: 'Software Engineer'
};

// --- Non-Destructive Functions (Return a new object) ---

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = { ...employee };
    newEmployee[key] = value;
    return newEmployee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}


// --- Destructive Functions (Modify the original object) ---

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}