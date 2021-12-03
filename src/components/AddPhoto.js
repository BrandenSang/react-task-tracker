import { useState } from 'react'
import Button from './Button'

const AddPhoto = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [img, setImg] = useState('')
    const [favourite, setFavourite] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please add task!')
            return
        }

        onAdd({ text, day, img, favourite })

        setText('')
        setDay('')
        setFavourite(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Photo Name</label>
                <input type='text' placeholder='Add Photo Name'
                    value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Day and Time</label>
                <input type='text' placeholder='Add Day and Time'
                    value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Image URL</label>
                <input type='text' placeholder='Add Image URL'
                    value={img} onChange={(e) => setImg(e.target.value)} />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Favourite</label>
                <input type='checkbox'
                    checked={favourite}
                    value={favourite}
                    onChange={(e) => setFavourite(e.currentTarget.checked)} />
            </div>

            <input type='submit' value='Save Photo' className={<Button  />} />
        </form>
        )
}
export default AddPhoto