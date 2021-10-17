import React, { useState } from 'react'

import {SearchIcon} from '../assets/SearchIcon'
const ChannelSearch = () => {
    const [query, setQuery] = useState('')
    const [loading, setLoading]= useState(false)


    const getChannels = async ()=>{
        try {
            //fetchChannels
        } catch (error) {
            setQuery('')
        }
    }


    const handleSearch =(e)=>{
        e.preventDefault()
        setLoading(true)
        setQuery(e.target.value)
        getChannels(e.target.value)
    }
    return (
        <div className="channel-search__container">
            <div className="channel-search__input__wrapper">
                <div className="channel-search-__input-icon">
                    <SearchIcon/>
                </div>
                <input 
                className="channel-search__input__text"
                type="text"
                placeholder="Search"
                value={query}
                onChange={handleSearch}
                />
            </div>
        </div>
    )
}

export default ChannelSearch
