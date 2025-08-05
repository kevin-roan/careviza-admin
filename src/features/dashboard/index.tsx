import { IconUsers, IconFileText, IconEye, IconPlus } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'

export default function Dashboard() {
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
            <h1 className='text-3xl font-bold tracking-tight'>
              Hospital Dashboard
            </h1>
            <p className='text-muted-foreground'>
              Welcome to your hospital management dashboard
            </p>
          </div>
          <Button>
            <IconPlus className='mr-2 h-4 w-4' />
            Add New
          </Button>
        </div>

        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                Total Nurses
              </CardTitle>
              <IconUsers className='text-muted-foreground h-4 w-4' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>1,234</div>
              <p className='text-muted-foreground text-xs'>
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                New Applications
              </CardTitle>
              <IconFileText className='text-muted-foreground h-4 w-4' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>56</div>
              <p className='text-muted-foreground text-xs'>+8 new this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                Active Nurses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>892</div>
              <p className='text-muted-foreground text-xs'>
                +5% from last week
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>Departments</CardTitle>
              <IconEye className='text-muted-foreground h-4 w-4' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>15</div>
              <p className='text-muted-foreground text-xs'>
                Active departments
              </p>
            </CardContent>
          </Card>
        </div>

        <div className='mt-8 grid gap-4 md:grid-cols-2'>
          <Card>
            <CardHeader>
              <CardTitle>Recent Nurse Applications</CardTitle>
              <CardDescription>
                Latest nurse registration applications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='space-y-4'>
                {[
                  {
                    name: 'Sarah Johnson',
                    department: 'ICU',
                    experience: '5 years',
                    time: '2 hours ago',
                  },
                  {
                    name: 'Michael Chen',
                    department: 'Emergency',
                    experience: '3 years',
                    time: '4 hours ago',
                  },
                  {
                    name: 'Emily Davis',
                    department: 'Pediatrics',
                    experience: '7 years',
                    time: '6 hours ago',
                  },
                ].map((nurse, index) => (
                  <div key={index} className='flex items-center space-x-4'>
                    <div className='bg-muted flex h-8 w-8 items-center justify-center rounded-full'>
                      <span className='text-sm font-medium'>
                        {nurse.name.charAt(0)}
                      </span>
                    </div>
                    <div className='flex-1'>
                      <p className='text-sm font-medium'>{nurse.name}</p>
                      <p className='text-muted-foreground text-xs'>
                        {nurse.department} • {nurse.experience}
                      </p>
                    </div>
                    <p className='text-muted-foreground text-xs'>
                      {nurse.time}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Department Distribution</CardTitle>
              <CardDescription>Nurses by department</CardDescription>
            </CardHeader>
            <CardContent>
              <div className='space-y-4'>
                {[
                  { department: 'General Ward', count: 245, percentage: '20%' },
                  { department: 'ICU', count: 180, percentage: '15%' },
                  { department: 'Emergency', count: 156, percentage: '13%' },
                  { department: 'Pediatrics', count: 134, percentage: '11%' },
                ].map((dept, index) => (
                  <div key={index} className='flex items-center space-x-4'>
                    <div className='bg-muted flex h-8 w-8 items-center justify-center rounded'>
                      <IconUsers className='h-4 w-4' />
                    </div>
                    <div className='flex-1'>
                      <p className='text-sm font-medium'>{dept.department}</p>
                      <p className='text-muted-foreground text-xs'>
                        {dept.count} nurses
                      </p>
                    </div>
                    <p className='text-muted-foreground text-xs'>
                      {dept.percentage}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </Main>
    </>
  )
}
