const root = document.querySelector('#root')

const rootReact = ReactDOM.createRoot(root);
const tick = () => {
    const element = (
        <div>
            <h1>Jam Sekarang</h1>
            {new Date().toLocaleTimeString()}
        </div>
    )

    rootReact.render(element)
}
// console.log(element)
tick()
setInterval(() => {
    tick()
}, 1000);