import React from "react";
import { Image } from "react-native";
import { Icon } from "native-base";


export default class MenuButton extends React.Component {
  render() {
    return (
      <Icon onPress={() => this.props.navigation.toggleDrawer()}>
        <Image source={require("../android/drawable-hdpi/menu.png")} />
      </Icon>
    );
  }
}
