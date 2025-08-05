import { Button } from '@/components/ui/button'
import { IconPlus } from '@tabler/icons-react'

export function UsersPrimaryButtons() {
  return (
    <div className='flex items-center gap-2'>
      <Button>
        <IconPlus className='mr-2 h-4 w-4' />
        Add Nurse
      </Button>
    </div>
  )
}
