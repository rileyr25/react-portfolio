import React from 'react'
import { FaHtml5, FaCss3, FaFigma, FaReact, FaWordpressSimple, FaSass, FaGithub, FaCodepen, FaLinkedin} from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { SiPhp, SiAdobephotoshop, SiAdobexd, SiJquery, SiTailwindcss } from 'react-icons/si'
import { BiHome, BiRocket, BiUser, BiDna } from 'react-icons/bi'
import { HiOutlineMail } from 'react-icons/hi'


const Icon = ( props ) => {
    const ico = [
        {
            name: 'HTML',
            ICON: FaHtml5,
        },
        {
            name: 'CSS',
            ICON: FaCss3,
        },
        {
            name: 'Figma',
            ICON: FaFigma,
        },
        {
            name: 'React',
            ICON: FaReact,
        },
        {
            name: 'WordPress',
            ICON: FaWordpressSimple,
        },
        {
            name: 'Sass',
            ICON: FaSass,
        },
        {
            name: 'JavaScript',
            ICON: IoLogoJavascript,
        },
        {
            name: 'jQuery',
            ICON: SiJquery,
        },
        {
            name: 'Tailwind',
            ICON: SiTailwindcss,
        },
        {
            name: 'PHP',
            ICON: SiPhp,
        },
        {
            name: 'Photoshop',
            ICON: SiAdobephotoshop,
        },
        {
            name: 'Adobe XD',
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
            name: 'GitHub',
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
