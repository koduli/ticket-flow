'use client';

import React, { useState, useEffect } from 'react';
import Ticket from './(components)/TicketCard';
import Head from 'next/head';

const Dashboard = () => {
  const [tickets, setTickets] = useState([]);

  const fetchTickets = async () => {
    try {
      const res = await fetch('/api/tickets');
      const data = await res.json();
      setTickets(data.tickets);
    } catch (error) {
      console.error('Error fetching tickets:', error);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  const sortTickets = (tickets) => {
    return tickets.sort((a, b) => {
      if (a.priority === b.priority) {
        return new Date(a.createdAt) - new Date(b.createdAt);
      }
      return b.priority - a.priority;
    });
  };

  const statuses = ['todo', 'in_progress', 'done'];

  return (
    <>
      <Head>
        <title>Board</title>
      </Head>
      <div className="padding-5">
        <h1 className="text-4xl text-center text-white mb-4 mt-5">Board</h1>{' '}
        {/* Page Title */}
        <div className="lg:grid grid-cols-1 xl:grid-cols-3 gap-10">
          {statuses.map((status, index) => (
            <div key={index} className="mb-4">
              <h2 className="text-center capitalize py-7">
                {status.replace('_', ' ')}
              </h2>
              <hr className="w-full h-1 bg-gray-400 mb-4 rounded" />{' '}
              <div className="flex flex-col">
                {sortTickets(
                  tickets.filter((ticket) => ticket.status === status)
                ).map((ticket) => (
                  <Ticket
                    key={ticket._id}
                    {...ticket}
                    fetchTickets={fetchTickets}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
