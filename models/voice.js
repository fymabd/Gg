const { Schema, model } = require("mongoose");

const voicewsx = new Schema (
  {
    id: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      required: true,
    },
    channel: {
      type: String,
      required: true,
    }
  }
)
module.exports = model ('voices' , voicewsx)