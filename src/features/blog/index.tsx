import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { IconPlus, IconEye, IconEdit, IconTrash } from '@tabler/icons-react'
import { Link } from '@tanstack/react-router'
import { format } from 'date-fns'

// Mock blog data
const blogPosts = [
  {
    id: '1',
    title: 'Getting Started with Admin Panel',
    content: 'This is a comprehensive guide on how to use the admin panel...',
    excerpt: 'Learn how to effectively use the admin panel for managing your application.',
    author: 'Admin User',
    publishedAt: new Date('2024-01-15'),
    status: 'published',
    views: 1234,
    tags: ['guide', 'admin'],
  },
  {
    id: '2',
    title: 'User Management Best Practices',
    content: 'Discover the best practices for managing users in your system...',
    excerpt: 'Essential tips and tricks for effective user management.',
    author: 'Admin User',
    publishedAt: new Date('2024-01-10'),
    status: 'published',
    views: 856,
    tags: ['users', 'management'],
  },
  {
    id: '3',
    title: 'Blog System Overview',
    content: 'An overview of the blog system and its features...',
    excerpt: 'Understanding the blog system and its capabilities.',
    author: 'Admin User',
    publishedAt: new Date('2024-01-05'),
    status: 'draft',
    views: 432,
    tags: ['blog', 'system'],
  },
]

export default function BlogList() {
  return (
    <>
      <Header>
        <div className='ml-auto flex items-center space-x-4'>
          <Search />
          <ThemeSwitch />
          <ProfileDropdown />
        </div>
      </Header>

      <Main>
        <div className='mb-6 flex items-center justify-between'>
          <div>
            <h1 className='text-3xl font-bold tracking-tight'>Blog Posts</h1>
            <p className='text-muted-foreground'>
              Manage your blog posts and content
            </p>
          </div>
          <Link to='/blog/new'>
            <Button>
              <IconPlus className='mr-2 h-4 w-4' />
              New Post
            </Button>
          </Link>
        </div>

        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {blogPosts.map((post) => (
            <Card key={post.id} className='group'>
              <CardHeader>
                <div className='flex items-center justify-between'>
                  <Badge variant={post.status === 'published' ? 'default' : 'secondary'}>
                    {post.status}
                  </Badge>
                  <div className='flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity'>
                    <Button variant='ghost' size='sm'>
                      <IconEdit className='h-4 w-4' />
                    </Button>
                    <Button variant='ghost' size='sm'>
                      <IconTrash className='h-4 w-4' />
                    </Button>
                  </div>
                </div>
                <CardTitle className='line-clamp-2'>{post.title}</CardTitle>
                <CardDescription className='line-clamp-3'>
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='flex items-center justify-between text-sm text-muted-foreground'>
                  <div className='flex items-center space-x-2'>
                    <IconEye className='h-4 w-4' />
                    <span>{post.views}</span>
                  </div>
                  <span>{format(post.publishedAt, 'MMM dd, yyyy')}</span>
                </div>
                <div className='mt-3 flex flex-wrap gap-1'>
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant='outline' className='text-xs'>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Main>
    </>
  )
} 