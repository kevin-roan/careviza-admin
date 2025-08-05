import { createFileRoute } from '@tanstack/react-router'
import NewBlogPost from '@/features/blog/new'

export const Route = createFileRoute('/_authenticated/blog/new')({
  component: NewBlogPost,
}) 