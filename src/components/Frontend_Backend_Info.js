import { Link } from 'react-router-dom'

const Frontend_Backend_Info = () => {

const headingStyle = {
        color: 'black',
        backgroundColor: ''
    }
    const pStyle = {
        color: 'white',
        backgroundColor: 'steelblue'
    }
    const p2Style = {
        color: 'white',
        backgroundColor: 'darkgreen'
    }


    return (
        <>
            <h2 style={headingStyle}>Frontend and Backend Info!</h2>

            <h3><br></br>ReactJS</h3>
            <img src="https://miro.medium.com/max/700/1*dLaDL-lSN0iprzmOpmM7zQ.png" width='50%' height='50%' />
            <details>
                <summary>Popularity</summary>
                <p style={pStyle}>React is one of the top 3 frontend frameworks used in the industry inline with Vue.js and Angular! React was developed in 2011 by a person named Jordan Walke and
                    is an open-sourced library for everyone to use.
                    It is a very fast and dynamic framework used for developing websites using Javascript.
                </p>
            </details>
            <details>
                <summary>Strengths</summary>
                <p style={pStyle}>Since ReactJS is open-sourced, it is a free and powerful tool for all to use. Focusing more on the UI development, it allows the
                    creator to make highly responsive webpages that require no reloading of the page. Because of that feature,
                    it is common for developers to use this when they want to create a single page application or dynamic websites. Since it uses the JavaScript libraries,
                    learning this framework is a breeze provided that you know the basics of JS and HTML-CSS. One of the most enticing features aside from the SPA 
                    design is the reusable components (AKA props) that are implemented. Components are basically methods if you are coming from the Java world, but easier!
                    Developing in this is also quite easy as it implements easy testing methods by auto-reloading your application when saved.
                    React is also flexible as you can add an endless amount of external libraries, allowing for powerful development on a plethora of apps.
                </p>
            </details>
            <details>
                <summary>Weaknesses</summary>
                <p style={pStyle}>
                    As powerful as it is, it also comes with some weaknesses. It is always being updated. Some may see this as a strength, but to many
                    it is a problem as you always need to relearn the new developments. What may have worked one way in a previous version may not work another
                    way in the most updated version, making the developer adapt to the new changes by relearning what should have worked already. Going hand in
                    hand with the constant updates is the poor documentation. Not to say that the documentation is bad, but because of the constant updates and new 
                    ways to do old functions, it proves to be a challenge to have a solid foundation for the documentation. The final weakness is actually
                    derived from one of the strengths, the UI focused development. This results in pairing react with either another frontend or multiple backends to
                    become a fully fledged app for development.
                </p>
            </details>
            <details>
                <summary>Who Uses it and Whats it Used For</summary>
                <p style={pStyle}>Some of the most popular services in the world use ReactJS to operate their front end. Services such as
                    Instagram, Facebook and Reddit! Since this frontend is more focused on the UI (User Interface) on a single page, they use it top write and display
                    their apps seemlessly through the browser. This works because you can have endless scrolling on these apps (until there is no more to scroll)
                    without having to reload the page, utilizing one of the best features that ReactJS has to offer. It also makes everything look awesome!</p>
            </details>

            <h3><br></br>Node.js and Express.js</h3>
            <img src="https://miro.medium.com/max/365/1*Jr3NFSKTfQWRUyjblBSKeg.png" width='50%' height='50%' />
            <details>
                <summary>Popularity</summary>
                <p style={p2Style}>
                    Node.js is not the framework but the runtime enviroment to install and run the desired backend. The backend implemented is Express.js.
                    Both are open-sourced, providing free development for all once again. Node.js was created in 2009 and devloped by Ryan Dahl. As of
                    early 2020, more than 50% of the devlopers use and adapt Node.js to their projects! Express.js is a Javascript library that allows
                    the development of the backend server.

                </p>
            </details>
            <details>
                <summary>Strengths</summary>
                <p style={p2Style}>
                    As previously mentioned, Node.js and Express.js are used inthe JavaScript language. This provides all the powerful
                    libraries that JavaScript has to offer to allow the development of large apps. Providing the proper documentation of
                    JavaScript allows all users to adapt quickly to the developing challenges of the webindustry. Its very fast in terms of performance and
                    is also very scalable! Using Express.js with it provides a fast application developmetn experience. It is able to handle high level requests
                    with ease and has a very suppotive open-source community. Integrating this framework into your applications will be a breeze.
                </p>
            </details>
            <details>
                <summary>Weaknesses</summary>
                <p style={p2Style}>
                    Although it is the most popular framework to use, it has its cons as well. Node.js relies on callbacks quite a bit.
                    Since it is asyncrounous, the callbacks can be nested within other callbacks, making it difficult to understand the
                    problems and maintain it if they are abundant. It is single threaded on an event basis, creating a bottleneck if the
                    application requires a large load of computing. In terms of Express.js, The callbacks are the same if not worse than the
                    Node.js callbacks. This directly impacts the code and results in many having difficulties.
                </p>
            </details>
            <details>
                <summary>Who Uses it and Whats it Used For</summary>
                <p style={p2Style}>
                    Some of the most popular services in the world use Node.js. Some include LinkedIn, Netflix, Uber, and more! It is used
                    commonly in their mobile apps, with majority if not the entire thing being built on Node.js! It is an incredibly fast
                    language compared to others like Ruby on Rails. For example, LinkedIn was built on Ruby on Rails until they completly
                    rebuilt their system using Node.js in 2011. This resulted in a cutdown in server resources used and was said to run 20 times
                    faster than the Ruby on rails Version!
                </p>
            </details>
            <Link to="/"><br></br>Go Back To Main App Page 4</Link>
        </>
        
    )
    
}

export default Frontend_Backend_Info