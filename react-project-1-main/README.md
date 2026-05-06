# React Authentication Dashboard

A simple and responsive React web application that demonstrates user registration, login, and a dashboard view. Built with Vite, React Router, and Tailwind CSS, this project integrates with the FreeAPI to handle user authentication.

## Features

- **User Registration**: Create a new account with a username, email, and password.
- **User Login**: Securely log into an existing account.
- **Dashboard**: A page displaying the authenticated user's profile details, role, joined date, and account status.
- **State Persistence**: Maintains user session using `localStorage`.
- **Responsive Design**: Styled with Tailwind CSS, providing a modern and accessible UI across all devices.

## Tech Stack

- **Frontend**: React 19, React Router v7
- **Styling**: Tailwind CSS v4
- **Build Tool**: Vite
- **API**: [FreeAPI](https://freeapi.app/) (User Authentication Endpoints)

## Project Structure

- `src/pages/`: Contains the main views:
  - `Register.jsx`: Handles user sign-up.
  - `Login.jsx`: Handles user authentication.
  - `Dashboard.jsx`: Displays user profile and stats after login.
- `src/components/`: Reusable UI components (Buttons, Inputs, Loaders, StatCards, etc.).

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine.

### Installation

1. Clone the repository and navigate into the project directory.
2. Install the dependencies:

   ```bash
   npm install
   ```

### Running Locally

To start the development server, run:

```bash
npm run dev
```

The application will typically run at `http://localhost:5173`.

### Building for Production

To build the project for production:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## How It Works

- The application uses `react-router-dom` to navigate between the Register (`/`), Login (`/login`), and Dashboard (`/dashboard`) routes.
- Forms capture user input, which is then sent via `fetch` to `api.freeapi.app/api/v1/users/register` or `login`.
- Upon successful authentication, the user's data is stored in `localStorage` to persist the session and passed to the Dashboard via React Router's state.
