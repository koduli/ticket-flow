"use client";

import { useRouter } from "next/navigation"; // Corrected import path
import { useState } from "react";

const TicketForm = () => {
  const router = useRouter();
  const startingTicketData = {
    title: "",
    description: "",
    priority: 1, // Default priority as a number
    progress: 0,
    status: "open",
    category: "bug",
  };

  const [formData, setFormData] = useState(startingTicketData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "priority" ? parseInt(value) : value, // Parse priority to an integer
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/Tickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formData }),
    });

    if (!res.ok) {
      throw new Error("Failed to create ticket.");
    }
    router.refresh();
    router.push("/");
  };

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>Create your ticket</h3>
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
          <option value="bug">Bug</option>
          <option value="user_story">User story</option>
          <option value="task">Task</option>
        </select>

        <label>Priority</label>
        <div>
          <input
            id="priority-low"
            name="priority"
            type="radio"
            value="1" // Use numeric values
            onChange={handleChange}
            checked={formData.priority == 1}
          />
          <label>Low</label>

          <input
            id="priority-medium"
            name="priority"
            type="radio"
            value="2" // Use numeric values
            onChange={handleChange}
            checked={formData.priority == 2}
          />
          <label>Medium</label>

          <input
            id="priority-high"
            name="priority"
            type="radio"
            value="3" // Use numeric values
            onChange={handleChange}
            checked={formData.priority == 3}
          />
          <label>High</label>

          <input
            id="priority-very-high"
            name="priority"
            type="radio"
            value="4" // Use numeric values
            onChange={handleChange}
            checked={formData.priority == 4}
          />
          <label>Very high</label>
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
          <option value="open">ToDo</option>
          <option value="in_progress">In progress</option>
          <option value="done">Done</option>
        </select>

        <input type="submit" className="btn" value="Create ticket" />
      </form>
    </div>
  );
};

export default TicketForm;
