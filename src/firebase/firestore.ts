import { db } from '@/firebase/config'
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore'

export async function getRegistrations() {
  const querySnapshot = await getDocs(collection(db, 'registrations'))
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
}

// to change the status of the user, ( called or not )
export async function updateUserStatus(docId, status) {
  try {
    const docRef = doc(db, 'registrations', docId) // "users" is your collection name
    await updateDoc(docRef, {
      status: status,
    })
    console.log(`User ${docId} status updated to: ${status}`)
    return { success: true }
  } catch (error) {
    console.error('Error updating status:', error)
    return { success: false, error }
  }
}

export async function deleteUserById(docId: string) {
  try {
    const docRef = doc(db, 'registrations', docId)
    await deleteDoc(docRef)
    console.log(`User ${docId} deleted successfully`)
    return { success: true }
  } catch (error) {
    console.error('Error deleting user:', error)
    return { success: false, error }
  }
}
