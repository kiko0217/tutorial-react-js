const root = document.querySelector('#root');
const rootReact = ReactDOM.createRoot(root);

const App = () => {
  const [activity, setActivity] = React.useState('');
  const [todo, setDoto] = React.useState([]);

  const addAktifitasHandler = event => {
    event.preventDefault();
    setDoto([...todo, activity]);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Simple ToDo List"), /*#__PURE__*/React.createElement("form", {
    onSubmit: addAktifitasHandler
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Nama Aktifitas",
    value: activity,
    onChange: event => setActivity(event.target.value)
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Tambah")), /*#__PURE__*/React.createElement("ul", null, todo.map((item, idx) => {
    return /*#__PURE__*/React.createElement("li", {
      key: idx
    }, item);
  })));
};

rootReact.render( /*#__PURE__*/React.createElement(App, null));