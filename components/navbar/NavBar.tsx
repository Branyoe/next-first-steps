import { HomeIcon } from '@primer/octicons-react'
import Link from 'next/link'
import { ActiveLink } from '..';

// This is a temporal promise to simulate a delay
// const temporalPromise = () => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(true)
//     }, 5000)
//   })
// }

const navItems = [
  { path: '/about', text: 'About' },
  { path: '/pricing', text: 'Pricing' },
  { path: '/contact', text: 'Contact' },
];

export const NavBar = async () => {
  // await temporalPromise(); // await for build the component

  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
      <Link href="/" className='flex items-center '>
        <HomeIcon className='mr-2' />
        <span>Home</span>
      </Link>

      <div className="flex flex-1"></div>

      {
        navItems.map(navItem => (
          <ActiveLink key={navItem.path} {...navItem} />
        ))
      }
    </nav>
  )
}
