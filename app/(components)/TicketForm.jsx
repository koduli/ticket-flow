'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const TicketForm = ({ ticket }) => {
  const EDIT_MODE = ticket._id !== 'new';
  const router = useRouter();
  const startingTicketData = {
    title: '',
    description: '',
    priority: 1,
    progress: 0,
    status: 'todo',
    category: 'task',
  };

  const [formData, setFormData] = useState(
    EDIT_MODE ? ticket : startingTicketData
  );
  const [initialData] = useState(EDIT_MODE ? ticket : startingTicketData);
  const [noChangesMessage, setNoChangesMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newFormData = {
      ...formData,
      [name]:
        name === 'priority' || name === 'progress' ? parseInt(value) : value,
    };

    if (name === 'progress') {
      if (parseInt(value) === 100) {
        newFormData.status = 'done';
      } else if (parseInt(value) === 0) {
        newFormData.status = 'todo';
      } else {
        newFormData.status = 'in_progress';
      }
    }

    if (name === 'status') {
      if (value === 'done') {
        newFormData.progress = 100;
      } else if (value === 'todo') {
        newFormData.progress = 0;
      } else if (value === 'in_progress') {
        newFormData.progress = 50;
      }
    }

    setFormData(newFormData);
    setNoChangesMessage(''); // Reset message on change
    setErrorMessage(''); // Reset error message on change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (EDIT_MODE && JSON.stringify(formData) === JSON.stringify(initialData)) {
      setNoChangesMessage('No changes made.');
      return;
    }

    try {
      if (EDIT_MODE) {
        const res = await fetch(`/api/Tickets/${ticket._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ formData }),
        });

        if (!res.ok) {
          throw new Error('Failed to update ticket.');
        }

        alert('Ticket updated.'); // Feedback message
      } else {
        const res = await fetch('/api/Tickets', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ formData }),
        });

        if (!res.ok) {
          throw new Error('Failed to create ticket.');
        }

        alert('Ticket created.'); // Feedback message
      }

      router.refresh();
      router.push('/');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h1 className="text-4xl text-center mb-10 text-white">
          {EDIT_MODE ? 'Update a ticket' : 'Create a new ticket'}
        </h1>
        <label>Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />

        <label>Description</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          required={true}
          value={formData.description}
          rows="5"
        />

        <label>Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="task">Task</option>
          <option value="bug">Bug</option>
          <option value="user_story">User story</option>
        </select>

        <label>Priority</label>
        <div className="flex justify-around items-center mt-2 mx-4">
          <div>
            <input
              id="priority-low"
              name="priority"
              type="radio"
              value="1"
              onChange={handleChange}
              checked={formData.priority === 1}
            />
            <label htmlFor="priority-low">Low</label>
          </div>

          <div>
            <input
              id="priority-medium"
              name="priority"
              type="radio"
              value="2"
              onChange={handleChange}
              checked={formData.priority === 2}
            />
            <label htmlFor="priority-medium">Medium</label>
          </div>

          <div>
            <input
              id="priority-high"
              name="priority"
              type="radio"
              value="3"
              onChange={handleChange}
              checked={formData.priority === 3}
            />
            <label htmlFor="priority-high">High</label>
          </div>

          <div>
            <input
              id="priority-very-high"
              name="priority"
              type="radio"
              value="4"
              onChange={handleChange}
              checked={formData.priority === 4}
            />
            <label htmlFor="priority-very-high">Very high</label>
          </div>
        </div>

        <label>Progress</label>
        <input
          type="range"
          name="progress"
          id="progress"
          min="0"
          max="100"
          value={formData.progress}
          onChange={handleChange}
        />

        <label>Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="todo">Todo</option>
          <option value="in_progress">In Progress</option>
          <option value="done">Done</option>
        </select>

        {noChangesMessage && (
          <p className="text-red-500 text-center">{noChangesMessage}</p>
        )}
        {errorMessage && (
          <p className="text-red-500 text-center">{errorMessage}</p>
        )}
        <button
          type="submit"
          className="w-3/4 py-4 px-4 mt-10 bg-cyan-800 hover:bg-stone-600 text-white font-bold mx-auto rounded"
        >
          {EDIT_MODE ? 'Update ticket' : 'Create new ticket'}
        </button>
      </form>
    </div>
  );
};

export default TicketForm;
