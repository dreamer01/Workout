import React, { Component } from "react";
import {
  StyleSheet,
  Modal,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions
} from "react-native";
import { Icon } from "react-native-elements";

import ListCard from "../ListItem";
import AddListItem from "../AddListItem";

export default class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      list: []
    };
    this.togglePrompt = this.togglePrompt.bind(this);
    this.addCard = this.addCard.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
  }

  async componentDidMount() {}

  togglePrompt() {
    this.setState({ modalVisible: !this.state.modalVisible });
  }

  addCard(itemObj) {
    if (itemObj.title != null) {
      this.setState({
        list: [...this.state.list, itemObj]
      });
    }
    this.togglePrompt();
    console.log(this.state);
  }

  updateStatus(title) {
    const newList = this.state.list.map(card => {
      if (card.title === title) card.status = !card.status;
      return card;
    });
    this.setState({ list: newList });
  }

  renderList = item => (
    <ListCard
      key={item.title}
      type={item.type}
      title={item.title}
      details={item.details}
      status={item.status}
      updateStatus={this.updateStatus}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <View>
            <Image style={styles.img} source={this.props.imageUrl} />
            <Text style={styles.day}>{this.props.day}</Text>
            <View style={styles.titleBox}>
              <Text style={styles.title}>{this.props.workout}</Text>
            </View>
          </View>
        </View>

        <View style={styles.todo}>
          <Icon
            name="md-add-circle"
            type="ionicon"
            color="#03a87c"
            onPress={() => this.togglePrompt()}
          />

          <Modal
            animationType="fade"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => this.togglePrompt()}
          >
            <AddListItem addCard={this.addCard} close={this.togglePrompt} />
          </Modal>
        </View>

        <ScrollView style={{ margin: 10 }} showsVerticalScrollIndicator={false}>
          {this.state.list.map(this.renderList)}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
    backgroundColor: "#3e3947"
  },
  card: {
    padding: 10,
    marginTop: 20,
    height: "40%"
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 5
  },
  day: {
    fontFamily: "Quicksand",
    color: "#8bffdd",
    fontSize: 20,
    position: "absolute",
    top: 10,
    left: 10
  },
  titleBox: {
    backgroundColor: "#696372",
    width: "70%",
    position: "absolute",
    left: 10,
    bottom: -10,
    paddingLeft: 5,
    borderRadius: 4,
    opacity: 0.9
  },
  title: {
    fontFamily: "Quicksand",
    color: "#fff",
    fontSize: 22,
    textAlign: "left",
    opacity: 1.0
  },
  todo: {
    width: "90%",
    margin: 10,
    alignItems: "flex-end"
  }
});
