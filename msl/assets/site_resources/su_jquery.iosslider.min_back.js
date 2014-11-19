/*
 * iosSlider - http://iosscripts.com/iosslider/
 * 
 * Touch Enabled, Responsive jQuery Horizontal Content Slider/Carousel/Image Gallery Plugin
 *
 * A jQuery plugin which allows you to integrate a customizable, cross-browser 
 * content slider into your web presence. Designed for use as a content slider, carousel, 
 * scrolling website banner, or image gallery.
 * 
 * Copyright (c) 2013 Marc Whitbread
 * 
 * Version: v1.3.11 (09/02/2013)
 * Minimum requirements: jQuery v1.4+
 *
 * Advanced requirements:
 * 1) jQuery bind() click event override on slide requires jQuery v1.6+
 *
 * Terms of use:
 *
 * 1) iosSlider is licensed under the Creative Commons – Attribution-NonCommercial 3.0 License.
 * 2) You may use iosSlider free for personal or non-profit purposes, without restriction.
 *	  Attribution is not required but always appreciated. For commercial projects, you
 *	  must purchase a license. You may download and play with the script before deciding to
 *	  fully implement it in your project. Making sure you are satisfied, and knowing iosSlider
 *	  is the right script for your project is paramount.
 * 3) You are not permitted to make the resources found on iosscripts.com available for
 *    distribution elsewhere "as is" without prior consent. If you would like to feature
 *    iosSlider on your site, please do not link directly to the resource zip files. Please
 *    link to the appropriate page on iosscripts.com where users can find the download.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 * COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 * GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 */
 
(function(b){var na=0,W=0,da=0,L=0,za="ontouchstart"in window,Ba="onorientationchange"in window,ea=!1,aa=!1,X=!1,oa=!1,ha=!1,ia="pointer",sa="pointer",ja=[],T=[],ta=[],$=[],y=[],ba=[],A=[],n=[],s=[],ua=[],fa=[],e={showScrollbar:function(a,e){a.scrollbarHide&&b("."+e).css({opacity:a.scrollbarOpacity,filter:"alpha(opacity:"+100*a.scrollbarOpacity+")"})},hideScrollbar:function(b,g,c,f,h,d,n,s,y,A){if(b.scrollbar&&b.scrollbarHide)for(var t=c;t<c+25;t++)g[g.length]=e.hideScrollbarIntervalTimer(10*t,f[c], (c+24-t)/24,h,d,n,s,y,A,b)},hideScrollbarInterval:function(a,g,c,f,h,d,n,y,A){L=-1*a/s[y]*(h-d-n-f);e.setSliderOffset("."+c,L);b("."+c).css({opacity:A.scrollbarOpacity*g,filter:"alpha(opacity:"+100*A.scrollbarOpacity*g+")"})},slowScrollHorizontalInterval:function(a,g,c,f,h,d,K,O,N,J,t,w,z,x,v,q,G,p,m){if(m.infiniteSlider){if(c<=-1*s[q]){var r=b(a).width();if(c<=-1*ua[q]){var u=-1*t[0];b(g).each(function(c){e.setSliderOffset(b(g)[c],u+G);c<w.length&&(w[c]=-1*u);u+=v[c]});c+=-1*w[0];n[q]=-1*w[0]+G; s[q]=n[q]+r-d;A[q]=0}else{var k=0,D=e.getSliderOffset(b(g[0]),"x");b(g).each(function(c){e.getSliderOffset(this,"x")<D&&(D=e.getSliderOffset(this,"x"),k=c)});z=n[q]+r;e.setSliderOffset(b(g)[k],z);n[q]=-1*w[1]+G;s[q]=n[q]+r-d;w.splice(0,1);w.splice(w.length,0,-1*z+G);A[q]++}}if(c>=-1*n[q]||0<=c){r=b(a).width();if(0<=c)for(u=-1*t[0],b(g).each(function(c){e.setSliderOffset(b(g)[c],u+G);c<w.length&&(w[c]=-1*u);u+=v[c]}),c-=-1*w[0],n[q]=-1*w[0]+G,s[q]=n[q]+r-d,A[q]=x;0<-1*w[0]-r+G;){var B=0,I=e.getSliderOffset(b(g[0]), "x");b(g).each(function(c){e.getSliderOffset(this,"x")>I&&(I=e.getSliderOffset(this,"x"),B=c)});z=n[q]-v[B];e.setSliderOffset(b(g)[B],z);w.splice(0,0,-1*z+G);w.splice(w.length-1,1);n[q]=-1*w[0]+G;s[q]=n[q]+r-d;A[q]--;y[q]++}0>c&&(B=0,I=e.getSliderOffset(b(g[0]),"x"),b(g).each(function(c){e.getSliderOffset(this,"x")>I&&(I=e.getSliderOffset(this,"x"),B=c)}),z=n[q]-v[B],e.setSliderOffset(b(g)[B],z),w.splice(0,0,-1*z+G),w.splice(w.length-1,1),n[q]=-1*w[0]+G,s[q]=n[q]+r-d,A[q]--)}}t=!1;d=e.calcActiveOffset(m, c,w,d,A[q],x,J,q);z=(d+A[q]+x)%x;m.infiniteSlider?z!=ba[q]&&(t=!0):d!=y[q]&&(t=!0);if(t&&(console.log(c,w,d,y[q]),x=new e.args("change",m,a,b(a).children(":eq("+z+")"),z,p),b(a).parent().data("args",x),""!=m.onSlideChange))m.onSlideChange(x);y[q]=d;ba[q]=z;c=Math.floor(c);e.setSliderOffset(a,c);m.scrollbar&&(L=Math.floor((-1*c-n[q]+G)/(s[q]-n[q]+G)*(K-O-h)),a=h-N,c>=-1*n[q]+G?(a=h-N- -1*L,e.setSliderOffset(b("."+f),0)):(c<=-1*s[q]+1&&(a=K-O-N-L),e.setSliderOffset(b("."+f),L)),b("."+f).css({width:a+ "px"}))},slowScrollHorizontal:function(a,g,c,f,h,d,K,O,N,J,t,w,z,x,v,q,G,p,m,r,u){var k=e.getSliderOffset(a,"x");d=[];var D=0,B=25/1024*O;frictionCoefficient=u.frictionCoefficient;elasticFrictionCoefficient=u.elasticFrictionCoefficient;snapFrictionCoefficient=u.snapFrictionCoefficient;h>u.snapVelocityThreshold&&u.snapToChildren&&!m?D=1:h<-1*u.snapVelocityThreshold&&u.snapToChildren&&!m&&(D=-1);h<-1*B?h=-1*B:h>B&&(h=B);b(a)[0]!==b(p)[0]&&(D*=-1,h*=-2);p=A[v];if(u.infiniteSlider)var I=n[v],l=s[v];m= [];for(var B=[],E=0;E<z.length;E++)m[E]=z[E],E<g.length&&(B[E]=e.getSliderOffset(b(g[E]),"x"));for(;1<h||-1>h;){h*=frictionCoefficient;k+=h;(k>-1*n[v]||k<-1*s[v])&&!u.infiniteSlider&&(h*=elasticFrictionCoefficient,k+=h);if(u.infiniteSlider){if(k<=-1*l){for(var l=b(a).width(),L=0,Q=B[0],E=0;E<B.length;E++)B[E]<Q&&(Q=B[E],L=E);E=I+l;B[L]=E;I=-1*m[1]+r;l=I+l-O;m.splice(0,1);m.splice(m.length,0,-1*E+r);p++}if(k>=-1*I){l=b(a).width();L=0;Q=B[0];for(E=0;E<B.length;E++)B[E]>Q&&(Q=B[E],L=E);E=I-x[L];B[L]= E;m.splice(0,0,-1*E+r);m.splice(m.length-1,1);I=-1*m[0]+r;l=I+l-O;p--}}d[d.length]=k}B=!1;h=e.calcActiveOffset(u,k,m,O,p,G,y[v],v);I=(h+p+G)%G;u.snapToChildren&&(u.infiniteSlider?I!=ba[v]&&(B=!0):h!=y[v]&&(B=!0),0>D&&!B?(h++,h>=z.length&&!u.infiniteSlider&&(h=z.length-1)):0<D&&!B&&(h--,0>h&&!u.infiniteSlider&&(h=0)));if(u.snapToChildren||(k>-1*n[v]||k<-1*s[v])&&!u.infiniteSlider){(k>-1*n[v]||k<-1*s[v])&&!u.infiniteSlider?d.splice(0,d.length):(d.splice(0.1*d.length,d.length),k=0<d.length?d[d.length- 1]:k);for(;k<m[h]-0.5||k>m[h]+0.5;)k=(k-m[h])*snapFrictionCoefficient+m[h],d[d.length]=k;d[d.length]=m[h]}D=1;0!=d.length%2&&(D=0);for(k=0;k<c.length;k++)clearTimeout(c[k]);p=(h+p+G)%G;I=0;for(k=D;k<d.length;k+=2)if(k==D||1<Math.abs(d[k]-I)||k>=d.length-2)I=d[k],c[c.length]=e.slowScrollHorizontalIntervalTimer(10*k,a,g,d[k],f,K,O,N,J,t,h,w,z,q,G,x,v,r,p,u);I=(h+A[v]+G)%G;""!=u.onSlideComplete&&1<d.length&&(c[c.length]=e.onSlideCompleteTimer(10*(k+1),u,a,b(a).children(":eq("+I+")"),p,v));$[v]=c;e.hideScrollbar(u, c,k,d,f,K,O,J,t,v)},onSlideComplete:function(a,g,c,f,h){c=new e.args("complete",a,b(g),c,f,f);b(g).parent().data("args",c);if(""!=a.onSlideComplete)a.onSlideComplete(c)},getSliderOffset:function(a,e){var c=0;e="x"==e?4:5;if(!ea||aa||X)c=parseInt(b(a).css("left"),10);else{for(var c=["-webkit-transform","-moz-transform","transform"],f,h=0;h<c.length;h++)if(void 0!=b(a).css(c[h])&&0<b(a).css(c[h]).length){f=b(a).css(c[h]).split(",");break}c=void 0==f[e]?0:parseInt(f[e],10)}return c},setSliderOffset:function(a, e){e=parseInt(e,10);!ea||aa||X?b(a).css({left:e+"px"}):b(a).css({webkitTransform:"matrix(1,0,0,1,"+e+",0)",MozTransform:"matrix(1,0,0,1,"+e+",0)",transform:"matrix(1,0,0,1,"+e+",0)"})},setBrowserInfo:function(){null!=navigator.userAgent.match("WebKit")?(ia="-webkit-grab",sa="-webkit-grabbing"):null!=navigator.userAgent.match("Gecko")?(ha=!0,ia="move",sa="-moz-grabbing"):null!=navigator.userAgent.match("MSIE 7")?oa=aa=!0:null!=navigator.userAgent.match("MSIE 8")?oa=X=!0:null!=navigator.userAgent.match("MSIE 9")&& (oa=!0)},has3DTransform:function(){var a=!1,e=b("<div />").css({webkitTransform:"matrix(1,1,1,1,1,1)",MozTransform:"matrix(1,1,1,1,1,1)",transform:"matrix(1,1,1,1,1,1)"});""==e.attr("style")?a=!1:ha&&!za&&21<=parseInt(navigator.userAgent.split("/")[3],10)?a=!1:void 0!=e.attr("style")&&(a=!0);return a},getSlideNumber:function(b,e,c){return(b-A[e]+c)%c},calcActiveOffset:function(b,e,c,f,h,d,n,s){h=!1;b=[];var y;e>c[0]&&(y=0);e<c[c.length-1]&&(y=d-1);for(d=0;d<c.length;d++)c[d]<=e&&c[d]>e-f&&(h||c[d]== e||(b[b.length]=c[d-1]),b[b.length]=c[d],h=!0);0==b.length&&(b[0]=c[c.length-1]);for(d=h=0;d<b.length;d++)n=Math.abs(e-b[d]),n<f&&(h=b[d],f=n);for(d=0;d<c.length;d++)h==c[d]&&(y=d);return y},changeSlide:function(a,g,c,f,h,d,n,s,N,J,t,w,z,x,v,q,G,p){e.autoSlidePause(x);for(var m=0;m<f.length;m++)clearTimeout(f[m]);var r=Math.ceil(p.autoSlideTransTimer/10)+1,u=e.getSliderOffset(g,"x"),k=w[a],D=k-u;if(p.infiniteSlider)for(a=(a-A[x]+2*q)%q,m=!1,0==a&&2==q&&(a=q,w[a]=w[a-1]-b(c).eq(0).outerWidth(!0),m= !0),k=w[a],D=k-u,k=[w[a]-b(g).width(),w[a]+b(g).width()],m&&w.splice(w.length-1,1),m=0;m<k.length;m++)Math.abs(k[m]-u)<Math.abs(D)&&(D=k[m]-u);var k=[],B;e.showScrollbar(p,h);for(m=0;m<=r;m++)B=m,B/=r,B--,B=u+D*(Math.pow(B,5)+1),k[k.length]=B;r=(a+A[x]+q)%q;for(m=u=0;m<k.length;m++){if(0==m||1<Math.abs(k[m]-u)||m>=k.length-2)u=k[m],f[m]=e.slowScrollHorizontalIntervalTimer(10*(m+1),g,c,k[m],h,d,n,s,N,J,a,t,w,v,q,z,x,G,r,p);0==m&&""!=p.onSlideStart&&(D=(y[x]+A[x]+q)%q,p.onSlideStart(new e.args("start", p,g,b(g).children(":eq("+D+")"),D,a)))}u=!1;p.infiniteSlider?r!=ba[x]&&(u=!0):a!=y[x]&&(u=!0);u&&""!=p.onSlideComplete&&(f[f.length]=e.onSlideCompleteTimer(10*(m+1),p,g,b(g).children(":eq("+r+")"),r,x));f[f.length]=setTimeout(function(){y[x]=a},10*(m+1));$[x]=f;e.hideScrollbar(p,f,m,k,h,d,n,N,J,x);e.autoSlide(g,c,f,h,d,n,s,N,J,t,w,z,x,v,q,G,p)},autoSlide:function(b,g,c,f,h,d,n,s,N,J,t,w,z,x,v,q,G){if(!T[z].autoSlide)return!1;e.autoSlidePause(z);ja[z]=setTimeout(function(){!G.infiniteSlider&&y[z]> t.length-1&&(y[z]-=v);e.changeSlide((y[z]+A[z]+t.length+1)%t.length,b,g,c,f,h,d,n,s,N,J,t,w,z,x,v,q,G);e.autoSlide(b,g,c,f,h,d,n,s,N,J,t,w,z,x,v,q,G)},G.autoSlideTimer+G.autoSlideTransTimer)},autoSlidePause:function(b){clearTimeout(ja[b])},isUnselectable:function(a,e){return""!=e.unselectableSelector&&1==b(a).closest(e.unselectableSelector).size()?!0:!1},slowScrollHorizontalIntervalTimer:function(b,g,c,f,h,d,n,s,y,A,t,w,z,x,v,q,G,p,m,r){return setTimeout(function(){e.slowScrollHorizontalInterval(g, c,f,h,d,n,s,y,A,t,w,z,x,v,q,G,p,m,r)},b)},onSlideCompleteTimer:function(b,g,c,f,h,d){return setTimeout(function(){e.onSlideComplete(g,c,f,h,d)},b)},hideScrollbarIntervalTimer:function(b,g,c,f,h,d,n,s,y,A){return setTimeout(function(){e.hideScrollbarInterval(g,c,f,h,d,n,s,y,A)},b)},args:function(a,g,c,f,h,d){this.prevSlideNumber=void 0==b(c).parent().data("args")?void 0:b(c).parent().data("args").prevSlideNumber;this.prevSlideObject=void 0==b(c).parent().data("args")?void 0:b(c).parent().data("args").prevSlideObject; this.targetSlideNumber=d+1;this.targetSlideObject=b(c).children(":eq("+d+")");this.slideChanged=!1;"load"==a?this.targetSlideObject=this.targetSlideNumber=void 0:"start"==a?this.targetSlideObject=this.targetSlideNumber=void 0:"change"==a?(this.slideChanged=!0,this.prevSlideNumber=void 0==b(c).parent().data("args")?g.startAtSlide:b(c).parent().data("args").currentSlideNumber,this.prevSlideObject=b(c).children(":eq("+this.prevSlideNumber+")")):"complete"==a&&(this.slideChanged=b(c).parent().data("args").slideChanged); this.settings=g;this.data=b(c).parent().data("iosslider");this.sliderObject=c;this.sliderContainerObject=b(c).parent();this.currentSlideObject=f;this.currentSlideNumber=h+1;this.currentSliderOffset=-1*e.getSliderOffset(c,"x")},preventDrag:function(b){b.preventDefault()},preventClick:function(b){b.stopImmediatePropagation();return!1},enableClick:function(){return!0}};e.setBrowserInfo();var V={init:function(a,g){ea=e.has3DTransform();var c=b.extend(!0,{elasticPullResistance:0.6,frictionCoefficient:0.92, elasticFrictionCoefficient:0.6,snapFrictionCoefficient:0.92,snapToChildren:!1,snapSlideCenter:!1,startAtSlide:1,scrollbar:!1,scrollbarDrag:!1,scrollbarHide:!0,scrollbarLocation:"top",scrollbarContainer:"",scrollbarOpacity:0.4,scrollbarHeight:"4px",scrollbarBorder:"0",scrollbarMargin:"5px",scrollbarBackground:"#000",scrollbarBorderRadius:"100px",scrollbarShadow:"0 0 0 #000",scrollbarElasticPullResistance:0.9,desktopClickDrag:!1,keyboardControls:!1,tabToAdvance:!1,responsiveSlideContainer:!0,responsiveSlides:!0, navSlideSelector:"",navPrevSelector:"",navNextSelector:"",autoSlideToggleSelector:"",autoSlide:!1,autoSlideTimer:5E3,autoSlideTransTimer:750,autoSlideHoverPause:!0,infiniteSlider:!1,snapVelocityThreshold:5,slideStartVelocityThreshold:0,horizontalSlideLockThreshold:5,verticalSlideLockThreshold:3,stageCSS:{position:"relative",top:"0",left:"0",overflow:"hidden",zIndex:1},unselectableSelector:"",onSliderLoaded:"",onSliderUpdate:"",onSliderResize:"",onSlideStart:"",onSlideChange:"",onSlideComplete:""}, a);void 0==g&&(g=this);return b(g).each(function(a){function g(){e.autoSlidePause(d);va=b(F).find("a");ja=b(F).find("[onclick]");pa=b(F).find("*");b(m).css("width","");b(m).css("height","");b(F).css("width","");C=b(F).children().not("script").get();ga=[];M=[];c.responsiveSlides&&b(C).css("width","");s[d]=0;l=[];q=b(m).parent().width();r=b(m).outerWidth(!0);c.responsiveSlideContainer&&(r=b(m).outerWidth(!0)>q?q:b(m).outerWidth(!0));b(m).css({position:c.stageCSS.position,top:c.stageCSS.top,left:c.stageCSS.left, overflow:c.stageCSS.overflow,zIndex:c.stageCSS.zIndex,webkitPerspective:1E3,webkitBackfaceVisibility:"hidden",msTouchAction:"pan-y",width:r});b(c.unselectableSelector).css({cursor:"default"});for(var a=0;a<C.length;a++){ga[a]=b(C[a]).width();M[a]=b(C[a]).outerWidth(!0);var h=M[a];c.responsiveSlides&&(M[a]>r?(h=r+-1*(M[a]-ga[a]),ga[a]=h,M[a]=r):h=ga[a],b(C[a]).css({width:h}));b(C[a]).css({webkitBackfaceVisibility:"hidden",overflow:"hidden",position:"absolute"});l[a]=-1*s[d];s[d]=s[d]+h+(M[a]-ga[a])}c.snapSlideCenter&& (p=0.5*(r-M[0]),c.responsiveSlides&&M[0]>r&&(p=0));ua[d]=2*s[d];for(a=0;a<C.length;a++)e.setSliderOffset(b(C[a]),-1*l[a]+s[d]+p),l[a]-=s[d];if(!c.infiniteSlider&&!c.snapSlideCenter){for(a=0;a<l.length&&!(l[a]<=-1*(2*s[d]-r));a++)ha=a;l.splice(ha+1,l.length);l[l.length]=-1*(2*s[d]-r)}for(a=0;a<l.length;a++)E[a]=l[a];I&&(c.startAtSlide=T[d].startAtSlide>l.length?l.length:T[d].startAtSlide,c.infiniteSlider?(c.startAtSlide=(T[d].startAtSlide-1+H)%H,y[d]=T[d].startAtSlide):(c.startAtSlide=0>T[d].startAtSlide- 1?l.length-1:T[d].startAtSlide,y[d]=T[d].startAtSlide-1),ba[d]=y[d]);n[d]=s[d]+p;b(F).css({position:"relative",cursor:ia,webkitPerspective:"0",webkitBackfaceVisibility:"hidden",width:s[d]+"px"});R=s[d];s[d]=2*s[d]-r+2*p;(Y=R<r||0==r?!0:!1)&&b(F).css({cursor:"default"});G=b(m).parent().outerHeight(!0);u=b(m).height();c.responsiveSlideContainer&&(u=u>G?G:u);b(m).css({height:u});e.setSliderOffset(F,l[y[d]]);if(c.infiniteSlider&&!Y){a=e.getSliderOffset(b(F),"x");for(h=-1*((A[d]+H)%H);0>h;){var f=0,B= e.getSliderOffset(b(C[0]),"x");b(C).each(function(b){e.getSliderOffset(this,"x")<B&&(B=e.getSliderOffset(this,"x"),f=b)});var L=n[d]+R;e.setSliderOffset(b(C)[f],L);n[d]=-1*l[1]+p;s[d]=n[d]+R-r;l.splice(0,1);l.splice(l.length,0,-1*L+p);h++}for(;0<-1*l[0]-R+p&&c.snapSlideCenter&&I;){var N=0,O=e.getSliderOffset(b(C[0]),"x");b(C).each(function(b){e.getSliderOffset(this,"x")>O&&(O=e.getSliderOffset(this,"x"),N=b)});L=n[d]-M[N];e.setSliderOffset(b(C)[N],L);l.splice(0,0,-1*L+p);l.splice(l.length-1,1);n[d]= -1*l[0]+p;s[d]=n[d]+R-r;A[d]--;y[d]++}for(;a<=-1*s[d];)f=0,B=e.getSliderOffset(b(C[0]),"x"),b(C).each(function(b){e.getSliderOffset(this,"x")<B&&(B=e.getSliderOffset(this,"x"),f=b)}),L=n[d]+R,e.setSliderOffset(b(C)[f],L),n[d]=-1*l[1]+p,s[d]=n[d]+R-r,l.splice(0,1),l.splice(l.length,0,-1*L+p),A[d]++,y[d]--}e.setSliderOffset(F,l[y[d]]);c.desktopClickDrag||b(F).css({cursor:"default"});c.scrollbar&&(b("."+J).css({margin:c.scrollbarMargin,overflow:"hidden",display:"none"}),b("."+J+" ."+t).css({border:c.scrollbarBorder}), k=parseInt(b("."+J).css("marginLeft"))+parseInt(b("."+J).css("marginRight")),D=parseInt(b("."+J+" ."+t).css("borderLeftWidth"),10)+parseInt(b("."+J+" ."+t).css("borderRightWidth"),10),x=""!=c.scrollbarContainer?b(c.scrollbarContainer).width():r,v=r/R*(x-k),c.scrollbarHide||(V=c.scrollbarOpacity),b("."+J).css({position:"absolute",left:0,width:x-k+"px",margin:c.scrollbarMargin}),"top"==c.scrollbarLocation?b("."+J).css("top","0"):b("."+J).css("bottom","0"),b("."+J+" ."+t).css({borderRadius:c.scrollbarBorderRadius, background:c.scrollbarBackground,height:c.scrollbarHeight,width:v-D+"px",minWidth:c.scrollbarHeight,border:c.scrollbarBorder,webkitPerspective:1E3,webkitBackfaceVisibility:"hidden",position:"relative",opacity:V,filter:"alpha(opacity:"+100*V+")",boxShadow:c.scrollbarShadow}),e.setSliderOffset(b("."+J+" ."+t),Math.floor((-1*l[y[d]]-n[d]+p)/(s[d]-n[d]+p)*(x-k-v))),b("."+J).css({display:"block"}),w=b("."+J+" ."+t),z=b("."+J));c.scrollbarDrag&&!Y&&b("."+J+" ."+t).css({cursor:ia});c.infiniteSlider&&(S= (s[d]+r)/3);""!=c.navSlideSelector&&b(c.navSlideSelector).each(function(a){b(this).css({cursor:"pointer"});b(this).unbind(P).bind(P,function(g){"touchstart"==g.type?b(this).unbind("click.iosSliderEvent"):b(this).unbind("touchstart.iosSliderEvent");P=g.type+".iosSliderEvent";e.changeSlide(a,F,C,K,t,v,r,x,k,D,E,l,M,d,S,H,p,c)})});""!=c.navPrevSelector&&(b(c.navPrevSelector).css({cursor:"pointer"}),b(c.navPrevSelector).unbind(P).bind(P,function(a){"touchstart"==a.type?b(this).unbind("click.iosSliderEvent"): b(this).unbind("touchstart.iosSliderEvent");P=a.type+".iosSliderEvent";a=(y[d]+A[d]+H)%H;(0<a||c.infiniteSlider)&&e.changeSlide(a-1,F,C,K,t,v,r,x,k,D,E,l,M,d,S,H,p,c)}));""!=c.navNextSelector&&(b(c.navNextSelector).css({cursor:"pointer"}),b(c.navNextSelector).unbind(P).bind(P,function(a){"touchstart"==a.type?b(this).unbind("click.iosSliderEvent"):b(this).unbind("touchstart.iosSliderEvent");P=a.type+".iosSliderEvent";a=(y[d]+A[d]+H)%H;(a<l.length-1||c.infiniteSlider)&&e.changeSlide(a+1,F,C,K,t,v,r, x,k,D,E,l,M,d,S,H,p,c)}));c.autoSlide&&!Y&&""!=c.autoSlideToggleSelector&&(b(c.autoSlideToggleSelector).css({cursor:"pointer"}),b(c.autoSlideToggleSelector).unbind(P).bind(P,function(a){"touchstart"==a.type?b(this).unbind("click.iosSliderEvent"):b(this).unbind("touchstart.iosSliderEvent");P=a.type+".iosSliderEvent";wa?(e.autoSlide(F,C,K,t,v,r,x,k,D,E,l,M,d,S,H,p,c),wa=!1,b(c.autoSlideToggleSelector).removeClass("on")):(e.autoSlidePause(d),wa=!0,b(c.autoSlideToggleSelector).addClass("on"))}));e.autoSlide(F, C,K,t,v,r,x,k,D,E,l,M,d,S,H,p,c);b(m).bind("mouseleave.iosSliderEvent",function(){e.autoSlide(F,C,K,t,v,r,x,k,D,E,l,M,d,S,H,p,c)});b(m).bind("touchend.iosSliderEvent",function(){e.autoSlide(F,C,K,t,v,r,x,k,D,E,l,M,d,S,H,p,c)});c.autoSlideHoverPause&&b(m).bind("mouseenter.iosSliderEvent",function(){e.autoSlidePause(d)});b(m).data("iosslider",{obj:Aa,settings:c,scrollerNode:F,slideNodes:C,numberOfSlides:H,centeredSlideOffset:p,sliderNumber:d,originalOffsets:E,childrenOffsets:l,sliderMax:s[d],scrollbarClass:t, scrollbarWidth:v,scrollbarStageWidth:x,stageWidth:r,scrollMargin:k,scrollBorder:D,infiniteSliderOffset:A[d],infiniteSliderWidth:S,slideNodeOuterWidths:M});I=!1;return!0}na++;var d=na,K=[];T[d]=c;n[d]=0;s[d]=0;var O=[0,0],N=[0,0],J="scrollbarBlock"+na,t="scrollbar"+na,w,z,x,v,q,G,p=0,m=b(this),r,u,k,D,B,I=!0;a=-1;var l,E=[],V=0,Q=0,ea=0,F=b(this).children(":first-child"),C,ga,M,H=b(F).children().not("script").size(),U=!1,ha=0,xa=!1,qa=void 0,S;A[d]=0;var Y=!1,wa=!1;ta[d]=!1;var Z,ra=!1,ka=!1,P="touchstart.iosSliderEvent click.iosSliderEvent", R,va,ja,pa;fa[d]=!1;$[d]=[];c.scrollbarDrag&&(c.scrollbar=!0,c.scrollbarHide=!1);var Aa=b(this);if(void 0!=Aa.data("iosslider"))return!0;b(this).find("img").bind("dragstart.iosSliderEvent",function(b){b.preventDefault()});c.infiniteSlider&&(c.scrollbar=!1);c.infiniteSlider&&1==H&&(c.infiniteSlider=!1);c.scrollbar&&(""!=c.scrollbarContainer?b(c.scrollbarContainer).append("<div class = '"+J+"'><div class = '"+t+"'></div></div>"):b(F).parent().append("<div class = '"+J+"'><div class = '"+t+"'></div></div>")); if(!g())return!0;b(this).find("a").bind("mousedown",e.preventDrag);b(this).find("[onclick]").bind("click",e.preventDrag).each(function(){b(this).data("onclick")||b(this).data("onclick",this.onclick)});a=e.calcActiveOffset(c,e.getSliderOffset(b(F),"x"),l,r,A[d],H,void 0,d);a=(a+A[d]+H)%H;a=new e.args("load",c,F,b(F).children(":eq("+a+")"),a,a);b(m).data("args",a);if(""!=c.onSliderLoaded)c.onSliderLoaded(a);if(T[d].responsiveSlides||T[d].responsiveSlideContainer)a=Ba?"orientationchange":"resize",b(window).bind(a+ ".iosSliderEvent-"+d,function(){if(!g())return!0;var a=b(m).data("args");if(""!=c.onSliderResize)c.onSliderResize(a)});!c.keyboardControls&&!c.tabToAdvance||Y||b(document).bind("keydown.iosSliderEvent",function(b){aa||X||(b=b.originalEvent);if(37==b.keyCode&&c.keyboardControls)b.preventDefault(),b=(y[d]+A[d]+H)%H,(0<b||c.infiniteSlider)&&e.changeSlide(b-1,F,C,K,t,v,r,x,k,D,E,l,M,d,S,H,p,c);else if(39==b.keyCode&&c.keyboardControls||9==b.keyCode&&c.tabToAdvance)b.preventDefault(),b=(y[d]+A[d]+H)%H, (b<l.length-1||c.infiniteSlider)&&e.changeSlide(b+1,F,C,K,t,v,r,x,k,D,E,l,M,d,S,H,p,c)});if(za||c.desktopClickDrag){var ca=!1,la=b(F),ma=b(F),ya=!1;c.scrollbarDrag&&(la=la.add(w),ma=ma.add(z));b(la).bind("mousedown.iosSliderEvent touchstart.iosSliderEvent",function(a){if(ca)return!0;ca=!0;"touchstart"==a.type?b(ma).unbind("mousedown.iosSliderEvent"):b(ma).unbind("touchstart.iosSliderEvent");if(fa[d]||Y||(ya=e.isUnselectable(a.target,c)))return U=ca=!1,!0;Z=b(this)[0]===b(w)[0]?w:F;aa||X||(a=a.originalEvent); e.autoSlidePause(d);pa.unbind(".disableClick");if("touchstart"==a.type)eventX=a.touches[0].pageX,eventY=a.touches[0].pageY;else{if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges();else if(document.selection)if(X)try{document.selection.empty()}catch(g){}else document.selection.empty();eventX=a.pageX;eventY=a.pageY;xa=!0;qa=F;b(this).css({cursor:sa})}O=[0,0];N=[0,0];W=0;U=!1;for(a=0;a<K.length;a++)clearTimeout(K[a]); a=e.getSliderOffset(F,"x");a>-1*n[d]+p+R?(a=-1*n[d]+p+R,e.setSliderOffset(b("."+t),a),b("."+t).css({width:v-D+"px"})):a<-1*s[d]&&(e.setSliderOffset(b("."+t),x-k-v),b("."+t).css({width:v-D+"px"}));a=b(this)[0]===b(w)[0]?n[d]:0;Q=-1*(e.getSliderOffset(this,"x")-eventX-a);e.getSliderOffset(this,"y");O[1]=eventX;N[1]=eventY;ka=!1});b(ma).bind("touchmove.iosSliderEvent mousemove.iosSliderEvent",function(a){aa||X||(a=a.originalEvent);if(fa[d]||Y||ya)return!0;var g=0;if("touchmove"==a.type)eventX=a.touches[0].pageX, eventY=a.touches[0].pageY;else{if(window.getSelection)window.getSelection().empty||window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges();else if(document.selection)if(X)try{document.selection.empty()}catch(h){}else document.selection.empty();eventX=a.pageX;eventY=a.pageY;if(!xa||!oa&&("undefined"!=typeof a.webkitMovementX||"undefined"!=typeof a.webkitMovementY)&&0===a.webkitMovementY&&0===a.webkitMovementX)return!0}O[0]=O[1];O[1]=eventX;W=(O[1]-O[0])/2;N[0]=N[1];N[1]=eventY; da=(N[1]-N[0])/2;if(!U){var f=(y[d]+A[d]+H)%H,f=new e.args("start",c,F,b(F).children(":eq("+f+")"),f,void 0);b(m).data("args",f);if(""!=c.onSlideStart)c.onSlideStart(f)}(da>c.verticalSlideLockThreshold||da<-1*c.verticalSlideLockThreshold)&&"touchmove"==a.type&&!U&&(ra=!0);(W>c.horizontalSlideLockThreshold||W<-1*c.horizontalSlideLockThreshold)&&"touchmove"==a.type&&a.preventDefault();if(W>c.slideStartVelocityThreshold||W<-1*c.slideStartVelocityThreshold)U=!0;if(U&&!ra){var f=e.getSliderOffset(F,"x"), q=b(Z)[0]===b(w)[0]?n[d]:p,u=b(Z)[0]===b(w)[0]?(n[d]-s[d]-p)/(x-k-v):1,z=b(Z)[0]===b(w)[0]?c.scrollbarElasticPullResistance:c.elasticPullResistance,G=c.snapSlideCenter&&b(Z)[0]===b(w)[0]?0:p,J=c.snapSlideCenter&&b(Z)[0]===b(w)[0]?p:0;"touchmove"==a.type&&(ea!=a.touches.length&&(Q=-1*f+eventX),ea=a.touches.length);if(c.infiniteSlider){if(f<=-1*s[d]){var I=b(F).width();if(f<=-1*ua[d]){var K=-1*E[0];b(C).each(function(a){e.setSliderOffset(b(C)[a],K+p);a<l.length&&(l[a]=-1*K);K+=M[a]});Q-=-1*l[0];n[d]= -1*l[0]+p;s[d]=n[d]+I-r;A[d]=0}else{var S=0,T=e.getSliderOffset(b(C[0]),"x");b(C).each(function(b){e.getSliderOffset(this,"x")<T&&(T=e.getSliderOffset(this,"x"),S=b)});z=n[d]+I;e.setSliderOffset(b(C)[S],z);n[d]=-1*l[1]+p;s[d]=n[d]+I-r;l.splice(0,1);l.splice(l.length,0,-1*z+p);A[d]++}}if(f>=-1*n[d]||0<=f)if(I=b(F).width(),0<=f)for(K=-1*E[0],b(C).each(function(a){e.setSliderOffset(b(C)[a],K+p);a<l.length&&(l[a]=-1*K);K+=M[a]}),Q+=-1*l[0],n[d]=-1*l[0]+p,s[d]=n[d]+I-r,A[d]=H;0<-1*l[0]-I+p;){var P=0,R= e.getSliderOffset(b(C[0]),"x");b(C).each(function(b){e.getSliderOffset(this,"x")>R&&(R=e.getSliderOffset(this,"x"),P=b)});z=n[d]-M[P];e.setSliderOffset(b(C)[P],z);l.splice(0,0,-1*z+p);l.splice(l.length-1,1);n[d]=-1*l[0]+p;s[d]=n[d]+I-r;A[d]--;y[d]++}else P=0,R=e.getSliderOffset(b(C[0]),"x"),b(C).each(function(b){e.getSliderOffset(this,"x")>R&&(R=e.getSliderOffset(this,"x"),P=b)}),z=n[d]-M[P],e.setSliderOffset(b(C)[P],z),l.splice(0,0,-1*z+p),l.splice(l.length-1,1),n[d]=-1*l[0]+p,s[d]=n[d]+I-r,A[d]--}else I= b(F).width(),f>-1*n[d]+p&&(g=-1*(n[d]+-1*(Q-q-eventX+G)*u-q)*z/u),f<-1*s[d]&&(g=-1*(s[d]+J+-1*(Q-q-eventX)*u-q)*z/u);e.setSliderOffset(F,-1*(Q-q-eventX-g)*u-q+J);c.scrollbar&&(e.showScrollbar(c,t),L=Math.floor((Q-eventX-g-n[d]+G)/(s[d]-n[d]+p)*(x-k-v)*u),f=v,0>=L?(f=v-D- -1*L,e.setSliderOffset(b("."+t),0),b("."+t).css({width:f+"px"})):L>=x-k-D-v?(f=x-k-D-L,e.setSliderOffset(b("."+t),L),b("."+t).css({width:f+"px"})):e.setSliderOffset(b("."+t),L));"touchmove"==a.type&&(B=a.touches[0].pageX);a=!1;g= e.calcActiveOffset(c,-1*(Q-eventX-g),l,r,A[d],H,void 0,d);f=(g+A[d]+H)%H;c.infiniteSlider?f!=ba[d]&&(a=!0):g!=y[d]&&(a=!0);if(a&&(y[d]=g,ba[d]=f,ka=!0,f=new e.args("change",c,F,b(F).children(":eq("+f+")"),f,f),b(m).data("args",f),""!=c.onSlideChange))c.onSlideChange(f)}ca=!1});a=b(window);if(X||aa)a=b(document);b(la).bind("touchend.iosSliderEvent",function(b){b=b.originalEvent;if(fa[d]||Y||ya)return!0;if(0!=b.touches.length)for(var a=0;a<b.touches.length;a++)b.touches[a].pageX==B&&e.slowScrollHorizontal(F, C,K,t,W,da,v,r,x,k,D,E,l,M,d,S,H,Z,ka,p,c);else e.slowScrollHorizontal(F,C,K,t,W,da,v,r,x,k,D,E,l,M,d,S,H,Z,ka,p,c);ca=ra=!1});b(a).bind("mouseup.iosSliderEvent-"+d,function(a){U?va.unbind("click.disableClick").bind("click.disableClick",e.preventClick):va.unbind("click.disableClick").bind("click.disableClick",e.enableClick);ja.each(function(){this.onclick=function(a){if(U)return!1;b(this).data("onclick").call(this,a||window.event)}});1.8<=parseFloat(b().jquery)?pa.each(function(){var a=b._data(this, "events");if(void 0!=a&&void 0!=a.click&&"iosSliderEvent"!=a.click[0].namespace){if(!U)return!1;b(this).one("click.disableClick",e.preventClick);var a=b._data(this,"events").click,c=a.pop();a.splice(0,0,c)}}):1.6<=parseFloat(b().jquery)&&pa.each(function(){var a=b(this).data("events");if(void 0!=a&&void 0!=a.click&&"iosSliderEvent"!=a.click[0].namespace){if(!U)return!1;b(this).one("click.disableClick",e.preventClick);var a=b(this).data("events").click,c=a.pop();a.splice(0,0,c)}});if(!ta[d]){if(Y)return!0; b(la).css({cursor:ia});xa=!1;if(void 0==qa)return!0;e.slowScrollHorizontal(qa,C,K,t,W,da,v,r,x,k,D,E,l,M,d,S,H,Z,ka,p,c);qa=void 0}ca=ra=!1})}})},destroy:function(a,g){void 0==g&&(g=this);return b(g).each(function(){var c=b(this),f=c.data("iosslider");if(void 0==f)return!1;void 0==a&&(a=!0);e.autoSlidePause(f.sliderNumber);ta[f.sliderNumber]=!0;b(window).unbind(".iosSliderEvent-"+f.sliderNumber);b(document).unbind(".iosSliderEvent-"+f.sliderNumber);b(document).unbind("keydown.iosSliderEvent");b(this).unbind(".iosSliderEvent"); b(this).children(":first-child").unbind(".iosSliderEvent");b(this).children(":first-child").children().unbind(".iosSliderEvent");a&&(b(this).attr("style",""),b(this).children(":first-child").attr("style",""),b(this).children(":first-child").children().attr("style",""),b(f.settings.navSlideSelector).attr("style",""),b(f.settings.navPrevSelector).attr("style",""),b(f.settings.navNextSelector).attr("style",""),b(f.settings.autoSlideToggleSelector).attr("style",""),b(f.settings.unselectableSelector).attr("style", ""));f.settings.scrollbar&&b(".scrollbarBlock"+f.sliderNumber).remove();for(var f=$[f.sliderNumber],g=0;g<f.length;g++)clearTimeout(f[g]);c.removeData("iosslider");c.removeData("args")})},update:function(a){void 0==a&&(a=this);return b(a).each(function(){var a=b(this),c=a.data("iosslider");if(void 0==c)return!1;c.settings.startAtSlide=a.data("args").currentSlideNumber;V.destroy(!1,this);1!=c.numberOfSlides&&c.settings.infiniteSlider&&(c.settings.startAtSlide=(y[c.sliderNumber]+1+A[c.sliderNumber]+ c.numberOfSlides)%c.numberOfSlides);V.init(c.settings,this);a=new e.args("update",c.settings,c.scrollerNode,b(c.scrollerNode).children(":eq("+(c.settings.startAtSlide-1)+")"),c.settings.startAtSlide-1,c.settings.startAtSlide-1);b(c.stageNode).data("args",a);if(""!=c.settings.onSliderUpdate)c.settings.onSliderUpdate(a)})},addSlide:function(a,e){return this.each(function(){var c=b(this),f=c.data("iosslider");if(void 0==f)return!1;0==b(f.scrollerNode).children().size()?(b(f.scrollerNode).append(a),c.data("args").currentSlideNumber= 1):f.settings.infiniteSlider?(1==e?b(f.scrollerNode).children(":eq(0)").before(a):b(f.scrollerNode).children(":eq("+(e-2)+")").after(a),-1>A[f.sliderNumber]&&y[f.sliderNumber]--,c.data("args").currentSlideNumber>=e&&y[f.sliderNumber]++):(e<=f.numberOfSlides?b(f.scrollerNode).children(":eq("+(e-1)+")").before(a):b(f.scrollerNode).children(":eq("+(e-2)+")").after(a),c.data("args").currentSlideNumber>=e&&c.data("args").currentSlideNumber++);c.data("iosslider").numberOfSlides++;V.update(this)})},removeSlide:function(a){return this.each(function(){var e= b(this).data("iosslider");if(void 0==e)return!1;b(e.scrollerNode).children(":eq("+(a-1)+")").remove();y[e.sliderNumber]>a-1&&y[e.sliderNumber]--;V.update(this)})},goToSlide:function(a,g){void 0==g&&(g=this);return b(g).each(function(){var c=b(this).data("iosslider");if(void 0==c)return!1;a=a>c.childrenOffsets.length?c.childrenOffsets.length-1:a-1;e.changeSlide(a,b(c.scrollerNode),b(c.slideNodes),$[c.sliderNumber],c.scrollbarClass,c.scrollbarWidth,c.stageWidth,c.scrollbarStageWidth,c.scrollMargin, c.scrollBorder,c.originalOffsets,c.childrenOffsets,c.slideNodeOuterWidths,c.sliderNumber,c.infiniteSliderWidth,c.numberOfSlides,c.centeredSlideOffset,c.settings)})},prevSlide:function(){return this.each(function(){var a=b(this).data("iosslider");if(void 0==a)return!1;var g=(y[a.sliderNumber]+A[a.sliderNumber]+a.numberOfSlides)%a.numberOfSlides;(0<g||a.settings.infiniteSlider)&&e.changeSlide(g-1,b(a.scrollerNode),b(a.slideNodes),$[a.sliderNumber],a.scrollbarClass,a.scrollbarWidth,a.stageWidth,a.scrollbarStageWidth, a.scrollMargin,a.scrollBorder,a.originalOffsets,a.childrenOffsets,a.slideNodeOuterWidths,a.sliderNumber,a.infiniteSliderWidth,a.numberOfSlides,a.centeredSlideOffset,a.settings);y[a.sliderNumber]=g})},nextSlide:function(){return this.each(function(){var a=b(this).data("iosslider");if(void 0==a)return!1;var g=(y[a.sliderNumber]+A[a.sliderNumber]+a.numberOfSlides)%a.numberOfSlides;(g<a.childrenOffsets.length-1||a.settings.infiniteSlider)&&e.changeSlide(g+1,b(a.scrollerNode),b(a.slideNodes),$[a.sliderNumber], a.scrollbarClass,a.scrollbarWidth,a.stageWidth,a.scrollbarStageWidth,a.scrollMargin,a.scrollBorder,a.originalOffsets,a.childrenOffsets,a.slideNodeOuterWidths,a.sliderNumber,a.infiniteSliderWidth,a.numberOfSlides,a.centeredSlideOffset,a.settings);y[a.sliderNumber]=g})},lock:function(){return this.each(function(){var a=b(this).data("iosslider");if(void 0==a)return!1;fa[a.sliderNumber]=!0})},unlock:function(){return this.each(function(){var a=b(this).data("iosslider");if(void 0==a)return!1;fa[a.sliderNumber]= !1})},getData:function(){return this.each(function(){var a=b(this).data("iosslider");return void 0==a?!1:a})},autoSlidePause:function(){return this.each(function(){var a=b(this).data("iosslider");if(void 0==a)return!1;T[a.sliderNumber].autoSlide=!1;e.autoSlidePause(a.sliderNumber);return a})},autoSlidePlay:function(){return this.each(function(){var a=b(this).data("iosslider");if(void 0==a)return!1;T[a.sliderNumber].autoSlide=!0;e.autoSlide(b(a.scrollerNode),b(a.slideNodes),$[a.sliderNumber],a.scrollbarClass, a.scrollbarWidth,a.stageWidth,a.scrollbarStageWidth,a.scrollMargin,a.scrollBorder,a.originalOffsets,a.childrenOffsets,a.slideNodeOuterWidths,a.sliderNumber,a.infiniteSliderWidth,a.numberOfSlides,a.centeredSlideOffset,a.settings);return a})}};b.fn.iosSlider=function(a){if(V[a])return V[a].apply(this,Array.prototype.slice.call(arguments,1));if("object"!==typeof a&&a)b.error("invalid method call!");else return V.init.apply(this,arguments)}})(jQuery);