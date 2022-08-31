import React, {useState} from 'react';
import Wrapper from '../components/Wrapper';
import Tab from '../components/Tab';
import TopBar from '../components/TopBar';
import Input from '../components/Input';
import Header from '../components/Header';
import {observer} from 'mobx-react';
import {View} from 'react-native';
import store from '../store/store';
import {getDescription} from '../utils/getDescription';
import {styles} from '../styles/Profile.styles';

const Profile = observer(() => {

  const [user, setUser] = useState(store.users[0]);
  const [dateOfAdmission, setDateOfAdmission] = useState(store.users[0].dateOfAdmission);
  const [dateOfBirth, setDateOfBirth] = useState(store.users[0].dateOfBirth);

  const onSubmit = () => {
    store.update(user)
  }
  const onChangeDateOfBirth = (date) => {
    setDateOfBirth(date)
  }
  const onChangeDateOfAdmission = (date) => {
    setDateOfAdmission(date)
  }

  return (
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
            />
            <Input
              labelText="Mother Name"
              onChange={e => setUser({...user, motherName: e})}
              value={user.motherName}
            />
            <Input
              labelText="Father Name"
              onChange={e => setUser({...user, fatherName: e})}
              value={user.fatherName}
            />
            <Input
              labelText="Parmanent Add."
              onChange={e => setUser({...user, parmanentAdd: e})}
              value={user.parmanentAdd}
            />
          </View>
        </View>
      </Tab>
    </Wrapper>
  );
});



export default Profile;
