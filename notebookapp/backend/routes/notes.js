const express = require("express");
const router = express.Router();
var fetchuser = require("../middleware/fetchuser");
const Note = require("../models/Notes");  // Use the correct model
const { body, validationResult } = require("express-validator");

// Route-1: Get all the notes using: GET "/api/auth/fetchallnotes". Login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

// Route-2: Add a new Note using: POST "/api/auth/addnote". Login required
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Description must contain at least 5 characters").isLength({ min: 5 }),
  ],
  async (req, res) => {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { title, description, tag } = req.body;
      const note = new Note({
        title,
        description,
        tag,
        user: req.user.id
      });
      const savedNote = await note.save();
      res.json(savedNote);
    } catch (error) {
      res.status(500).send("Internal Server Error");
    }
  }
);

// Route-3: Update a Note using: PUT "/api/auth/updatenote/:id". Login required
router.put("/updatenote/:id", fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;

  try {
    // Create newNote object
    const newNote = {};
    if (title) newNote.title = title;
    if (description) newNote.description = description;
    if (tag) newNote.tag = tag;

    // Find the note to be updated
    let note = await Note.findById(req.params.id);
    if (!note) return res.status(404).send("Note not found");

    // Check if the user is authorized to update this note
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not authorized to update this note");
    }

    // Update the note
    note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
    res.json({ note });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

// Route-4: Delete a Note using: DELETE "/api/auth/deletenote/:id". Login required
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  try {
    // Find the note to be deleted
    let note = await Note.findById(req.params.id);
    if (!note) return res.status(404).send("Note not found");

    // Check if the user is authorized to delete this note
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not authorized to delete this note");
    }

    // Delete the note
    note = await Note.findByIdAndDelete(req.params.id);
    res.json({ success: "Note has been deleted", note });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;