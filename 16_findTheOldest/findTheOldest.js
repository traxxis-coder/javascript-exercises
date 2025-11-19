const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        const ageThis = person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : (new Date().getFullYear()) - person.yearOfBirth;
        const agePrev = oldest.yearOfDeath ? oldest.yearOfDeath - oldest.yearOfBirth : (new Date().getFullYear()) - oldest.yearOfBirth;
        return ageThis > agePrev ? person : oldest;
    });
};

const people = [
      {
        name: "Carly",
        yearOfBirth: 2018,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]
console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
