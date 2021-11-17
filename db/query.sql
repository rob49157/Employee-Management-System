SELECT department.department_name , employee.role_id 
FROM department
JOIN roles ON department.id = roles.deparments_id;
JOIN employee ON roles.id= employee.managers_id;