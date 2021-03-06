import React, { Component } from "react";
import { Header, Body, Title, Left, Right } from "native-base";
import Icon from "react-native-ionicons";
import NavigationService from "../NavigationService";


export default class WhiteHeader extends Component {
  render() {
    return (
      <Header
        style={{
          backgroundColor: "white",
          shadowColor: "black",
          shadowOpacity: 1,
          elevation: 4
        }}
        iosBarStyle="dark-content"
        androidStatusBarColor="white"
      >
        {/* <Left style={{ flex: 1 }}><Icon name="ios-arrow-round-back"> </Icon></Left> */}
        <Body style={{ justifyContent: "center", alignItems: "center" }}>
          <Title style={{ color: "#000", fontSize: 15 }}>
            {this.props.header}
          </Title>
        </Body>
        {/* <Right style={{flex:1}}/> */}
      </Header>
    );
  }
}
