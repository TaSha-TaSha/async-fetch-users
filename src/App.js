import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      person: null
    }
  }

  async componentDidMount() {
    const url = 'https://api.randomuser.me/';
    const response = await fetch(url);
    const date = await response.json();
    this.setState( {person: date.results[0]} )
    // console.log(date.results[0]);
  }
  render() {
    return (
      <div>
        {!this.state.person ? <p>Loading ...</p> : 
        <div>
        <p>Your first name: {this.state.person.name.first}</p>
        <p>Your second name: {this.state.person.name.last}</p>
        <p>Your email: {this.state.person.email}</p>
        <img src={this.state.person.picture.large} alt='users pic' width='300px' />
        </div>
        }
      </div>
    );
  }
}
export default App;



// ПРИМЕЧАНИЕ:
// Так как render() загружается ДО componentDidMount, тогда разумнее использовать 
// тернарный оператор и сказать "до того как загрузится наш реквест покажи loading"
// так как у нас несколько запросов, то разумнее использовать <div>
// сам тернарный оператор не нужно ставить в тег, только в {}
// не забываем удалять console.log()
