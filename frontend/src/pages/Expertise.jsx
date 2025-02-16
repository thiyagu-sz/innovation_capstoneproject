import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate, useParams } from 'react-router-dom'

const Expertise = () => {

  const { speciality } = useParams()

  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const navigate = useNavigate();

  const { Experts: Expertise } = useContext(AppContext)

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(Expertise.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(Expertise)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [Expertise, speciality])

  return (
    <div>
      <p className='text-gray-600'>Browse through the Experts specialist.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button onClick={() => setShowFilter(!showFilter)} className={`py-1 px-3 border rounded text-sm  transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`}>Filters</button>
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p onClick={() => speciality === 'General physician' ? navigate('/Experts') : navigate('/Expertise/General physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'General physician' ? 'bg-[#E2E5FF] text-black ' : ''}`}>General physician</p>
          <p onClick={() => speciality === 'Gynecologist' ? navigate('/Experts') : navigate('/Expertise/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Gynecologist' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Gynecologist</p>
          <p onClick={() => speciality === 'Dermatologist' ? navigate('/Experts') : navigate('/Expertise/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Dermatologist' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Dermatologist</p>
          <p onClick={() => speciality === 'Pediatricians' ? navigate('/Experts') : navigate('/Expertise/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Pediatricians' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Pediatricians</p>
          <p onClick={() => speciality === 'Neurologist' ? navigate('/Experts') : navigate('/Expertise/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Neurologist' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Neurologist</p>
          <p onClick={() => speciality === 'Gastroenterologist' ? navigate('/Experts') : navigate('/Expertise/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Gastroenterologist' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Gastroenterologist</p>
          <p onClick={() => speciality === 'freelancer' ? navigate('/Experts') : navigate('/Expertise/freelancer')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'freelancer' ? 'bg-[#E2E5FF] text-black ' : ''}`}>freelancer</p>
          <p onClick={() => speciality === 'AI and Machine Learning' ? navigate('/Experts') : navigate('/Expertise/AI and Machine Learning')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'AI and Machine Learning' ? 'bg-[#E2E5FF] text-black ' : ''}`}>AI and Machine Learning</p>
          <p onClick={() => speciality === 'Web Development' ? navigate('/Experts') : navigate('/Expertise/Web Development')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Web Development' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Web Development</p>
          <p onClick={() => speciality === 'Blockchain' ? navigate('/Experts') : navigate('/Expertise/Blockchain')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Blockchain' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Blockchain</p>
          <p onClick={() => speciality === 'Game Development' ? navigate('/Experts') : navigate('/Expertise/Game Development')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Game Development' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Game Development</p>
          <p onClick={() => speciality === 'Cybersecurity' ? navigate('/Experts') : navigate('/Expertise/Cybersecurity')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Cybersecurity' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Cybersecurity</p>
          <p onClick={() => speciality === 'Data Science' ? navigate('/Experts') : navigate('/Expertise/Data Science')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Data Science' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Data Science</p>
          <p onClick={() => speciality === 'Cloud Computing' ? navigate('/Experts') : navigate('/Expertise/Cloud Computing')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Cloud Computing' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Cloud Computing</p>
          <p onClick={() => speciality === 'Software Development' ? navigate('/Experts') : navigate('/Expertise/Software Development')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Software Development' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Software Development</p>
          <p onClick={() => speciality === 'UI UX Design' ? navigate('/Experts') : navigate('/Expertise/UI UX Design')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'UI UX Design' ? 'bg-[#E2E5FF] text-black ' : ''}`}>UI/UX Design</p>
          <p onClick={() => speciality === 'Embedded Systems' ? navigate('/Experts') : navigate('/Expertise/Embedded Systems')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Embedded Systems' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Embedded Systems</p>
          <p onClick={() => speciality === 'Software Development' ? navigate('/Experts') : navigate('/Expertise/Software Development')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Software Development' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Software Development</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {filterDoc.map((item, index) => (
            <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} className='border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
              <img className='bg-[#EAEFFF]' src={item.image} alt="" />
              <div className='p-4'>
                <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : "text-gray-500"}`}>
                  <p className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-500' : "bg-gray-500"}`}></p><p>{item.available ? 'Available' : "Not Available"}</p>
                </div>
                <p className='text-[#262626] text-lg font-medium'>{item.name}</p>
                <p className='text-[#5C5C5C] text-sm'>{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Expertise