import React, { Component  } from 'react';
import {TweenMax} from 'gsap';
import Animation from 'components/Animation';
import $ from 'jquery';

class Les extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideData: [
                {img: "./../img/x2SliderAguirre.jpg", headline:"Arts de la table", name: "Aguirre",cls:"slide slide0"},
                {img: "./../img/x2SliderBainPlatine-1.jpg", headline:"Bain", name: "Platine",cls:"slide slide1"},
                {img: "./../img/x2SliderDecoVaseConique-1.jpg", headline:"Décoration", name: "Vase Conique",cls:"slide slide2"}
            ]
        };

        this.handleScroll = this.handleScroll.bind(this);
        document.querySelector('#header .left .logo').classList.remove('white');
        document.querySelector('#header .right .bottom').classList.remove('white');
        document.querySelector('#header-light').classList.remove('black');

    }

    componentDidMount() {

        Animation.hideLoad(this.init.bind(this));

        window.addEventListener('scroll', this.handleScroll);

        document.querySelectorAll('#collections .split-lines .line').forEach((e,i) => {
            TweenMax.set(e,{height:e.querySelector('.inner').clientHeight});
            TweenMax.set(e.querySelector('.inner'),{y:70});
        });

        document.querySelector('#s-list-items .filter-title').style.opacity=0;
        var nameAry =  document.querySelector('#s-list-items .filter-title').innerText.split(''), tplName='';
        nameAry.forEach(function(e, i, a){
            tplName+='<div class="line line'+(i+1)+'">'+e+'</div>';
        });
        document.querySelector('#s-list-items .filter-title').innerHTML=tplName;






    };
    init(){
        var h=document.querySelector('#collections #s-list-items .container-items .inner').clientHeight;
        document.querySelectorAll('#s-filters .split-lines .line .inner').forEach((e,i) => {
            TweenMax.to(e,0.5,{delay:i*0.08,y:0,ease:'Cubic.easeOut'});
        });
        TweenMax.to('#collections #s-filters .filters>ul>li.master0 .slave',0.3,{delay:0.3,autoAlpha:1});
        TweenMax.to('#collections #s-filters .filters',0.3,{delay:0.7,height:82,onComplete:()=>{
            TweenMax.to('#s-list-items .filter-title',0.3,{opacity:1,ease:'Cubic.easIneOut'});
            TweenMax.to('#collections #s-list-items .container-items',1.5,{height:h,ease:'Cubic.easIneOut'});
            TweenMax.to('#collections #s-list-items .item .thumbnail img',0.5,{autoAlpha:1});
            this.handleScroll();



        }});


    }
    componentWillMount() {

    };
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    };
    scrollPer(_min,_max,_st,_callback){
        let per = (_st-_min)/(_max-_min);
        per = (per < 0)?0:(per>1)?1:per;
        _callback(per);

    }

    handleScroll(event) {

        let st = window.scrollY;

        if(st>=100){
            TweenMax.to('#header-light',0.6,{y:0,ease:"Cubic.easeOut"});
        }else{
            TweenMax.to('#header-light',0.4,{y:-65,ease:"Cubic.easeOut"});
        }


        document.querySelectorAll('#s-list-items .split-lines .line .inner').forEach((e,i) => {

            var min = $(e).offset().top -window.innerHeight+380;

            if(st>=min){
                TweenMax.to(e,0.5,{delay:0.1,y:0,ease:"Cubic.easIneOut"});
            }

        });

        document.querySelectorAll('#collections #s-list-items .item .thumbnail img').forEach((e,i) => {
            var min = $(e).offset().top -window.innerHeight;
            this.scrollPer(min,min+window.innerHeight,st,function(_per){
                TweenMax.to(e,0.3,{y:_per*50-25});
            });
        });

    };

    render() {
        return (
            <div id="collections">
                <div className="button-stripped button-search b-animate a-slide-text">
                    <a href="javascript:void(0)">
                        <div className="line line1">
                            <div className="inner">
                                <div className="w-line"></div>
                                <span className="text">Recherche par nom</span>
                            </div>
                        </div>
                    </a>
                </div>
                <div id="s-filters" className="b-animate g-animate">
                    <div className="wrap">
                        <div className="inner-wrap">

                            <div className="head-title split-lines a-slide-text"><div className="line line1"><div className="inner">Filtres</div></div></div>

                            <div className="filters">
                                <ul>
                                    <li className="master0">
                                        <a href="javascript:void(0)" className="master split-lines current"><div className="line line1"><div className="inner">Univers</div></div></a>
                                        <div className="slave">
                                            <ul>
                                                <li className="current"><a href="javascript:void(0)" className="slave0" data-categoryid="6"><span className="text">Arts de la table</span></a></li>
                                                <li><a href="javascript:void(0)" className="slave1" data-categoryid="7"><span className="text">Bain</span></a></li>
                                                <li><a href="javascript:void(0)" className="slave2" data-categoryid="8"><span className="text">Décoration</span></a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="master1">
                                        <a href="javascript:void(0)" className="master split-lines"><div className="line line1"><div className="inner">Décors</div></div></a>
                                        <div className="slave">
                                            <ul>
                                                <li><a href="javascript:void(0)" className="slave0" data-categoryid="64"><span className="text">Émaux</span></a></li>
                                                <li><a href="javascript:void(0)" className="slave1" data-categoryid="65"><span className="text">Métaux précieux</span></a></li>
                                                <li><a href="javascript:void(0)" className="slave2" data-categoryid="66"><span className="text">Sérigraphie</span></a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="master2">
                                        <a href="javascript:void(0)" className="master split-lines"><div className="line line1"><div className="inner">Teintes</div></div></a>
                                        <div className="slave">
                                            <ul>
                                                <li><a href="javascript:void(0)" className="slave0" data-categoryid="25"><span className="text">Noir</span></a></li>
                                                <li><a href="javascript:void(0)" className="slave1" data-categoryid="26"><span className="text">Or</span></a></li>
                                                <li><a href="javascript:void(0)" className="slave2" data-categoryid="27"><span className="text">Crème</span></a></li>
                                                <li><a href="javascript:void(0)" className="slave3" data-categoryid="28"><span className="text">Blanc</span></a></li>
                                                <li><a href="javascript:void(0)" className="slave4" data-categoryid="29"><span className="text">Bleu</span></a></li>
                                                <li><a href="javascript:void(0)" className="slave5" data-categoryid="30"><span className="text">Platine</span></a></li>
                                                <li><a href="javascript:void(0)" className="slave6" data-categoryid="31"><span className="text">Pourpre</span></a></li>
                                                <li><a href="javascript:void(0)" className="slave7" data-categoryid="32"><span className="text">Fauve</span></a></li>
                                                <li><a href="javascript:void(0)" className="slave8" data-categoryid="33"><span className="text">Mauve</span></a></li>
                                                <li><a href="javascript:void(0)" className="slave9" data-categoryid="34"><span className="text">Gris</span></a></li>
                                                <li><a href="javascript:void(0)" className="slave10" data-categoryid="35"><span className="text">Bronze</span></a></li>
                                                <li><a href="javascript:void(0)" className="slave11" data-categoryid="37"><span className="text">Vert</span></a></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="s-list-items">
                    <div className="wrap">
                        <div className="inner-wrap">
                            <div className="filter-title">Artsdelatable</div>
                            <div className="container-items">
                                <div className="inner">
                                    <div className="group-items"><div className="item">
                                        <a href="http://www.jaunedechrome.com/aguirre/">
                                            <div className="thumbnail"><img src={require("../img/thumbaguirre-1.jpg")} alt=""/></div>
                                            <div className="title split-lines"><div className="line line1"><div className="inner">Aguirre</div></div></div>
                                        </a>
                                    </div>
                                        <div className="item">
                                            <a href="http://www.jaunedechrome.com/basmati/">
                                                <div className="thumbnail"><img src={require("../img/thumbbasmatichocolat-1.jpg")} alt=""/></div>
                                                <div className="title split-lines"><div className="line line1"><div className="inner">Basmati</div></div></div>
                                            </a>
                                        </div>
                                        <div className="item">
                                            <a href="http://www.jaunedechrome.com/big-bang/">
                                                <div className="thumbnail"><img src={require("../img/thumbbigbang-1.jpg")} alt=""/></div>
                                                <div className="title split-lines"><div className="line line1"><div className="inner">Big</div></div><div className="line line2"><div className="inner">Bang</div></div></div>
                                            </a>
                                        </div>
                                        <div className="item">
                                            <a href="http://www.jaunedechrome.com/blue-bolero/">
                                                <div className="thumbnail"><img src={require("../img/thumbbluebolero-1.jpg")} alt=""/></div>
                                                <div className="title split-lines"><div className="line line1"><div className="inner">Blue</div></div><div className="line line2"><div className="inner">Bolero</div></div></div>
                                            </a>
                                        </div>
                                        <div className="item">
                                            <a href="http://www.jaunedechrome.com/blue-impression/">
                                                <div className="thumbnail"><img src={require("../img/thumbblueimpression-1.jpg")} alt=""/></div>
                                                <div className="title split-lines"><div className="line line1"><div className="inner">Blue</div></div><div className="line line2"><div className="inner">Impression</div></div></div>
                                            </a>
                                        </div>
                                        <div className="item">
                                            <a href="http://www.jaunedechrome.com/bora-bora/">
                                                <div className="thumbnail"><img src={require("../img/thumbborabora.jpg")} alt=""/></div>
                                                <div className="title split-lines"><div className="line line1"><div className="inner">Bora</div></div><div className="line line2"><div className="inner">Bora</div></div></div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        );
    }

}
export default Les;
