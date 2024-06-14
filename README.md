# Neuromnia Full-Stack Engineer Take-Home Assignment

##  🎯 Goal: Build a Simple Milestone Lookup Chatbot

This assignment assesses your ability to:

- **Build a basic full-stack web application.**
- **Work with provided data (you don't need any prior knowledge about the data itself).**
- **Write clean and understandable code.**

**Time Budget:** Target completing this in a single session, around **6 hours**.

**Important:** You should **NOT** need any resources beyond:
* What's in this repository.
* What you can readily find with a web search (e.g., documentation for React, Node.js, etc.).

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/neuromnia-fse-take-home.git
```

### 2. Start the Backend Server

- **Open a terminal and navigate to the `backend` folder.**
- **Install dependencies:** `npm install`
- **Run the server:** `node index.js` (it should run on `http://localhost:3001`)

### 3. Start the Frontend Development Server

- **Open a *second* terminal and navigate to the `frontend` folder.**
- **Install dependencies:** `npm install`
- **Run the server:** `npm start` (usually opens in your browser at `http://localhost:3000`)

You should now have both servers running!

## 📝 The Assignment

You'll be working with data in `backend/data/vb_mapp_milestones.csv`. Think of it as a simple spreadsheet. 

**Build a web app where the user can:**

1. **Lookup Milestone:** Type a code (like "MAN-01") to see its description.
2. **List Domain:** Choose a domain and level from dropdowns to see all matching milestones.

## 💻 Frontend (React)

- **Use the starter code in `frontend/src/components/ChatInterface.js`.**
- **Implement:**
    - Button logic to make requests to your backend at `/api/chatbot` when the user:
        - Clicks "Lookup Milestone" (send the entered code).
        - Selects a domain and level (send those values).
    - Display the returned data in the chat window.
    - Show user-friendly error messages if something goes wrong.

## ⚙️ Backend (Node.js & Express)

- **Use the provided `backend/index.js`.**
- **Implement:**
    - **Load `vb_mapp_milestones.csv`** into memory when the server starts.
    - **API Endpoint (`/api/chatbot`):**
        - Determine if the request is for "Lookup Milestone" or "List Domain."
        - Return the correct data based on the request type.
        - Handle errors gracefully (e.g., milestone not found).
    - **Ensure the provided rate limiting is active.**

## ⏰ Time Management

- **Focus on the core functionality.**
- **Don't get stuck on edge cases or overly complex error handling.** 
- **If you're running out of time, prioritize a working app and explain any unfinished parts in your commit messages.**

## 📤 Submission

1. **Push your code to a public GitHub repository.**
2. **Share the repository link.**

We're more interested in your thought process and clean, working code than in perfectly completing every feature! Good luck! 
```

**Key Points:**

- The instructions are very direct and action-oriented.
- Time constraints are explicitly mentioned throughout.
- It's clear that perfection is not the goal, but a working, understandable solution is. 
- Emphasize the "no outside resources" rule to assess problem-solving skills.
