
"use client";

import { Footer } from "flowbite-react";

const FooterComponent = () => {
  return (
    <Footer container className="bg-darkGray text-white rounded-none h-[60px] mt-5">
      <Footer.Copyright href="#" by="TASKPRO" year={2024} className="text-white"/>
      <Footer.LinkGroup className="text-white">
        <Footer.Link href="#">About</Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}

export default FooterComponent