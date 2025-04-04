# Ticket Flow

---

## 1. Project Description

The "Ticket Flow" project aims to provide a web-based application for managing IT tickets. This application allows users to create, update, search for, and analyze tickets.

### Features

The developed web application offers users the following capabilities:

- Create and update tickets.
- Search for tickets.
- Perform analyses on the tickets.
- Display a clear dashboard that shows tickets in different columns based on their status.

### Techniques, Frameworks, and Tools

The following tools and programming languages will be used for this project:

- **Frontend**: React, Next.js
- **Backend**: Node.js (runtime environment on which Next.js runs), Next.js (framework that manages routing, server-side logic, and API routes)
- **Database**: MongoDB, Mongoose
- **Styling**: Tailwind CSS
- **Tools**: npm (to manage dependencies and install packages), open-cli (to open URLs directly from the terminal), npm-run-all (to run multiple npm scripts in parallel or sequentially)

### Remarks

- **Links**: [Next.js Documentation](https://nextjs.org/docs), [MongoDB Documentation](https://docs.mongodb.com/), [React Documentation](https://react.dev/reference/react)

---

## 2. Preview

![Board-page](public/pages_overview/board-page.png)

![New-Ticket-page](public/pages_overview/new-ticket-page.png)

![Search-page](public/pages_overview/search-page.png)

![Analysis-page](public/pages_overview/analysis-page.png)

---

## 3. Component Diagram

![Component Diagram](public/componentdiagram-tf.png)

### Client-side:

- The Navigation component manages links to different pages.
- The Dashboard component displays tickets on the board using the TicketCard component.
- The TicketForm component is used to create and update tickets.
- The SearchPage component allows searching for tickets.
- The AnalysisPage component displays analyses of the tickets.

### API Endpoints:

- **Tickets API**: Manages CRUD operations for tickets.
- **Search API**: Manages ticket searches.
- **Analysis API**: Provides analysis data for the tickets.

### Database:

- **MongoDB with Ticket Schema**: Stores ticket information such as title, description, priority, status, etc.

---
