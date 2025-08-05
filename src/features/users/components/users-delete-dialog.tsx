'use client'

import { useState } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { IconTrash } from '@tabler/icons-react'
import { User } from '../data/schema'

interface UsersDeleteDialogProps {
  user: User
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function UsersDeleteDialog({
  user,
  open,
  onOpenChange,
}: UsersDeleteDialogProps) {
  const [isDeleting, setIsDeleting] = useState(false)
  const navigate = useNavigate()

  async function deleteUser() {
    setIsDeleting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsDeleting(false)
    onOpenChange(false)
    navigate({ to: '/users' })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Nurse Registration</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete{' '}
            <span className='font-medium'>{user.fullName}</span>'s registration?
            This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <div className='py-4'>
          <div className='space-y-2'>
            <p className='text-sm'>
              <span className='font-medium'>Name:</span> {user.fullName}
            </p>
            <p className='text-sm'>
              <span className='font-medium'>Email:</span> {user.email}
            </p>
            <p className='text-sm'>
              <span className='font-medium'>Department:</span> {user.department}
            </p>
            <p className='text-sm'>
              <span className='font-medium'>Experience:</span> {user.experience} years
            </p>
          </div>
        </div>
        <DialogFooter>
          <Button
            variant='outline'
            onClick={() => onOpenChange(false)}
            disabled={isDeleting}
          >
            Cancel
          </Button>
          <Button
            variant='destructive'
            onClick={deleteUser}
            disabled={isDeleting}
          >
            {isDeleting ? (
              <>
                <IconTrash className='mr-2 h-4 w-4 animate-spin' />
                Deleting...
              </>
            ) : (
              <>
                <IconTrash className='mr-2 h-4 w-4' />
                Delete Registration
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
