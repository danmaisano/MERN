const express = require("express");
const app = express();
const port = 8000;
// we can create a function to return a random / fake "Product"
const { faker } = require('@faker-js/faker');


// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );

const CreateUser = () => {
    const newUser = {
        "password": faker.internet.password(),
        "email": faker.internet.email(),
        "phone": faker.phone.number(),
        "lastName": faker.person.lastName(),
        "firstName": faker.person.firstName(),
        "id": faker.string.numeric(42)
    }
    return newUser;
}

const CreateCompany = () => {
    const newCompany = {
        "id": faker.string.numeric(42),
        "name": faker.company.name(),
        "address": {"street": faker.location.street(), "city": faker.location.city(), "state": faker.location.state(), "zipcode": faker.location.zipCode(), "country": faker.location.country() },
    }
    return newCompany;
}

app.get("/api/users/new", (req,res) => {
    res.send(CreateUser());
})

app.get("/api/companies/new", (req,res) =>{
    res.send(CreateCompany());
})

app.get("/api/user/company", (req,res) => {
    const newUser = CreateUser();
    const newCompany = CreateCompany();
    res.send({user: newUser, company: newCompany})
})