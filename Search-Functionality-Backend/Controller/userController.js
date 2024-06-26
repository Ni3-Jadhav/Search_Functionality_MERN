const FirstMongoDB = require('../models/userModel');

// Function to add a new user
exports.newUser = async (req, res) => {
  try {
    const userAdd = new FirstMongoDB(req.body);
    await userAdd.save();
    res.send(userAdd);
  } catch (err) {
    res.status(500).json({ message: 'Error saving user', err });
  }
};

// Function to search for users
exports.searchUser = async (req, res) => {
  const { query } = req.query;

  // Check if the query parameter is empty or less than 3 characters
  if (!query || query.length < 3) {
    return res.status(400).json({ message: 'Search query must be at least 3 characters long' });
  }

  try {
    // Perform the search in the FirstMongoDB collection
    const search = await FirstMongoDB.find({
      $or: [
        { F_Name: { $regex: query, $options: 'i' } },
        { L_Name: { $regex: query, $options: 'i' } }
      ]
    });

    // Check if no users were found
    if (search.length === 0) {
      return res.status(404).json({ message: 'No users found' });
    }

    // Send the found users as the response
    res.send(search);
  } catch (err) {
    res.status(500).json({ message: 'Error occurred while searching for users', err });
  }
};


