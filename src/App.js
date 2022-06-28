
import './App.css';
import Container from './Components/Container';
import Presentation from './Components/Presentation';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NoPage from './Components/NoPage';
import Home from './Components/Home';
import Blogs from './Components/Blogs';
import Contact from './Components/Contact';
import Layout from './Components/Layout';
import Profile from './Components/Profile';
import MyForm from './Components/MyForm';
import MyUncontrolledForm from './Components/MyUncontrolleForm';
import { ConfigureStore } from './MyRedux/ConfigqureStore';
import { Provider } from 'react-redux';
import Counter from './MyRedux/Counter';
// import Store from './Components/Store'
// import Account from './Components/Account';
// import Stock from './Components/Stock'
// import Warning from './Components/Warning';
// import Form from './Components/Form';
// import Tester from './Components/Demo';
// const name = "Chi Pheo";
// const ele = (<h1>Hello, {name}</h1>);
// const user = {id: "1", name: "Thi No"};
// const ele2 = (<h1>Hello, {user.id},{user.name}</h1>);
const citis = ['Java','Bangko','Ho Chi Minh','Pari'];
const names = citis.map( (c,index) =>{return <li key={index}>{c}</li>})

const store = ConfigureStore();
function App() {
  return (
    <div>   
        {/* <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Layout}/>
            <Route path="/Home" component={Home}/>
            <Route path="/Blogs" component={Blogs}/>
            <Route path="/Contact" component={Contact}/>
            <Route path="*" component={NoPage}/>
            <Route path="/Profile/:isLogin/:name" component={Profile} />
          </Switch>
        </div>
        </BrowserRouter> */}
        
        <Provider store={store}>
          <Counter/>
        </Provider>
    </div>
  );
}
  

export default App;
