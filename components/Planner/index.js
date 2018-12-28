import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import Day from "../Day";

export default class Planner extends Component {
  constructor() {
    super();
    this.renderDays = this.renderDays.bind(this);
  }

  state = {
    days: [
      {
        day: "Monday",
        imageUrl: require("../../assets/images/lat-workout.jpg"),
        workout: "Chest Workout"
      },
      {
        day: "Tuesday",
        imageUrl: require("../../assets/images/triceps-workout.jpg"),
        workout: "Triceps Workout"
      },
      {
        day: "Wednesday",
        imageUrl: require("../../assets/images/shoulder-workout.jpg"),
        workout: "Shoulders Workout"
      },
      {
        day: "Thursday",
        imageUrl: require("../../assets/images/biceps-workout.jpg"),
        workout: "Biceps Workout"
      },
      {
        day: "Friday",
        imageUrl: require("../../assets/images/lat-workout.jpg"),
        workout: "Lat Workout"
      },
      {
        day: "Saturday",
        imageUrl: require("../../assets/images/leg-workout.jpg"),
        workout: "Leg Workout"
      }
    ]
  };

  renderDays(day, index) {
    return (
      <Day
        key={index}
        day={day.day}
        imageUrl={day.imageUrl}
        workout={day.workout}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
        >
          {this.state.days.map(this.renderDays)}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3e3947"
  }
});
