'use client'
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const IconShowPassword = ({
  isShow,
  onToggle,
}: {
  isShow: boolean
  onToggle: () => void
}) => {
  return (
    <div className='cursor-pointer absolute top-[22px] right-2.5' onClick={onToggle}>
      {isShow ? (
        <FaEye
          className='h-5 w-5 text-primary'
        />
      ) : (
        <FaEyeSlash
          className='h-5 w-5 text-primary'
        />
      )}
    </div>
  );
};

const Register = () => {
  const [show, setShow] = useState(false)

  return (
    <main className='relative flex flex-col items-center justify-center py-16'>
      <Image
        src='images/logo.svg'
        alt='logo'
        title='logo'
        height={100}
        width={272}
      />
      <div className='px-10 py-5 rounded-xl shadow-base mt-10'>
        <h1 className='text-primary text-xl font-bold w-[400px]'>
          Daftar
        </h1>
        {/* Form for daftar */}
        <form className='mt-5'>
          <div className='flex flex-col'>
            <label className='text-sm text-dark-primary'>Nama</label>
            <input
              className='p-3 mt-2 outline-none bg-third w-full'
              placeholder='Masukkan Email'
              type='text'
            />
          </div>
          <div className='flex flex-col mt-3'>
            <label className='text-sm text-dark-primary'>Email</label>
            <input
              className='p-3 mt-2 outline-none bg-third w-full'
              placeholder='Masukkan Email'
              type='email'
            />
          </div>
          <div className='flex flex-col mt-3'>
            <label className='text-sm text-dark-primary'>Password</label>
            <div className='relative w-full'>
              <input
                className='py-3 pl-3 pr-10 mt-2 outline-none bg-third w-full'
                placeholder='Masukkan Password'
                type={show ? 'text' : 'password'}
              />
              <IconShowPassword isShow={show} onToggle={() => setShow(!show)} />
            </div>
          </div>
          <div className='flex flex-col mt-3'>
            <label className='text-sm text-dark-primary'>Konfirmasi Password</label>
            <div className='relative w-full'>
              <input
                className='py-3 pl-3 pr-10 mt-2 outline-none bg-third w-full'
                placeholder='Masukkan Konfirmasi Password'
                type={show ? 'text' : 'password'}
              />
              <IconShowPassword isShow={show} onToggle={() => setShow(!show)} />
            </div>
          </div>
          <div className='flex items-center space-x-3 mt-3'>
            <input
              type='checkbox'
              className='h-5 w-5 accent-primary bg-white rounded-md'
            />
            <span className='text-xs w-[368px]'>
              Dengan ini saya menyetujui semua  <span className='font-bold text-primary'>Syarat & Ketentuan</span> yang berlaku
            </span>
          </div>
          <button className='w-full py-3 mt-10 bg-primary text-white rounded-lg font-bold'
            type='submit'
          >
            Daftar
          </button>
        </form>
      </div>

      <span className='font-medium text-sm mt-14'>
        Sudah punya akun? <Link href='/login' className='font-bold cursor-pointer text-primary'>Masuk</Link>
      </span>
    </main>
  )
}

export default Register