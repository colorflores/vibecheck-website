import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Grid, Image, Header, Container } from 'semantic-ui-react'
import logo from './img/play_color.svg';

const App = () => {
  return (
    <Grid stackable stretched style={{ height: '100vh', padding: '4rem' }}>
      <Grid.Row verticalAlign="middle">
        <Grid.Column textAlign="right" width={6}>
          <Image floated="right" centered style={{ width: '100%', right: 0 }} src={logo} />
        </Grid.Column>
        <Grid.Column stretched width={10}>
          <Container textAlign="left">
            <Header style={{
              fontFamily: 'Sail',
              fontSize: '6rem',
              color: 'black'
            }}>
              What's the story?
            </Header>
            <Header style={{
              fontFamily: 'Work Sans',
              fontWeight: 300,
              fontSize: '4rem',
              color: 'black',
              marginLeft: '2rem'
            }}>
              Coming March 2020
            </Header>
            <div style={{ bottom: 0 }}>
              <p style={{
                fontFamily: 'Work Sans',
                fontWeight: 400,
                fontSize: '1rem',
                color: 'black',
                marginTop: '4rem',
                marginLeft: '2rem'
              }}>
                A project developed by: 
                  <a href="http://jacobdanovitch.me" style={{ color: '#5187F0' }}>
                    <b> Jacob Danovitch</b>
                  </a>
                  ,
                  <a href="https://github.com/faris" style={{ color: '#FFC300' }}>
                    <b> Faris Mohamed</b>
                  </a>
                  ,
                  <a href="https://omarflores.dev" style={{ color: '#8600B6' }}>
                    <b> Omar Garcia Flores </b>
                  </a>
                  &
                  <a href="#" style={{ color: '#FF351A' }}>
                    <b> Nathan Embaye</b>
                  </a>
              </p>
            </div>
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default App;
