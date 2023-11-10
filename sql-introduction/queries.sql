CREATE DATABASE node_course;

CREATE TABLE products (
	id INT PRIMARY KEY UNIQUE NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    price DOUBLE NOT NULL,
    `description` TEXT NOT NULL,
    imageUrl VARCHAR(255) NOT NULL
);

SELECT * FROM products;

INSERT INTO products
	(id, title, price, `description`, imageUrl)
VALUES
	(
		1,
		'A Book',
        12.99,
        'This is an awesome book!',
        'https://www.publicdomainpictures.net/pictures/10000/velka/1-1210009435EGmE.jpg'
	);
    
UPDATE products
SET title = 'A Book!'
WHERE id = 1;

SELECT * FROM products
WHERE id = 1;
