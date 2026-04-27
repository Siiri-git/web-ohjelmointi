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
        if (henkilo.age >= 18) {
            ageId.innerHTML = `${henkilo.age}🍺`;
        }
        else {
            ageId.innerHTML = henkilo.age;
        }
        if (henkilo.job == 'Opiskelija') {
            jobId.innerHTML = `${henkilo.job}🎓`;
        }
        else {
            jobId.innerHTML = henkilo.job;
        }
        driversLicenseId.innerHTML = henkilo.driversLicense;

        rivi.append(nameId, ageId, jobId, driversLicenseId);
        rivit.append(rivi);
    });
}

document.addEventListener("DOMContentLoaded", luoRivit());


function newPerson(e) {
    e.preventDefault();

    let nName = e.target.form.inpName.value;
    let nAge = Number(e.target.form.inpAge.value);  
    let nJob = e.target.form.inpJob.value;
    let nLicense = e.target.form.inpLicense.checked;

    if (nAge < 0) {
        alert("Iän pitää olla positiivinen luku!")
    }
    else {
        const person = {
            name: nName,
            age: nAge,
            job: nJob,
            driversLicense: nLicense
        }
        henkilot.push(person)
        luoRivit()
    }
}