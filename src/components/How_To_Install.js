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

            <h4><br></br>Step 4: Push all your commits by going to the same git tab and selecting push.</h4>

            <h4><br></br>Step 5: Select a VPS of your choice. I chose hostinger so you can go to their website and select a plan. Create your account and
                proceed with the payment to create your VPS.</h4>
            <img src="https://i.gyazo.com/da0784f374f979d5ec23f1fb8b7d5ce5.png" width='100%' />

            <h4><br></br>Step 6: Once completed, navigate to your accounts VPS manager. From here all your information for the VPS is displayed.</h4>
            <img src="https://i.gyazo.com/9b6de49705208600441898600eeac2da.png" width='100%' />

            <h4><br></br>Step 7: Download putty using the link under SSH details and connect to the SSH IP to access your server. Click Open to connect.</h4>
            <img src="https://i.gyazo.com/b17d54ccd6c3ee83e4850ade697a3c75.png" width='100%' />

            <h4><br></br>Step 8: Once connected, login as root and enter your established password.</h4>
            <img src="https://i.gyazo.com/71a2ffa859331eafa9ca33c1d1c24fcf.png" width='100%' />

            <h4><br></br>Step 8.5: A succeccful connection will bring this screen up.</h4>
            <img src="https://i.gyazo.com/b873236191e1d92ddd52676be759f1e5.png" width='100%' />

            <h4><br></br>Step 9: The default web server is apache2. We will be removing that and installing Nginx. Follow the commands
                that are infront of the ~# in chronological order to delete it. When prompted for [Y/n] for yes and no, hit y on the keyboard and then enter.
                When promted for [Y/n], do yes (hit y then enter) unless specified otherwise.</h4>
            <img src="https://i.gyazo.com/a9aed1b5bb78ed913a06bf2a7187111b.png" width='100%' />

            <h4><br></br>Step 10: Clear your repositories and update them with the following. Then type the third line to upgrade the newly installed packages.</h4>
            <img src="https://i.gyazo.com/c299d4d6b24dc8055860a3b3f383790d.png" width='100%' />
            <img src="https://i.gyazo.com/c2cdacddb9ff5139b68df481e4555d28.png" width='100%' />

            <h4><br></br>Step 11: Install the Nginx server using the following command.</h4>
            <img src="https://i.gyazo.com/65285ed996f7d9b46db9a699caa358d9.png" width='100%' />

            <h4><br></br>Step 12: Install the backend framework Node.js by doing the following.</h4>
            <img src="https://i.gyazo.com/b70332bc6ed25f8252d9b05958a00b2e.png" width='100%' />

            <h4><br></br>Step 13: Proceed to install npm by doing the following.</h4>
            <img src="https://i.gyazo.com/47cb35bb71e317949da6a20a05ffa7fa.png" width='100%' />

            <h4><br></br>Step 14: Proceed to install git by doing the following.</h4>
            <img src="https://i.gyazo.com/cc8baa8961f86316ede4fc53d53d4e53.png" width='100%' />

            <h4><br></br>Step 15: Once the previous is done, change directories to home and make a react project folder. Then change directories to the newly created.
                        Proceed by doing the following.</h4>
            <img src="https://i.gyazo.com/4d1552088a30d7108ed71b7951c72060.png" width='100%' />

            <h4><br></br>Step 16: Ensure the GitHub repository you created is public. If it is not, go to the repository, click settings, on the left hand side
                there is a menu. Click manage access and then the blue manage hyperlink. This will prompt you to change it from private to public. Do the instructions provided by github and you
                should be good to go.</h4>
            <img src="https://i.gyazo.com/8a7ead781a62813992b9a69deae2ff94.png" width='100%' />

            <h4><br></br>Step 17: Once in the new react folder, we are going to return to our GitHub repository and copy the clone link of our public repository. Click the green Code button
                        on the repository and copy the https link.</h4>
            <img src="https://i.gyazo.com/8e6ce2cbbfc4c3b7dce84fc4dc977445.png" width='100%' />

            <h4><br></br>Step 18: When the link is copied, return to puTTy and type in the following git clone before your Git HTTPS link. To paste the link, right click in the puTTy terminal.
                        Then hit enter.</h4>
            <img src="https://i.gyazo.com/fc17d6ab3216ad6e87eb5e6369c98190.png" width='100%' />

            <h4><br></br>Step 19: Once the repository is cloned, cd into your app folder with your created name. If you are unsure of your app folder name,
                        type ll into the command line to view the files in the folder. Proceed with the following.</h4>
            <img src="https://i.gyazo.com/3a172891298dcce47a353320ca4c4165.png" width='100%' />

            <h4><br></br>Step 20: Once in the directory, install npm.</h4>
            <img src="https://i.gyazo.com/53a1dec55db365fad0f1585df94f6922.png" width='100%' />


            <h4><br></br>Step 21: Once you install npm, run the npm build wit the following command.</h4>
            <img src="https://i.gyazo.com/e7fd3ba83faedb66a2b310535ed23286.png" width='100%' />

            <h4><br></br>Step 22: Once your build is complete, list the files using ll in command line. If build is there, it is complete. Once verified, run the following line to
                        copy the build to your html folder.</h4>
            <img src="https://i.gyazo.com/468e9ff48215fdf5a3ffb89e9db51c67.png" width='100%' />
            <img src="https://i.gyazo.com/b995c27dd7559a68ff31fbf5594278c4.png" width='100%' />

            <h4><br></br>Step 23: When the build is copied over, go to a web browser and type in your VPS IP into the search bar. If you have another page pop up (like the apache2 server page) don't panic!
                        Just refresh the page and youre build will be running!</h4>
            <img src="https://i.gyazo.com/5fa2d4432c5eb7c20316adfa8ef7e9a1.png" width='100%' />

            <h4><br></br>END OF TUTORIAL! CONGRATS!</h4>
            <img src="https://img.freepik.com/free-vector/congrats-greeting-card_53876-82116.jpg?size=338&ext=jpg" width='100%' />

            
            
            



            
            
            <Link to="/"><br></br>Go Back To Main App Page 4</Link>
        </>

    )
}

export default How_To_Install