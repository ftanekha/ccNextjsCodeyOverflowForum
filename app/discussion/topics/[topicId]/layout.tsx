import React from 'react'
import Button from '../../../../components/button/Button'

function Layout(
    {children}:{children: React.ReactNode}
){
    return (
        <div>
            {children}
            <footer>
                <Button href="/discussion/topics" label="Back To All Topics" background="bg-gray-900 text-gray-200"/>
            </footer>
        </div>
    )
}

export default Layout