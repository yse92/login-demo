import React, {useState, useCallback, useRef, useEffect} from 'react';
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

interface Props {
  editable: boolean,
  secureTextEntry?: boolean,
  type?: 'locked' | 'date' | 'visible',
  labelText: string,
  value: any,
  error: string,
  onChangeDate?(date: Date): void,
  onChange(text: string): void,
}

const Input = (props: Props) => {
  const [editable, setEditable] = useState(props.editable);
  const [secured, setSecured] = useState(props.secureTextEntry);

  useEffect(() => {
    if (props.type === 'locked')
      setEditable(false)
  }, [])

  const handlePressIn = () => setSecured(false)
  const handlePressOut = () => setSecured(true)
  const handlePress = () => setEditable(!editable)

    return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{props.labelText}</Text>
      <View style={styles.container}>
        {props.type === 'date' ?
          <DateInput onChangeDate={props.onChangeDate!}
                     value={props.value}
                     editable={editable}/> :
          <TextInput
            onChangeText={e => props.onChange(e)}
            value={props.value}
            secureTextEntry={secured}
            editable={editable}
            style={styles.input}/>}
          <Toggle
            type={props.type!}
            editable={editable}
            secureTextEntry={!!props.secureTextEntry}
            handlePress={() => setEditable(!editable)}
            handlePressIn={() => setSecured(false)}
            handlePressOut={() => setSecured(true)}
          />
      </View>
      {props.error && <Text style={styles.errorText}>{props.error}</Text>}
    </View>
  );
};

Input.defaultProps = {
  editable: true
};

export default Input;
