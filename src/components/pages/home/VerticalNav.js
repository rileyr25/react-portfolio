import React from 'react'
import { HashLink } from 'react-router-hash-link'

function VerticalNav() {
    return (
        <div className="homescroll-nav" role="navigation" aria-label="Parallax Nav">
            <HashLink to='#' className="circle">0</HashLink>
            <HashLink to='#projects' className="circle">1</HashLink>
            <HashLink to='#lab' className="circle">2</HashLink>
            <HashLink to='#contact' className="circle">3</HashLink>
        </div>
    )
}

export default VerticalNav
