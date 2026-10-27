"use client";
import { useState } from "react";
export default function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);
return (
<nav className="navbar">
<h2>Prime Auto</h2>
<button
className="menu-button"
onClick={() => {
  //console.log("Menu button clicked");
  setMenuOpen((prev) => !prev)}}
  arial-label="Toggle menu"
>
{menuOpen ? "✕" : "☰"}
</button>
<div className={`nav-links ${menuOpen ? "show-menu" : ""}`}>
<a href="/">Home</a>
<a href="#cars">Cars</a>
<a href="#about">About</a>
<a href="#contact">Contact</a>
</div>
</nav>
);
}