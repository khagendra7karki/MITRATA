import { Link } from 'react-router-dom'
const CustomLink = ({sx,text,  ...rest}) => {
    return <>
        <Link style = {sx} {...rest} >
            {`${text}` }
        </Link>
    </>
}

export default CustomLink 