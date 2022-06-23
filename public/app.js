const root = document.querySelector('#root');
const rootReact = ReactDOM.createRoot(root);

const App = () => {
  const getData = fetch('https://api.spaceflightnewsapi.net/v3/blogs').then(res => res.json()).then(res => res).catch(err => console.log('error :' + err));
  console.log(getData);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Data Fetch"));
};

rootReact.render( /*#__PURE__*/React.createElement(App, null));