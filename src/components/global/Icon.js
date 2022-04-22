import React from 'react'
import { FaHtml5, FaCss3, FaFigma, FaReact, FaWordpressSimple, FaSass, FaGithub, FaCodepen, FaLinkedin} from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { SiPhp, SiAdobephotoshop, SiAdobexd } from 'react-icons/si'
import { BiHome, BiRocket, BiUser, BiDna } from 'react-icons/bi'
import { HiOutlineMail } from 'react-icons/hi'


const Icon = ( props ) => {
    const IconConfig = {
        // Colors
        primary: {
          bgColor: 'bg-primary-500',
          color: 'text-white',
          outline:
            'border-primary-500 text-primary-500 bg-opacity-0 hover:bg-opacity-10',
        },
        secondary: {
          bgColor: 'bg-secondary-500',
          color: 'text-white',
          outline:
            'border-secondary-500 text-secondary-500 bg-opacity-0 hover:bg-opacity-10',
        },
      
        // Sizes
        small: 'px-3 py-2',
        medium: 'px-4 py-2',
        large: 'px-5 py-2',
      };
    const ico = [
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
        {
            name: 'home',
            ICON: BiHome,
        },
        {
            name: 'projects',
            ICON: BiRocket,
        },
        {
            name: 'lab',
            ICON: BiDna,
        },
        {
            name: 'about',
            ICON: BiUser,
        },
        {
            name: 'github',
            ICON: FaGithub,
        },
        {
            name: 'codepen',
            ICON: FaCodepen,
        },
        {
            name: 'linkedin',
            ICON: FaLinkedin,
        },
        {
            name: 'email',
            ICON: HiOutlineMail,
        },
    ]
    return (
        <>
            {ico.filter(icon => icon.name === props.name)
            .map((Icon, key) =>
                (<Icon.ICON key={key} className={props.class}/>)
            )}
        </>
    )
}
// className='icon m-auto text-xl'
export default Icon
