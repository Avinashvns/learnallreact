// import logo from './logo.svg';
import './App.css';
import MultipleObject from './components/MultipleObject';
// import VsjCounter from './VjsCounter';
import VsjFrom from './components/VsjForm';
// import VsjItem from './components/VsjItem';
// import VsjWrapper from './components/VsjWrapper';

function App() {
  return (
    <div className="App">
      {/* Avinash */}
      {/* <VsjCounter /> */}
      {/* <img src='varanasi.jpg' alt='kk'/> */}
      {/* <VsjItem /> */}
      {/* <VsjItem message='This is a children'></VsjItem> */}
      {/* <VsjItem message="Of the props"></VsjItem> */}
      {/* <VsjWrapper>Hello Wrapper</VsjWrapper> */}

      {/* <VsjFrom></VsjFrom> */}
      <h1>Form</h1>
      <VsjFrom></VsjFrom>
	    <h1>Multiple</h1>
	    <MultipleObject></MultipleObject>
      </div>
  );
}

export default App;
