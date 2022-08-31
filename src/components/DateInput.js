import {TextInput, TouchableOpacity} from 'react-native';
import {styles} from '../styles/Input.style';
import DatePicker from 'react-native-date-picker';
import React, {useState} from 'react';

const DateInput = ({onChangeDate, value}) => {
  const [open, setOpen] = useState(false)
  const options = {year: "numeric", month: "short", day: "2-digit"}
  const handleDate = (date) => {
    onChangeDate(date)
  }
  return (
      <TouchableOpacity onPress={() => setOpen(true)}>
        <TextInput
          value={value.toLocaleString('en', options)}
          secureTextEntry={false}
          editable={false}
          style={styles.dateInput}
        />
        <DatePicker
          modal
          open={open}
          mode="date"
          date={value}
          onConfirm={(date) => {
            setOpen(false)
            handleDate(date)
          }}
          onCancel={() => {
            setOpen(false)
          }}
        />
      </TouchableOpacity>
    )
}
export default DateInput
