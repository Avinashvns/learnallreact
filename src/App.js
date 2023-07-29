// import logo from './logo.svg';
import './App.css';
import VsjItem from './components/VsjItem';
import VsjWrapper from './components/VsjWrapper';

function App() {
  return (
    <div className="App">
      Avinash
      <img src='varanasi.jpg'/>
      {/* <VsjItem /> */}
      <VsjItem message='This is a children'></VsjItem>
      <VsjItem message="Of the props"></VsjItem>
      <VsjWrapper>Hello Wrapper</VsjWrapper>
         </div>
  );
}

export default App;
