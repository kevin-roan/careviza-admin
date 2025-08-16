import { createFileRoute, redirect } from '@tanstack/react-router'
import SignIn2 from '@/features/auth/sign-in/sign-in-2'
import { auth } from '@/firebase/config'

export const Route = createFileRoute('/(auth)/sign-in-2')({
  beforeLoad: async () => {
    // If user is already signed in, redirect to dashboard
    if (auth.currentUser) {
      throw redirect({
        to: '/',
      })
    }
  },
  component: SignIn2,
})
