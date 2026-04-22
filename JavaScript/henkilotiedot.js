var henkilot = [
    {
        name: "Merja Meikäläinen",
        age: 20,
        job: "Opiskelija",
        driversLicense: true
    },
    {
        name: "Teppo Teikäläinen",
        age: 25,
        job: "Sähköteknikko",
        driversLicense: true
    },
    {
        name: "Helena Meikäläinen",
        age: 30,
        job: "Ohjelmistosuunnittelija",
        driversLicense: false
    },
    {
        name: "Semir Sikäläinen",
        age: 18,
        job: "Opiskelija",
        driversLicense: true
    },
    {
        name: "Tomas Täkäläinen",
        age: 22,
        job: "Linja-autonkuljettaja",
        driversLicense: true
    },
]

const rivit = document.getElementById("rivit");

function luoRivit() {
    rivit.innerHTML = "";
    henkilot.forEach(henkilo => {
        var rivi = document.createElement("tr");

        var nameId = document.createElement("td");
        var ageId = document.createElement("td");
        var jobId = document.createElement("td");
        var driversLicenseId = document.createElement("td");

        nameId.innerHTML = henkilo.name;
        ageId.innerHTML = henkilo.age;
        jobId.innerHTML = henkilo.job;
        driversLicenseId.innerHTML = henkilo.driversLicense;

        rivi.append(nameId, ageId, jobId, driversLicenseId);
        rivit.append(rivi);
    });
}

document.addEventListener("DOMContentLoaded", luoRivit());