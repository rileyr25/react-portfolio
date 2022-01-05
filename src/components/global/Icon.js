import React from 'react'
import { FaHtml5, FaCss3, FaFigma, FaReact, FaWordpressSimple, FaSass} from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { SiPhp, SiAdobephotoshop, SiAdobexd } from 'react-icons/si'


const Icon = ( props ) => {

    const languageIcons = [
        {
            name: 'html',
            ICON: FaHtml5,
        },
        {
            name: 'css',
            ICON: FaCss3,
        },
        {
            name: 'figma',
            ICON: FaFigma,
        },
        {
            name: 'react',
            ICON: FaReact,
        },
        {
            name: 'wordpress',
            ICON: FaWordpressSimple,
        },
        {
            name: 'sass',
            ICON: FaSass,
        },
        {
            name: 'javascript',
            ICON: IoLogoJavascript,
        },
        {
            name: 'php',
            ICON: SiPhp,
        },
        {
            name: 'photoshop',
            ICON: SiAdobephotoshop,
        },
        {
            name: 'xd',
            ICON: SiAdobexd,
        },
    ]
    return (
        <>
            {languageIcons.filter(icon => icon.name === props.name)
            .map((Icon, key) =>
                (<Icon.ICON key={key} />)
            )}
        </>
    )
}

export default Icon
