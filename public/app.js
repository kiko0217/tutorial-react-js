const root = document.querySelector('#root');
const rootReact = ReactDOM.createRoot(root);

const App = () => {
  const [news, setNews] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const getData = async () => {
    const req = await fetch('https://api.spaceflightnewsapi.net/v3/blogs');
    const res = await req.json(); // console.log(res)

    setNews(res);
    setTimeout(setLoading.bind(this, false), 3000);
  };

  getData();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Data Fetch"), !loading ? /*#__PURE__*/React.createElement("ul", null, news.map(item => {
    {
      /* console.log(item) */
    }
    return /*#__PURE__*/React.createElement("li", {
      key: item.title
    }, item.title);
  })) : /*#__PURE__*/React.createElement("h2", null, "Loading data ..."));
};

rootReact.render( /*#__PURE__*/React.createElement(App, null));