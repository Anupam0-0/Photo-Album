"use client"

import React, { useEffect } from 'react'
import { RefreshCw } from 'lucide-react'

const Refresh = () => {

    const handleRefresh:any = () => {
        console.log('Refresh button clicked');
    }

    useEffect(() => {
        console.log('Refresh button mounted')
    }, [handleRefresh])

  return (
    <button onClick={handleRefresh} className='flex items-center justify-center border rounded-lg size-10 hover:cursor-pointer'>
        <RefreshCw />
    </button>
  )
}

export default Refresh