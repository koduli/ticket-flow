import { NextResponse } from 'next/server';
import Ticket from '../../(models)/Ticket';

export async function GET() {
  try {
    const tickets = await Ticket.find();

    // Calculate total items
    const totalItems = tickets.length;

    // Calculate number of Task, Bug, and User Story tickets
    const taskCount = tickets.filter(
      (ticket) => ticket.category === 'task'
    ).length;
    const bugCount = tickets.filter(
      (ticket) => ticket.category === 'bug'
    ).length;
    const userStoryCount = tickets.filter(
      (ticket) => ticket.category === 'user_story'
    ).length;

    // Calculate percentage of complete tickets
    const completedTickets = tickets.filter(
      (ticket) => ticket.status === 'done'
    ).length;
    const percentageComplete = totalItems
      ? (completedTickets / totalItems) * 100
      : 0;

    // Calculate average priority
    const averagePriority = totalItems
      ? (
          tickets.reduce((sum, ticket) => sum + ticket.priority, 0) / totalItems
        ).toFixed(2)
      : 0;

    // Calculate tickets created in the last 24 hours
    const last24Hours = new Date();
    last24Hours.setDate(last24Hours.getDate() - 1);
    const ticketsLast24Hours = tickets.filter(
      (ticket) => new Date(ticket.createdAt) > last24Hours
    ).length;

    return NextResponse.json({
      totalItems,
      taskCount,
      bugCount,
      userStoryCount,
      percentageComplete,
      averagePriority,
      ticketsLast24Hours,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch analysis data' },
      { status: 500 }
    );
  }
}
