const root = document.querySelector('#root');
const rootReact = ReactDOM.createRoot(root);

const App = () => {
  const [activity, setActivity] = React.useState('');
  const [todos, setTodos] = React.useState([]);

  const generateId = () => {
    return Date.now();
  };

  const removeHandler = todoId => {
    const filteredTodo = todos.filter(todo => todo.id != todoId);
    setTodos(filteredTodo);
  };

  const addAktifitasHandler = event => {
    event.preventDefault();
    setTodos([...todos, {
      id: generateId(),
      activity: activity
    }]);
    setActivity('');
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
  }, "Tambah")), /*#__PURE__*/React.createElement("ul", null, todos.map((item, idx) => {
    return /*#__PURE__*/React.createElement("li", {
      key: idx
    }, item.activity + "\t", /*#__PURE__*/React.createElement("button", {
      onClick: removeHandler.bind(this, item.id)
    }, "Hapus"));
  })));
};

rootReact.render( /*#__PURE__*/React.createElement(App, null));