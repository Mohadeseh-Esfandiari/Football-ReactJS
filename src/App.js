import React from 'react';
import { Matches, WeekSelect} from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {
  state = {
  data: {},
  matche:'',
  }

  async componentDidMount() {
   const fetchedData = await fetchData();
   this.setState ({data:fetchedData})
  }

  handleMatcheChange = async(matche) => {
    const fetchedData = await fetchData(matche);
    this.setState ({ data: fetchedData, matche: matche});
  }

  render() {
    const {data} = this.state;
    return (
    <div className={styles.container}>
      <Matches data={data} />
      <WeekSelect handleMatcheChange={this.handleMatcheChange} />
    </div>
    )
  }
}

export default App
