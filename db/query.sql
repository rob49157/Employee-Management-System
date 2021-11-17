SELECT
  Department.department_name AS name, employee.role_id AS role_id
FROM Department
JOIN roles ON Department.ID = roles.deparments_id;
JOIN employee ON roles.ID= employee.managers_ID;