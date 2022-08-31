import React, {useCallback} from 'react';
import {TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Toggle = ({type, editable, secureTextEntry, handlePressIn, handlePressOut, handlePress}) => {

  const element = useCallback(() => {

    switch(type) {
      case 'visible':
        if (secureTextEntry)
          return <TouchableOpacity onPressIn={handlePressIn} onPressOut={handlePressOut}>
                    <MaterialIcons name="visibility" size={25} color="grey" />
                 </TouchableOpacity>
      case 'locked':
        if (!editable)
          return <TouchableOpacity onPress={handlePress}>
                    <MaterialIcons name="lock" size={20} color="grey" />
                 </TouchableOpacity>
        else
          return <TouchableOpacity onPress={handlePress}>
                    <MaterialIcons name="lock-open" size={20} color="grey" />
                 </TouchableOpacity>
      default:
        return null
    }
  })
  return <>{element()}</>
}

export default Toggle
