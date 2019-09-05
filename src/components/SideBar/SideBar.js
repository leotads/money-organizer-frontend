import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Container } from './Styles';

const SideBar = () => {
  return (
    <Container className="SideBar">
      <ul>
        <li>
          <Link to="/">DashBoard</Link>
        </li>
        <li>
          <Link to="/contas">Contas</Link>
        </li>
      </ul>
    </Container>
  )
}

export default SideBar;
