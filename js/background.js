if("pc"===device){function blurBG(){this.canvas=document.getElementById("fluid"),this.ctx=this.canvas.getContext("2d"),this.length=128,this.size=this.length*this.length*2,this.img=this.ctx.createImageData(this.length,this.length),this.data=this.img.data,this.t=0,this.increment=1/this.length,this.arr=[],this.fps=60,this.canvas.width=this.canvas.height=this.length,this.draw()}blurBG.prototype.hue=function(t){return 255*Math.min(Math.max(t,0),1)},blurBG.prototype.i=function(t,i,a){return t+(i-t)*(a=a*a*a*(6*a*a-15*a+10))},blurBG.prototype.n=function(t,i){var a=this,e=Math.abs(t*a.length+i)%a.size;return a.arr[e]},blurBG.prototype.oct=function(t,i){return this.push(1.2*t,2.2*i)+.5*this.push(2*t,2*i)},blurBG.prototype.push=function(t,i){var a=this,e=Math.floor(t),r=Math.floor(i);return a.i(a.i(a.n(e,r),a.n(e+1,r),t-e),a.i(a.n(e,r+1),a.n(e+1,r+1),t-e),i-r)},blurBG.prototype.draw=function(){for(var l=this,t=0;t<l.size;++t)l.arr[t]=1.5*Math.random()-.5;!function d(){setTimeout(function(){l.t+=l.increment/2;for(var t=1;0<=t;t-=l.increment)for(var i=1;0<=i;i-=l.increment){var a=(i*l.length+t)*l.length*4,e=Math.sqrt(t*t+i*i),r=l.oct(t,i),n=l.oct(t+2,i+l.t/3),s=l.oct(t+.3*e+r/22+.7,i+n/5+2),o=l.oct(t+r/3+4*l.t,i+n/3+5),c=(l.oct(t+s/5,i+o/2),r*o/2),h=n*s/2;l.data[a+0]=l.data[a+1]=l.data[a+2]=l.data[a+3]=l.hue(c+h)}l.ctx.putImageData(l.img,0,0),requestAnimationFrame(d)},1e3/l.fps)}()};var blurbackgr=new blurBG}function Particles(){this.canvas=document.getElementById("canvas"),this.ctx=this.canvas.getContext("2d"),this.colors=["255, 255, 255","90, 90, 200","50, 150, 50"],this.minRadius=10,this.maxRadius=255,this.minOpacity=.005,this.maxOpacity=.6,this.minSpeed=.005,this.maxSpeed=1,this.numParticles=60}Particles.prototype._rand=function(t,i){return Math.random()*(i-t)+t},Particles.prototype.init=function(){this.render(),this.createCircle()},Particles.prototype.render=function(){var t=this;t.canvas.width=windowW,t.canvas.height=windowH,$(window).on("resize",t.render)},Particles.prototype.createCircle=function(){for(var t=[],i=0;i<this.numParticles;i++){var a=this,e=a.colors[~~a._rand(0,a.colors.length)];vy=a._rand(a.minSpeed,a.maxSpeed),vx=a._rand(a.minSpeed,a.maxSpeed),r=1,t[i]={radius:r,xPos:a._rand(0,canvas.width),yPos:a._rand(0,canvas.height),xVelocity:a._rand(a.minSpeed,a.maxSpeed),yVelocity:vy,color:"rgba("+e+","+a._rand(a.minOpacity,a.maxOpacity)+")"},a.draw(t,i)}a.animate(t)},Particles.prototype.draw=function(t,i){var a=this.ctx;a.fillStyle=t[i].color,a.beginPath(),a.arc(t[i].xPos,t[i].yPos,t[i].radius,0,2*Math.PI,!1),a.fill()},Particles.prototype.animate=function(a){var e=this,r=e.ctx;window.requestAnimationFrame(function t(){r.clearRect(0,0,canvas.width,canvas.height);for(var i=0;i<e.numParticles;i++)a[i].xPos+=a[i].xVelocity,a[i].yPos-=a[i].yVelocity,a[i].xPos>e.canvas.width+a[i].radius||a[i].yPos>e.canvas.height+a[i].radius?e.resetParticle(a,i):e.draw(a,i);window.requestAnimationFrame(t)})},Particles.prototype.resetParticle=function(t,i){var a=this;.5<a._rand(0,1)?(t[i].xPos=-t[i].radius,t[i].yPos=a._rand(0,canvas.height)):(t[i].xPos=a._rand(0,canvas.width),t[i].yPos=canvas.height+t[i].radius),a.draw(t,i)};var particle=new Particles;particle.init();