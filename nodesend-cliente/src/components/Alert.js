

const Alert = ({ message, error}) => {


  return (
    <div className={`${error ? 'bg-red-500' : 'bg-green-400'} py-2 w-full my-3 max-w-lg text-center text-white font-bold mx-auto`}>
        {message}
    </div>
  )
}

export default Alert