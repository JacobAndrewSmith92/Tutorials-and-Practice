import React, { Component } from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';

import EventCard from './EventCard';

const styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff'
  }
})



export default class EventList extends Component {

  state = {
    event: []
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        events: this.state.events.map(evt => ({
          ...evt,
          timer: Date.now()
        }))
      })
    }, 1000);


    const events = require('./db.json').events.map(evt => ({
      ...evt,
      date: new Date(evt.date)
    }))
    this.setState({events})
  }

  render() {
    return (
      <FlatList
        style={styles.list}
        data={this.state.events}
        renderItem={({item}) => <EventCard event={item}/> }
        keyExtractor={item => item.id}
      />
    )
  }
}