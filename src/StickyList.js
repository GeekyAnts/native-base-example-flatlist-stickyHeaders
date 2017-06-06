import React from "react";
import { FlatList } from "react-native";
import { Text, ListItem, Left, Body, Icon, Right, Title } from "native-base";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        { name: "Movies", header: true },
        { name: "Interstellar", header: false },
        { name: "Dark Knight", header: false },
        { name: "Pop", header: false },
        { name: "Pulp Fiction", header: false },
        { name: "Burning Train", header: false },
        { name: "Music", header: true },
        { name: "Adams", header: false },
        { name: "Nirvana", header: false },
        { name: "Amrit Maan", header: false },
        { name: "Oye Hoye", header: false },
        { name: "Eminem", header: false },
        { name: "Places", header: true },
        { name: "Jordan", header: false },
        { name: "Punjab", header: false },
        { name: "Ludhiana", header: false },
        { name: "Jamshedpur", header: false },
        { name: "India", header: false },
        { name: "People", header: true },
        { name: "Jazzy", header: false },
        { name: "Appie", header: false },
        { name: "Baby", header: false },
        { name: "Sunil", header: false },
        { name: "Arrow", header: false },
        { name: "Things", header: true },
        { name: "table", header: false },
        { name: "chair", header: false },
        { name: "fan", header: false },
        { name: "cup", header: false },
        { name: "cube", header: false }
      ],
      stickyHeaderIndices: []
    };
  }
  componentWillMount() {
    var arr = [];
    this.state.data.map(obj => {
      if (obj.header) {
        arr.push(this.state.data.indexOf(obj));
      }
    });
    arr.push(0);
    this.setState({
      stickyHeaderIndices: arr
    });
  }
  _renderItem = ({ item }) => {
    if (item.header) {
      return (
        <ListItem itemDivider>
          <Left />
          <Body style={{ marginRight: 40 }}>
            <Text style={{ fontWeight: "bold" }}>
              {item.name}
            </Text>
          </Body>
          <Right />
        </ListItem>
      );
    } else if (!item.header) {
      return (
        <ListItem style={{ marginLeft: 0 }}>
          <Body>
            <Text>{item.name}</Text>
          </Body>
        </ListItem>
      );
    }
  };
  render() {
    return (
      <FlatList
        data={this.state.data}
        renderItem={this._renderItem}
        keyExtractor={item => item.name}
        stickyHeaderIndices={this.state.stickyHeaderIndices}
      />
    );
  }
}
