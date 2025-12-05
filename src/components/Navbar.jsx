import React from "react";

const Navbar = () => {
  const handleScroll = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    const NAV_OFFSET = -50; // adjust this if needed (-70, -90, etc.)

    if (window.lenis) {
      window.lenis.scrollTo(el, {
        offset: NAV_OFFSET,
        duration: 1.2,
      });
    } else {
      const y = el.getBoundingClientRect().top + window.scrollY + NAV_OFFSET;
      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="navbar">
      <div className="nav-inner">
        <div className="nav-logo">Portfolio</div>
        <nav className="nav-links">
          <a href="#home" onClick={handleScroll("home")}>Home</a>
          <a href="#about" onClick={handleScroll("about")}>About</a>
          <a href="#skills" onClick={handleScroll("skills")}>Skills</a>
          <a href="#projects" onClick={handleScroll("projects")}>Projects</a>
          <a href="#contact" onClick={handleScroll("contact")}>Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
