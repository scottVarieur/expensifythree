// const person = {
//   name: "Scott",
//   age: 32,
//   location: {
//     city: "Las Vegas",
//     temp: "109"
//   }
// };


// const { name: firstName  = "Joe", age, } = person;
// const { city, temp: temperature } = person.location;

// console.log(`${firstName} is ${age}. It is ${temperature} degrees in ${city}`);
// console.log(typeof dog);

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin"
//   }
// };

// const { name: publisherName = "Self-Published" } = book.publisher;

// console.log(publisherName); // default; Self-Published

//array destructuring

// const address = ["1299 S Juniper Street", "Las Vegas", "Nevada", "89952"];

// const [, , state = "New York"] = address;

// console.log(`You are in ${city}, ${state}`);

const item = ["Hot Coffee", "2.00", "$2.50", "2.75"];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);