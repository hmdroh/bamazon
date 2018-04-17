# Bamazon
######04/16/2018
###### _By Hamed Rohani_
Welcome to the Bamazon project!

"Note this program is a CLI program"

This project basically is for purchasing items in the inventory using nodejs and mysql.

#Installation:
Installations:
To run the project install **MySQL**,  **NodeJS** 

Have MySQL database setup and run the following query for example:
```SQL
DROP DATABASE bamazon; # Be carefull with this!

Create database bamazon;
Use bamazon;

CREATE TABLE products(
		item_id  INT(11) auto_increment NOT NULL,
        product_name VARCHAR(200),
        department_name VARCHAR(200),
        price DECIMAL(6,2),
        stock_quantity INT(11),
		UNIQUE (item_id)
);

#insert some values for demo
INSERT INTO products
(product_name, department_name, price, stock_quantity)
VALUES ("Bottle", "Home", 2, 50),
("iPhone 7", "Electronics", 800, 10),
("Macbook Pro", "Electronics", 1000, 5),
("Airplane", "Transportation", 900, 1),
("Cap", "Clothing", 30, 100),
("Table", "Home", 60, 10),
("Paintings", "Decoration", 200, 10),
("Banana", "Fruites", 1, 0);

```
The above code will make a table like this:

item_id | product_name | department_name | price | stock_quantity
-------- | -------- | -------- | -------- | --------
1 |  Bottle |Home |2  |  50
2 |  iPhone 7|  Electronics | 800| 10
3 | Macbook Pro | Electronics|1000 | 5
4 |Airplane|Transportation|900|1
5 | Cap| Clothing|30|100
6 |Table|Home|60|10
7 | Paintings| Decoration|200|10
8|Banana|Fruites|1|0

You should install **npm** package on terminal while opening the root folder of the project:

```javascript
npm i
```
The command above will install ***mysql***, ***console.table*** and ***inquirer***.

Finally on project root folder run the following command using _terminal_:
```javascript
node bamazonCustomer.js
```

#Screenshots:
**Opening Screen:**
This will show when you open the screen:
![Opening Screen](/screenshots/screenshot1.png)



**When the Item is not found!**
This will show when the item is not found in inventory:
![Item not found](/screenshots/screenshot2.png)


**How a purchanse looks like:**
The price will be calculated, inventory will be reduced and also list will show up.
![Item not found](/screenshots/screenshot3.png)



