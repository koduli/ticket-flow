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

async function getTotalItems(tickets) {
  try {
    return tickets.length;
  } catch (error) {
    throw new Error(`Failed to get total items: ${error.message}`);
  }
}

async function getCountByCategory(tickets, category) {
  try {
    return tickets.filter((ticket) => ticket.category === category).length;
  } catch (error) {
    throw new Error(`Failed to get count by category: ${error.message}`);
  }
}

async function getCompletedTickets(tickets) {
  try {
    return tickets.filter((ticket) => ticket.status === 'done').length;
  } catch (error) {
    throw new Error(`Failed to get completed tickets: ${error.message}`);
  }
}

async function getPercentageComplete(tickets, completedTickets) {
  try {
    const totalItems = tickets.length;
    return totalItems ? (completedTickets / totalItems) * 100 : 0;
  } catch (error) {
    throw new Error(`Failed to get percentage complete: ${error.message}`);
  }
}

async function getAveragePriority(tickets) {
  try {
    const totalItems = tickets.length;
    return totalItems
      ? (
          tickets.reduce((sum, ticket) => sum + ticket.priority, 0) / totalItems
        ).toFixed(2)
      : 0;
  } catch (error) {
    throw new Error(`Failed to get average priority: ${error.message}`);
  }
}

async function getTicketsLast24Hours(tickets) {
  try {
    const last24Hours = new Date();
    last24Hours.setDate(last24Hours.getDate() - 1);
    return tickets.filter((ticket) => new Date(ticket.createdAt) > last24Hours)
      .length;
  } catch (error) {
    throw new Error(
      `Failed to get tickets from the last 24 hours: ${error.message}`
    );
  }
}

export async function getAnalysisData() {
  try {
    const tickets = await Ticket.find();

    const totalItems = await getTotalItems(tickets);
    const taskCount = await getCountByCategory(tickets, 'task');
    const bugCount = await getCountByCategory(tickets, 'bug');
    const userStoryCount = await getCountByCategory(tickets, 'user_story');
    const completedTickets = await getCompletedTickets(tickets);
    const percentageComplete = await getPercentageComplete(
      tickets,
      completedTickets
    );
    const averagePriority = await getAveragePriority(tickets);
    const ticketsLast24Hours = await getTicketsLast24Hours(tickets);

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
