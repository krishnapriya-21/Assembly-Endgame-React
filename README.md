# Assembly: End Game

A fun, programming-themed hangman-style word guessing game built with React and Vite.



## 🎮 About The Game

The programming world is on the brink of being taken over by Assembly! Your mission, should you choose to accept it, is to guess the secret word. 

With each incorrect guess, another beloved programming language is lost to the annals of history. Guess the word correctly before you run out of attempts and save the world from an eternity of low-level coding!

## ✨ Features

- **Engaging Gameplay**: Classic hangman with a fun, nerdy twist.
- **Random Words**: A curated list of programming-related words to guess.
- **Interactive Keyboard**: An on-screen keyboard that provides visual feedback for guessed, correct, and incorrect letters.
- **Visual Progress**: See the list of "endangered" languages shrink with every wrong guess.
- **Win/Loss States**: Clear win and loss messages, with a celebratory confetti burst for victors!
- **Responsive Design**: Playable on both desktop and mobile devices without zooming.

## 🛠️ Tech Stack

- **Frontend**: [React](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: Plain CSS with the `clsx` utility for conditional classes.
- **Animations/Effects**: `react-confetti` for the win celebration.

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18.x or later recommended)
- npm or yarn

### Installation & Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/krishnapriya-21/assembly-endgame-react.git
   ```

2. **Navigate to the project directory:**
   ```sh
   cd assembly-endgame-react
   ```

3. **Install NPM packages:**
   ```sh
   npm install
   ```

4. **Run the development server:**
   ```sh
   npm run dev
   ```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## 📂 Project Structure

The main application logic is contained within `src/App.jsx`.

- `src/App.jsx`: The main component that holds all the game state and logic.
- `src/LostMsg.jsx`: A component to display a message when a wrong guess is made.
- `src/languages.js`: An array of language objects used for the "lives" system.
- `src/wordsList.js`: The list of possible words for the game.
- `src/index.css`: Global styles for the application.
