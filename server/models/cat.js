const mongoose = require("mongoose");
const { Schema } = mongoose;

const catSchema = new Schema({
  name: String,
  color: String,
  hasClaws: Boolean,
  likes: Array,
});

// takes two params - name of variable and name of schema
const Cat = mongoose.model("Cat", catSchema);

module.exports = Cat;
