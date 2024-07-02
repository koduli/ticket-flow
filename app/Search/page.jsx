'use client';

import React, { useState } from 'react';
import Ticket from '../(components)/TicketCard';

const SearchPage = () => {
  const [tickets, setTickets] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
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
      setTickets(data.tickets);
    } catch (error) {
      console.error('Error searching tickets:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    searchTickets(query);
  };

  const messageContainerClass = 'flex justify-center py-5 min-h-[4rem]';
  const visibleClass = 'opacity-100';
  const hiddenClass = 'opacity-0 pointer-events-none';

  return (
    <div className="p-5">
      <h1 className="text-center mb-5">Search for a ticket</h1>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search tickets..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-1/2 p-2 border border-gray-300 rounded mb-5"
        />
      </div>
      <div className={messageContainerClass}>
        <p
          className={
            loading || (!loading && searchQuery) ? visibleClass : hiddenClass
          }
        >
          {loading
            ? 'Loading...'
            : tickets.length > 0
            ? `${tickets.length} ticket${tickets.length > 1 ? 's' : ''} found.`
            : 'No tickets found.'}
        </p>
      </div>
      {searchQuery && tickets.length > 0 && (
        <div className="grid grid-cols-3 gap-4">
          {tickets.map((ticket) => (
            <Ticket key={ticket._id} {...ticket} fetchTickets={() => {}} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
