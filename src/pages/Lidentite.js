import React, { Component  } from 'react';
import {TweenMax} from 'gsap';
import Animation from 'components/Animation';
import $ from 'jquery';
let count = 0;

class Lidentite extends Component {
    constructor(props) {
        super(props);


        this.resizeEvent = this.resizeEvent.bind(this);
        document.querySelector('#header .left .logo').classList.add('white');
        document.querySelector('#header .right .bottom').classList.add('white');

        document.querySelector('#header-light').classList.add('black');
    }

    componentDidMount() {
        count = 0;
        this.resizeEvent();
        window.addEventListener('resize', this.resizeEvent);

        var itemW =  document.body.clientWidth-230;
        document.querySelectorAll('#identity #s-slider .slider-item').forEach((e,i) => {
            e.style.left = (itemW*(i+1))+"px";
            if(i===0){
                e.style.paddingLeft = "340px";
            }
        });

        document.querySelectorAll('#identity #s-slider-background .slider-background-item').forEach((e,i) => {
            e.style.left = (itemW)+"px";
        });

        Animation.hideLoad(this.init.bind(this));


    };
    init(){
        this.changeSlide();



        document.querySelector('#identity .prev').style.height= "100%";
        document.querySelector('#identity .next').style.height= "100%";

    }
    componentWillMount() {

    };
    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeEvent);
    };

    resizeEvent(){

        document.querySelector('#identity').style.height= window.innerHeight-276+"px";
        document.querySelector('#identity #s-slider-background').style.height= window.innerHeight-276+"px";


    }

    changeSlide(_dir){
        var itemW =  document.body.clientWidth-230;
        document.querySelectorAll('#identity #s-slider .slider-item').forEach((e,i) => {
            TweenMax.to(e,1,{left:itemW*(i-count),paddingLeft:(i===count?340:0),ease:'Power3.easeInOut'})
            if(i===count){
                TweenMax.to(e.querySelector('.title'),0.8,{color:'#fff',ease:'Power3.easeInOut',onComplete:function(){
                    TweenMax.fromTo(e.querySelector('.chapo'),0.8,{y:20},{y:0,autoAlpha:1,ease:'Power3.easeInOut'})
                    TweenMax.fromTo(e.querySelector('.description'),0.8,{y:20},{delay:0.1,y:0,autoAlpha:1,ease:'Power3.easeInOut'})
                }})

            }else{
                TweenMax.to(e.querySelector('.title'),0.8,{color:'#585858',ease:'Power3.easeInOut'})
                TweenMax.to(e.querySelector('.chapo'),0.5,{autoAlpha:0,ease:'Power3.easeInOut'})
                TweenMax.to(e.querySelector('.description'),0.5,{autoAlpha:0,ease:'Power3.easeInOut'})
            }



        });
        if(_dir=='prev'){
            TweenMax.to($('#s-slider-background .slider-background-item').eq(count+1),1,{left:itemW,ease:'Power3.easeInOut'})
        }else{
            TweenMax.to($('#s-slider-background .slider-background-item').eq(count),1,{left:0,ease:'Power3.easeInOut'})
        }

    }
    prevSlide(){
        if(count<=0){return;}
        count--;
        this.changeSlide('prev');

    }
    nextSlide(){
        if(count>=4){return;}
        count++;
        this.changeSlide('next');

    }
    render() {
        return (
            <div id="identity">

                <div className="button-stripped button-workshop white a-slide-text">
                    <a href="http://www.jaunedechrome.com/les-ateliers/" data-preloadcolor="black">
                        <div className="line line1">
                            <div className="inner"><div className="w-line"></div><span className="text">Découvrir</span></div>
                        </div>
                        <div className="line line2">
                            <div className="inner"><span className="text">les ateliers</span></div>
                        </div>
                    </a>
                </div>

                <div id="s-slider">
                    <div className="slider-item">
                        <div className="title"><span>Naissance</span></div>
                        <div className="content">
                            <div className="d-table">
                                <div className="d-cell">
                                    <div className="t-line chapo">Milieu des années 80, Christian Le Page rencontre Catherine Badaire.<br/>C’est la naissance de Jaune de Chrome.</div>
                                    <div className="t-line description">Création de prêt à porter de luxe, bijoux contemporains et objets décoratifs exposés dans un même lieu : Rue de la Paix à Paris.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slider-item">
                        <div className="title"><span>New-York</span></div>
                        <div className="content">
                            <div className="d-table">
                                <div className="d-cell">
                                    <div className="t-line chapo">Milieu des années 90, rencontre avec Corky Tyler, Directrice des achats chez Takashimaya, New-York.</div>
                                    <div className="t-line description">Les premiers pas dans une aventure planétaire.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slider-item">
                        <div className="title"><span>Chef étoilé</span></div>
                        <div className="content">
                            <div className="d-table">
                                <div className="d-cell">
                                    <div className="t-line chapo">Fin des année 90, rencontre exubérante avec Alain Ducasse, sur Maison &amp; Objet.</div>
                                    <div className="t-line description">Aventure nouvelle avec le monde magique de la grande cuisine.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slider-item">
                        <div className="title"><span>J.L Coquet</span></div>
                        <div className="content">
                            <div className="d-table">
                                <div className="d-cell">
                                    <div className="t-line chapo">Acquisition de la Manufacture Coquet à Limoges.</div>
                                    <div className="t-line description"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slider-item">
                        <div className="title"><span>L'univers du bain</span></div>
                        <div className="content">
                            <div className="d-table">
                                <div className="d-cell">
                                    <div className="t-line chapo">Création d'une ligne d'objets pour la salle de bain, ainsi que des vasques et carreaux.</div>
                                    <div className="t-line description"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="s-slider-background">
                    <div className="slider-background-item">
                        <div className="background">
                            <img src="http://www.jaunedechrome.com/wp-content/uploads/2017/04/x2identite1.jpg" alt="Image"/>
                        </div>
                    </div>
                    <div className="slider-background-item">
                        <div className="background">
                            <img src="http://www.jaunedechrome.com/wp-content/uploads/2017/04/x2identite2.jpg" alt="Image"/>
                        </div>
                    </div>
                    <div className="slider-background-item">
                        <div className="background">
                            <img src="http://www.jaunedechrome.com/wp-content/uploads/2017/04/x2identite3.jpg" alt="Image"/>
                        </div>
                    </div>
                    <div className="slider-background-item">
                        <div className="background">
                            <img src="http://www.jaunedechrome.com/wp-content/uploads/2017/04/x2identite4.jpg" alt="Image"/>
                        </div>
                    </div>
                    <div className="slider-background-item">
                        <div className="background">
                            <img src="http://www.jaunedechrome.com/wp-content/uploads/2017/04/x2identite5.jpg" alt="Image"/>
                        </div>
                    </div>
                </div>

                <div id="s-arrows">
                    <div className="prev" onClick={this.prevSlide.bind(this)}></div>
                    <div className="next" onClick={this.nextSlide.bind(this)}></div>
                </div>

            </div>

        );
    }

}
export default Lidentite;
