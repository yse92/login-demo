import React, {useState, useCallback, useRef} from 'react';
import {styles} from '../styles/Input.style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity
} from 'react-native';
import DatePicker from 'react-native-date-picker';

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
  const handleChange = e => {
    props.onChange(e);
  };
  const [editable, setEditable] = useState(true);
  const [secured, setSecured] = useState(props.secureTextEntry);
  const [open, setOpen] = useState(false)

  const dateHandler = (date) => {
    props.onChangeDate(date)
  }

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{props.labelText}</Text>
      <View style={styles.container}>
        {props.type !== 'date' && <TextInput
          onChangeText={handleChange}
          value={props.value}
          secureTextEntry={secured}
          editable={editable}
          style={styles.input}
        />}
        {props.type === 'visible' && props.secureTextEntry && (
          <TouchableOpacity
            onPressIn={() => setSecured(false)}
            onPressOut={() => setSecured(true)}>
            <MaterialIcons name="visibility" size={25} color="grey" />
          </TouchableOpacity>
        )}
        {props.type === 'locked' && !editable && (
          <TouchableOpacity onPress={() => {setEditable(!editable)}}>
              <MaterialIcons name="lock" size={20} color="grey" />
          </TouchableOpacity>
        )}
        {props.type === 'locked' && editable && (
          <TouchableOpacity onPress={() => {setEditable(!editable)}}>
            <MaterialIcons name="lock-open" size={20} color="grey" />
          </TouchableOpacity>
        )}
        {props.type === 'date' && (
          <TouchableOpacity onPress={() => setOpen(true)}>
            <TextInput
              value={props.value.toLocaleString('en', {
                year: "numeric",
                month: "short",
                day: "2-digit"}
                )}
              secureTextEntry={false}
              editable={false}
              style={styles.dateInput}
            />
            <DatePicker
              modal
              open={open}
              mode="date"
              date={props.value}
              onConfirm={(date) => {
                setOpen(false)
                dateHandler(date)
              }}
              onCancel={() => {
                setOpen(false)
              }}
            />
          </TouchableOpacity>
        )}
      </View>
      {props.error && <Text style={styles.errorText}>{props.error}</Text>}
    </View>
  );
};


export default Input;
