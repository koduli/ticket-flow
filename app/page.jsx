// Dashboard.jsx
"use client";

import React, { useState, useEffect } from "react";
import Ticket from "./(components)/Ticket";

const Dashboard = () => {
  const [tickets, setTickets] = useState([]);

  const fetchTickets = async () => {
    try {
      const res = await fetch("/api/Tickets");
      const data = await res.json();
      setTickets(data.tickets);
    } catch (error) {
      console.error("Error fetching tickets:", error);
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

  const statuses = ["open", "in_progress", "done"];

  return (
    <div className="padding-5">
      <div className="lg:grid grid-cols-1 xl:grid-cols-3 gap-4">
        {statuses.map((status, index) => (
          <div key={index} className="mb-4">
            <h2 className="text-center capitalize">
              {status.replace("_", " ")}
            </h2>
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
  );
};

export default Dashboard;
