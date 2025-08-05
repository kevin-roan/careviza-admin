import { useState } from 'react'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { IconArrowLeft, IconEye, IconEyeOff } from '@tabler/icons-react'
import { Link } from '@tanstack/react-router'

export default function NewBlogPost() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [tags, setTags] = useState<string[]>([])
  const [newTag, setNewTag] = useState('')
  const [previewMode, setPreviewMode] = useState(false)

  const handleAddTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()])
      setNewTag('')
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log({ title, content, tags })
  }

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
        <div className='mb-6 flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0'>
          <div className='flex flex-col space-y-2 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0'>
            <Link to='/blog'>
              <Button variant='ghost' size='sm' className='w-full sm:w-auto'>
                <IconArrowLeft className='mr-2 h-4 w-4' />
                Back to Posts
              </Button>
            </Link>
            <div>
              <h1 className='text-2xl font-bold tracking-tight sm:text-3xl'>New Blog Post</h1>
              <p className='text-muted-foreground'>
                Create a new blog post with markdown support
              </p>
            </div>
          </div>
          <div className='flex flex-col space-y-2 sm:flex-row sm:items-center sm:space-x-2 sm:space-y-0'>
            <Button
              variant='outline'
              onClick={() => setPreviewMode(!previewMode)}
              className='w-full sm:w-auto'
            >
              {previewMode ? (
                <>
                  <IconEyeOff className='mr-2 h-4 w-4' />
                  Edit
                </>
              ) : (
                <>
                  <IconEye className='mr-2 h-4 w-4' />
                  Preview
                </>
              )}
            </Button>
            <Button onClick={handleSubmit} className='w-full sm:w-auto'>
              Publish Post
            </Button>
          </div>
        </div>

        <div className='grid gap-6 lg:grid-cols-3'>
          <div className='lg:col-span-2'>
            <Card>
              <CardHeader>
                <CardTitle>Post Content</CardTitle>
                <CardDescription>
                  Write your blog post content using markdown
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='space-y-2'>
                  <Label htmlFor='title'>Title</Label>
                  <Input
                    id='title'
                    placeholder='Enter your post title...'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                
                <div className='space-y-2'>
                  <Label htmlFor='content'>Content (Markdown)</Label>
                  {previewMode ? (
                    <div className='min-h-[300px] rounded-md border border-input bg-background p-4 prose prose-sm max-w-none overflow-auto'>
                      <h1>{title}</h1>
                      <div dangerouslySetInnerHTML={{ __html: content }} />
                    </div>
                  ) : (
                    <Textarea
                      id='content'
                      placeholder='Write your blog post content here using markdown...'
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      className='min-h-[300px] font-mono resize-y'
                    />
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className='space-y-6'>
            <Card>
              <CardHeader>
                <CardTitle>Tags</CardTitle>
                <CardDescription>
                  Add tags to categorize your post
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0'>
                  <Input
                    placeholder='Add a tag...'
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAddTag()}
                    className='flex-1'
                  />
                  <Button onClick={handleAddTag} size='sm' className='w-full sm:w-auto'>
                    Add
                  </Button>
                </div>
                <div className='flex flex-wrap gap-2'>
                  {tags.map((tag) => (
                    <Badge key={tag} variant='secondary' className='cursor-pointer' onClick={() => handleRemoveTag(tag)}>
                      {tag} ×
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Post Settings</CardTitle>
                <CardDescription>
                  Configure your post settings
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='space-y-2'>
                  <Label htmlFor='status'>Status</Label>
                  <select
                    id='status'
                    className='w-full rounded-md border border-input bg-background px-3 py-2 text-sm'
                    defaultValue='draft'
                  >
                    <option value='draft'>Draft</option>
                    <option value='published'>Published</option>
                  </select>
                </div>
                
                <div className='space-y-2'>
                  <Label htmlFor='author'>Author</Label>
                  <Input
                    id='author'
                    placeholder='Author name'
                    defaultValue='Admin User'
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Main>
    </>
  )
} 