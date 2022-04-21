import React from 'react'
import Image from 'next/image'

const Header = () => {
    return (
        <header>
            <Image
                priority
                src='/images/emma-logo.png'
                width={151}
                height={60}
            />
            <div>New header</div>
        </header>
    )
}

export default Header