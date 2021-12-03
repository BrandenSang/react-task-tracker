import { Link } from 'react-router-dom'

const How_To_Install = () => {
    const headingStyle = {
        color: 'black',
        backgroundColor: ''
    }
    return (
        <>
            <h2 style={headingStyle}>How to Install Info</h2>
            <h3><br></br>General Installation steps For a VPS of your choice using React and Node.js</h3>
            <h4><br></br>Step 1: Create your react app using your desired folder on your local machine.</h4>
            <img src="https://i.gyazo.com/cdba399f3ab56969bbdf45b6cb27b37d.png" />

            <h4><br></br>Step 2: Create your GitHub Repository in your editor(Visual Studio code for me).</h4>
            <img src="https://i.gyazo.com/0642e5b91fdcc45efb6659d4d8619df4.png" width='100%' />

            <h4><br></br>Step 3: Commit your project by goining to the git tab and selecting commit. Then navigate to where the commit tab opens and
                         select commit all.            </h4>
            <img src="https://i.gyazo.com/919865be9f764117cb3043661df00ef7.png" width='100%' />
            
            <Link to="/"><br></br>Go Back To Main App Page 4</Link>
        </>

    )
}

export default How_To_Install