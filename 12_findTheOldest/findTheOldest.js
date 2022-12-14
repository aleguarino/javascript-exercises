const ACTUAL_YEAR = new Date().getFullYear();

const findTheOldest = people => {
    let oldestAge = 0;
    let oldestPerson;
    people.forEach(person => {
        let age = !('yearOfDeath' in person) ? (ACTUAL_YEAR - person.yearOfBirth) : (person.yearOfDeath - person.yearOfBirth);
        if (age > oldestAge) {
            oldestAge = age;
            oldestPerson = person;
        }
    });
    return oldestPerson;
}

// Do not edit below this line
module.exports = findTheOldest;
