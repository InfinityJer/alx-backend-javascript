// 100-createIteratorObject.js

export default function createIteratorObject(report) {
  const iterator = {
    [Symbol.iterator]() {
      let currentDepartmentIndex = 0;
      let currentEmployeeIndex = 0;
      const departments = Object.keys(report.allEmployees);

      return {
        next() {
          if (currentDepartmentIndex < departments.length) {
            const currentDepartment = departments[currentDepartmentIndex];
            const employees = report.allEmployees[currentDepartment];

            if (currentEmployeeIndex < employees.length) {
              const employee = employees[currentEmployeeIndex];
              currentEmployeeIndex++;
              return { value: employee, done: false };
            } else {
              currentEmployeeIndex = 0;
              currentDepartmentIndex++;
              return next();
            }
          } else {
            return { done: true };
          }
        },
      };
    },
  };

  return iterator;
}
