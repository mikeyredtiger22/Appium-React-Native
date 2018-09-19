import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

  constructor() {
    super();

    this.state = {
      counter: 0,
      timer: 0
    };
    this.createInterval();
  }

  createInterval() {
    this.interval = setInterval(() => this.setState(prevState =>
      ({timer: prevState.timer + 1})), 100);
  }

  handlePlayPauseTimer() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    } else {
      this.createInterval();
    }
  }

  handleIncrementCounter() {
    this.setState(prevState => ({counter: prevState.counter + 1}));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Timer: {this.state.timer}</Text>
        <Button title='play/pause timer' onPress={() => this.handlePlayPauseTimer()}/>
        <Text accessibilityLabel='counter'>Counter: {this.state.counter}</Text>
        <View>
          <Button title='  +  ' onPress={() => this.handleIncrementCounter()}
                  accessibilityLabel='counterInc'/>
        </View>
      </View>
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
