INSERT INTO department(department_name)
VALUES 
('Front Office'),
('Coaching'),
('Assistants'),
('Players'),
('Equipment Managers');

INSERT INTO employee (id, first_name, last_name, roles_id, manager_id)
VALUES
(1, 'Donte', 'Williams', 1, 1),
(2, 'Lebron', 'James', 2, NULL),
(3, 'Charles', 'Barkley', 3, NULL),
(4, 'Will', 'Smith', 4, 4),
(5,'Eddie', 'Murphy', 4, NULL);

INSERT INTO role(title, salary, department_id)
VALUES
('General Manager', 325000, 1),
('Head Coach', 220000, 2),
('Associate Coach', 328000, 3),
('Best Player', 435000, 4),
('Head Equipment Manager', 83000, 5);