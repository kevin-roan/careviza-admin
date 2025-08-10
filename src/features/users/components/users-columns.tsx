import { ColumnDef } from '@tanstack/react-table'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import LongText from '@/components/long-text'
import { callTypes } from '../data/data'
import { User } from '../data/schema'
import { DataTableColumnHeader } from './data-table-column-header'
import { DataTableRowActions } from './data-table-row-actions'

export const columns: ColumnDef<User>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
        className='translate-y-[2px]'
      />
    ),
    meta: {
      className: cn(
        'sticky md:table-cell left-0 z-10 rounded-tl',
        'bg-background group-hover/row:bg-muted group-data-[state=selected]/row:bg-muted'
      ),
    },
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
        className='translate-y-[2px]'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Name' />
    ),
    cell: ({ row }) => (
      <div className='flex flex-col'>
        <LongText className='max-w-36 font-medium'>
          {row.getValue('name')}
        </LongText>
        <span className='text-muted-foreground text-xs'>
          {row.original.email}
        </span>
      </div>
    ),
    meta: { className: 'w-40' },
  },
  {
    accessorKey: 'mobile',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Phone Number' />
    ),
    cell: ({ row }) => <div>{row.getValue('mobile')}</div>,
    enableSorting: false,
  },
  {
    accessorKey: 'qualification',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Qualification' />
    ),
    cell: ({ row }) => (
      <div className='max-w-48'>
        <LongText className='text-sm'>{row.getValue('qualification')}</LongText>
      </div>
    ),
    enableSorting: false,
  },
  {
    accessorKey: 'experience',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Experience (Years)' />
    ),
    cell: ({ row }) => (
      <div className='text-sm'>{row.getValue('experience')} years</div>
    ),
    enableSorting: false,
  },
  {
    accessorKey: 'department',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Department' />
    ),
    cell: ({ row }) => (
      <div className='max-w-48'>
        <LongText className='text-sm'>{row.getValue('department')}</LongText>
      </div>
    ),
    enableSorting: false,
  },
  {
    accessorKey: 'exp_salary',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Expected Salary' />
    ),
    cell: ({ row }) => (
      <div className='text-sm font-medium'>
        ₹{(row.getValue('exp_salary') as number)?.toLocaleString()}
      </div>
    ),
    enableSorting: false,
  },
  
{
  accessorKey: 'status',
  header: ({ column }) => (
    <DataTableColumnHeader column={column} title='Status' />
  ),
  cell: ({ row }) => {
    const isCalled = row.getValue('status');
    const displayText = isCalled ? 'Called' : 'Not Called';
    const badgeColor = callTypes.get(displayText); // adjust your map keys accordingly

    return (
      <div className='flex space-x-2'>
        <Badge variant='outline' className={cn('capitalize', badgeColor)}>
          {displayText}
        </Badge>
      </div>
    );
  },
  filterFn: (row, id, value) => {
    const displayText = row.getValue(id) ? 'Called' : 'Not Called';
    return value.includes(displayText);
  },
  enableHiding: false,
  enableSorting: false,
},
  {
    id: 'actions',
    cell: DataTableRowActions,
  },
]
