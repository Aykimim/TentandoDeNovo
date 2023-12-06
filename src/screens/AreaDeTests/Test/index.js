import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableWithoutFeedback,
  ScrollView
} from "react-native";
import Svg, { Path } from 'react-native-svg';
import { Container } from '../../TelasPrincipais/Home/styles';

export default function SvgComponent({ customPath }) {
  return (
    <Container>
    <Svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" style={{ enableBackground: 'new 0 0 100 100' }} xmlSpace="preserve">
      <Path d={customPath} fill="#fff" />
      <Text x="0" y="115" fill="#fff" fontSize="5px" fontWeight="bold" fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">Created by João Gabriel Mendes Corrêa</Text>
      <Text x="0" y="120" fill="#fff" fontSize="5px" fontWeight="bold" fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">from the Noun Project</Text>
    </Svg>
    </Container>
  );
}
