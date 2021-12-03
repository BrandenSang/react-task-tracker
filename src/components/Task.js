import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle}) => {
    return (
        <div className={`task ${task.favourite ? 'favourite' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>
                {task.text}
                <FaTimes style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => {
                        if (!task.favourite) {
                            onDelete(task.id)
                        }
                    }}/>
            </h3>
            <p>{task.day}</p>
                <img src={task.img} width='50%' height='50%' />
        </div>
        )

}

export default Task