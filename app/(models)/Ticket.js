import mongoose, { Schema } from 'mongoose';

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const ticketSchema = new Schema(
  {
    title: { type: String, required: true, text: true },
    description: { type: String, required: true, text: true },
    category: {
      type: String,
      enum: ['task', 'bug', 'user_story'],
      default: 'task',
    },
    priority: { type: Number, min: 1, max: 4, default: 1 },
    progress: { type: Number, min: 0, max: 100, default: 0 },
    status: {
      type: String,
      enum: ['todo', 'in_progress', 'done'],
      default: 'todo',
    },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Ticket = mongoose.models.Ticket || mongoose.model('Ticket', ticketSchema);

async function createTextIndex() {
  try {
    await Ticket.collection.createIndex(
      { title: 'text', description: 'text' },
      { name: 'TextIndex' }
    );
    console.log('Text index created successfully.');
  } catch (error) {
    console.error('Error creating text index:', error);
  }
}

createTextIndex();

export default Ticket;
