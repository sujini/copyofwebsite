import React, { Component,Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Main,Les } from 'pages';
import Animation from 'components/Animation';

class DelayRoute extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    constructor(props) {
        super(props);
        this.state = {
            shouldRender: true,
            component: this.props.component,
            path:this.props.path,
            init:false

        };

    }

    componentWillMount() {
        console.log('componentWillMount');


    }
    componentDidMount() {
        console.log('componentDidMount');
        setTimeout(()=>{
            this.setState({ init: true })
        },3800)





    }
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps',this.context.router.history.location.pathname,nextProps.path,this.props.path);

        this.setState({ shouldRender: false })

        if (this.context.router.history.location.pathname !=nextProps.path) {



        }

        this._asyncRequest = this.onPreload(1000,"promise_V_"+this.state.path).then((v)=>{
            console.log(v);
            this.setState({ shouldRender: true })

        });


    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate: " + JSON.stringify(nextProps) + " " + JSON.stringify(nextState));
        if(nextState.shouldRender==false){
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
            Animation.pagePreLoad(t);
            setTimeout(resolve.bind(null, v), t)
        });
    }



    render() {

        let Comp=this.state.component; console.log('render',this.context.router);

        return this.state.init && (this.context.router.history.location.pathname==this.props.path?   (this.state.shouldRender ?<Comp {...this.props} />:null) : (this.state.shouldRender ?null:<Comp {...this.props} />))

    }


};
export default DelayRoute;
