// ... (your other imports)
import Link from "next/link";
import { useState } from "react";
import {
  BlogDropdownMenus,
  ContactDropdownMenus,
  DemoDropdownMenus,
  ElementsMegaMenu,
  PagesDropdownMenus,
} from "../navbar/menu-data";
import NavItem from "../navbar/nav-item";
import Navbar from "../navbar/navbar";
import useScroll from "./../../../hooks/useScroll";

import About from "../../home-five/about";  // Update path
import Tokenomics from "../../home-five/tokenomics";  // Update path
import HowToBuy from "../../home-five/how-to-buy-grok";  // Update path
import Roadmap from "../../home-five/road-map";  // Update path
import FAQs from "../../common/faq/faq-accordion-two";  // Update path

const HeaderHomeFive = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  const scroll = useScroll();

  return (
    <header
      className={`site-header fugu--header-section fugu--header-three ${scroll ? "sticky-menu" : ""}`}
      id="sticky-menu"
    >
      <div className="container-fluid">
        <nav className="navbar site-navbar">
          <div className="brand-logo rt-mr-20">
            <Link href="/">
              <div>
                <img src="/images/new_img/logonew.png" alt="" className="light-version-logo" />
              </div>
            </Link>
          </div>
          <div className="menu-block-wrapper">
            <div
              className={`menu-overlay ${isMobileMenuOpen ? "active" : null}`}
              onClick={handleCloseMobileMenu}
            ></div>
            <nav className={`menu-block ${isMobileMenuOpen ? "active" : null}`} id="append-menu-header">
              <div className="mobile-menu-head">
                <div className="mobile-menu-close" onClick={handleCloseMobileMenu}>
                  &times;
                </div>
              </div>
              <Navbar>
                <NavItem navItemText="Home" link="/" />
                <NavItem navItemText="About" link="/about" component={About} />
                <NavItem navItemText="Tokenomics" link="/tokenomics" component={Tokenomics} />
                <NavItem navItemText="How to Buy" link="/how-to-buy" component={HowToBuy} />
                <NavItem navItemText="Roadmap" link="/roadmap" component={Roadmap} />
                <NavItem navItemText="FAQs" link="/faqs" component={FAQs} />
              </Navbar>
            </nav>
          </div>
          <div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
            <Link href="/contact">
              <div className="fugu--btn fugu--menu-btn3">Connect your Wallet</div>
            </Link>
          </div>

          <div className="mobile-menu-trigger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span></span>
          </div>
        </nav>
      </div>
      <style jsx>{`
        .nav-item {
          display: flex;
          align-items: center;
        }
      `}</style>
    </header>
  );
};

export default HeaderHomeFive;
