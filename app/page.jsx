// Dashboard.jsx
"use client";

import React, { useState, useEffect } from "react";
import Ticket from "./(components)/Ticket";

const Dashboard = () => {
  const [tickets, setTickets] = useState([]);
  const [uniqueCategories, setUniqueCategories] = useState([]);

  const fetchTickets = async () => {
    try {
      const res = await fetch("/api/Tickets");
      const data = await res.json();
      setTickets(data.tickets);

      const categories = [
        ...new Set(data.tickets.map((ticket) => ticket.category)),
      ];
      setUniqueCategories(categories);
    } catch (error) {
      console.error("Error fetching tickets:", error);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <div className="padding-5">
      <div>
        {tickets.length > 0 &&
          uniqueCategories.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h2>{uniqueCategory}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                {tickets
                  .filter((ticket) => ticket.category === uniqueCategory)
                  .map((ticket) => (
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
