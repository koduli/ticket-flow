import Ticket from '@/app/(models)/Ticket';
import mongoose from 'mongoose';

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

export async function createTicket(ticketData) {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const newTicket = new Ticket(ticketData);
    await newTicket.save({ session });
    await session.commitTransaction();
    return newTicket;
  } catch (error) {
    await session.abortTransaction();
    throw new Error(`Failed to create ticket: ${error.message}`);
  } finally {
    session.endSession();
  }
}

export async function getAllTickets() {
  try {
    return await Ticket.find();
  } catch (error) {
    throw new Error(`Failed to fetch all tickets: ${error.message}`);
  }
}

export async function getTicketById(id) {
  try {
    return await Ticket.findById(id);
  } catch (error) {
    throw new Error(`Failed to fetch ticket by ID: ${error.message}`);
  }
}

export async function updateTicket(id, ticketData) {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const updatedTicket = await Ticket.findByIdAndUpdate(id, ticketData, {
      new: true,
      session,
    });
    await session.commitTransaction();
    return updatedTicket;
  } catch (error) {
    await session.abortTransaction();
    throw new Error(`Failed to update ticket: ${error.message}`);
  } finally {
    session.endSession();
  }
}

export async function deleteTicket(id) {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    await Ticket.findByIdAndDelete(id, { session });
    await session.commitTransaction();
  } catch (error) {
    await session.abortTransaction();
    throw new Error(`Failed to delete ticket: ${error.message}`);
  } finally {
    session.endSession();
  }
}

export async function searchTickets(query) {
  try {
    return await Ticket.find({
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { description: { $regex: query, $options: 'i' } },
      ],
    });
  } catch (error) {
    throw new Error(`Failed to search tickets: ${error.message}`);
  }
}

export async function getAnalysisData() {
  try {
    const tickets = await Ticket.find();

    const totalItems = tickets.length;
    const taskCount = tickets.filter(
      (ticket) => ticket.category === 'task'
    ).length;
    const bugCount = tickets.filter(
      (ticket) => ticket.category === 'bug'
    ).length;
    const userStoryCount = tickets.filter(
      (ticket) => ticket.category === 'user_story'
    ).length;
    const completedTickets = tickets.filter(
      (ticket) => ticket.status === 'done'
    ).length;
    const percentageComplete = totalItems
      ? (completedTickets / totalItems) * 100
      : 0;
    const averagePriority = totalItems
      ? (
          tickets.reduce((sum, ticket) => sum + ticket.priority, 0) / totalItems
        ).toFixed(2)
      : 0;

    const last24Hours = new Date();
    last24Hours.setDate(last24Hours.getDate() - 1);
    const ticketsLast24Hours = tickets.filter(
      (ticket) => new Date(ticket.createdAt) > last24Hours
    ).length;

    return {
      totalItems,
      taskCount,
      bugCount,
      userStoryCount,
      percentageComplete,
      averagePriority,
      ticketsLast24Hours,
    };
  } catch (error) {
    throw new Error(`Failed to fetch analysis data: ${error.message}`);
  }
}
