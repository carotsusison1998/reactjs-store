const { random } = require("faker");
const faker = require("faker");
const fs = require("fs");

// set locale at vietnam
faker.locale = "vi";

/**
 * random categogy data
 * @param n Int
 * @returns     Array
 */
const randomCategory = (n) => {
    if(n<=0){
        return;
    }
    const listRandomData = [];
    for(var i=0; i<n; i++){
        const objData = {
            id: faker.datatype.uuid(),
            nameCategogy: faker.commerce.department(),
            imageCategogy: faker.image.imageUrl()
        }
        listRandomData.push(objData);
    }
    return listRandomData;
}
/**
 * random data product with id categogy
 * @param listCategogy  Array
 * @param n             Int
 * @returns             Array (list product random)
 */
const randomProduct = (listCategogy, listUsers, n) => {
    if(!listCategogy || n <=0){
        return;
    }
    const listRandomData = [];
    for(const user of listUsers){
        for(const categogy of listCategogy){
            for(var i=0; i<n; i++){
                const objData = {
                    id: faker.datatype.uuid(),
                    idCategogy: categogy.id,
                    idUser: user.id,
                    nameProduct: faker.commerce.productName(),
                    colorProduct: faker.commerce.color(),
                    priceProduct: Number.parseFloat(faker.commerce.price()),
                    saleProduct: Number.parseFloat(faker.commerce.price()),
                    quantityProduct: faker.mersenne.rand(),
                    materialProduct: faker.commerce.productMaterial(),
                    descriptionProduct: faker.commerce.productDescription()
                }
                listRandomData.push(objData);
            }
        }
    }
    return listRandomData;
}
/**
 * random data product detail
 * @param listProduct   Array
 * @param n     Int
 * @returns     Array
 */
const randomProductDetail = (listProduct, n) => {
    if(n<=0){
        return;
    }
    const listRandomData = [];
    for(product of listProduct){
        for(var i=0; i<n; i++){
            const objData = {
                id: faker.datatype.uuid(),
                idProduct: product.id,
                descriptionProductDetail: faker.lorem.text()
            }
            listRandomData.push(objData);
        }
    }
    return listRandomData;
}
const randomUsersStore = (n) => {
    if(n<=0){
        return;
    }
    const listRandomData = [];
    for(var i=0; i<n; i++){
        const objData = {
            id: faker.datatype.uuid(),
            username: faker.internet.email(),
            password: faker.internet.password(),
            avatar: faker.internet.avatar(),
            name: faker.name.firstName() + faker.name.lastName(),
            nameShop: faker.name.findName(),
            phone: faker.phone.phoneNumberFormat(),
            address: faker.address.streetAddress()+"-"+faker.address.cityName(),
        }
        listRandomData.push(objData);
    }
    return listRandomData;
}
const randomUsersClient = (n) => {
    if(n<=0){
        return;
    }
    const listRandomData = [];
    for(var i=0; i<n; i++){
        const objData = {
            id: faker.datatype.uuid(),
            username: faker.internet.email(),
            password: faker.internet.password(),
            avatar: faker.internet.avatar(),
            name: faker.name.firstName() + faker.name.lastName(),
            phone: faker.phone.phoneNumberFormat(),
            address: faker.address.streetAddress()+"-"+faker.address.cityName(),
        }
        listRandomData.push(objData);
    }
    return listRandomData;
}
const randomCommentProduct = (listProduct , n) => {
    if(n<=0){
        return;
    }

}

// iffe
(()=>{

    const listUserStore = randomUsersStore(20);
    const listUserClient = randomUsersClient(20);
    const listCategogy = randomCategory(20);
    const listProduct = randomProduct(listCategogy, listUserStore, 20);
    const listProductDetail = randomProductDetail(listProduct, 1);
    const listCommentProduct = randomCommentProduct(listProduct, 20);

    const db = {
        categories: listCategogy,
        products: listProduct,
        productDetail: listProductDetail,
        usersStore: listUserStore,
        usersClient: listUserClient,
        commentsProduct: listCommentProduct,
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