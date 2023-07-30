// import logo from './logo.svg';
import './App.css';
import MultipleObject from './components/MultipleObject';
// import VsjCounter from './VjsCounter';
import VsjFrom from './components/VsjForm';
// import VsjItem from './components/VsjItem';
// import VsjWrapper from './components/VsjWrapper';
import VsjExpenseCalculator from './components/VsjExpenseCalculator';

import EventTarget from './components/EventTarget';

function App() {
  return (
    // <div className="App">
    //   {/* Avinash */}
    //   {/* <VsjCounter /> */}
    //   {/* <img src='varanasi.jpg' alt='kk'/> */}
    //   {/* <VsjItem /> */}
    //   {/* <VsjItem message='This is a children'></VsjItem> */}
    //   {/* <VsjItem message="Of the props"></VsjItem> */}
    //   {/* <VsjWrapper>Hello Wrapper</VsjWrapper> */}

    //   {/* <VsjFrom></VsjFrom> */}
    //   {/* <h1>Form</h1>
    //   <VsjFrom></VsjFrom>
    //   <h1>Multiple</h1>
    //   <MultipleObject></MultipleObject> */}
    //   <h1>Target Event</h1>
    //   <br/>
    //   <EventTarget></EventTarget>
    //   </div>
    <div class="container pt-5 bg-primary text-white text-center" id="root">
      <div class="row">
        <div class="col-lg-1"></div>
        <div class="col-lg-10 bg-danger">
          <VsjExpenseCalculator></VsjExpenseCalculator>

        </div>
        <div class="col-lg-1"></div>
      </div>

    </div>
  );
}

export default App;
