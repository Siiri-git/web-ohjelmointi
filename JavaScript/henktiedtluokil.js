class Person {
    constructor(name, age, job, driversLicense) {
        this.name = name;
        this.age = age;
        this.job = job;
        this.driversLicense = driversLicense;
    }
    isUnderage() {
        if(this.age < 18) {
            return true;
        }}
    isStudent() {
        if(this.job == 'opiskelija' || this.job ==  'Opiskelija') {
            return true;
        }}
}
var persons = [
    new Person('Merja Meikäläinen', 20, 'Opiskelija', true),
    new Person('Teppo Teikäläinen', 25, 'Sähköteknikko', true),
    new Person('Helena Meikäläinen', 30, 'Ohjelmistosuunnittelija', false),
    new Person('Semir Sikäläinen', 18, 'Opiskelija', true),
    new Person('Tomas Täkäläinen', 22, 'Linja-autonkuljettaja', true)];


const rows = document.getElementById("rows");
function createRows() {
    rows.innerHTML = "";
    persons.forEach(person => {
        var row = document.createElement("tr");

        var nameId = document.createElement("td");
        var ageId = document.createElement("td");
        var jobId = document.createElement("td");
        var driversLicenseId = document.createElement("td");

        nameId.innerHTML = person.name;
        if(person.isUnderage()){
            ageId.innerHTML = person.age
        } 
        else {
            ageId.innerHTML = `${person.age}🍺`;
        }
        if (person.isStudent()) {
            jobId.innerHTML = `${person.job}🎓`;
        }
        else {
            jobId.innerHTML = person.job;
        }
        driversLicenseId.innerHTML = person.driversLicense;

        row.append(nameId, ageId, jobId, driversLicenseId);
        rows.append(row);
    })
}

document.addEventListener("DOMContentLoaded", createRows());