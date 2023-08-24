const { faker } = require('@faker-js/faker');

// name, fathers name, mothers name, marital status, gender, country, city, location, street, house number, ph no, dob
const generateEmployees = (ids) => {
    var employees = []

    for(var id=1; id <= ids; id++) {
        var gender = faker.person.sex()
        var father_name = faker.person.firstName("male")
        var mother_name = faker.person.firstName("female")
        var fname = faker.person.firstName(gender)
        var surname = faker.person.lastName(gender)
        var marital_status = faker.datatype.boolean().toString()

        employees.push({
            "id": id,
            "full_name": fname + ' ' + surname,
            "father_name": father_name + ' ' + surname,
            "mother_name": mother_name + ' ' + surname,
            "email": fname.slice(0,4) + '@deloitte.com',
            "gender": gender.charAt(0).toUpperCase() + gender.slice(1),
            "DOB": faker.date.birthdate().toString().slice(0, 10),
            "marital_status": marital_status.charAt(0).toUpperCase() + marital_status.slice(1),
            "countryCode": faker.location.countryCode('alpha-3'),
            "city": faker.location.city(),
            "state": faker.location.state(),
        })
    }

    return employees;
}

module.exports = generateEmployees;