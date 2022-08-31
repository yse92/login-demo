import React, {useState, useCallback, useRef} from 'react';
import {styles} from '../styles/Input.style';
import {
  View,
  TextInput,
  Text
} from 'react-native';
import DateInput from './DateInput';
import Toggle from './Toggle';

/**
 * @param onChange
 * @param onPress
 * @param value
 * @param error
 * @param labelText
 * @param secureTextEntry
 * @param type
 * @param editable
 */

const Input = props => {
  const [editable, setEditable] = useState(true);
  const [secured, setSecured] = useState(props.secureTextEntry);

  const handleChange = e => props.onChange(e)
  const handlePressIn = () => setSecured(false)
  const handlePressOut = () => setSecured(true)
  const handlePress = () => setEditable(!editable)

    return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{props.labelText}</Text>
      <View style={styles.container}>
        {props.type === 'date' ?
          <DateInput onChangeDate={props.onChangeDate} value={props.value}/> :
          <TextInput
            onChangeText={handleChange}
            value={props.value}
            secureTextEntry={secured}
            editable={editable}
            style={styles.input}/>}
          <Toggle
            type={props.type}
            editable={editable}
            secureTextEntry={props.secureTextEntry}
            handlePress={handlePress}
            handlePressIn={handlePressIn}
            handlePressOut={handlePressOut}
          />
      </View>
      {props.error && <Text style={styles.errorText}>{props.error}</Text>}
    </View>
  );
};


export default Input;


{/*{props.type === 'visible' && props.secureTextEntry && (*/}
{/*  <TouchableOpacity*/}
{/*    onPressIn={() => setSecured(false)}*/}
{/*    onPressOut={() => setSecured(true)}>*/}
{/*    <MaterialIcons name="visibility" size={25} color="grey" />*/}
{/*  </TouchableOpacity>*/}
{/*)}*/}
{/*{props.type === 'locked' && !editable && (*/}
{/*  <TouchableOpacity onPress={() => {setEditable(!editable)}}>*/}
{/*      <MaterialIcons name="lock" size={20} color="grey" />*/}
{/*  </TouchableOpacity>*/}
{/*)}*/}
{/*{props.type === 'locked' && editable && (*/}
{/*  <TouchableOpacity onPress={() => {setEditable(!editable)}}>*/}
{/*    <MaterialIcons name="lock-open" size={20} color="grey" />*/}
{/*  </TouchableOpacity>*/}
{/*)}*/}
