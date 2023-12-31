"use client";
import React from "react";
import { Navbar } from "flowbite-react";

const Header = () => {
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="https://flowbite.com/">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Amarres para siempre
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/navbars" active={true}>
          Home
        </Navbar.Link>

        <Navbar.Link href="/navbars">Servicios</Navbar.Link>
        <Navbar.Link href="/navbars">Testimonios</Navbar.Link>
        <Navbar.Link href="/navbars">Contacto</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
