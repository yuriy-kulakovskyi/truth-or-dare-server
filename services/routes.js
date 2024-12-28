const express = require('express');
const router = express.Router();
const pusher = require('./pusher');
const roomModel = require('../Models/roomModel');

router.put('/send/:roomId', (req, res) => {
  pusher.trigger("my-channel", req.params.roomId, {
    message: req.body.message
  });

  roomModel.findOne({ id: req.params.roomId }).then(room => {
    room.message = req.body.message;
    room.save();
  });
});

router.post("/createRoom", (req, res) => {
  const id = Math.random().toString(36).substring(7);
  roomModel.create({ id, message: "" });
  res.send(id);
})

router.get('/rooms/:id', async (req, res) => {
  try {
    const room = await roomModel.findOne({ id: req.params.id });
    if (!room) {
      return res.status(404).json({ error: 'Room not found' });
    }
    res.json(room);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;