import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ListItem = ({note}) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.noteText}>{note}</Text>
    </View>
  )
}

export default ListItem

const styles = StyleSheet.create({
  listItem: {
    borderWidth: 4,
    borderColor: 'lightblue',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    backgroundColor: '#fff000',
  },
  noteText: {
    fontSize: 20,
    fontWeight: '400',
  }
})