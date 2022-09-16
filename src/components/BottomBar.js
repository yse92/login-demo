import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {styles} from '../styles/BottomBar.styles';

export const BottomBar = (text) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
      </View>
    )
}


