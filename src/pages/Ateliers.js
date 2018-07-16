import React, { Component  } from 'react';
import {TweenMax} from 'gsap';
import Animation from 'components/Animation';
import $ from 'jquery';

class Ateliers extends Component {
    constructor(props) {
        super(props);


        this.handleScroll = this.handleScroll.bind(this);
        document.querySelector('#header .left .logo').classList.add('white');
        document.querySelector('#header .right .bottom').classList.add('white');
        document.querySelector('#header-light').classList.add('black');
    }

    componentDidMount() {
        Animation.hideLoad();
        window.addEventListener('scroll', this.handleScroll);

        TweenMax.to('#workshop',0.6,{autoAlpha:1,ease:"Cubic.easeOut"});

    };
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


        let st = window.scrollY; console.log(st);
        if(st>=100){
            TweenMax.to('#header-light',0.6,{y:0,ease:"Cubic.easeOut"});
        }else{
            TweenMax.to('#header-light',0.4,{y:-65,ease:"Cubic.easeOut"});
        }


    };

    render() {
        return (
            <div id="workshop" className="page-template page-template-tpl-workshop page-template-tpl-workshop-php page page-id-8 les-ateliers">

                <div id="s-plane0" className="parallax-plane">
                    <div className="p-item p-item-0 b-1 b-animate">
                        <img src="http://www.jaunedechrome.com/wp-content/themes/jaune-de-chrome/assets/images/workshop/background-1.png" alt="Image"/>
                    </div>
                    <div className="p-item p-item-1 b-1 b-animate"><img src="http://www.jaunedechrome.com/wp-content/themes/jaune-de-chrome/assets/images/workshop/background-2.png" alt="Image"/></div>
                    <div className="p-item p-item-2 b-1 b-animate"><img src="http://www.jaunedechrome.com/wp-content/themes/jaune-de-chrome/assets/images/workshop/background-3.png" alt="Image"/></div>
                    <div className="p-item p-item-3 b-1 b-animate"><img src="http://www.jaunedechrome.com/wp-content/themes/jaune-de-chrome/assets/images/workshop/background-4.png" alt="Image"/></div>
                </div>

                <div id="s-plane1" className="parallax-plane">

                    <div className="p-step step-1">
                        <div className="p-item p-item-0 b-1-50 b-animate" data-toppercent="0"><img src="http://www.jaunedechrome.com/wp-content/themes/jaune-de-chrome/assets/images/workshop/x2atelier1.jpg" alt="Image"/></div>
                        <div className="p-item p-item-1 b-1-72 p-r-0 b-animate" data-toppercent="0.60" data-trigger="1"><img src="http://www.jaunedechrome.com/wp-content/themes/jaune-de-chrome/assets/images/workshop/x2atelier2.jpg" alt="Image"/></div>
                        <div className="t-item p-item-3 b-animate split-lines" data-pospercent="0.98"><div className="line line1"><div className="inner">La Maîtrise</div></div><div className="line line2"><div className="inner">du travail</div></div><div className="line line3"><div className="inner">de</div></div><div className="line line4"><div className="inner">l’Émail</div></div></div>
                        <div className="t-item p-item-4 b-animate split-lines" data-pospercent="0.2"><div className="line line1"><div className="inner">LIMOGES,</div></div><div className="line line2"><div className="inner">FRANCE</div></div></div>
                    </div>

                    <div className="p-step step-2">
                        <div className="p-item p-item-0 b-1-82 p-c-0 b-animate" data-toppercent="0"><img src="http://www.jaunedechrome.com/wp-content/themes/jaune-de-chrome/assets/images/workshop/x2atelier3.jpg" alt="Image"/></div>
                        <div className="p-item p-item-1 b-1-35 p-l-15 b-animate" data-toppercent="0.8"><img src="http://www.jaunedechrome.com/wp-content/themes/jaune-de-chrome/assets/images/workshop/x2atelier4.jpg" alt="Image"/></div>

                    </div>
                    <div className="p-step step-3">
                        <div className="p-item p-item-0 b-1-40 p-r-7 b-animate" data-toppercent="0"><img src="http://www.jaunedechrome.com/wp-content/themes/jaune-de-chrome/assets/images/workshop/x2atelier5.jpg" alt="Image"/></div>
                        <div className="p-item p-item-1 b-1-45 p-l-0 b-animate" data-toppercent="0.40"><img src="http://www.jaunedechrome.com/wp-content/themes/jaune-de-chrome/assets/images/workshop/x2atelier6.jpg" alt="Image"/></div>
                        <div className="t-item p-item-3 b-animate split-lines" data-pospercent="0.14"><div className="line line1"><div className="inner">Le geste</div></div><div className="line line2"><div className="inner">irréprochable</div></div></div>
                        <div className="t-item p-item-4 b-animate split-lines" data-pospercent="0.83"><div className="line line1"><div className="inner">JAUNE DE CHROME EST RECONNU DANS </div></div><div className="line line2"><div className="inner">LE MONDE ENTIER POUR SA MAÎTRISE </div></div><div className="line line3"><div className="inner">ABSOLUE DU TRAVAIL DE L'ÉMAIL.</div></div></div>
                    </div>

                    <div className="p-step step-4">
                        <div className="p-item p-item-0 b-1-65 p-l-6 b-animate" data-toppercent="0"><img src="http://www.jaunedechrome.com/wp-content/themes/jaune-de-chrome/assets/images/workshop/x2atelier7.jpg" alt="Image"/></div>
                        <div className="p-item p-item-1 b-1-50 p-r-0 b-animate" data-toppercent="0.90"><img src="http://www.jaunedechrome.com/wp-content/themes/jaune-de-chrome/assets/images/workshop/x2atelier8.jpg" alt="Image"/></div>
                        <div className="t-item p-item-3 b-animate split-lines" data-pospercent="0"><div className="line line1"><div className="inner">Chaque pièce est</div></div><div className="line line2"><div className="inner">unique</div></div></div>
                        <div className="t-item p-item-4 b-animate split-lines" data-pospercent="0.30"><div className="line line1"><div className="inner">CE PROCÉDÉ UNIQUE, APPLIQUÉ </div></div><div className="line line2"><div className="inner">MÉTICULEUSEMENT SUR LA PORCELAINE, </div></div><div className="line line3"><div className="inner">ALLIE ÉMAUX ET COMPOSANTS </div></div><div className="line line4"><div className="inner">MÉTALLIQUES.</div></div></div>
                    </div>

                    <div className="p-step step-5">
                        <div className="p-item p-item-0 b-1-50 p-l-15 b-animate" data-toppercent="0"><img src="http://www.jaunedechrome.com/wp-content/themes/jaune-de-chrome/assets/images/workshop/x2atelier9.jpg" alt="Image"/></div>
                    </div>

                    <div className="p-step step-6">
                        <div className="p-item p-item-0 b-1-60 p-l-6 b-animate" data-toppercent="0"><img src="http://www.jaunedechrome.com/wp-content/themes/jaune-de-chrome/assets/images/workshop/x2atelier10.jpg" alt="Image"/></div>
                        <div className="t-item p-item-1 b-animate split-lines p-r-0" data-pospercent="0"><div className="line line1"><div className="inner">Effets de matière</div></div><div className="line line2"><div className="inner">surprenants</div></div></div>
                        <div className="t-item p-item-2 b-animate split-lines" data-pospercent="0.40"><div className="line line1"><div className="inner">MÊME SI LE GESTE DE L'ARTISAN EST </div></div><div className="line line2"><div className="inner">IRRÉPROCHABLE, CHAQUE PIÈCE </div></div><div className="line line3"><div className="inner">POSSÈDE UNE DIMENSION UNIQUE. LE </div></div><div className="line line4"><div className="inner">DÉCOR, N'ÉTANT JAMAIS TOUT À FAIT LE </div></div><div className="line line5"><div className="inner">MÊME NI TOUT À FAIT UN AUTRE, </div></div><div className="line line6"><div className="inner">CONNAÎT DE LÉGÈRES VARIATIONS LORS </div></div><div className="line line7"><div className="inner">DE LA CUISSON.</div></div></div>
                    </div>

                    <div className="p-step step-7">
                        <div className="p-item p-item-0 b-1-50 p-r-0 b-animate" data-toppercent="0"><img src="http://www.jaunedechrome.com/wp-content/themes/jaune-de-chrome/assets/images/workshop/x2atelier11.jpg" alt="Image"/></div>
                        <div className="p-item p-item-1 b-1-60 p-l-0 b-animate" data-toppercent="0.50"><img src="http://www.jaunedechrome.com/wp-content/themes/jaune-de-chrome/assets/images/workshop/x2atelier12.jpg" alt="Image"/></div>
                    </div>

                    <div className="p-step step-8">
                        <div className="p-item p-item-0 b-1-65 p-r-0 b-animate" data-toppercent="0"><img src="http://www.jaunedechrome.com/wp-content/themes/jaune-de-chrome/assets/images/workshop/x2atelier13.jpg" alt="Image"/></div>
                        <div className="t-item p-item-1 b-animate split-lines p-l-15" data-pospercent="0"><div className="line line1"><div className="inner">Procédés</div></div><div className="line line2"><div className="inner">artisanaux</div></div></div>
                    </div>

                    <div className="p-step step-9">
                        <div className="p-item p-item-0 b-1-38 p-c-0 b-animate" data-toppercent="0"><img src="http://www.jaunedechrome.com/wp-content/themes/jaune-de-chrome/assets/images/workshop/x2atelier14.jpg" alt="Image"/></div>
                        <div className="t-item p-item-1 b-animate split-lines p-l-0" data-pospercent="0.25"><div className="line line1"><div className="inner">Le Feu</div></div><div className="line line2"><div className="inner">est</div></div><div className="line line3"><div className="inner">indomptable</div></div></div>
                    </div>

                    <div className="end">
                        <div className="d-table">
                            <div className="d-cell">
                                <div className="button-stripped white b-animate a-slide-text" data-trigger="1">
                                    <a href="http://www.jaunedechrome.com/les-collections/" data-preloadcolor="black">
                                        <div className="line line1">
                                            <div className="inner"><div className="w-line"></div><span className="text">Découvrir</span></div>
                                        </div>
                                        <div className="line line2">
                                            <div className="inner"><span className="text">nos collections</span></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

        );
    }

}
export default Ateliers;
