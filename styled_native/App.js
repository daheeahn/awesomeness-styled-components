/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {SafeAreaView, StatusBar, Text, View} from 'react-native';

import React from 'react';
import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
`;

const Title = styled.Text`
  font-size: 40px;
  font-weight: 600;
`;

const App = () => {
  return (
    <Container>
      <Title>hi</Title>
    </Container>
  );
};

export default App;
