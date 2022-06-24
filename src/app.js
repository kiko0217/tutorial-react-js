const root = document.querySelector('#root')

const rootReact = ReactDOM.createRoot(root);
const App = () => {
    const [activity, setActivity] = React.useState('')
    const [todos, setTodos] = React.useState([])

    const generateId = () => {
        return Date.now()
    }
    const removeHandler = (todoId)=>{
        const filteredTodo = todos.filter(todo => todo.id != todoId)
        setTodos(filteredTodo) 
    }
    const addAktifitasHandler = (event) =>{
        event.preventDefault()
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
            <form onSubmit={addAktifitasHandler}>
                <input 
                    type="text"
                    placeholder="Nama Aktifitas"
                    value={activity}
                    onChange={
                        (event)=>setActivity(event.target.value)
                    }
                />
                <button type="submit">Tambah</button>
            </form>
            <ul>
                {todos.map((item, idx) => {
                    return (
                        <li key={idx}>
                            {item.activity+"\t"}
                            <button onClick={removeHandler.bind(this,item.id)}>Hapus</button>
                        </li>
                    )
                })}
            </ul>

        </>
    )
}
rootReact.render(<App />)