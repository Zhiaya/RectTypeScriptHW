import {
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle,
  } from "flowbite-react";
  export default function MyNavBar() {
    return (
      <Navbar fluid rounded className="bg-sky-400">
      <NavbarBrand href="https://flowbite-react.com">
        {/* <img
          src="#"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
          Shop
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink className="text-white" href="#">
          Home
        </NavbarLink>
        <NavbarLink className="text-white" href="#">About</NavbarLink>
        <NavbarLink className="text-white" href="#">Services</NavbarLink>
        <NavbarLink className="text-white" href="#">Pricing</NavbarLink>
        <NavbarLink className="text-white" href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
    );
  }
  