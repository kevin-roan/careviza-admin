import { useEffect, useState, useCallback } from 'react'
import { getRegistrations, updateUserStatus } from '@/firebase/firestore'
// assume you have this
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { getColumns } from './components/users-columns'
import { UsersDialogs } from './components/users-dialogs'
import { UsersTable } from './components/users-table'
import UsersProvider from './context/users-context'

export default function Users() {
  const [userList, setUserList] = useState([])

  useEffect(() => {
    const fetchRegistrations = async () => {
      const data = await getRegistrations()
      setUserList(data)
    }
    fetchRegistrations()
  }, [])

  const handleStatusChange = useCallback(
    async (id: string, newStatus: boolean) => {
      console.log(`Status changed for user ${id}: ${newStatus}`)

      // Update the backend
      await updateUserStatus(id, newStatus)

      // Optimistic UI update
      setUserList((prev) =>
        prev.map((user) =>
          user.id === id ? { ...user, status: newStatus } : user
        )
      )
    },
    []
  )

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
          <UsersTable
            data={userList}
            columns={getColumns(handleStatusChange)}
          />
        </div>
      </Main>
      <UsersDialogs />
    </UsersProvider>
  )
}
