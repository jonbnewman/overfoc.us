import React from 'react';
import Container from './Container';
import Header from './Header';
import Name from './Name';
import Avatar from './Avatar';

export default () => (
  <Header>
    <Container>
      <Avatar alt="Jonathan Newman" src="/images/face.jpg" />
      <Name>Jonathan Newman</Name>
    </Container>
  </Header>
);
