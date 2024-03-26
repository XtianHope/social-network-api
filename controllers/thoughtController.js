const Thought = require('../models/thought');

const thoughtController = {
    getAllThoughts: async (req, res) => {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (error) {
            res.status(500).json(error);
        }
    },

// Get Thought by ID
    getThoughtById: async (req, res) => {
        try {
            const thought = await Thought.findById(req.params.thoughtId );
            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }
            res.json(thought);
        } catch (error) {
            res.status(500).json(error);
        }
    },

// Create New Thought
    createThought: async (req, res) => {
        try {
            const thought = await Thought.create(req.body);
            res.json(thought);
        } catch (error) {
            res.status(500).json(error);
        }
    },

// Update Thought by ID
    updateThought: async (req, res) => {
        try {
            const thought = await Thought.findByIdAndUpdate(
                req.params.thoughtId,
                req.body,
                { new: true }
            );
            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID' });
            } else {
                res.json(thought);
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },

// Delete Thought by ID
    deleteThought: async (req, res) => {
        try {
            const thought = await Thought.findByIdAndDelete(req.params.thoughtId);
            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID' });
            } else {
                res.json(thought);
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }
};

module.exports = thoughtController;