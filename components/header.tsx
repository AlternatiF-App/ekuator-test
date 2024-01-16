'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { RxAvatar, RxExit } from 'react-icons/rx'
import { HiChevronLeft } from 'react-icons/hi2'

const Header = () => {
  const pathname = usePathname()

  const getTitle = () => {
    switch (pathname) {
      case '/add-pokemon':
        return 'Tambah Baru'
    }
  }

  return (
    <header className='bg-primary fixed inset-x-0 top-0 shadow-base text-white'>
      <div data-pathname={pathname === '/'} className='data-[pathname=true]:hidden data-[pathname=false]:block container mx-auto py-5 flex justify-between items-center'>
        <button
          className='text-white flex items-center space-x-3'
        >
          <HiChevronLeft className='h-6 w-6 text-white mr-3' />
          { getTitle() }
        </button>
      </div>
      <div data-pathname={pathname === '/'} className='data-[pathname=true]:flex data-[pathname=false]:hidden container mx-auto py-5 justify-between items-center'>
        <Image
          src='images/logo.svg'
          alt='logo'
          title='logo'
          height={60}
          width={163}
        />
        <div className='flex space-x-6 items-center'>
          <RxAvatar className='h-10 w-10 text-white' />
          <RxExit className='h-10 w-10 text-white' />
        </div>
      </div>
    </header>
  )
}

export default Header
