import React from 'react'

const Container = ({className,children}) => {
        return (
            <div className={ ` w-[1320px] mx-auto max-w${className}`}>{children}</div>
        )
      }

export default Container
