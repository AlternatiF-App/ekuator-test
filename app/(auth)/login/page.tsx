'use client'
import Modal from '@/components/modal';
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { RxCross2 } from 'react-icons/rx'

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

const Login = () => {
  const [show, setShow] = useState(false)
  const [modalForgot, setModalForgot] = useState(false)

  return (
    <>
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
            Masuk
          </h1>
          {/* Form for login */}
          <form className='mt-5'>
            <div className='flex flex-col'>
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
            <div className='flex justify-end mt-6'>
              <span className='text-primary font-bold cursor-pointer'
                onClick={() => setModalForgot(true)}
              >
                Lupa Password?
              </span>
            </div>
            <button className='w-full py-3 mt-10 bg-primary text-white rounded-lg font-bold'
              type='submit'
            >
              Masuk
            </button>
          </form>
        </div>

        <span className='font-medium text-sm mt-14'>
          Belum punya akun? <Link href='/register' className='font-bold cursor-pointer text-primary'>Daftar Sekarang</Link>
        </span>
      </main>

      <Modal
        show={modalForgot}
        isShow={setModalForgot}
      >
        <div className='relative bg-white px-10 py-5 rounded-xl'>
          <RxCross2 onClick={() => setModalForgot(false)}
            className='h-6 w-6 absolute right-5 text-primary cursor-pointer'
          />
          <h1 className='text-xl text-primary font-bold text-center'>
            Lupa Password?
          </h1>
          <span className='block text-sm text-center mt-2 text-secondary'>
            Kami akan mengirim instruksi melalui email untuk mengganti password. Silakan masukkan email kamu.
          </span>
          <form className='mt-3'>
            <div className='flex flex-col'>
              <label className='text-sm text-dark-primary'>Email</label>
              <input
                className='p-3 mt-2 outline-none bg-third w-full'
                placeholder='Masukkan Email'
              />
            </div>
            <button className='w-full py-3 mt-10 bg-primary text-white rounded-lg font-bold'
              type='submit'
            >
              Reset Password
            </button>
          </form>
        </div>
      </Modal>
    </>
  )
}

export default Login