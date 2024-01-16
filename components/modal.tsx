
const Modal = ({
  show,
  isShow,
  children,
}: {
  show: boolean
  isShow: Function
  children: JSX.Element
}) => {
  return (
    <div className={`flex-col items-center justify-center ${show ? 'flex' : 'hidden'} `}>
      <div onClick={() => isShow(false)} className='fixed inset-0 bg-black/60' />
      <div className='absolute top-1/3 w-[480px] h-[290px]'>
        { children }
      </div>
    </div>
  )
}

export default Modal
