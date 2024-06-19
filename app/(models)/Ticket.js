// models/Ticket.js
import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;

const ticketSchema = new Schema(
  {
    title: { type: String, text: true },
    description: { type: String, text: true },
    category: String,
    priority: Number,
    progress: Number,
    status: String,
    active: Boolean,
  },
  { timestamps: true }
);

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);

// Function to create text index
async function createTextIndex() {
  try {
    await Ticket.collection.createIndex(
      { title: "text", description: "text" },
      { name: "TextIndex" }
    );
    console.log("Text index created successfully.");
  } catch (error) {
    console.error("Error creating text index:", error);
  }
}

// Call the function to create the index
createTextIndex();

export default Ticket;
