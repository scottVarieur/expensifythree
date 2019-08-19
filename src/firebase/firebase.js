import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses').on('child_changed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// const onExpensesChange = database.ref('expenses').on('value', snapshot => {
//   const expenses = [];
//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// database
//   .ref('expenses')
//   .once('value')
//   .then(snapshot => {
//     const expenses = [];
//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// database.ref('expenses').push({
//   description: 'rent!',
//   note: 'a',
//   amount: 10000,
//   createdAt: 0
// });
// database.ref('expenses').push({
//   description: 'food',
//   note: 'b',
//   amount: 1000,
//   createdAt: 1000
// });
// database.ref('expenses').push({
//   description: 'idk',
//   note: 'c',
//   amount: 3000,
//   createdAt: 2000
// });

//database.ref('notes/-LlrUi-_tuS3X-p-rqv_').remove();
// database.ref('notes').push({
//   title: 'course topics',
//   body: 'react, python'
// });

// const firebaseNotes = {
//   notes: {
//     adafdf: {
//       title: "first note",
//       body: "this is my note"
//     },
//     qwerwqer: {
//       title: "second note",
//       body: "this is my note"
//     }
//   }
// }

// const notes = [{
//   id: "12",
//   title: "note 1",
//   body: "this is my note"
// },{
//   id: "13",
//   title: "note 2",
//   body: "this is my note"
// }];

// database.ref("notes").set(notes);

// const subscription = database.ref().on('value', snapshot => {
//   const name = snapshot.val().name;
//   const job = snapshot.val().job.title;
//   const company = snapshot.val().job.company;
//   console.log(`${name} is a ${job} at ${company}`);
// });

// setTimeout(() => {
//   database.ref().update({
//     name: 'Joe M',
//     'job/title': 'manager',
//     'job/company': 'Microsoft'
//   });
// }, 3500);

// setTimeout(() => {
//   database.ref().off(subscription);
// }, 7000);

// setTimeout(() => {
//   database.ref('name').set('albert h');
// }, 8000);

// setTimeout(() => {
//   database.ref('age').set(44);
// }, 10500);
// database
//   .ref('location/country')
//   .once('value')
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(error => {
//     console.log('error fetching data', error);
//   });

// database
//   .ref()
//   .set({
//     name: 'Scott Varieur',
//     age: 32,
//     stressLevel: 4,
//     job: {
//       title: "web dev",
//       company: "Google"
//     },
//     location: {
//       city: 'Las Vegas',
//       country: 'United States'
//     }
//   })
//   .then(data => {
//     console.log('data is saved', data);
//   })
//   .catch(error => {
//     console.log('this failed!', error);
//   });

// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Seattle"
// });

//database.ref('isSingle').set(null);

// database
//   .ref()
//   .remove()
//   .then(() => {
//     console.log('remove succ');
//   })
//   .catch(error => {
//     console.log('failed', error);
//   });
