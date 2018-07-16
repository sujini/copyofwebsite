import React, { Component,Fragment } from 'react';
import PropTypes from 'prop-types'
import Header from 'components/Header';
import DelayRoute2 from 'components/DelayRoute2';
import Animation from 'components/Animation';
import {TweenMax} from 'gsap';
import './App.css';



class App extends Component {
    static contextTypes = {
        router: PropTypes.object
    }
    state = {
        isMounted: false
    }
    onOpenPreload = (v) => {
        return new Promise(function(resolve) {
            Animation.openPreLoad(resolve.bind(null, v));
        });
    }

    componentDidMount() {
        Animation.openPreLoad();
        //this.handleLocationChange(this.context.router.history.location);
        this.unlisten = this.context.router.history.listen(this.handleLocationChange);
        let cls='';
        document.body.className = "";
        switch(this.context.router.history.location.pathname){
            case "/":
                cls = "home";
                break;
            case "/les-collections":
                cls = "page-template-tpl-collections";
                break;
            case "/lidentite":
                cls = "page-template-tpl-identity";
                break;
            case "/les-ateliers":
                cls = "page-template-tpl-workshop";
                break;
            default:
                cls = "";
                break;
        }
        document.body.classList.add(cls);

        document.querySelectorAll('#header .right .top ul li').forEach((e,i) => {
            TweenMax.set(e,{autoAlpha:0,y:20});
        });
        document.querySelectorAll('#header .right .bottom ul li').forEach((e,i) => {
            TweenMax.set(e,{autoAlpha:0,y:30});
        });
        TweenMax.set('#header .left .logo',{autoAlpha:0});

        this.onOpenPreload("onOpenPreload").then((v)=>{

            this.setState({ isMounted: true })
            console.log(v);
            TweenMax.to('#header .left .logo',0.8,{delay:0,autoAlpha:1});
            document.querySelectorAll('#header .right .top ul li').forEach((e,i) => {
                TweenMax.to(e,0.4,{delay:0.1*i+0.5,autoAlpha:1,y:0,ease:"Cubic.easeOut"});
            });
            document.querySelectorAll('#header .right .bottom ul li').forEach((e,i) => {
                TweenMax.to(e,0.5,{delay:0.1*i+0.2,autoAlpha:1,y:0,ease:"Cubic.easeOut"});
            });
        });

    }
    handleLocationChange(location) {
        document.querySelector('#preload').className = "";
        switch(location.pathname){
            case "/":
                document.querySelector('#preload').classList.add('white');
                break;
            case "/les-collections":
                document.querySelector('#preload').classList.add('white');
                break;
            case "/lidentite":
                document.querySelector('#preload').classList.add('black');
                break;
            case "/les-ateliers":
                document.querySelector('#preload').classList.add('black');
                break;
            default:
                document.querySelector('#preload').classList.add('white');
                break;
        }
    }
    componentWillUnmount() {
        this.unlisten();
    }

    render() {
        return (
            <Fragment>
                <div id="preload" className="white">
                    <div className="d-table">
                        <div className="d-cell">
                            <div className="container">
                                <div className="loader black">
                                    <img className="img-black" src="http://www.jaunedechrome.com/wp-content/themes/jaune-de-chrome/assets/images/loader/LoaderBlack.png" width="49" height="49" alt="" />
                                    <img className="img-white" src="http://www.jaunedechrome.com/wp-content/themes/jaune-de-chrome/assets/images/loader/LoaderWhite.png" width="49" height="49" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wrapper">
                    <div id="open_preload">
                        <div className="left"><div className="bg"></div><div className="text">Jaune de Chrome</div></div>
                        <div className="right"><div className="bg"></div><div className="text">Créateur d'art</div></div>
                        <div className="center_line"></div>
                    </div>
                    <Header/>

                    <DelayRoute2 isMounted ={this.state.isMounted}/>


                </div>

            </Fragment>
        )
    }
}


export default (App);


