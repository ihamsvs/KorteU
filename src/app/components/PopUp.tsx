'use client'
import { useState } from "react"

type InfoCardProps = {
  title: string;
  info: string
}
const PopUp: React.FC<InfoCardProps> = ({title, info}) =>{
    const [isOpen, setIsOpen] = useState(false)
    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }


    return(
        <div>
      <button
        onClick={openModal}
        className="bg-white text-black px-4 py-2 rounded-md border border-slate-950 hover:bg-black hover:text-white transition-colors"
      >
        <svg
        
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2a7 7 0 00-7 7c0 2.536 1.063 3.992 2.093 5.225C7.872 15.297 8 15.642 8 16v1a3 3 0 003 3h2a3 3 0 003-3v-1c0-.358.128-.703.907-1.775C17.937 12.992 19 11.536 19 9a7 7 0 00-7-7z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 21h6" />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">{title}</h3>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                &times;
              </button>
            </div>
            <p>{info}</p>
            <button
              onClick={closeModal}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
    )
}
export default PopUp