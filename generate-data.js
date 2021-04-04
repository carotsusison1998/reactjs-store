const faker = require("faker");
const fs = require("fs");

// set locale at vietnam
faker.locale = "vi";

// iffe
(()=>{
    
    const db = {
        categories: [],
        products: [],
        productDetail: [],
        usersStore: [],
        usersClient: [],
        commentsProduct: [],
        commentsStore: [],
        news: [],
        delivery: [],
        priceDelivery: [],
        cityDelivery: []
    }
    fs.writeFile("db.json", JSON.stringify(db), ()=>{
        console.log("readfile successfully");
    })   
})()