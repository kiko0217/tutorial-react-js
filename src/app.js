const root = document.querySelector('#root')

const rootReact = ReactDOM.createRoot(root);
const App = () => {
    const [news, setNews] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const getData = async () =>{
        const req = await fetch('https://api.spaceflightnewsapi.net/v3/blogs')
        const res = await req.json()
        // console.log(res)
        setNews(res)
        setTimeout(setLoading.bind(this, false),3000)
    }
    getData()
    return (
        <>
            <h1>Data Fetch</h1>
            {
                !loading ? (
                    <ul>
                        {
                            news.map(item => {
                                {/* console.log(item) */ }
                                return <li key={item.title}>{item.title}</li>
                            })
                        }
                    </ul>):(
                        <h2>Loading data ...</h2>
                    )
            }
        </>
    )
}
rootReact.render(<App />)