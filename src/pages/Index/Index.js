import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from '../../components/Header/Header';
import DashBoard from '../DashBoard/DashBoard';
import Contas from '../Contas/Contas';
import SideBar from '../../components/SideBar/SideBar';
import Footer from '../../components/Footer/Footer';

import { GlobalStyle, Content, Wrapper } from './Styles';

const Index = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Router>
        <Header />
        <SideBar />
        <Content>
          <Route exact path="/" component={DashBoard} />
          <Route path="/contas" component={Contas} />
        </Content>

        <Footer />
      </Router>
    </Wrapper>
  )
}

export default Index;
