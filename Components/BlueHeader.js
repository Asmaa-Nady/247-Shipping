import React, { Component } from "react";
import { Left, Body, Right, Title, Icon } from "native-base";
import { ImageBackground, Dimensions, StatusBar } from "react-native";
import MenuButton from "./MenuButton";


export default class BlueHeader extends Component {
  render() {
    return (
      <ImageBackground
        source={require("../headerBackground.png")}
        style={{
          height: Dimensions.get("window").width * 0.2,
          width: "100%",
          flexDirection: "row"
        }}
      >
        <StatusBar backgroundColor="#1473e6"></StatusBar>
        <Left style={{ flex: 1 }}>{/* <MenuButton/> */}</Left>
        <Body style={{ flex: 1 }}>
          <Title>{this.props.header}</Title>
        </Body>
        <Right style={{ flex: 1 }} />
      </ImageBackground>
    );
  }
}
