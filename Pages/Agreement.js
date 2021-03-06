import React, { Component } from "react";
import { View, Button } from "native-base";
import {
  Text,
  Image,
  Dimensions,
  ImageBackground,
  StatusBar
} from "react-native";
import BlueHeader from "../Components/BlueHeader";

export default class Agreement extends Component {
  render() {
    return (
      <ImageBackground
        resizeMode="stretch"
        source={require("../bg.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <BlueHeader header="Privacy" />
        <StatusBar backgroundColor="#1473e6"></StatusBar>
        <View
          style={{
            alignItems: "center",
            marginTop: Dimensions.get("window").height * 0.05
          }}
        >
          <Image
            source={require("../images/slogo.png")}
            style={{
              width: "30%",
              height: "20%",
              marginBottom: Dimensions.get("window").height * 0.02
            }}
          />
          <Text
            style={{
              color: "#1473e7",
              fontWeight: "bold",
              fontSize: Dimensions.get("window").width * 0.05,
              marginBottom: Dimensions.get("window").height * 0.02
            }}
          >
            Welcome To 247 Shipping
          </Text>
          <Text
            style={{
              fontSize: Dimensions.get("window").width * 0.04,
              textAlign: "center",
              marginRight: Dimensions.get("window").width * 0.08,
              marginLeft: Dimensions.get("window").width * 0.08
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
        </View>
      </ImageBackground>
    );
  }
}
