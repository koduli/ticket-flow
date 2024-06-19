// app/Search/page.jsx
"use client";

import React, { useState } from "react";
import Ticket from "../(components)/TicketCard";

const SearchPage = () => {
  const [tickets, setTickets] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const searchTickets = async (query) => {
    if (!query) {
      setTickets([]);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`/api/search?q=${query}`);
      const data = await res.json();
      console.log("Search results:", data); // Debugging line
      setTickets(data.tickets || []); // Safeguard against undefined tickets
    } catch (error) {
      console.error("Error searching tickets:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    searchTickets(e.target.value);
  };

  return (
    <div className="p-5">
      <h1 className="text-center mb-5">Search Tickets</h1>
      <input
        type="text"
        placeholder="Search tickets..."
        value={searchQuery}
        onChange={handleSearch}
        className="w-full p-2 border border-gray-300 rounded mb-5"
      />
      {loading && <p>Loading...</p>}
      <div className="grid grid-cols-1 gap-4">
        {tickets.map((ticket) => (
          <Ticket key={ticket._id} {...ticket} fetchTickets={() => {}} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
