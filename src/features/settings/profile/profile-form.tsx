import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { IconUser, IconMail, IconPhone, IconMapPin } from '@tabler/icons-react'

export default function ProfileForm() {
  return (
    <div className='space-y-6'>
      <div>
        <h3 className='text-lg font-medium'>Profile</h3>
        <p className='text-sm text-muted-foreground'>
          Update your account settings and set your preferences.
        </p>
      </div>
      <Separator />
      <div className='space-y-8'>
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>
              Update your personal information and contact details.
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-6'>
            <div className='grid gap-4 md:grid-cols-2'>
              <div className='space-y-2'>
                <Label htmlFor='firstName'>First Name</Label>
                <div className='relative'>
                  <IconUser className='absolute left-3 top-3 h-4 w-4 text-muted-foreground' />
                  <Input
                    id='firstName'
                    placeholder='Enter your first name'
                    className='pl-10'
                    defaultValue='Admin'
                  />
                </div>
              </div>
              <div className='space-y-2'>
                <Label htmlFor='lastName'>Last Name</Label>
                <div className='relative'>
                  <IconUser className='absolute left-3 top-3 h-4 w-4 text-muted-foreground' />
                  <Input
                    id='lastName'
                    placeholder='Enter your last name'
                    className='pl-10'
                    defaultValue='User'
                  />
                </div>
              </div>
            </div>
            <div className='space-y-2'>
              <Label htmlFor='email'>Email</Label>
              <div className='relative'>
                <IconMail className='absolute left-3 top-3 h-4 w-4 text-muted-foreground' />
                <Input
                  id='email'
                  type='email'
                  placeholder='Enter your email'
                  className='pl-10'
                  defaultValue='admin@example.com'
                />
              </div>
            </div>
            <div className='space-y-2'>
              <Label htmlFor='phone'>Phone Number</Label>
              <div className='relative'>
                <IconPhone className='absolute left-3 top-3 h-4 w-4 text-muted-foreground' />
                <Input
                  id='phone'
                  placeholder='Enter your phone number'
                  className='pl-10'
                  defaultValue='+1 (555) 123-4567'
                />
              </div>
            </div>
            <div className='space-y-2'>
              <Label htmlFor='address'>Address</Label>
              <div className='relative'>
                <IconMapPin className='absolute left-3 top-3 h-4 w-4 text-muted-foreground' />
                <Input
                  id='address'
                  placeholder='Enter your address'
                  className='pl-10'
                  defaultValue='123 Main Street, City, State 12345'
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Account Settings</CardTitle>
            <CardDescription>
              Manage your account settings and preferences.
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-6'>
            <div className='space-y-2'>
              <Label htmlFor='username'>Username</Label>
              <Input
                id='username'
                placeholder='Enter your username'
                defaultValue='admin'
              />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='currentPassword'>Current Password</Label>
              <Input
                id='currentPassword'
                type='password'
                placeholder='Enter your current password'
              />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='newPassword'>New Password</Label>
              <Input
                id='newPassword'
                type='password'
                placeholder='Enter your new password'
              />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='confirmPassword'>Confirm New Password</Label>
              <Input
                id='confirmPassword'
                type='password'
                placeholder='Confirm your new password'
              />
            </div>
          </CardContent>
        </Card>

        <div className='flex justify-end'>
          <Button>Save Changes</Button>
        </div>
      </div>
    </div>
  )
}
