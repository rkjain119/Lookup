import { PuffLoader } from "react-spinners"

const Loader = () => {
  return (
    <div className='flex justify-center items-center'>
      <PuffLoader color='#00bfff' size={50} />
    </div>
  )
}

export default Loader
