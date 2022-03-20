import React, { Component } from 'react';

class Navbar extends Component {
  toggleOffcanvas() {
    document.querySelector('.sidebar-offcanvas').classList.toggle('active');
  }
  toggleRightSidebar() {
    document.querySelector('.right-sidebar').classList.toggle('open');
  }
  render () {
    return (
      <nav className="navbar p-0 fixed-top d-flex flex-row">
        <div className="navbar-menu-wrapper flex-grow d-flex align-items-stretch">
          <ul className="navbar-nav w-100">
            <li className="nav-item w-50 title"><h1>Chaotic Sol</h1></li>
            <li className="nav-item w-50"><h3 className="text-muted"><img src={require('../../assets/images/alliance.png')} className="gradient-corona-img img-fluid" width="40px" alt="alliance logo" /> Alliance - Dalaran</h3></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
