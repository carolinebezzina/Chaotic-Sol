import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Sidebar extends Component {

  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({[menuState] : false});
    } else if(Object.keys(this.state).length === 0) {
      this.setState({[menuState] : true});
    } else {
      Object.keys(this.state).forEach(i => {
        this.setState({[i]: false});
      });
      this.setState({[menuState] : true}); 
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector('#sidebar').classList.remove('active');
    Object.keys(this.state).forEach(i => {
      this.setState({[i]: false});
    }); 
  }

  render () {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
          <span className="sidebar-brand brand-logo"><img src={require('../../assets/images/guildbanner.png')} alt="logo" /></span>
        </div>
        <ul className="nav">
          <li className={ this.isPathActive('/') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
            <Link className="nav-link" to="/">
              <span className="menu-icon"><i className="mdi mdi-home"></i></span>
              <span className="menu-title">Welcome</span>
            </Link>
          </li>
          <li className={ this.isPathActive('/guidelines') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
            <Link className="nav-link" to="/guidelines">
              <span className="menu-icon"><i className="mdi mdi-marker-check"></i></span>
              <span className="menu-title">Guild Guidelines</span>
            </Link>
          </li>
          <li className={ this.isPathActive('/raiding-info') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
            <Link className="nav-link" to="/raiding-info">
              <span className="menu-icon"><i className="mdi mdi-sword"></i></span>
              <span className="menu-title">Raiding Info</span>
            </Link>
          </li>
          <li className={ this.isPathActive('/officers') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
            <Link className="nav-link" to="/officers">
              <span className="menu-icon"><i className="mdi mdi-account-group"></i></span>
              <span className="menu-title">Our Officers</span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname === path;
  }

  componentDidMount() {
    this.onRouteChanged();
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {
      
      el.addEventListener('mouseover', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}

export default withRouter(Sidebar);