'use client'
import React from 'react'
import Button from '../../../../components/button/Button'
import { useRouter } from 'next/navigation'

function Layout(
    {children}:{children: React.ReactNode}
){
    const {back} = useRouter()
    
    return (
        <div>
            {children}
            <footer>
                <Button label="Back To All Topics" otherClasses="bg-red-900 hover:bg-gray-900 py-1 px-4 mb-4 text-gray-200 font-thin" onClick={back}/>
            </footer>
        </div>
    )
}

export default Layout