import { db } from '@/firebase/config'
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
  addDoc,
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

export async function getBlogs() {
  const querySnapshot = await getDocs(collection(db, 'blogs'))
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
}

/**
 * Adds a blog post to the 'posts' collection in Firestore.
 *
 * @param {Object} data - The blog post data (as props).
 * @param {string} data.desc - Blog description.
 * @param {string} data.excerpt - Minimal description.
 * @param {string} data.markdown - Markdown content.
 * @param {string} data.publishedAt - ISO String or Timestamp.
 * @param {string[]} data.tags - Array of tags.
 * @param {string} data.title - Blog title.
 */

export async function addBlogPost(data) {
  try {
    await addDoc(collection(db, 'blogs'), {
      desc: data.desc,
      excerpt: data.excerpt,
      markdown: data.markdown,
      publishedAt: data.publishedAt, // store as string or Timestamp
      tags: data.tags, // array of strings
      title: data.title,
    })
    // Optionally: return something if needed, e.g. docRef.id
  } catch (error) {
    console.error('Error adding blog post:', error)
    // Optionally: handle error in your app
  }
}
