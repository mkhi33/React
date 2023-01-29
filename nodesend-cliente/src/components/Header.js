import Image from "next/image"


const Header = () => {
  return (
    <div className="py-8 flex flex-col md:flex-row items-center justify-between">
        <Image className="w-64 mb-8 md:mb-0" src='./logo.svg' alt="Logo Nodesend" width={100} height={15} />
    </div>
  )
}

export default Header