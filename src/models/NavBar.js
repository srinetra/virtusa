import React,{useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Avatar from '../images/avatar.webp'

export default class NavBar extends React.Component{

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
                    <Grid container style={{marginTop:'7%'}}>
                        <Grid item xs={12} sm={6} style={{height:'100px'}}>

                            <div>
                                <text style={{fontSize:'50px',fontFamily:'roboto',fontWeight:'bold'}}>
                                    Medium|
                                </text>
                                <text style={{fontSize:'20px',fontFamily:'roboto',fontWeight:'bold'}}>
                                    {this.state.Dayhour}
                                </text>

                            </div>

                        </Grid>
                        <Grid container xs={12} sm={6} style={{height:'50px',}}>

                            <Grid item xs={6} sm={6} style={{display:'flex',justifyContent:'center',alignSelf:'center',}}>


                                <div style={{height:'50px',width:'100px',display:'flex',justifyContent:'center',alignItems:'center',border: '1px solid black',borderRadius: '15px',}}>
                                    Upgrade
                                </div>

                            </Grid>



                            <Grid container xs={6} sm={6} style={{display:'flex',justifyContent:'center',alignSelf:'center',}}>


                                <Grid item xs={6} sm={6} style={{display:'flex',justifyContent:'center',alignSelf:'center',}}>
                                    <div>Ayush Kumar</div>

                                </Grid>
                                <Grid item xs={6} sm={6} style={{display:'flex',justifyContent:'center',alignSelf:'center',}}>

                                    <div style={{height:'50px',width:'50px',display:'flex',justifyContent:'center',alignItems:'center',border: '1px solid black',borderRadius: '500px',}}>

                                        <img src={Avatar} style={{height:"50px",width:'50px'}}/>


                                    </div>
                                </Grid>

                            </Grid>

                        </Grid>
                    </Grid>











                </Container>

            </div>
        )
    }

}