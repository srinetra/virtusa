import React,{useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Avatar from '../images/avatar.webp'
import NavBar from "./NavBar";
import HomeComponent from "./HomeComponent";
import Trending from "./Trending";

export default class HomeScreen extends React.Component{

    constructor() {
        super();
        this.state={
            Dayhour:" ",
            height:"100",
            width:"100",
            width1:0,
            fontSizes:"0px"
        }

    }

    FindDay=()=>{
        const Hour= new Date()

        console.log(Hour.getHours())
        if(Hour.getHours()>=5 && Hour.getHours()<=12)
        {
            this.setState({Dayhour:"Good Morning"})

        }else if(Hour.getHours()>12&&Hour.getHours()<16)
        {
            this.setState({Dayhour:"Good AfterNoon"})

        }else if(Hour.getHours()>=16&&Hour.getHours()<24)
        {
            this.setState({Dayhour:"Happy Night"})


        }
    }


    FindWidth=()=>{
        this.setState({height: window.innerHeight + 'px',width:window.innerWidth+'px',width1:window.innerWidth});

        if(this.state.width1<=1420)
        {
            this.setState({fontSizes:"20px"})
        }
    }


    componentDidMount() {
        this.FindDay()

    }

    render() {
        const styles = {
            border: '1px solid rgba(0, 0, 0, 0.05)',
        };
        return(
            <div>

                <Container>
                    <Container >
                        <NavBar/>
                    </Container>

                    <HomeComponent/>
                    <Trending/>
                </Container>

            </div>
        )
    }

}