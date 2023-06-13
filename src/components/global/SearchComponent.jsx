"use client"

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

export default function SearchComponent() {
    const [searchInput, setSearchInput] = useState('')
    const router = useRouter()
    const inputHandler = (e) => {
        setSearchInput(e.target.value)
    }
    const routeSearch = () => {
        if(searchInput !== '') {
            setSearchInput('')
            router.push(`/search/search?q=${searchInput}`)
        }
    }
    return (
        <div className="w-[400px]">
            <label className="relative block">
                    <button onClick={routeSearch} className='absolute inset-y-0 left-0 flex items-center pl-2'>
                        <AiOutlineSearch className={searchInput !== '' ? 'text-purple-700' : 'text-gray-700'} />
                    </button>
                <input
                    className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-500 focus:ring-purple-500 focus:ring-1 sm:text-sm"
                    placeholder='Search...'
                    type='text'
                    value={searchInput}
                    onChange={(e) => inputHandler(e)}
                />
            </label>
        </div>
    )
}
