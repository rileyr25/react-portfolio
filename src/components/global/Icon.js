import React from 'react'
import { FaHtml5, FaCss3, FaFigma, FaReact, FaWordpressSimple, FaSass} from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { SiPhp, SiAdobephotoshop, SiAdobexd } from 'react-icons/si'


const Icon = ( props ) => {
    // const languageIcons = [
    //     FaHtml5,
    //     FaCss3,
    //     FaFigma,
    //     FaReact,
    //     FaWordpressSimple,
    //     FaSass,
    //     IoLogoJavascript,
    //     SiPhp,
    //     SiAdobephotoshop,
    //     SiAdobexd,
    // ]

    const languageIcons = [
        {
            name: 'html',
            icon: FaHtml5,
        },
        {
            name: 'css',
            icon: FaCss3,
        },
        {
            name: 'figma',
            icon: FaFigma,
        },
        {
            name: 'react',
            icon: FaReact,
        },
        {
            name: 'wordpress',
            icon: FaWordpressSimple,
        },
        {
            name: 'sass',
            icon: FaSass,
        },
        {
            name: 'javascript',
            icon: IoLogoJavascript,
        },
        {
            name: 'php',
            icon: SiPhp,
        },
        {
            name: 'photoshop',
            icon: SiAdobephotoshop,
        },
        {
            name: 'xd',
            icon: SiAdobexd,
        },
    ]
    return (
        <>
            {/* {languageIcons.map((Icon, key) => (<Icon key={key} />))} */}
            {languageIcons.filter(icon => icon.name == props.name)
            .map((Icon, key) => 
                (<Icon.icon key={key} />)
            )}
        </>
    )
}

export default Icon
