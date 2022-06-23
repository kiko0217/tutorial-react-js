const root = document.querySelector('#root');
const rootReact = ReactDOM.createRoot(root);

const tick = () => {
  const element = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Jam Sekarang"), new Date().toLocaleTimeString());
  rootReact.render(element);
}; // console.log(element)


tick();
setInterval(() => {
  tick();
}, 1000);