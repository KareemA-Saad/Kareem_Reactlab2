# React Users List Application

A simple React application built with Vite v7 that displays a list of users with search functionality.

## Features

- Display users in a responsive card layout
- Search users by email address
- Email validation
- Responsive design using Bootstrap
- TypeScript for type safety

## React Concepts Applied

### 1. **Components**
- **Functional Components**: All components are written as functional components using modern React patterns
- **Component Composition**: Breaking down the UI into smaller, reusable components (Search, Users, Parent)
- **Props**: Passing data between components using props

### 2. **State Management**
- **useState Hook**: Managing local component state
  - `searchValue` in Search component for input field
  - `users` and `filteredUsers` in Parent component for data management
- **State Lifting**: Moving state up to the Parent component to share between Search and Users components

### 3. **Event Handling**
- **onClick**: Button click events
- **onChange**: Input field changes
- **onKeyPress**: Keyboard events (Enter key)
- **Event Handlers**: Custom functions to handle user interactions

### 4. **Conditional Rendering**
- **Conditional Logic**: Showing different content based on search results
- **Array Methods**: Using `map()` to render lists of users
- **Filtering**: Dynamically filtering users based on search input

### 5. **Hooks**
- **useState**: Managing component state
- **useEffect**: Side effects (initializing filtered users)
- **Custom Logic**: Implementing search and validation logic

### 6. **TypeScript Integration**
- **Interfaces**: Defining User type for type safety
- **Props Interfaces**: Type-safe component props
- **Type Annotations**: Explicit typing for variables and functions

### 7. **Modern React Patterns**
- **Functional Components**: Using hooks instead of class components
- **Arrow Functions**: Modern JavaScript syntax
- **Destructuring**: Extracting props and state values
- **Spread Operator**: Creating new arrays and objects

### 8. **Component Communication**
- **Props Down**: Passing data from Parent to child components
- **Events Up**: Child components calling parent functions through props
- **Callback Functions**: Parent passing functions to children for communication

## Project Structure

```
src/
├── components/
│   ├── Parent.jsx      # Main container component
│   ├── Search.jsx      # Search input component
│   └── Users.jsx       # Users list component
├── types/
│   └── User.js         # TypeScript interfaces
├── data/
│   └── users.json      # User data
├── App.jsx             # Root component
└── main.jsx            # Entry point
```

## Key Learning Points for React Beginners

1. **Component-Based Architecture**: Breaking UI into reusable pieces
2. **Unidirectional Data Flow**: Data flows down through props, events flow up
3. **State Management**: Using hooks to manage component state
4. **Event Handling**: Responding to user interactions
5. **Conditional Rendering**: Showing different content based on conditions
6. **TypeScript**: Adding type safety to React components
7. **Modern JavaScript**: Using ES6+ features like arrow functions and destructuring

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to the local development URL

## Technologies Used

- **React 18**: Modern React with hooks
- **TypeScript**: Type safety and better development experience
- **Vite**: Fast build tool and development server
- **Bootstrap**: CSS framework for responsive design
- **ES6+**: Modern JavaScript features
