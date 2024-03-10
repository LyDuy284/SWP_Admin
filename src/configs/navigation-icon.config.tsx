import { BsFileEarmarkPostFill } from 'react-icons/bs'
import { FaUsers } from 'react-icons/fa'
import { HiOutlineCurrencyDollar, HiOutlineViewGridAdd } from 'react-icons/hi'
import { RxDashboard } from 'react-icons/rx'

export type NavigationIcons = Record<string, JSX.Element>

const navigationIcon: NavigationIcons = {
  apps: <HiOutlineViewGridAdd />,
  crypto: <HiOutlineCurrencyDollar />,
  dashboard: <RxDashboard />,
  user: <FaUsers />,
  post: <BsFileEarmarkPostFill />,
}

export default navigationIcon
