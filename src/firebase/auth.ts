import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from './config'

interface AuthData {
  email: string
  password: string
}

const adminAuthHandler = ({ email, password }: AuthData) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('Successfully signed in = user', userCredential.user)
      return userCredential
    })
    .catch((error) => {
      console.log('Error signing in', error.code, error.message)
      throw error
    })
}

export default adminAuthHandler
