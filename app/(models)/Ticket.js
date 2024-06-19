import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
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

createTextIndex();

export default Ticket;
