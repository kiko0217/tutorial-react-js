const root = document.querySelector('#root')

const rootReact = ReactDOM.createRoot(root);
const App = () => {
    const getData = fetch('https://api.spaceflightnewsapi.net/v3/blogs')
    .then(res => res.json())
    .then(res => res)
    .catch(err => console.log('error :'+ err))
    console.log(getData)
    return (
        <>
            <h1>Data Fetch</h1>
        </>
    )
}
rootReact.render(<App />)