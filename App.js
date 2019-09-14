import React, {Component} from 'react';
import SplashScreen from './components/splashscreen';
import Logo from './components/Logo';
import Form from './components/Form';
import Wallpaper from './components/Wallpaper';
import ButtonSubmit from './components/ButtonSubmit';
import SignupSection from './components/SignupSection';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { isLoading: true }
  }

  handleEvent(){
    console.log(this.props);
  }
  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
        setTimeout(
            () => { resolve('result') },
            2500
        )
    );
  }
  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.setState({ isLoading: false });
    }
  }

  render() {
    if (this.state.isLoading) {
      return <SplashScreen />;
    }

    return (
        <Wallpaper>
          <Logo />

            <Form />
          <ButtonSubmit />
            <SignupSection/>
        </Wallpaper>
    );
  }

}

export default App;