const root = document.querySelector('#root')

const rootReact = ReactDOM.createRoot(root);
const App = () => {
    const [activity, setActivity] = React.useState('')
    const [todo, setDoto] = React.useState([])

    const addAktifitasHandler = (event) =>{
        event.preventDefault()
        setDoto([...todo,activity])
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
                {todo.map((item, idx) => {
                    return (
                        <li key={idx}>{item}</li>
                    )
                })}
            </ul>

        </>
    )
}
rootReact.render(<App />)