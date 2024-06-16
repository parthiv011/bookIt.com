# Booking.com Clone

## Overview
This project is a clone of Booking.com, built using React.js. It provides a comprehensive platform for users to browse and book cabins, authenticate their accounts, manage bookings, and access a user dashboard. The application uses modern React concepts and tools to ensure a robust and scalable architecture.

## Features
- **Cabin Listings**: Browse and search for available cabins.
- **Authentication**: User registration, login, and logout functionalities.
- **Bookings**: Make, view, and manage bookings.
- **Settings**: User settings to update personal information.
- **Dashboard**: Access to user-specific information and actions.
- **Check-in/Check-out**: Manage the check-in and check-out process for bookings.

## Technologies and Concepts
- **React Query**: For data fetching, caching, synchronization, and more.
- **Axios**: For making HTTP requests to the backend API.
- **Custom Hooks**: To encapsulate and reuse logic across the application.
- **Styled Components**: For styling React components with a CSS-in-JS approach.
- **React Router DOM**: For handling routing within the application.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/booking-clone.git
   cd booking-clone
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Project Structure
```
booking-clone/
├── public/
├── src/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   ├── styles/
│   ├── ui/
│   ├── features/
│   ├── App.js
│   ├── index.js
│   └── routes.js
├── package.json
└── README.md
```

## Key Components

### Auth
- **Login.js**: Handles user login.
- **Register.js**: Handles user registration.
- **AuthProvider.js**: Provides authentication context and logic.

### Bookings
- **BookingList.js**: Displays a list of user bookings.
- **BookingDetail.js**: Displays details of a specific booking.

### Cabins
- **CabinList.js**: Displays a list of available cabins.
- **CabinDetail.js**: Displays details of a specific cabin.

### Dashboard
- **Dashboard.js**: Main dashboard view for users.

### Settings
- **UserSettings.js**: Allows users to update their personal information.

### CheckinCheckout
- **Checkin.js**: Handles the check-in process.
- **Checkout.js**: Handles the check-out process.

## Custom Hooks
- **useAuth.js**: Manages authentication logic.
- **useFetch.js**: Fetches data using React Query.
- **useBooking.js**: Manages booking-related logic.

## Styled Components
- **GlobalStyle.js**: Defines global CSS styles.
- **ThemeProvider.js**: Provides theming support.

## Routing
- **routes.js**: Defines the routes and navigation for the application.

## API Service
- **api.js**: Contains functions to make HTTP requests using Axios.

## Getting Started

1. **Authentication**: Register and login to access the application's features.
2. **Browse Cabins**: Search and view details of available cabins.
3. **Make a Booking**: Book a cabin for desired dates.
4. **Manage Bookings**: View and manage your bookings through the dashboard.
5. **Settings**: Update your personal information in the settings section.
6. **Check-in/Check-out**: Complete the check-in and check-out process for your bookings.

## Contributing
Currently this project is in development reach out to me if you can contribute and add new fresh ideas to the project.


## Acknowledgements
- Inspired by Booking.com
- Built with React, React Query, Axios, Styled Components, and React Router DOM.

---

Feel free to reach out with any questions or feedback. Happy coding!
