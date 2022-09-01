import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export const BottomBar = ({text}) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    position: 'relative',
    marginTop: -20

  },
  text: {
    textAlign: 'right'
  }
})
