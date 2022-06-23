const root = document.querySelector('#root');
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

const clickMe = () => {
  alert(1);
};

const element = /*#__PURE__*/React.createElement("button", {
  onClick: clickMe
}, "Click Me");
rootReact.render(element);