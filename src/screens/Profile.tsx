import React, {useEffect, useState} from 'react';
import Wrapper from '../components/Wrapper';
import Tab from '../components/Tab';
import TopBar from '../components/TopBar';
import Input from '../components/Input';
import Header from '../components/Header';
import {observer} from 'mobx-react';
import {Alert, View} from 'react-native';
import store from '../store/store';
import {getDescription} from '../utils/getDescription';
import {styles} from '../styles/Profile.styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "./RootStackParamList";
import messaging from '@react-native-firebase/messaging';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

const Profile = observer(({route}: Props) => {
  const {logged} = route.params;
  const [user, setUser] = useState(logged);
  const [dateOfAdmission, setDateOfAdmission] = useState(user.dateOfAdmission);
  const [dateOfBirth, setDateOfBirth] = useState(user.dateOfBirth);
  const [uri, setUri] = useState(user.uri)
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async message => {
     console.log('A new FCM message arrived!', JSON.stringify(message));
    });

    return unsubscribe;
  }, []);
  const onSubmit = () => {
    store.update({...user,
      dateOfAdmission: dateOfAdmission,
      dateOfBirth: dateOfBirth, uri: uri})
  }
  const onChangeDateOfBirth = (date: Date) => {
    setDateOfBirth(date)
  }
  const onChangeDateOfAdmission = (date: Date) => {
    setDateOfAdmission(date)
  }
  const pickImage = (uri: string) => setUri(uri)

  return (
    <KeyboardAwareScrollView>
      <Wrapper>
        <TopBar
          leftButtonText="My Profile"
          rightButtonText="DONE"
          onChange={onSubmit}
        />
        <Tab height="85%">
          <Header
            title={user.firstName + ' ' + user.secondName}
            descriptionText={getDescription(user)}
            onPress={pickImage}
            uri={uri}
          />
          <View style={styles.wrap}>
            <View style={styles.container1}>
              <Input
                labelText="Adhar No"
                value={user.adharNo}
                onChange={e => setUser({...user, adharNo: e})}
              />
              <Input
                labelText="Admission Class"
                onChange={e => setUser({...user, admissionClass: e})}
                value={user.admissionClass}
                type='locked'
              />
              <Input
                labelText="Date of Admission"
                onChangeDate={onChangeDateOfAdmission}
                value={dateOfAdmission}
                type="date"
                editable={false}
              />
              <Input
                labelText="Academic Year"
                onChange={e => setUser({...user, academicYear: e})}
                value={user.academicYear}
              />
              <Input
                labelText="Old Admission No"
                onChange={e => setUser({...user, oldAdmissionNo: e})}
                value={user.oldAdmissionNo}
                type='locked'
              />
              <Input
                labelText="Date of Birth"
                onChangeDate={onChangeDateOfBirth}
                value={dateOfBirth}
                type="date"
              />
            </View>
            <View style={styles.container2}>
              <Input
                labelText="Parent Mail ID"
                onChange={e => setUser({...user, parentMailID: e})}
                value={user.parentMailID}
                type='locked'
              />
              <Input
                labelText="Mother Name"
                onChange={e => setUser({...user, motherName: e})}
                value={user.motherName}
                type='locked'
              />
              <Input
                labelText="Father Name"
                onChange={e => setUser({...user, fatherName: e})}
                value={user.fatherName}
                type='locked'
              />
              <Input
                labelText="Parmanent Add."
                onChange={e => setUser({...user, parmanentAdd: e})}
                value={user.parmanentAdd}
                type='locked'
              />
            </View>
          </View>
        </Tab>
      </Wrapper>
    </KeyboardAwareScrollView>
  );
});



export default Profile;
