import {TextInput} from 'react-native';
import {styles} from '../styles/Input.style';
import DatePicker from 'react-native-date-picker';
import React, {useState} from 'react';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

interface Props {
  onChangeDate: (date: Date) => void,
  value: Date,
  editable: boolean
}

const options = {
  year: "numeric",
  month: "short",
  day: "2-digit"
} as const

const DateInput = ({onChangeDate, value, editable}: Props) => {
  const [open, setOpen] = useState<boolean>(false)

  const handleDate = (date: Date) => {
    onChangeDate(date)
  }

  return (
    <>
      <Pressable onPress={() => setOpen(true)} disabled={!editable}>
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
      </Pressable>
    </>
    )
}
export default DateInput
