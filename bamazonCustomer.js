// lets get started!
//

//1. run this command: 
//          npm init
//2. install mysql: 
//          npm i mysql
//3. install inquirer: 
//          npm i inquirer

//4. install console.table
//          npm i console.table

//loading our libraries:
var mysql = require("mysql");
var inq = require("inquirer");
var ctable = require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    afterConnection();
});

function afterConnection() {
    console.log("Connected successfully!");
    listProducts();
}

function listProducts() {
    var query = connection.query("SELECT * FROM products", function (err, data) {
        if (err) throw err;
        console.log("");
        console.table(data);
        console.log("");
        //execute enqiurer first page:
        selectId();
    });
}

function selectId() {
    inq.prompt([
        {
            name: "Id",
            message: "What is the ID of the product you want to buy?",
            type: "input"
        },
        {
            name: "Quanitity",
            message: "How many items do you want to buy?",
            type: "input"
        }
    ]).then(function (data) {
        // console.log(data.Id);
        // console.log(data.Quanitity);

        var pId = data.Id;
        var pQty = data.Quanitity; // user asked for quantity
        //finding the quantitiy from MySQL:

        //selecting everything from the database with ID of pID:
        var query = "SELECT * FROM products WHERE item_id=" + pId;
        connection.query(query, function(err, data2){

            //if wrong product selected not in list??
            var num = data2.length;
            if(num>0){



            //console.log(data2);
            var qtyLeft = data2[0].stock_quantity; // quanitity left in MySQL of the item
                if(qtyLeft >= pQty){

                    var totalCost = data2[0].price * pQty; // total cost of purchase
                    /// we are good to go further:
                        var newQty = qtyLeft - pQty;
                        //update the MYSQL with new QTY:

                        var query2 = "UPDATE products SET stock_quantity =" + newQty + " WHERE item_id=" + pId;
                        // console.log(query2);
                        connection.query(query2, function(err, data3){
                            if(err) throw err;
                            console.log("Order Complete!");
                            console.log("Total Price for "+ pQty +" of the " + data2[0].product_name + " was: $"+ totalCost);

                            listProducts();
                        });
                        
                }else{
                    // Insufficient quanitity
                    console.log("\nInsufficient inventory!!\n");
                    listProducts();
                }

            }else{
                // Item not found:
                console.log("\nItem not found!!\n");
                listProducts();
            }
        });

        
    });
}
//The first should ask them the ID of the product they would like to buy.
//The second message should ask how many units of the product they would like to buy.