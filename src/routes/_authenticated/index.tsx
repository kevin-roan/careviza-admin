import { createFileRoute } from '@tanstack/react-router'
// import Dashboard from '@/features/dashboard'
import Users from '@/features/users'

export const Route = createFileRoute('/_authenticated/')({
  component: Users,
})
