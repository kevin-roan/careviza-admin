import {
  IconLayoutDashboard,
  IconUsers,
  IconSettings,
  IconPalette,
  IconUserCog,
  IconFileText,
} from '@tabler/icons-react'
import { Command } from 'lucide-react'
import { type SidebarData } from '../types'

export const sidebarData: SidebarData = {
  user: {
    name: 'Admin',
    email: 'admin@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Careviza',
      logo: Command,
      plan: 'Nurse Management',
    },
  ],
  navGroups: [
    {
      title: 'Main',
      items: [
        // {
        //   title: 'Dashboard',
        //   url: '/',
        //   icon: IconLayoutDashboard,
        // },
        {
          title: 'Nurse Registration',
          url: '/users',
          icon: IconUsers,
        },
        {
          title: 'Blog',
          icon: IconFileText,
          items: [
            {
              title: 'All Posts',
              url: '/blog',
            },
            {
              title: 'Add New Post',
              url: '/blog/new',
            },
          ],
        },
      ],
    },
    {
      title: 'Settings',
      items: [
        {
          title: 'Settings',
          icon: IconSettings,
          items: [
            {
              title: 'Profile',
              url: '/settings',
              icon: IconUserCog,
            },
            {
              title: 'Appearance',
              url: '/settings/appearance',
              icon: IconPalette,
            },
          ],
        },
      ],
    },
  ],
}
