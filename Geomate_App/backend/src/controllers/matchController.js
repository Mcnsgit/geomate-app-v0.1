// GET /matches
exports.getMatches = async (req, res) => {
    try {
    const matches = await Match.find(); // Find all matches in the database
    res.json(matches); // Send the matches as a JSON response
} catch (err) {
    console.error(err);
    res.status(500).send('Server Error'); // Send a 500 error if there's a server error
}
};

// POST /matches
exports.createMatch = async (req, res) => {
  const { userId, matchId } = req.body; // Get the user ID and match ID from the request body
    try {
    let match = await Match.findOne({ userId, matchId }); // Check if the match already exists in the database
    if (match) {
      return res.status(400).json({ msg: 'Match already exists' }); // Return a 400 error if the match already exists
    }
    match = new Match({ userId, matchId }); // Create a new match object
    await match.save(); // Save the match object to the database
    res.json(match); // Send the newly created match as a JSON response
} catch (err) {
    console.error(err);
    res.status(500).send('Server Error'); // Send a 500 error if there's a server error
}
};