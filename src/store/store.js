import {makeAutoObservable} from 'mobx';
import {updateUser} from './updateUser';

class Store {

  users = [{
      id: 1,
      mobile: '0123456789',
      email: 'example@gmail.com',
      password: '123456Aa',
      firstName: 'Akshay',
      secondName: 'Syal',
      adharNo: '1234 5678 5466 6577',
      academicYear: '2020-2021',
      admissionClass: 'VI',
      oldAdmissionNo: 'T5464',
      dateOfAdmission: new Date(2018, 4, 1),
      dateOfBirth: new Date(1996, 7, 22),
      parentMailID: 'parentboth84@gmail.com',
      motherName: 'Monica Larson',
      fatherName: 'Bernard Taylor',
      parmanentAdd: 'Karol Bagh, Delhi',
      uri: '',
      extraInfo: {
        'Class no': 'XI-B',
        'Roll no': '04',
      },
    },
  ];
  constructor() {
    makeAutoObservable(this);
  }

  update(currUser) {
    this.users = this.users.map(user => {
      if(currUser.id === user.id) {
        return currUser
      }
      return user
    });
  }

  getUserById(id) {
    return this.users.find(user => user.id === id)
  }
}

const store = new Store();
export default store;
