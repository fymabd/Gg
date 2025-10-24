const { Schema, model } = require("mongoose");

const autos = new Schema (
  {
    id: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      required: true,
    }
  }
)
module.exports = model ('autoreacts' , autos)