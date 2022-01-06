import React from 'react'
import { HashLink } from 'react-router-hash-link'

function VerticalNav() {
    return (
        <div className="homescroll-nav" role="navigation" aria-label="Parallax Nav">
            <HashLink smooth to='#' className="circle">0</HashLink>
            <HashLink smooth to='#projects' className="circle">1</HashLink>
            <HashLink smooth to='#lab' className="circle">2</HashLink>
            <HashLink smooth to='#contact' className="circle">3</HashLink>
        </div>
    )
}

export default VerticalNav
