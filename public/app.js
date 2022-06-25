const root = document.querySelector('#root');
const rootReact = ReactDOM.createRoot(root);

const App = () => {
  const [activity, setActivity] = React.useState('');
  const [todos, setTodos] = React.useState([]);
  const [edit, setEdit] = React.useState({});

  const editHandler = todo => {
    setActivity(todo.activity);
    setEdit(todo);
  };

  const cancleHandler = event => {
    event.preventDefault();
    setActivity('');
    setEdit({}); // console.log(edit)
  };

  const generateId = () => {
    return Date.now();
  };

  const removeHandler = todoId => {
    const filteredTodo = todos.filter(todo => todo.id != todoId);
    setTodos(filteredTodo);
  };

  const saveHandler = event => {
    event.preventDefault();

    if (edit.id) {
      const editTodoIndex = todos.findIndex(todo => todo.id == edit.id);
      const updateTodo = {
        id: edit.id,
        activity
      };
      const updateTodos = [...todos];
      updateTodos[editTodoIndex] = updateTodo;
      setTodos(updateTodos);
      setActivity('');
      setEdit({});
      return;
    }

    setTodos([...todos, {
      id: generateId(),
      activity: activity
    }]);
    setActivity('');
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Simple ToDo List"), /*#__PURE__*/React.createElement("form", {
    onSubmit: saveHandler
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Nama Aktifitas",
    value: activity,
    onChange: event => setActivity(event.target.value)
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, edit.id ? 'Perbaruin' : 'Tambah'), edit.id && /*#__PURE__*/React.createElement("button", {
    onClick: cancleHandler
  }, "Batal")), /*#__PURE__*/React.createElement("ul", null, todos.map((todo, idx) => {
    return /*#__PURE__*/React.createElement("li", {
      key: idx
    }, todo.activity + "\t", /*#__PURE__*/React.createElement("button", {
      onClick: editHandler.bind(this, todo)
    }, "Edit"), /*#__PURE__*/React.createElement("button", {
      onClick: removeHandler.bind(this, todo.id)
    }, "Hapus"));
  })));
};

rootReact.render( /*#__PURE__*/React.createElement(App, null));