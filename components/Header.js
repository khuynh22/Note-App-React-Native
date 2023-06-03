import { Dimensions, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Your Notes App</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: '12%',
    backgroundColor: Platform.OS == "android" ? 'pink' : 'lightblue',
    paddingTop: 36,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle: {
    color: Platform.OS === "android" ? "white" : "black",
    fontSize: 24, 
    fontWeight: 'bold',
    padding: 10,
    marginTop: 10,
  }
})