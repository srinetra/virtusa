import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomeScreen from "./models/HomeScreen";



export default class App extends  React.Component{


  componentDidMount(){

  }






  render(){





    return(



        <div style={{width:'auto',
        }}>


          <Router>
            <div>
              <switch>
                <Route path="/" exact component={HomeScreen}/>



              </switch>
            </div>
          </Router>






        </div>
    )
  }
}



