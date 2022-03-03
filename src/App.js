import './App.css';
import App2 from './components/App2';
import Display from './components/Display';
import App3 from './components/App3';
import App4 from './components/App4';
import App5 from './components/App5';

function App() {
  return (
    <div className="App">
      <Display />
      <App2 />
      <App3 />
      <App4 />
      <App5 url="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*" />
    </div>
  );
}

export default App;
