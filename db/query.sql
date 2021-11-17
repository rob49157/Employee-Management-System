SELECT *
FROM role
JOIN department on department.id = role.department_id
JOIN employee on employee.role_id = department.id

