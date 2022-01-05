import React from 'react'

function SiteCard( props ) {
    return (
        <div className="site-card">
            <h3>{site.title}</h3>
            <p>{site.description}</p>
                <div className="languages">
                    <ul>
                        {site.skills.map(skill => 
                            <li><Icon name={skill} /></li>
                        )}
                    </ul>
                </div>
        </div>
    )
}

export default SiteCard
