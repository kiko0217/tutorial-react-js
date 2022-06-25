const root = document.querySelector('#root')

const rootReact = ReactDOM.createRoot(root);
const App = () => {
    const [activity, setActivity] = React.useState('')
    const [todos, setTodos] = React.useState([])
    const [edit, setEdit] = React.useState({})
    const [message, setMessage] = React.useState('')
    React.useEffect(() => {
      if(activity)setMessage('')
    
    //   return () => {}
    }, [activity])
    
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
    const doneHandle = (todoDone, _event) => {
        // event.preventDefault()
        const todoIndex = todos.findIndex(todo => todo.id == todoDone.id)
        const newTodo = {
            ...todoDone,
            done: !todoDone.done
        }
        const newTodos = [...todos]
        newTodos[todoIndex] = newTodo
        setTodos(newTodos)
    }
    const saveHandler = (event) =>{
        event.preventDefault()
        if(!activity)return setMessage('Nama aktifitas jangan sampai kosong!!')
        if(edit.id){
            const editTodoIndex = todos.findIndex(todo => todo.id == edit.id)
            const updateTodo = {
                ...edit,
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
                activity: activity,
                done: false
            }
        ])
        setActivity('')
    }
    return (
        <>
            <h1>Simple ToDo List</h1>
            {message && <div style={{color: 'red'}}>{message}</div>}
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
            {
                todos.length > 0 ?
                <ul>
                    {todos.map((todo, idx) => {
                        return (
                            <li key={idx}>
                                <input
                                    type="checkbox"
                                    checked={todo.done}
                                    onChange={doneHandle.bind(this, todo)}
                                />
                                {todo.activity}{todo.done ? '\t(Selesai)\t' : '\t(Belum Selesai)\t'}
                                <button onClick={editHandler.bind(this, todo)}>Edit</button>
                                <button onClick={removeHandler.bind(this, todo.id)}>Hapus</button>
                            </li>
                        )
                    })}
                </ul>:
                <i>Tidak ada data!!!</i>
            }

        </>
    )
}
rootReact.render(<App />)