import React from "react";
import { StyleSheet } from "react-native";
import Expo from "expo";
import StickyList from "./src/StickyList";
import {
  Text,
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Icon,
  Right,
  Title,
  Button,
  Picker
} from "native-base";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <Container>
        <Header>
          <Body>
            <Title>FlatList Sample</Title>
          </Body>
        </Header>
        <StickyList />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
