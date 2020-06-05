import React from 'react';
import './App.css';
import Footer from '../Footer/footer';
import NavBar from '../Navbar/navbar';
import Main from '../Main/Main'
export const siteTitle = 'Pathfinder Harrow Reader'

function App() {
  return (
    <div>
			<NavBar />
			<Main />
			<Footer/>
    </div>
  );
}

export default App;
