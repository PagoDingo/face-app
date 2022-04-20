import react, {Component} from 'react'
import Nav from '../components/Nav'
import tachyons from 'tachyons'
import Logo from '../components/Logo'

class App extends Component {
    constructor(){
        super();
    }

    onClick(event){
        event.preventDefault()
        console.log(event)
    }

    render(){
        return(
            <div id="app" className="tc">
                <Logo />
                <div className="landing">
                    <button><h1 className="title">FACERECOGNITION</h1></button>
                </div>
            </div>
        )
    }
}

export default App;