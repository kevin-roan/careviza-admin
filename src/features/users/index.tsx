'use client'

import { useEffect, useState } from 'react'
import { getRegistrations } from '@/firebase/firestore'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { columns } from './components/users-columns'
import { UsersDialogs } from './components/users-dialogs'
import { UsersTable } from './components/users-table'
import UsersProvider from './context/users-context'
// import { userListSchema } from './data/schema'
// import { users } from './data/users'

export default function Users() {
  const [userList, setUserList] = useState([])

  // Parse user list
  // const userList = userListSchema.parse(users)

  useEffect(() => {
    const fetchRegistrations = async () => {
      const data = await getRegistrations()
      setUserList(data)
      console.log(data, 'data')
    }
    fetchRegistrations()
  },[])

  return (
    <UsersProvider>
      <Header fixed>
        <Search />
        <div className='ml-auto flex items-center space-x-4'>
          <ThemeSwitch />
          <ProfileDropdown />
        </div>
      </Header>

      <Main>
        <div className='mb-2 flex flex-wrap items-center justify-between space-y-2'>
          <div>
            <h2 className='text-2xl font-bold tracking-tight'>
              Nurse Registration
            </h2>
            <p className='text-muted-foreground'>
              Manage nurse registrations and applications here.
            </p>
          </div>
        </div>
        <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-y-0 lg:space-x-12'>
          <UsersTable data={userList} columns={columns} />
        </div>
      </Main>

      <UsersDialogs />
    </UsersProvider>
  )
}
