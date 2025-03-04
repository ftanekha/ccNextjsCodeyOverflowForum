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
                <Button label="Back To All Topics" background="bg-gray-900 text-gray-200" onClick={back}/>
            </footer>
        </div>
    )
}

export default Layout