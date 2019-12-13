import React, { Component } from "react";
import { Form, Item, Picker } from "native-base";
import Icon from "react-native-ionicons";


export default class PickerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: "From City"
    };
  }

  onValueChange2(value) {
    this.setState({
      selected2: value
    });
  }
  
  render() {
    return (
      <Item picker rounded>
        <Picker
          mode="dropdown"
          iosIcon={<Icon name="ios-arrow-down" />}
          style={{ width: undefined }}
          placeholder="From City"
          placeholderStyle={{ color: "#bfc6ea" }}
          placeholderIconColor="#007aff"
          selectedValue={this.state.selected2}
          onValueChange={this.onValueChange2.bind(this)}
        >
          <Picker.Item label="Wallet" value="key0" />
          <Picker.Item label="ATM Card" value="key1" />
          <Picker.Item label="Debit Card" value="key2" />
          <Picker.Item label="Credit Card" value="key3" />
          <Picker.Item label="Net Banking" value="key4" />
        </Picker>
      </Item>
    );
  }
}
