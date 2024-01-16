'use client'
import { TypesProps } from '@/interfaces/pokemon'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { FaRegImage } from 'react-icons/fa6'
import { HiChevronDown } from 'react-icons/hi2'
import { RxCross2 } from 'react-icons/rx'

const Page = () => {
  const [types, setTypes] = useState([])
  const [typeDropdown, setTypeDropdown] = useState(false)
  const [selectTypes, setSelectTypes] = useState<any>([])
  const [classy, setClassy] = useState([])
  const [classyDropdown, setClassyDropdown] = useState(false)
  const [selectClassy, setSelectClassy] = useState<any>([])
  const [resistDropdown, setResistDropdown] = useState(false)
  const [selectResist, setSelectResist] = useState<any>([])

  const getTypes = async () => {
    await axios.get('https://pokemon.ekuator.id/types?limit=20')
      .then((result: any) => {
        setTypes(result.data.data)
      })
  }

  const getClassy = async () => {
    await axios.get('https://pokemon.ekuator.id/classifications?limit=660')
      .then((result: any) => {
        setClassy(result.data.data)
      })
  }

  useEffect(() => {
    getTypes()
    getClassy()
  }, [])

  return (
    <div className='container mx-auto grid grid-cols-4 gap-x-10'>
      <div>
        <div className='w-[240px] h-[240px] rounded-full bg-third flex items-center justify-center'>
          <FaRegImage className='h-16 w-16 text-primary' />
        </div>
        <button className='text-primary font-semibold text-center w-[240px] mt-6'>
          Ubah Image
        </button>
      </div>

      <div className='col-span-3 shadow-base p-5 rounded-[20px]'>
        <h1 className='font-bold text-primary text-xl'>
          Informasi Umum
        </h1>
        <div className='flex flex-col mt-3'>
          <label className='text-sm text-dark-primary'>Nomor</label>
          <span className='font-semibold mt-2'>#16</span>
        </div>
        <div className='flex flex-col mt-5'>
          <label className='text-sm text-dark-primary'>Nama</label>
          <input
            className='p-3 mt-2 outline-none bg-third w-full'
            type='text'
          />
        </div>
        <div className='relative flex flex-col mt-5'>
          <label className='text-sm text-dark-primary'>Types</label>
          <div onClick={() => setTypeDropdown(!typeDropdown)}
            data-type={selectTypes.length > 0}
            className='bg-third cursor-pointer p-3 flex data-[type=true]:justify-between data-[type=false]:justify-end items-center mt-2'
          >
            <div className='flex space-x-2 items-center'>
              {
                selectTypes.map((item: string, index: number) => (
                  <div key={index} className='px-3 py-2 bg-flying text-white flex items-center rounded-lg'>
                    { item }
                    <RxCross2 className='h-3 w-3 ml-2'
                      onClick={() => {
                        const index = selectTypes.indexOf(item);
                        if (index > -1) {
                          selectTypes.splice(index, 1)
                        }
                      }}
                    />
                  </div>
                ))
              }
            </div>
            <HiChevronDown className='h-5 w-5 text-primary' />
          </div>

          {/* Dropdown */}
          <div data-types={typeDropdown} className='absolute z-20 top-[88px] h-[200px] overflow-y-auto p-3 w-full data-[types=true]:block data-[types=false]:hidden bg-third space-y-2 shadow-base mt-2'>
            {
              types?.map((type: TypesProps, index: number) => (
                <div key={index} className='flex items-center py-1 cursor-pointer space-x-2 hover:bg-red-100 text-sm font-medium text-secondary'
                  onClick={() => {
                    if (selectTypes.indexOf(type.name) === -1) {
                      setSelectTypes([...selectTypes, type.name])
                    }
                  }}
                >
                  {type.name}
                </div>
              ))
            }
          </div>
        </div>
        {/* Classification */}
        <div className='relative flex flex-col mt-5'>
          <label className='text-sm text-dark-primary'>Classification</label>
          <div onClick={() => setClassyDropdown(!classyDropdown)}
            data-classy={selectClassy.length > 0}
            className='bg-third cursor-pointer p-3 flex data-[classy=true]:justify-between data-[classy=false]:justify-end items-center mt-2'
          >
            <div className='flex space-x-2 items-center'>
              {
                selectClassy.map((item: string, index: number) => (
                  <div key={index} className='px-3 py-2 bg-secondary text-white flex items-center rounded-lg'>
                    { item }
                    <RxCross2 className='h-3 w-3 ml-2'
                      onClick={() => {
                        const index = selectClassy.indexOf(item);
                        if (index > -1) {
                          selectClassy.splice(index, 1)
                        }
                      }}
                    />
                  </div>
                ))
              }
            </div>
            <HiChevronDown className='h-5 w-5 text-primary' />
          </div>

          {/* Dropdown */}
          <div data-classy={classyDropdown} className='absolute z-20 top-[88px] h-[200px] overflow-y-auto p-3 w-full data-[classy=true]:block data-[classy=false]:hidden bg-third space-y-2 shadow-base mt-2'>
            {
              classy?.map((type: TypesProps, index: number) => (
                <div key={index} className='flex items-center py-1 cursor-pointer space-x-2 hover:bg-red-100 text-sm font-medium text-secondary'
                  onClick={() => {
                    if (selectClassy.indexOf(type.name) === -1) {
                      setSelectClassy([...selectClassy, type.name])
                    }
                  }}
                >
                  {type.name}
                </div>
              ))
            }
          </div>
        </div>
        {/* Resistance */}
        <div className='relative flex flex-col mt-5'>
          <label className='text-sm text-dark-primary'>Resistant</label>
          <div onClick={() => setResistDropdown(!resistDropdown)}
            data-resist={selectResist.length > 0}
            className='bg-third cursor-pointer p-3 flex data-[resist=true]:justify-between data-[resist=false]:justify-end items-center mt-2'
          >
            <div className='flex space-x-2 items-center'>
              {
                selectResist.map((item: string, index: number) => (
                  <div key={index} className='px-3 py-2 bg-dark-primary text-white flex items-center rounded-lg'>
                    { item }
                    <RxCross2 className='h-3 w-3 ml-2'
                      onClick={() => {
                        const index = selectResist.indexOf(item);
                        if (index > -1) {
                          selectResist.splice(index, 1)
                        }
                      }}
                    />
                  </div>
                ))
              }
            </div>
            <HiChevronDown className='h-5 w-5 text-primary' />
          </div>

          {/* Dropdown */}
          <div data-resist={resistDropdown} className='absolute z-20 top-[88px] h-[200px] overflow-y-auto p-3 w-full data-[resist=true]:block data-[resist=false]:hidden bg-third space-y-2 shadow-base mt-2'>
            {
              types?.map((type: TypesProps, index: number) => (
                <div key={index} className='flex items-center py-1 cursor-pointer space-x-2 hover:bg-red-100 text-sm font-medium text-secondary'
                  onClick={() => {
                    if (selectResist.indexOf(type.name) === -1) {
                      setSelectResist([...selectResist, type.name])
                    }
                  }}
                >
                  {type.name}
                </div>
              ))
            }
          </div>
        </div>
      </div>

      <div className='col-start-2 col-span-3 shadow-base p-5 rounded-[20px] mt-8'>
        <h1 className='font-bold text-primary text-xl'>
          Evolution
        </h1>
        <button className='w-full flex items-center justify-center bg-primary text-white font-bold p-3 mt-5 rounded-lg'>
          <FaPlus className='h-6 w-6 text-white mr-2' />
          Tambah
        </button>
      </div>

      <div className='col-start-4 mt-11 flex space-x-3 justify-end'>
        <button className='border-2 border-primary text-primary w-32 font-bold p-3 mt-5 rounded-lg'>
          Batal
        </button>
        <button className='bg-gray-400 text-white w-32 font-bold p-3 mt-5 rounded-lg'>
          Tambah
        </button>
      </div>
    </div>
  )
}

export default Page
