# Tax Code AI Assistant

## Overview
The Tax Code AI Assistant is a web application designed to provide users with instant, accurate answers to their tax-related questions based on the Tax Code of Kazakhstan. It features a user-friendly interface, secure authentication, and AI-powered chat functionality.

## Installation
1. Clone the repository:
  ```bash
  git clone https://github.com/Jasulan273/AICodexReact.git
  cd Project
  ```
2. Install dependencies:
  ```bash
  npm install
  ```
3. Start the development server:
  ```bash
  npm run dev
  ```



## Features
- **Authentication**: Secure login and registration system.
- **Chat Interface**: AI-powered chat for answering tax-related queries.
- **History**: View past interactions with the assistant.
- **Protected Routes**: Access control for authenticated users.
- **Responsive Design**: Optimized for various screen sizes.

## Project Structure
The project is organized as follows:
- **`src/assets`**: Contains static assets like images and logos.
- **`src/components`**: Reusable components such as `Auth`, `Chat`, `Sidebar`, and `ProtectedRoute`.
- **`src/pages`**: Page-level components like `HomePage`, `ChatPage`, and `MainPage`.
- **`src/services`**: API and authentication services.
- **`src/App.jsx`**: Main application entry point.
- **`src/main.jsx`**: Application bootstrap file.

## Key Components
### Authentication
- **`LoginForm.jsx`**: Handles user login.
- **`RegisterForm.jsx`**: Handles user registration.
- **`auth.js`**: Provides authentication context and utilities.

### Chat
- **`ChatInterface.jsx`**: Core chat functionality with AI-powered responses.
- **`Message.jsx`**: Displays individual chat messages.

### Layout
- **`Sidebar.jsx`**: Navigation menu for authenticated users.
- **`Layout.jsx`**: Wrapper for the main application layout.

### Pages
- **`HomePage.jsx`**: Landing page with an introduction to the assistant.
- **`ChatPage.jsx`**: Chat interface for interacting with the assistant.
- **`MainPage.jsx`**: Main application page with routing.

## API Integration
The application communicates with a backend API for:
- User authentication (`/login`, `/register`).
- Fetching chat history (`/history`).
- Sending user queries and receiving AI responses (`/ask`).


#### Registering a User
```javascript
export const registerUser = async (email, password) => {
  const response = await fetch(`${API_BASE_URL}/register`, {
   method: 'POST',
   headers: {
    'Content-Type': 'application/json',
   },
   body: JSON.stringify({ email, password }),
  });
  return response.json();
};
```

#### Logging in a User
```javascript
export const loginUser = async (email, password) => {
  const response = await fetch(`${API_BASE_URL}/login`, {
   method: 'POST',
   headers: {
    'Content-Type': 'application/json',
   },
   body: JSON.stringify({ email, password }),
  });
  return response.json();
};
```

#### Asking a Question
```javascript
export const askQuestion = async (question, token) => {
  const response = await fetch(`${API_BASE_URL}/ask`, {
   method: 'POST',
   headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
   },
   body: JSON.stringify({ question }),
  });
  return response.json();
};
```

### Authentication Token
The application uses JSON Web Tokens (JWT) for secure communication. After logging in, the token must be included in the `Authorization` header for protected API calls.

### Error Handling
The API responses include status codes and error messages to help identify issues. The frontend should handle these gracefully and provide feedback to the user.

By integrating these endpoints, the Tax Code AI Assistant ensures seamless communication between the frontend and backend, enabling a smooth user experience.


