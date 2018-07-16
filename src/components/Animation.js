import {TweenMax} from 'gsap';
import $ from 'jquery';

let curIdx = 0,nextIdx = 1,bCurIdx=2,bNextIdx,maxLen = 3,isSlide=false;

export default {
    slideInit(){
        curIdx = 0;
        nextIdx = 1;
        bCurIdx=2;
        bNextIdx=undefined;
        maxLen = 3;
        isSlide=false;
    },
    slide() {
        if(isSlide)return;
        isSlide=true;
        console.log("slide",bNextIdx===undefined);

        TweenMax.set('.thumbnail .slide'+bCurIdx,{zIndex:1});
        TweenMax.set('.thumbnail .slide'+curIdx,{zIndex:2});
        TweenMax.to('.thumbnail .slide'+curIdx,1.2,{delay:(bNextIdx===undefined?0:1.2),x:0,ease:"Power2.easeInOut",onComplete:function(){

            TweenMax.set('.thumbnail .slide'+bCurIdx,{x:-window.innerWidth/2});
            isSlide=false;
            bCurIdx = curIdx;
            bNextIdx = nextIdx;
            curIdx = curIdx>=maxLen-1?0:curIdx+1;
            nextIdx = curIdx>=maxLen-1?0:curIdx+1;

        }});
        $('#main #s-slider .title .slide'+curIdx+' .line').each(function(i,e){
            var is2 = $(e).hasClass('line2');
            TweenMax.to($(e).find('.w-line'),0,{width:36});
            var h = $(e).find('.inner').innerHeight()*1.5;
            TweenMax.set($(e).find('.inner'),{y:h});
            TweenMax.to($(e).find('.inner'),1.2,{delay:(bNextIdx===undefined?0:0.9)+(is2?0.2:0),y:0,opacity:1,ease:"Cubic.easeOut"});
        });
        $('#main #s-slider .next-slider .slide'+nextIdx+' .line').each(function(i,e){
            var is2 = $(e).hasClass('line2');
            var h = $(e).find('.inner').innerHeight()*1.5;
            TweenMax.set($(e).find('.inner'),{y:h});
            TweenMax.to($(e).find('.inner'),1.2,{delay:(bNextIdx===undefined?0.4:1.3)+(is2?0.2:0),y:0,opacity:1,ease:"Cubic.easeOut"});
        });

        if(bNextIdx !==undefined){
            $('#main #s-slider .title .slide'+bCurIdx+' .line').each(function(i,e){
                var is2 = $(e).hasClass('line2');
                var h = $(e).find('.inner').innerHeight()*1.5;
                TweenMax.to($(e).find('.inner'),1,{delay:(is2?0.1:0),y:-h,opacity:0,ease:"Cubic.easeIn"});
            });
            $('#main #s-slider .next-slider .slide'+bNextIdx+' .line').each(function(i,e){
                var is2 = $(e).hasClass('line2');
                var h = $(e).find('.inner').innerHeight()*1.5;
                TweenMax.to($(e).find('.inner'),1,{delay:0.6+(is2?0.1:0),y:-h,opacity:0,ease:"Cubic.easeIn"});
            });
        }


    },
    openPreLoad(_callback){
        TweenMax.set('#header-light',{y:-65});
        TweenMax.to('#open_preload .center_line',0.6,{height:window.innerHeight,ease:"Cubic.easeOut",onComplete:function(){
            TweenMax.to('#open_preload .left .text',0.8,{x:-30,ease:"Cubic.easeOut"});
            TweenMax.to('#open_preload .right .text',0.8,{x:30,ease:"Cubic.easeOut",onComplete:function(){

                TweenMax.to('#open_preload .center_line',0,{delay:1.2,autoAlpha:0});
                TweenMax.to('#open_preload .text',0.4,{delay:1.4,autoAlpha:0,ease:"Cubic.easeOut"});
                TweenMax.to('#open_preload .left .bg',1.4,{delay:1.1,x:$('.wrapper').innerWidth()/2+1,ease:"Power3.easeInOut"});
                TweenMax.to('#open_preload .right .bg',1.4,{delay:1.1,x:$('.wrapper').innerWidth()/2+1,ease:"Power3.easeInOut",onComplete:function(){
                    $('#open_preload').remove();
                    if(_callback)_callback();



                }
                });
            }});
        }});
    },
    pagePreLoad(_time,_callback){
        document.querySelector('#preload').style.display='block';
        TweenMax.set('#preload',{x:-window.innerWidth,autoAlpha:1});
        TweenMax.set('#preload .container',{autoAlpha:0});
        TweenMax.set('#preload .loader img',{transformOrigin: "center center",rotation:0});
        TweenMax.to('#preload',_time/1000,{x:0,ease:"Quart.easeInOut",onComplete:function() {

            if(_callback)_callback();
            TweenMax.to('#preload .container',0.2,{autoAlpha:1});
            TweenMax.to('#preload .loader  img',2,{rotation:360,repeat: -1, yoyo:false,repeatDelay: 0,ease:"Linear.easeNone"});
            //TweenMax.to('#preload',0.8,{autoAlpha:'#fff'});



        }
        });

    },
    hideLoad(_callback){

        TweenMax.to('#preload',0.5,{delay:0.5,autoAlpha:0,onComplete:function(){
            TweenMax.killTweensOf('#preload .loader  img');
            if(_callback)_callback();
        }});
    }
};
