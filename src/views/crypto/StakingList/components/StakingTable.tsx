import DataTable from '@/components/shared/DataTable'
import Avatar from '@/components/ui/Avatar'
import { cloneDeep } from 'lodash'
import { useEffect, useMemo, useRef } from 'react'
import { FiPackage } from 'react-icons/fi'

import { Staking } from '@/@types/staking'
import type {
  ColumnDef,
  DataTableResetHandle,
  OnSortParam,
} from '@/components/shared/DataTable'
import cleanHtml from '@/utils/cleanHtml'
import {
  getStakingList,
  setTableData,
  useAppDispatch,
  useAppSelector,
} from '../store'
import StakingDeleteConfirmation from './StakingDeleteConfirmation'
import ActionColumn from './ActionColumn'

const StakingColumn = ({ row }: { row: Staking }) => {
  const avatar = row.image ? (
    <Avatar src={row.image} />
  ) : (
    <Avatar icon={<FiPackage />} />
  )
  return (
    <div className="flex items-center">
      {avatar}
      <span className={`ml-2 rtl:mr-2 font-semibold`}>{row.name}</span>
    </div>
  )
}

const roles: any = { 0: 'admin', 1: 'Guest', 2: 'Staff', 3: 'Member' }

const StakingTable = () => {
  const tableRef = useRef<DataTableResetHandle>(null)
  const dispatch = useAppDispatch()
  const { page, size, sort, query, count } = useAppSelector(
    (state) => state.stakingList.data.tableData
  )

  const filterData = useAppSelector(
    (state) => state.stakingList.data.filterData
  )

  const loading = useAppSelector((state) => state.stakingList.data.loading)

  const data = useAppSelector((state) => state.stakingList.data.stakingList)

  const columns: ColumnDef<any>[] = useMemo(
    () => [
      {
        header: 'Tên',
        cell: (props) => {
          const row = props.row.original
          return `${row.lastName}`
        },
      },
      {
        header: 'Username',
        cell: (props) => {
          const row = props.row.original
          return `${row.username}`
        },
      },
      {
        header: 'Email',
        cell: (props) => {
          const row = props.row.original
          return row.email
        },
      },
      {
        header: 'Số điện thoại',
        cell: (props) => {
          const row = props.row.original
          return row.phone
        },
      },
      {
        header: 'Vai trò',
        sortable: false,
        cell: (props) => {
          const row = props.row.original
          return roles[row.role as any] || '--'
        },
      },
      {
        header: '',
        id: 'action',
        cell: (props) => <ActionColumn row={props.row.original} />,
      },
    ],
    []
  )

  useEffect(() => {
    fetchData()
  }, [page, size, sort])

  const fetchData = () => {
    dispatch(getStakingList({}))
  }

  return (
    <>
      <DataTable
        ref={tableRef}
        columns={columns}
        data={data}
        skeletonAvatarColumns={[0]}
        skeletonAvatarProps={{ className: 'rounded-md' }}
        loading={loading}
        disabledPaginate
      />
      <StakingDeleteConfirmation />
    </>
  )
}

export default StakingTable
