# Ticket Flow

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

## 2. Preview

![Board-page](public/pages_overview/board-page.png)

![New-Ticket-page](public/pages_overview/new-ticket-page.png)

![Search-page](public/pages_overview/search-page.png)

![Analysis-page](public/pages_overview/analysis-page.png)

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

## 4. User Stories

### User Story 1: Create Ticket

**Description:** As a user, I want to create a new ticket so that I can track tasks or issues that need to be addressed.

**Acceptance Criteria:**

- The "Create New Ticket" form should include fields for title, description, category, priority, progress, and status.
- The user should be able to select a category from a predefined list (e.g., task, user story).
- The user should be able to set the ticket's priority (low, medium, high, very high).
- The user should be able to set the ticket's progress using a slider.
- The user should be able to set the ticket's status (to-do, in progress, done).
- The user should receive a confirmation message after successfully creating a ticket.

### User Story 2: Display Tickets on the Board

**Description:** As a user, I want to display all tickets on a board so that I can see the status of each ticket at a glance.

**Acceptance Criteria:**

- The board should have three columns: to-do, in progress, and done.
- Tickets should be displayed under the appropriate column based on their status.
- Each ticket should display the title, description, priority, progress, and creation date.
- The user should be able to visually recognize the priority and progress of each ticket.

### User Story 3: Update Ticket Status

**Description:** As a user, I want to update the status of a ticket so that I can track the progress of my tasks.

**Acceptance Criteria:**

- The user should be able to click on an existing ticket and be redirected to the "Update Ticket" page.
- On the "Update Ticket" page, the user should be able to redefine the ticket details.
- The user should receive a confirmation message after successfully updating the ticket status.

### User Story 4: Search for Tickets

**Description:** As a user, I want to search for a specific ticket so that I can quickly find it and check its details.

**Acceptance Criteria:**

- The user should be able to enter a search term in the search bar.
- The search results should display tickets that match the search term.
- Each result should display the ticket's title, description, and creation date.
- The user should be able to click on a ticket in the search results to view its full details.

### User Story 5: Analyze Ticket Data

**Description:** As a user, I want to analyze the ticket data so that I can understand the overall progress and performance.

**Acceptance Criteria:**

- The analysis page should display metrics such as the total number of tickets, the number of tasks, the number of bugs, the number of user stories, the board completion percentage, the average priority, and the number of tickets created in the last 24 hours.
- Each metric should be presented in a clear and easily readable format.
- The user should be able to access the analysis page from the main navigation bar.
