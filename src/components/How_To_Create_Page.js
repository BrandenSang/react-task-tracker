import { Link } from 'react-router-dom'

const How_To_Create_Page = () => {

    return (
        <>
            <h1>A Very Basic Tutorial On How to Create a Nice Looking Page in React!</h1>
            

            <h4><br></br>Step 1: Create your components folder to fill it with the components!</h4>
            <p>
                <br></br> In the editor of your choice (I used Visual Studio 2019),make sure you have opened your React app and then open up the solution explorer.
                You will see all the files created with the app. Right click the src folder and add a new folder titles "components". In this folder you will have all
                your functions and pages that will be ran by the App.js in the main src folder. Once you make one, the rest should come easy! It should look like the picture below
                if done successfully. 
            </p>
            <br></br>
            <img src="https://i.gyazo.com/55aab5d461e10447a24c7f5d278e3ee3.png" width='100%' />

            <h4><br></br>Step 2: Create your components!</h4>
            <p>
                <br></br> Like I said, once you make one the rest will follow suit! Everything in ReactJs is made with a .js file. What you have to do next is right click the
                components folder and add a new .js file. Let's call it Header.js. This is the component to display the information at the top of the app. Open the Header.js file
                and insert the following:
            </p>
            <br></br>
            <img src="https://i.gyazo.com/930544ed574cd2e874231d85c782167e.png" width='100%' />

            <h4><br></br>Step 2.5: Explaination on what we just did.</h4>
            <p>
                <br></br> Let me give you the run down on this new component we just made. What we have here is called an arrow function. There are more resources that you can use,
                but this arrow function is all you need if you don't want to! const stands for constant and is followed by the name of your choice. Typically it is the .js name for less confusion.
                The name of your choice will be called in App.js so that we can implement the component. The function is like a script that is run when called, it is put within the { } after the =>.
                The () before the => is where you would put your parameters if you wanted to, although it can be empty. Inside the curley braces we have a return value, here you can put the HTML that will display
                what you want. At the end of the file is what is being exported. That means it can be called in the App.js or any other file, a separate file. We put default Header after it to signify
                that we want it to default to our created arrow function. 
            </p>
            <br></br>

            <h4><br></br>Step 3: Add to your components!</h4>
            <p>
                <br></br> As previously mentioned, if you are familiar with HTML-CSS you can simply put that in the () of the return to get it to work.
                          Below we insert a header tag with our desired value in it. Save the file.
            </p>
            <br></br>
            <img src="https://i.gyazo.com/26114598c92523b0ff0b3b4d534e75a9.png" width='100%' />

            <h4><br></br>Step 3.5: Create you CSS style in index.css</h4>
            <p>
                <br></br>Before we go on showing how to show it on the website, we can set up the way our container will look for the app. Open the index.css and put this in there and save.
            </p>
            <br></br>
            <img src="https://i.gyazo.com/8194494786f64035206fa669c6170d64.png" width='100%' />

            <h4><br></br>Step 4: Initialize in App.js and put it in the return statement.</h4>
            <p>
                <br></br>Once you have the desired HTML tags in there, you can now go to the App.js file and work from there. At the very top of the file,
                you'll want to import the Header.js.(Ignore the lines before the Header import) This is where export default Header comes into play and brings it to App.js. Once you have that line,
                you can head to the return function and the XML tag to actually show it in your React website. 
            </p>
            <br></br>
            <img src="https://i.gyazo.com/0666f9b9d0e3fc7c9f78a6276b988aa1.png" width='100%' />
            <img src="https://i.gyazo.com/d40ed3791f1bfc2eb45385c273d02d76.png" width='100%' />

            <h4><br></br>Step 5: Run npm start in a CMD where youre app is located. Load localhost:3000 into your browser and it should be there!</h4>
            <p>
                <br></br>Congrats! you just made your first vidual update to the website! If done correctly it should look like the photo below. 
            </p>
            <br></br>
            <img src="https://i.gyazo.com/5a26e9aef20bf390a5527880c663d15d.png" width='100%' />

            <h4><br></br>How to load images into your components.</h4>
            <p>
                <br></br>It's the same as displaying an image in HTML. Use the HTML img tag. To pull from the internet, get a link with a .png, .jpeg, .jpg
                or any other photo type extension at the end and put it in src. After that put in the width and height percentages after the link to set it to fill your desired width and height of your container.
                The code will look like this. The website should already have been updated if you saved the file and it will change accordingly!
            </p>
            <br></br>
            <img src="https://i.gyazo.com/318f0338f6316fa7e787b4c0fc9ef3c9.png" width='100%' />
            <img src="https://i.gyazo.com/2d9f3afa6044af7de82484e262764aa0.png" width='100%' />

            <h4><br></br>Repeat! Combine other powerful React libraries with your HTML to create a beautiful website!</h4>
            <p>
                <br></br>From here it's rinse and repeat! Doing this not only create a clean layout, but it also has reusability as each component is separate and can be used elsewhere.
                If you combine other React libraries with your knowledge of HTML, you can create a beautiful website to fit all your needs! Essentially, React works the same as creating
                a HTML/CSS website but with more tools to make it more visually appealing! Just remember to make it in a .js file instead of .html! Using that to your advantage is a must! Since my app is a SPA (Single page application), I can
                still load multiple pages without having to reload the page itself! As a bonus, I will include the usage of Routes in React for this tutorial! The app will be in its completed code version, and will look different from the previous pictures.
                However, it's not something you can accomplish! Displaying the information is the same! I just use React functions to interact with some other components for visual effect!
            </p>
            <br></br>

            <h4><br></br>Routes Step 1: Import your route libraries from 'react-router-dom'</h4>
            <p>
                <br></br>To utilize the route library from react, just like any other language you must import it! You might have seen it a previous picture because I was utilizing it,
                         but in case you didnt here it is again! Put this at the top of your App.js.(Ignore the line before we import the 'react-router-dom')
            </p>
            <br></br>
            <img src="https://i.gyazo.com/aee50cccf2fc686fa5fd8818fad31ce2.png" width='100%' />

            <h4><br></br>Routes Step 1.5: Explaining what we just did.</h4>
            <p>
                <br></br>As mentioned in the Strengths and Weaknesses of React in the first information page, React is always updating. So this is routes v6! Keep that in mind if you are doing this past December 2021.
                Otherwise, I will explain what we are importing. Ignore the useState and useEffect from the line before it. That is beyond the scope of this tutorial.
                BrowserRouter as Router is to import exactly what it says, a browser router! In a website, it is common to see this format: domainname.com/some_other_page_name. In React, since the one I created is a
                SPA (Single page application), there isn't much room to keep other pages separate from the app. So as a solution we use the browser router! It encapsulates everything being returned so that it can be routed properly.
                The as Router part is just putting it into a variable called Router so it is easier to call in the tagline. The Routes import following the BrowserRouter is like a street in real-life.
                BrowserRouter being the neighbourhood and Routes being the street. The Routes tag will encapsulate all the Route tags to keep it all in one place. If you are familiar with Java, it is like a switch statement.
                The non plural Route import following the Routes import is like a house on the street (Or a case in a switch statement). You can specify the path that will lead to said "house" so that it is displayed instead of another page.
                Below I will show you how to implement it. 
            </p>
            <br></br>

            <h4><br></br>Routes Step 2: Creating your page to route to.</h4>
            <p>
                <br></br>These will be contained in the components folder. Just like Header.js! This will act as if it was a "HTML page" to be viewed on a website.
                It is created the same way as Header.js in terms of structure, still utilizing the arrow function. Name the page however you like and save it with the following import.
                For this example, I will be using the first page of my website called Frontend_Backend_Info.js, but I do have other pages showing later on when implementing the Routes!
                Your code should look like this. For the specifics of this Routes tutorial, I will comment out the functionality of that page and show it to you step by step.
            </p>
            <br></br>
            <img src="https://i.gyazo.com/55408a25710dcc72774cb67739bda73e.png" width='100%' />

            <h4><br></br>Routes Step 2.5: Explaining what we just did.</h4>
            <p>
                <br></br>What we imported was Link from the same library, react-router-dom. This allows the seamless transition of pages without having to reload the entire webpage!
                In terms of HTML, it works exactly the same as the href tag, but when using href you have to reload the page completly. This will save alot of resources! The way it will be
                implemented in our page right now will be to go back to the main page when you don't want to be on the current page anymore.
            </p>
            <br></br>

            <h4><br></br>Routes Step 3: Using link.</h4>
            <p>
                <br></br>The way to use it will be shown in the following. You may be wondering what Link to="/" is. Well, that is like when href points to another domain in HTML.
                Simply put, it is directing you to the "home page" as it is empty after your domain name with the slash being hidden, but still there in the case that it needs to change pages.
                In between the tag you can put whatever you want to say. It will be a clickable option and go to the home page. It will look like this. On the website it will look like this. To access it,
                type your domain name (or localhost:3000 if youre local testing) followed by /your_jsfile_name_here. Mine will look like this when testing local: localhost:3000/Frontend_Backend_Info.
                Click the link to go back to the main page. Above the Link we created, you can insert your desired HTML-CSS and React libraries to do whatever you want in the page!
            </p>
            <br></br>
            <img src="https://i.gyazo.com/31da96bb5a55947bbe8d086471ec4f88.png" width='100%' />
            <img src="https://i.gyazo.com/ffb5e21e1d9d0628637bdf97d65f9410.png" width='100%' />
            <img src="https://i.gyazo.com/f199e5c3c76af7ced45e25a575f64912.png" width='100%' />

            <h4><br></br>Routes Step 4: Creating the Links to other pages.</h4>
            <p>
                <br></br>Now that we have the page we are going to switch to, were going to be working a footer file to store the links to the page and or other pages you may want to create.
                In my app, I utilize 6 links, with one being the main page. What you want to do is make a Footer.js in your components folder. Put in the default arrow function in it.
                Once you do that, the format will be the same as implementing the Link in the first page we made. Here is a completed view of how my footer file looks like.
            </p>
            <br></br>
            <img src="https://i.gyazo.com/c496784a45cc5a3733b0360abd7c3e5f.png" width='100%' />

            <h4><br></br>Routes Step 5: Setting up the RouterBrowser in App.js.</h4>
            <p>
                <br></br>Once you have your Footer.js file created, go ahead and import that and your_page_name.js into App.js! I'm sure you know how to do that by now. Now we get to utilize the library we imported in step 1!
                To start, put everything contained in the () in return() wrapped in the Router tag, the BrowserRouter alias we created.  Now that you did that, put the footer import above the ending
                div tag to make sure it stays at the bottom of the container. Your return statement should look like this. (ignore the header tab, as it is the final header tag I used after implementing React Libraries.)
            </p>
            <br></br>
            <img src="https://i.gyazo.com/360b588eb9b0f74d83e162bdd6ddda40.png" width='100%' />

            <h4><br></br>Routes Step 6: Setting up the Routes and Route in App.js.</h4>
            <p>
                <br></br>Almost there! The first thing to add is an opening and closing tag for Routes, our "street" or "switch". Put that in between our header view and footer view. Once you have done that,
                we will now write the Route tags, our "houses" or "cases". It is structured like so, contained in a single closing tag. Route path= /your_page_name is where the page will load to. It is then
                followed by element= your_file_name . your_file_name is wrapped in a closing tag as well to make it a XML view, and that closing tag is wrapped in curly braces. This is how my return looks in my main app, in its final form! Some code is hidden
                for visibility, but you can see that I have more than just the XML view in my main page. I added more functions to make it run the main page. Very versitile! Once saved, your footer should appear
                in your main page and is fully functional! Click your link to view the page you created, and the new link presented to go back.
            </p>
            <br></br>
            <img src="https://i.gyazo.com/46f97598cd9f74bf05b6d40d871dedc1.png" width='100%' />
            <img src="https://i.gyazo.com/74b0dd5dc7fabe3acdd5bf564f10e947.png" width='100%' />

            <h4><br></br>END OF TUTORIAL! CONGRATS!</h4>
            <img src="https://img.freepik.com/free-vector/congrats-greeting-card_53876-82116.jpg?size=338&ext=jpg" width='100%' />

            

            <Link to="/"><br></br>Go Back To Main App Page 4</Link>
        </>

    )
}

export default How_To_Create_Page