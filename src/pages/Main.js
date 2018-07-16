import React, { Component  } from 'react';
import {TweenMax} from 'gsap';
import Animation from 'components/Animation';
import NextSlider from 'pages/NextSlider';
import $ from 'jquery';

let isPlay=false;
class Main extends Component {
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
    }

    componentDidMount() {
        console.log('main','componentDidMount');
        document.querySelector('#header .left .logo').classList.add('white');
        document.querySelector('#header .right .bottom').classList.remove('white');
        document.querySelector('#header-light').classList.remove('black');
        Animation.hideLoad(Animation.slide);
        Animation.slideInit();
        isPlay=false;
        window.addEventListener('scroll', this.handleScroll);

        var mainThumbH = Math.floor(window.innerWidth/2/1386*1782);

        TweenMax.set('.thumbnail .slide',{x:-window.innerWidth/2});

        TweenMax.set('#s-citation .line .inner',{y:81});
        document.querySelector('#main #s-slider .thumbnail').style.height = mainThumbH+"px";
        document.querySelector('#main #s-slider .background').style.height = mainThumbH*0.9+"px";

        TweenMax.set('#main #s-citation .quote',{opacity:0});
        TweenMax.set('#main #s-citation .name',{opacity:0});


        document.querySelectorAll('.button-stripped a .line .inner').forEach((e,i) => {
            e.style._gsTransform='translateY(100%)';
        });


        document.querySelectorAll('#s-slider .title .slide,#s-slider .next-slider .slide').forEach((e,i) => {
            var nameAry =  e.querySelector('.name').innerText.split(' '), tplName='';
            nameAry.forEach(function(e, i, a){
                tplName+='<div class="line line'+(i+1)+'"><div class="inner" style="transform: translateY(150%)">'+e+'</div></div>';
            });
            e.querySelector('.name').innerHTML=tplName;


            var tplHeadLine='<div class="line line1"><div class="inner" style="transform: translateY(150%)">'+e.querySelector('.head-line').innerText+'</div></div>';
            e.querySelector('.head-line').innerHTML=tplHeadLine;

            if(e.querySelector('.button-stripped a')){
                var btnAry = e.querySelector('.button-stripped a').innerText.split('-'), tplBtn='';
                btnAry.forEach(function(e, i, a){

                    tplBtn+='<div class="line line'+(i+1)+'"><div class="inner" style="transform: translateY(150%)">';
                    if(i===0){
                        tplBtn+='<div class="w-line"></div>';
                    }
                    tplBtn+='<span class="text">'+e+'</div></div></div>';
                });

                e.querySelector('.button-stripped a').innerHTML=tplBtn;
            }


        });
        $('.section-black a').hover(function(){
            TweenMax.to($(this).find('.illustration'),0,{opacity:0.3,ease:"Cubic.easeInOut"})
        },function(){
            TweenMax.to($(this).find('.illustration'),0,{opacity:0.8,ease:"Cubic.easeInOut"})
        })




    };
    componentWillMount() {

    };
    componentWillUnmount() {
        console.log('main','componentWillUnmount');
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


        if(st>=$('#s-citation .split-lines').offset().top-window.innerHeight+document.querySelector("#s-citation .split-lines").clientHeight && !isPlay){
            document.querySelectorAll('#s-citation .line .inner').forEach((e,i) => {
                TweenMax.to(e,1,{delay:i*0.1,y:0,ease:"Cubic.easeOut"});
            });

            isPlay=true;
        }




        document.querySelectorAll('#s-citation .b-animate:not(.split-lines)').forEach((e,i) => {
            var min = e.offsetTop + e.offsetParent.offsetTop-window.innerHeight/1.2;
            this.scrollPer(min,min+5,st,function(_per){
                if(e.classList.contains('separator')){
                    TweenMax.to(e,0.8,{height:172*_per,ease:"Cubic.easeOut"});
                }else{
                    TweenMax.to(e,0.8,{opacity:_per,y:-20*_per+20,ease:"Cubic.easeOut"});
                }
            });
        });


        document.querySelectorAll('.section-black a').forEach((e,i) => {
            var min = $(e).find('.illustration').offset().top-window.innerHeight+e.querySelector('.item1').clientHeight/1.4;
            this.scrollPer(min,min+5,st,function(_per){
                TweenMax.to(e.querySelector('.illustration'),0,{opacity:_per,ease:"Cubic.easeOut"});

            });
            var min2 = min+120;
            this.scrollPer(min2,min2+50,st,function(_per){
                TweenMax.to(e.querySelector('.split-chars'),0.9,{delay:0.1,y:_per*-120+60,opacity:_per,ease:"Cubic.easeOut"});

            });
        });


        var minC = $('#s-identity').offset().top-window.innerHeight;
        var maxC = $('#s-identity').offset().top;
        this.scrollPer(minC,maxC,st,function(_per){
            TweenMax.to('#s-identity .illustration .item.item2',0.4,{y:_per*-140+70});
        });


        var minIB = document.querySelector('#s-identity').offsetTop-window.innerHeight+document.getElementById("s-identity").clientHeight;
        this.scrollPer(minIB,minIB+50,st,function(_per){
            TweenMax.to('#s-identity .button-stripped .w-line',0,{width:_per*36});
        });

       /* this.scrollPer(minIB-50,minIB,st,function(_per){
            TweenMax.to('#s-identity .title',0.6,{y:_per*-120+60});
        });*/

        var minW = document.querySelector('#s-workshop').offsetTop-window.innerHeight;
        var maxW = document.querySelector('#s-workshop').offsetTop;
        this.scrollPer(minW,maxW,st,function(_per){
            TweenMax.to('#s-workshop .illustration .item.item2',0.4,{y:_per*-140+70});
        });


        var minWB =  minW+document.getElementById("s-workshop").clientHeight;
        this.scrollPer(minWB,minWB+50,st,function(_per){
            TweenMax.to('#s-workshop .button-stripped .w-line',0,{width:_per*36});
        });

        this.scrollPer(minWB-50,minWB,st,function(_per){

            TweenMax.to('#s-workshop .title',0.6,{y:_per*-120+60,autoAlpha:_per});
        });

    };

    render() {
        return (

            <div id="main">

                <div id="s-slider" className="section">

                    <div className="background"></div>

                    <div className="thumbnail">

                        <div className="slide slide0" data-logocolor="white"><img src={require("../img/x2SliderAguirre.jpg")} alt=""/></div>
                        <div className="slide slide1" data-logocolor="white"><img src={require("../img/x2SliderBainPlatine-1.jpg")} alt=""/></div>
                        <div className="slide slide2" data-logocolor="white"><img src={require("../img/x2SliderDecoVaseConique-1.jpg")} alt=""/></div>
                    </div>
                    <div className="title">

                        <div className="slide slide0">
                            <div className="head-line split-lines a-slide-text">Arts de la table</div>
                            <div className="name split-lines a-slide-text">Aguirre</div>
                            <div className="button-stripped a-slide-text">
                                <a href="http://www.jaunedechrome.com/aguirre/">Découvrir-La collection</a>
                            </div>
                        </div>
                        <div className="slide slide1">
                            <div className="head-line split-lines a-slide-text">Bain</div>
                            <div className="name split-lines a-slide-text">Platine</div>
                            <div className="button-stripped a-slide-text">
                                <a href="http://www.jaunedechrome.com/platine/">Découvrir-La collection</a>
                            </div>
                        </div>
                        <div className="slide slide2">
                            <div className="head-line split-lines a-slide-text">Décoration</div>
                            <div className="name split-lines a-slide-text">Vase Conique</div>
                            <div className="button-stripped a-slide-text">
                                <a href="http://www.jaunedechrome.com/vase-conique/">Découvrir-La collection</a>
                            </div>
                        </div>
                    </div>
                    <div className="next-slider">

                         {this.state.slideData.map((data, i) => {
                             return (<NextSlider cls={data.cls}
                                 headline={data.headline}  name={data.name}
                                 key={i} next={Animation.slide}/>);
                         })}

                    </div>

                    <div className="button-scroll b-animate">
                        <div className="text">SCROLL</div>
                        <div className="icon-arrow"></div>
                    </div>
                </div>
                <div id="s-citation" className="section">
                    <div className="b-animate split-lines content">

                        <div className="line line1">
                            <div className="inner">
                                Jaune de Chrome, par la maîtrise des émaux de très grand feu est
                            </div>
                        </div>
                        <div className="line line2">
                            <div className="inner">une exception dans la porcelaine de Limoges. L’émaillage à la
                            </div>
                        </div>
                        <div className="line line3">
                            <div className="inner">main et la magie du feu, transforment la matière. Chaque pièce
                            </div>
                        </div>
                        <div className="line line4">
                            <div className="inner">n’est jamais tout à fait la même ni tout à fait une autre.
                            </div>
                        </div>

                    </div>
                    <div className="b-animate quote" >”</div>
                    <div className="b-animate name" >CHRISTIAN LE PAGE</div>
                    <div className="separator b-animate a-height">
                        <div className="container-lines">
                            <div className="line line1"></div>
                            <div className="line line2"></div>
                        </div>
                    </div>
                </div>
                <div className="section-black">
                    <div id="s-identity" className="section">

                        <a href="http://www.jaunedechrome.com/lidentite/">

                            <div className="illustration b-animate" >
                                <div className="item a-parallax item1">
                                    <img src={require("./../img/identity-1.png")} alt="" width="707" height="410"/>
                                </div>
                                <div className="item a-parallax item2">
                                    <img src={require("./../img/identity-2.png")} alt="" width="709" height="620"/>
                                </div>
                            </div>

                            <div className="title b-animate split-chars">
                                <div className="char char9">I</div>
                                <div className="char char10">d</div>
                                <div className="char char11">e</div>
                                <div className="char char12">n</div>
                                <div className="char char13">t</div>
                                <div className="char char14">i</div>
                                <div className="char char15">t</div>
                                <div className="char char16">é</div>
                            </div>

                            <div className="button-stripped b-animate white">
                                <div className="line line1">
                                    <div className="inner" >
                                        <div className="w-line"></div>
                                        <span className="text">Découvrir</span>
                                    </div>
                                </div>
                                <div className="line line2">
                                    <div className="inner" >
                                        <span className="text">l'identité</span>
                                    </div>
                                </div>
                            </div>

                        </a>

                    </div>
                    <div id="s-workshop" className="section">

                        <a href="http://www.jaunedechrome.com/les-ateliers/">

                            <div className="illustration b-animate" >
                                <div className="item a-parallax item1">
                                    <img src={require("./../img/workshop-1.png")} alt="" width="707" height="410"/>
                                </div>
                                <div className="item a-parallax item2">
                                    <img src={require("./../img/workshop-2.png")} alt="" width="542" height="566"/>
                                </div>
                            </div>

                            <div className="title b-animate split-chars">
                                <div className="char char1">A</div>
                                <div className="char char2">t</div>
                                <div className="char char3">e</div>
                                <div className="char char4">l</div>
                                <div className="char char5">i</div>
                                <div className="char char6">e</div>
                                <div className="char char7">r</div>
                                <div className="char char8">s</div>
                            </div>

                            <div className="button-stripped b-animate white">
                                <div className="line line1">
                                    <div className="inner">
                                        <div className="w-line"></div>
                                        <span className="text">Découvrir</span>
                                    </div>
                                </div>
                                <div className="line line2">
                                    <div className="inner">
                                        <span className="text">les ateliers</span>
                                    </div>
                                </div>
                            </div>

                        </a>

                    </div>
                </div>
            </div>
        );
    }

}

export default Main;