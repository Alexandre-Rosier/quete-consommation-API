import './App.css';
import axios from 'axios';
import QuoteCard from './components/QuoteCard';
import React from 'react';

const initialSimpson = {
  quote: "By chilling my loins I increase the chances of impregnating my wife.",
  character: "Apu Nahasapeemapetilon",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpson: initialSimpson
    }
    this.getSimpson = this.getSimpson.bind(this);
  }

  getSimpson() {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then(response => response.data)
      .then(data => {
        console.log(data)
        this.setState({
          simpson: data[0],
        });
    });
  }
  

  render(){
   return (
    <div className="App">
      <QuoteCard simpson={this.state.simpson} />
      <button type="button" onClick={this.getSimpson}>Get simpson</button>
    </div>
   );
  }
}

export default App;
