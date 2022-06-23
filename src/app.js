const root = document.querySelector('#root')

const rootReact = ReactDOM.createRoot(root);
/* const tick = () => {
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
}, 1000); */
// const element = (
//     <div 
//     style={{
//         width: 200,
//         height: 200,
//         backgroundColor: 'blue'
//     }}
//     ></div>   
// )
// const element = (
//     <div className='box'></div>   
// )
// const clickMe = () => {
//     alert(1)
// }
// const element = (
//     <button onClick={clickMe}>Click Me</button>
// )

// const clickMe = (msg) => {
//     alert(msg)
// }
// const element = (
//     <button onClick={clickMe.bind(this, 'hello world')}>Click Me</button>
// )
const App = () => {
    const state = React.useState(0)
    const [count,updateCount] = state
    return (
        <>
            <button onClick={updateCount.bind(this, count - 1)}>
                -
            </button>
            <span style={{
                color: 'white'
            }}>{count}</span>
            <button onClick={updateCount.bind(this, count+1)}>
                +
            </button>
        </>
    )
}
rootReact.render(<App />)