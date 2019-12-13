import React, { Component } from "react";
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { createDrawerNavigator, createAppContainer } from "react-navigation";

import Post from "../Pages/Post";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";
import Homeclient from "../Pages/Homeclient";
import ProfilePage from "../Pages/ProfilePage";
import Agreement from "../Pages/Agreement";
import SignIn from "../Pages/SignIn";

import MenuDrawer from "../Components/MenuDrawer";

const WIDTH = Dimensions.get("window").width;

const DrawerConfig = {
  drawerWidth: WIDTH * 0.83,
  contentComponent: ({ navigation }) => {
    return <MenuDrawer navigation={navigation} />;
  }
};

const DrawerNavigator = createDrawerNavigator(
  {
    Homeclient: {
      screen: Homeclient
    },

    Post: {
      screen: Post
    },

    AboutUs: {
      screen: AboutUs
    },
    ContactUs: {
      screen: ContactUs
    },
    Agreement: {
      screen: Agreement
    },
    ProfilePage: {
      screen: ProfilePage
    },
    SignIn: {
      screen: SignIn
    }
  },
  DrawerConfig
);

export default createAppContainer(DrawerNavigator);
