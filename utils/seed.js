const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');
const { getRandomThought, getRandomName } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected')
// Create empty array to hold the users
const users = [];

// Loop 20 times -- add users to the users array
for (let i = 0; i < 20; i++) {
  // Get some random thoughts using a helper function that we imported from ./data
  const thoughtText = getRandomThought(20);
  const fullName = getRandomName();
  const username = fullName.split(' ')[0] 
  const userId = `${first}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;

  users.push({
    thoughtText,
    username,
    userId
  });
}

// Add users to the collection and await the results
const userData = await User.insertMany(users);

// Add courses to the collection and await the results
await Thought.insertOne({
  thoughtText: 'Here is a cool thought',
  inPerson: false,
  users: [...userData.map(({_id}) => _id)],
});

// Log out the seed data to indicate what should appear in the database
console.table(users);
console.table(thoughts)
console.timeEnd('Seeding complete! 🌱');
process.exit(0);
});