import React from 'react';
import './App.css';
import Footer from '../Footer/footer';
import NavBar from '../Navbar/navbar';
export const siteTitle = 'Pathfinder Harrow Reader'

function App() {
  return (
    <div className="App">
			<header className="header"><NavBar /></header>
			<main>
        Contnent goes here
      </main>
			<footer><Footer/></footer>
    </div>
  );
}

export default App;
