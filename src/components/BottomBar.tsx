import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {styles} from '../styles/BottomBar.styles';

interface Props {
  text: string,
}
export const BottomBar = ({text} : Props) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
      </View>
    )
}


