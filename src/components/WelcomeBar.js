import React from 'react'
import {View, Text} from 'react-native'
import {styles} from '../styles/WelcomeBar.styles';

export const WelcomeBar = ({title, description}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  )
}

