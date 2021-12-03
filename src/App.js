import { useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import AddPhoto from './components/AddPhoto'
import Frontend_Backend_Info from './components/Frontend_Backend_Info'
import How_To_Install from './components/How_To_Install'
import How_To_Create_Page from './components/How_To_Create_Page'
import Conclusion from './components/Conclusion'
import Credits_and_References from './components/Credits_and_References'

import { Hello } from './components/hello'


function App() {
    const [showAddPhoto, setShowAddPhoto] = useState(false)
    const [tasks, setTasks] = useState([])

    //updates the information from the express server
    useEffect(() => {
        const getPhotos = async () => {
            const photosFromServer = await fetchPhotos()
            setTasks(photosFromServer)

        }

        getPhotos()
    }, [])

    //gets photo info from the express connection server 
    const fetchPhotos = async () => {
        const res = await fetch('http://localhost:3001/api/')
        const data = await res.json()
        return data.photos
    }

    //adds task to the view
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 10000) + 1
        const newTask = { id, ...task }
        setTasks([...tasks, newTask])
    }

    //deletes task from the express con
    const deleteTask = async (id) => {
        await fetch(`http://localhost:3001/api/photos/${id}`, {
            method: 'DELETE'
        })
        setTasks(tasks.filter((task) => task.id !==id))
    }

    const toggleFavourite = (id) => {
        setTasks(tasks.map((task) => task.id === id ?
            { ...task, favourite: !task.favourite } : task))
    }

    //routers allow the different pages for the assignment descriptions
    return (
        <Router>

            <div className="container">
                  <Header onAdd={() => setShowAddPhoto(!showAddPhoto)}
                      showAdd={showAddPhoto}
                />
                
                <Routes>
                    <Route exact path="/" element={
                        <>
                            {showAddPhoto &&
                                <AddPhoto onAdd={addTask} />}
                            {tasks.length > 0 ?
                                (<Tasks tasks={tasks}
                                    onDelete={deleteTask}
                                    onToggle={toggleFavourite} />)
                                : ('No tasks left!')}
                            <h3>Welcome to the photo bank! This website was created by Branden Sangkhavichith 500840024. The front-end framework used is the very popular React and the back-end framework implemented is Node.js paired with express.js. To use the
                                photo bank, consider the following.
                            </h3>
                            <h4>
                                <br></br>At the top, you can choose to reveal the hidden submittion querey to add a photo to the photo bank! When the button is green, it means click to open said
                                option to add and when the button is red, the submittion querey should be available to add and you can click the button once again to hide it.
                            </h4>
                            <h4>
                                <br></br>To add a photo, simply put the desired title of the image,
                                The desired date, and the URL to the image!
                            </h4>
                            <h3 style={{ color: 'red' }}>
                                <br></br>Please ensure that the image URL ends in .png, .jpeg, .jpg or any other valid photo type!
                            </h3>
                            <h4>
                                <br></br>Click the red X next to your desired photos to remove it from sight. Double clicking it makes it a favourite so you cannot hide it if the red X is clicked! You know it is favourited when a green bar appears beside the image.
                            </h4>
                        </>
                    } />
                    <Route path="/Frontend_Backend_Info" element={<Frontend_Backend_Info />} />
                    <Route path="/How_To_Install" element={<How_To_Install />} />
                    <Route path="/How_To_Create_Page" element={<How_To_Create_Page />} />
                    <Route path="/Conclusion" element={<Conclusion />} />
                    <Route path="/Credits_and_References" element={<Credits_and_References />} />
                </Routes>
                  
                  
                <Hello />
                  <Footer />
            </div>
      </Router>
  )
}

export default App
