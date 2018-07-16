import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom'
import PropTypes from 'prop-types';
import { Main,Les,Lidentite,Ateliers } from 'pages';
import Animation from 'components/Animation';

class DelayRoute2 extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    constructor(props) {
        super(props);
        this.state = {
            shouldRender:this.props.isMounted

        };

    }

    componentWillMount() {
        console.log('componentWillMount');
    }
    componentDidMount() {
        console.log('componentDidMount');
    }


    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps",this.props.isMounted,nextProps.isMounted);
        if(this.props.isMounted!==nextProps.isMounted){
            this.setState({ shouldRender: true })
        }else{
            this.setState({ shouldRender: false })
        }


        if (this.context.router.history.location.pathname !==this.context.router.route.location.pathname) {

            this._asyncRequest = this.onPreload(1000,"promise_V_").then((v)=>{
                console.log(v,Lidentite);
                this.setState({ shouldRender: true })

                document.body.className = "";
                let cls='';
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


            });

        }


    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextState.shouldRender===false){
            return false;
        }else{
            return true;
        }


    }
    componentWillUnmount() {
        console.log('componentWillMount');
        if (this._asyncRequest) {
            this._asyncRequest.cancel();
        }

    }
    onPreload = (t, v) => {
        console.log("onPreload")
        return new Promise(function(resolve) {
            Animation.pagePreLoad(t,resolve.bind(null, v));
        });
    }



    render() {
        if(this.state.shouldRender){
            return(
                <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/les-collections" component={Les}/>
                    <Route path="/lidentite" component={Lidentite} />
                    <Route path="/les-ateliers" component={Ateliers} />
                </Switch>
            )
        }else{
            return null
        }





    }

};
export default DelayRoute2;
