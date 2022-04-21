import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer>
              <Image
                src='/images/msrb-logo.png'
                width={182}
                height={50}
            />
          <div>New footer</div>
        </footer>
    )
}

export default Footer