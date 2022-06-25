const root = document.querySelector('#root')

const rootReact = ReactDOM.createRoot(root);
const App = () => {
    const [activity, setActivity] = React.useState('')
    const [todos, setTodos] = React.useState([])
    const [edit, setEdit] = React.useState({})
    const editHandler = (todo) => {
        setActivity(todo.activity)
        setEdit(todo)
    }
    const cancleHandler = (event) => {
        event.preventDefault()
        setActivity('')
        setEdit({})
        // console.log(edit)
    }
    const generateId = () => {
        return Date.now()
    }
    const removeHandler = (todoId)=>{
        const filteredTodo = todos.filter(todo => todo.id != todoId)
        setTodos(filteredTodo)
        if (edit.id) {
            setActivity('')
            setEdit({})
        }
    }
    const saveHandler = (event) =>{
        event.preventDefault()
        if(edit.id){
            const editTodoIndex = todos.findIndex(todo => todo.id == edit.id)
            const updateTodo = {
                id:edit.id,
                activity
            }
            const updateTodos = [...todos]
            updateTodos[editTodoIndex] = updateTodo
            setTodos(updateTodos)
            setActivity('')
            setEdit({})
            return 
        }
        setTodos([
            ...todos,
            {
                id: generateId(),
                activity: activity
            }
        ])
        setActivity('')
    }
    return (
        <>
            <h1>Simple ToDo List</h1>
            <form onSubmit={saveHandler}>
                <input 
                    type="text"
                    placeholder="Nama Aktifitas"
                    value={activity}
                    onChange={
                        (event)=>setActivity(event.target.value)
                    }
                />
                <button type="submit">{edit.id ? 'Perbaruin' :'Tambah'}</button>
                {edit.id && (<button onClick={cancleHandler}>Batal</button>)}
            </form>
            <ul>
                {todos.map((todo, idx) => {
                    return (
                        <li key={idx}>
                            {todo.activity+"\t"}
                            <button onClick={editHandler.bind(this, todo)}>Edit</button>
                            <button onClick={removeHandler.bind(this,todo.id)}>Hapus</button>
                        </li>
                    )
                })}
            </ul>

        </>
    )
}
rootReact.render(<App />)