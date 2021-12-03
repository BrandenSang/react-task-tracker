import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <p>
                Click the tags below to view more information about the creation of the site!<br></br>
            </p>
            <Link to='/Frontend_Backend_Info'>Page 1: Information On Frontend Backend<br></br></Link>
            <Link to='/How_to_Install'>Page 2 :Information On How To Install<br></br></Link>
            <Link to='/How_to_Create_Page'>Page 3: Information On How To Create a Page<br></br></Link>
            <Link to='/Conclusion'>Page 5: Concluding Thoughts On The Project<br></br></Link>
            <Link to='/Credits_and_References'>Page 6: Credits and References<br></br></Link>
        </footer>
        
        )
}
export default Footer