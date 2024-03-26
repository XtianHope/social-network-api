const mongoose = require("mongoose");
const User = require("../models/User");
const Thought = require("./models/Thought");

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/socialNetworkDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

// Seed data
const seedDatabase = async () => {
  try {
    const user1 = await User.create({
      username: "user1",
      email: "user1@example.com",
    });
    const user2 = await User.create({
      username: "user2",
      email: "user2@example.com",
    });
    const user3 = await User.create({
      username: "user3",
      email: "user3@example.com",
    });
    const user4 = await User.create({
      username: "user4",
      email: "user4@example.com",
    });

    // Create thoughts
    const thought1 = await Thought.create({
      thoughtText: "This is thought 1/User 1",
      username: user1.username,
    });
    const thought2 = await Thought.create({
      thoughtText: "This is thought 2/User 2",
      username: user2.username,
    });
    const thought3 = await Thought.create({
      thoughtText: "This is thought 3/User 3",
      username: user3.username,
    });
    const thought4 = await Thought.create({
      thoughtText: "This is thought 4/User 4",
      username: user4.username,
    });

    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database: ", error);
  }
};

seedDatabase();
