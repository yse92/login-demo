import {User} from '../store/User'

export type RootStackParamList = {
  Profile: {
    logged: User
  },
  Home: undefined
}
