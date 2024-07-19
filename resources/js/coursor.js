var cursoreffects=function(t){"use strict";return t.bubbleCursor=function(t){let i,e,n=t&&t.element,o=n||document.body,h=window.innerWidth,s=window.innerHeight,l={x:h/2,y:h/2},A=[],c=[];function a(t){h=window.innerWidth,s=window.innerHeight,n?(i.width=o.clientWidth,i.height=o.clientHeight):(i.width=h,i.height=s)}function d(t){if(t.touches.length>0)for(let i=0;i<t.touches.length;i++)r(t.touches[i].clientX,t.touches[i].clientY,c[Math.floor(Math.random()*c.length)])}function p(t){if(n){const i=o.getBoundingClientRect();l.x=t.clientX-i.left,l.y=t.clientY-i.top}else l.x=t.clientX,l.y=t.clientY;r(l.x,l.y)}function r(t,i,e){A.push(new g(t,i,e))}function u(){!function(){e.clearRect(0,0,h,s);for(let t=0;t<A.length;t++)A[t].update(e);for(let t=A.length-1;t>=0;t--)A[t].lifeSpan<0&&A.splice(t,1)}(),requestAnimationFrame(u)}function g(t,i,e){const n=Math.floor(60*Math.random()+60);this.initialLifeSpan=n,this.lifeSpan=n,this.velocity={x:(Math.random()<.5?-1:1)*(Math.random()/10),y:-1*Math.random()-.4},this.position={x:t,y:i},this.canv=e,this.baseDimension=4,this.update=function(t){this.position.x+=this.velocity.x,this.position.y+=this.velocity.y,this.velocity.x+=2*(Math.random()<.5?-1:1)/75,this.velocity.y-=Math.random()/600,this.lifeSpan--;const i=.2+(this.initialLifeSpan-this.lifeSpan)/this.initialLifeSpan;t.fillStyle="#e6f1f7",t.strokeStyle="#3a92c5",t.beginPath(),t.arc(this.position.x-this.baseDimension/2*i,this.position.y-this.baseDimension/2,this.baseDimension*i,0,2*Math.PI),t.stroke(),t.fill(),t.closePath()}}i=document.createElement("canvas"),e=i.getContext("2d"),i.style.top="0px",i.style.left="0px",i.style.pointerEvents="none",n?(i.style.position="absolute",o.appendChild(i),i.width=o.clientWidth,i.height=o.clientHeight):(i.style.position="fixed",document.body.appendChild(i),i.width=h,i.height=s),o.addEventListener("mousemove",p),o.addEventListener("touchmove",d,{passive:!0}),o.addEventListener("touchstart",d,{passive:!0}),window.addEventListener("resize",a),u()},t.emojiCursor=function(t){const i=t&&t.emoji||["😀","😂","😆","😊"];let e=t&&t.element,n=e||document.body,o=window.innerWidth,h=window.innerHeight;const s={x:o/2,y:o/2},l={x:o/2,y:o/2};let A=0;const c=[],a=[];let d,p;function r(t){o=window.innerWidth,h=window.innerHeight,e?(d.width=n.clientWidth,d.height=n.clientHeight):(d.width=o,d.height=h)}function u(t){if(t.touches.length>0)for(let i=0;i<t.touches.length;i++)y(t.touches[i].clientX,t.touches[i].clientY,a[Math.floor(Math.random()*a.length)])}function g(t){t.timeStamp-A<16||window.requestAnimationFrame((()=>{if(e){const i=n.getBoundingClientRect();s.x=t.clientX-i.left,s.y=t.clientY-i.top}else s.x=t.clientX,s.y=t.clientY;Math.hypot(s.x-l.x,s.y-l.y)>1&&(y(s.x,s.y,a[Math.floor(Math.random()*i.length)]),l.x=s.x,l.y=s.y,A=t.timeStamp)}))}function y(t,i,e){c.push(new m(t,i,e))}function f(){!function(){p.clearRect(0,0,o,h);for(let t=0;t<c.length;t++)c[t].update(p);for(let t=c.length-1;t>=0;t--)c[t].lifeSpan<0&&c.splice(t,1)}(),requestAnimationFrame(f)}function m(t,i,e){const n=Math.floor(60*Math.random()+80);this.initialLifeSpan=n,this.lifeSpan=n,this.velocity={x:(Math.random()<.5?-1:1)*(Math.random()/2),y:.4*Math.random()+.8},this.position={x:t,y:i},this.canv=e,this.update=function(t){this.position.x+=this.velocity.x,this.position.y+=this.velocity.y,this.lifeSpan--,this.velocity.y+=.05;const i=Math.max(this.lifeSpan/this.initialLifeSpan,0);t.drawImage(this.canv,this.position.x-this.canv.width/2*i,this.position.y-this.canv.height/2,this.canv.width*i,this.canv.height*i)}}d=document.createElement("canvas"),p=d.getContext("2d"),d.style.top="0px",d.style.left="0px",d.style.pointerEvents="none",e?(d.style.position="absolute",n.appendChild(d),d.width=n.clientWidth,d.height=n.clientHeight):(d.style.position="fixed",document.body.appendChild(d),d.width=o,d.height=h),p.font="21px serif",p.textBaseline="middle",p.textAlign="center",i.forEach((t=>{let i=p.measureText(t),e=document.createElement("canvas"),n=e.getContext("2d");e.width=i.width,e.height=2*i.actualBoundingBoxAscent,n.textAlign="center",n.font="21px serif",n.textBaseline="middle",n.fillText(t,e.width/2,i.actualBoundingBoxAscent),a.push(e)})),n.addEventListener("mousemove",g,{passive:!0}),n.addEventListener("touchmove",u,{passive:!0}),n.addEventListener("touchstart",u,{passive:!0}),window.addEventListener("resize",r),f()},t.fairyDustCursor=function(t){let i=t&&t.colors||["#D61C59","#E7D84B","#1B8798"],e=t&&t.element,n=e||document.body,o=window.innerWidth,h=window.innerHeight;const s={x:o/2,y:o/2},l={x:o/2,y:o/2},A=[],c=[];let a,d;function p(t){o=window.innerWidth,h=window.innerHeight,e?(a.width=n.clientWidth,a.height=n.clientHeight):(a.width=o,a.height=h)}function r(t){if(t.touches.length>0)for(let i=0;i<t.touches.length;i++)g(t.touches[i].clientX,t.touches[i].clientY,c[Math.floor(Math.random()*c.length)])}function u(t){window.requestAnimationFrame((()=>{if(e){const i=n.getBoundingClientRect();s.x=t.clientX-i.left,s.y=t.clientY-i.top}else s.x=t.clientX,s.y=t.clientY;Math.hypot(s.x-l.x,s.y-l.y)>1.5&&(g(s.x,s.y,c[Math.floor(Math.random()*i.length)]),l.x=s.x,l.y=s.y)}))}function g(t,i,e){A.push(new f(t,i,e))}function y(){!function(){d.clearRect(0,0,o,h);for(let t=0;t<A.length;t++)A[t].update(d);for(let t=A.length-1;t>=0;t--)A[t].lifeSpan<0&&A.splice(t,1)}(),requestAnimationFrame(y)}function f(t,i,e){const n=Math.floor(30*Math.random()+60);this.initialLifeSpan=n,this.lifeSpan=n,this.velocity={x:(Math.random()<.5?-1:1)*(Math.random()/2),y:.7*Math.random()+.9},this.position={x:t,y:i},this.canv=e,this.update=function(t){this.position.x+=this.velocity.x,this.position.y+=this.velocity.y,this.lifeSpan--,this.velocity.y+=.02;const i=Math.max(this.lifeSpan/this.initialLifeSpan,0);t.drawImage(this.canv,this.position.x-this.canv.width/2*i,this.position.y-this.canv.height/2,this.canv.width*i,this.canv.height*i)}}a=document.createElement("canvas"),d=a.getContext("2d"),a.style.top="0px",a.style.left="0px",a.style.pointerEvents="none",e?(a.style.position="absolute",n.appendChild(a),a.width=n.clientWidth,a.height=n.clientHeight):(a.style.position="fixed",n.appendChild(a),a.width=o,a.height=h),d.font="21px serif",d.textBaseline="middle",d.textAlign="center",i.forEach((t=>{let i=d.measureText("*"),e=document.createElement("canvas"),n=e.getContext("2d");e.width=i.width,e.height=i.actualBoundingBoxAscent+i.actualBoundingBoxDescent,n.fillStyle=t,n.textAlign="center",n.font="21px serif",n.textBaseline="middle",n.fillText("*",e.width/2,i.actualBoundingBoxAscent),c.push(e)})),n.addEventListener("mousemove",u),n.addEventListener("touchmove",r,{passive:!0}),n.addEventListener("touchstart",r,{passive:!0}),window.addEventListener("resize",p),y()},t.followingDotCursor=function(t){let i,e,n=t&&t.element,o=n||document.body,h=window.innerWidth,s=window.innerHeight,l={x:h/2,y:h/2},A=new function(t,i,e,n){this.position={x:t,y:i},this.width=e,this.lag=n,this.moveTowards=function(t,i,e){this.position.x+=(t-this.position.x)/this.lag,this.position.y+=(i-this.position.y)/this.lag,e.fillStyle="rgba(50, 50, 50, 0.65)",e.beginPath(),e.arc(this.position.x,this.position.y,this.width,0,2*Math.PI),e.fill(),e.closePath()}}(h/2,s/2,10,10);function c(t){h=window.innerWidth,s=window.innerHeight,n?(i.width=o.clientWidth,i.height=o.clientHeight):(i.width=h,i.height=s)}function a(t){if(n){const i=o.getBoundingClientRect();l.x=t.clientX-i.left,l.y=t.clientY-i.top}else l.x=t.clientX,l.y=t.clientY}function d(){e.clearRect(0,0,h,s),A.moveTowards(l.x,l.y,e),requestAnimationFrame(d)}i=document.createElement("canvas"),e=i.getContext("2d"),i.style.top="0px",i.style.left="0px",i.style.pointerEvents="none",n?(i.style.position="absolute",o.appendChild(i),i.width=o.clientWidth,i.height=o.clientHeight):(i.style.position="fixed",document.body.appendChild(i),i.width=h,i.height=s),o.addEventListener("mousemove",a),window.addEventListener("resize",c),d()},t.ghostCursor=function(t){let i,e,n=t&&t.element,o=n||document.body,h=window.innerWidth,s=window.innerHeight,l={x:h/2,y:h/2},A=[],c=new Image;function a(t){h=window.innerWidth,s=window.innerHeight,n?(i.width=o.clientWidth,i.height=o.clientHeight):(i.width=h,i.height=s)}function d(t){if(t.touches.length>0)for(let i=0;i<t.touches.length;i++)r(t.touches[i].clientX,t.touches[i].clientY,c)}function p(t){if(n){const i=o.getBoundingClientRect();l.x=t.clientX-i.left,l.y=t.clientY-i.top}else l.x=t.clientX,l.y=t.clientY;r(l.x,l.y,c)}function r(t,i,e){A.push(new g(t,i,e))}function u(){!function(){e.clearRect(0,0,h,s);for(let t=0;t<A.length;t++)A[t].update(e);for(let t=A.length-1;t>=0;t--)A[t].lifeSpan<0&&A.splice(t,1)}(),requestAnimationFrame(u)}function g(t,i,e){this.initialLifeSpan=40,this.lifeSpan=40,this.position={x:t,y:i},this.image=e,this.update=function(t){this.lifeSpan--;const i=Math.max(this.lifeSpan/this.initialLifeSpan,0);t.globalAlpha=i,t.drawImage(this.image,this.position.x,this.position.y)}}c.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAATCAYAAACk9eypAAAAAXNSR0IArs4c6QAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAhGVYSWZNTQAqAAAACAAFARIAAwAAAAEAAQAAARoABQAAAAEAAABKARsABQAAAAEAAABSASgAAwAAAAEAAgAAh2kABAAAAAEAAABaAAAAAAAAAEgAAAABAAAASAAAAAEAA6ABAAMAAAABAAEAAKACAAQAAAABAAAADKADAAQAAAABAAAAEwAAAAAChpcNAAAACXBIWXMAAAsTAAALEwEAmpwYAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAABqElEQVQoFY3SPUvDQBgH8BREpRHExYiDgmLFl6WC+AYmWeyLg4i7buJX8DMpOujgyxGvUYeCgzhUQUSKKLUS0+ZyptXh8Z5Ti621ekPyJHl+uftfomhaf9Ei5JyxXKfynyEA6EYcLHpwyflT958GAQ7DTABNHd8EbtDbEH2BD5QEQmi2mM8P/Iq+A0SzszEg+3sPjDnDdVEtQKQbMUidHD3xVzf6A9UDEmEm+8h9KTqTVUjT+vB53aHrCbAPiceYq1dQI1Aqv4EhMll0jzv+Y0yiRgCnLRSYyDQHVoqUXe4uKL9l+L7GXC4vkMhE6eW/AOJs9k583ORDUyXMZ8F5SVHVVnllmPNKSFagAJ5DofaqGXw/gHBYg51dIldkmknY3tguv3jOtHR4+MqAzaraJXbEhqHhcQlwGSOi5pytVQHZLN5s0WNe8HPrLYlFsO20RPHkImxsbmHdLJFI76th7Z4SeuF53hTeFLvhRCJRCTKZKxgdnRDbW+iozFJbBMw14/ElwGYc0egMBMFzT21f5Rog33Z7dX02GBm7WV5ZfT5Nn5bE3zuCDe9UxdTpNvK+5AAAAABJRU5ErkJggg==",i=document.createElement("canvas"),e=i.getContext("2d"),i.style.top="0px",i.style.left="0px",i.style.pointerEvents="none",n?(i.style.position="absolute",o.appendChild(i),i.width=o.clientWidth,i.height=o.clientHeight):(i.style.position="fixed",document.body.appendChild(i),i.width=h,i.height=s),o.addEventListener("mousemove",p),o.addEventListener("touchmove",d,{passive:!0}),o.addEventListener("touchstart",d,{passive:!0}),window.addEventListener("resize",a),u()},t.rainbowCursor=function(t){let i,e,n=t&&t.element,o=n||document.body,h=window.innerWidth,s=window.innerHeight,l={x:h/2,y:h/2},A=[];const c=t?.length||20,a=t?.colors||["#FE0000","#FD8C00","#FFE500","#119F0B","#0644B3","#C22EDC"],d=t.size||3;let p=!1;function r(t){h=window.innerWidth,s=window.innerHeight,n?(i.width=o.clientWidth,i.height=o.clientHeight):(i.width=h,i.height=s)}function u(t){if(n){const i=o.getBoundingClientRect();l.x=t.clientX-i.left,l.y=t.clientY-i.top}else l.x=t.clientX,l.y=t.clientY;if(!1===p){p=!0;for(let t=0;t<c;t++)i=l.x,e=l.y,void 0,A.push(new y(i,e))}var i,e}function g(){!function(){e.clearRect(0,0,h,s),e.lineJoin="round";let t=[],i=l.x,n=l.y;A.forEach((function(e,o,h){let s=h[o+1]||h[0];e.position.x=i,e.position.y=n,t.push({x:i,y:n}),i+=.4*(s.position.x-e.position.x),n+=.4*(s.position.y-e.position.y)})),a.forEach(((i,n)=>{e.beginPath(),e.strokeStyle=i,t.length&&e.moveTo(t[0].x,t[0].y+n*(d-1)),t.forEach(((t,i)=>{0!==i&&e.lineTo(t.x,t.y+n*d)})),e.lineWidth=d,e.lineCap="round",e.stroke()}))}(),requestAnimationFrame(g)}function y(t,i){this.position={x:t,y:i}}i=document.createElement("canvas"),e=i.getContext("2d"),i.style.top="0px",i.style.left="0px",i.style.pointerEvents="none",n?(i.style.position="absolute",o.appendChild(i),i.width=o.clientWidth,i.height=o.clientHeight):(i.style.position="fixed",document.body.appendChild(i),i.width=h,i.height=s),o.addEventListener("mousemove",u),window.addEventListener("resize",r),g()},t.snowflakeCursor=function(t){let i,e,n=t&&t.element,o=n||document.body,h=["❄️"],s=window.innerWidth,l=window.innerHeight,A={x:s/2,y:s/2},c=[],a=[];function d(t){s=window.innerWidth,l=window.innerHeight,n?(i.width=o.clientWidth,i.height=o.clientHeight):(i.width=s,i.height=l)}function p(t){if(t.touches.length>0)for(let i=0;i<t.touches.length;i++)u(t.touches[i].clientX,t.touches[i].clientY,a[Math.floor(Math.random()*a.length)])}function r(t){if(n){const i=o.getBoundingClientRect();A.x=t.clientX-i.left,A.y=t.clientY-i.top}else A.x=t.clientX,A.y=t.clientY;u(A.x,A.y,a[Math.floor(Math.random()*h.length)])}function u(t,i,e){c.push(new y(t,i,e))}function g(){!function(){e.clearRect(0,0,s,l);for(let t=0;t<c.length;t++)c[t].update(e);for(let t=c.length-1;t>=0;t--)c[t].lifeSpan<0&&c.splice(t,1)}(),requestAnimationFrame(g)}function y(t,i,e){const n=Math.floor(60*Math.random()+80);this.initialLifeSpan=n,this.lifeSpan=n,this.velocity={x:(Math.random()<.5?-1:1)*(Math.random()/2),y:1+Math.random()},this.position={x:t,y:i},this.canv=e,this.update=function(t){this.position.x+=this.velocity.x,this.position.y+=this.velocity.y,this.lifeSpan--,this.velocity.x+=2*(Math.random()<.5?-1:1)/75,this.velocity.y-=Math.random()/300;const i=Math.max(this.lifeSpan/this.initialLifeSpan,0),e=.0174533*(2*this.lifeSpan);t.translate(this.position.x,this.position.y),t.rotate(e),t.drawImage(this.canv,-this.canv.width/2*i,-this.canv.height/2,this.canv.width*i,this.canv.height*i),t.rotate(-e),t.translate(-this.position.x,-this.position.y)}}i=document.createElement("canvas"),e=i.getContext("2d"),i.style.top="0px",i.style.left="0px",i.style.pointerEvents="none",n?(i.style.position="absolute",o.appendChild(i),i.width=o.clientWidth,i.height=o.clientHeight):(i.style.position="fixed",document.body.appendChild(i),i.width=s,i.height=l),e.font="12px serif",e.textBaseline="middle",e.textAlign="center",h.forEach((t=>{let i=e.measureText(t),n=document.createElement("canvas"),o=n.getContext("2d");n.width=i.width,n.height=2*i.actualBoundingBoxAscent,o.textAlign="center",o.font="12px serif",o.textBaseline="middle",o.fillText(t,n.width/2,i.actualBoundingBoxAscent),a.push(n)})),o.addEventListener("mousemove",r),o.addEventListener("touchmove",p,{passive:!0}),o.addEventListener("touchstart",p,{passive:!0}),window.addEventListener("resize",d),g()},t.springyEmojiCursor=function(t){let i,e,n,o=t&&t.emoji||"🤪",h=t&&t.element,s=h||document.body,l=window.innerWidth,A=window.innerHeight,c={x:l/2,y:l/2},a=[];function d(t){l=window.innerWidth,A=window.innerHeight,h?(i.width=s.clientWidth,i.height=s.clientHeight):(i.width=l,i.height=A)}function p(t){if(t.touches.length>0)if(h){const i=s.getBoundingClientRect();c.x=t.touches[0].clientX-i.left,c.y=t.touches[0].clientY-i.top}else c.x=t.touches[0].clientX,c.y=t.touches[0].clientY}function r(t){if(h){const i=s.getBoundingClientRect();c.x=t.clientX-i.left,c.y=t.clientY-i.top}else c.x=t.clientX,c.y=t.clientY}function u(){!function(){i.width=i.width,a[0].position.x=c.x,a[0].position.y=c.y;for(let t=1;t<7;t++){let n=new g(0,0);t>0&&y(t-1,t,n),t<6&&y(t+1,t,n);let o,h,s=new g(10*-a[t].velocity.x,10*-a[t].velocity.y),l=new g((n.X+s.X)/1,(n.Y+s.Y)/1+50);a[t].velocity.x+=.01*l.X,a[t].velocity.y+=.01*l.Y,Math.abs(a[t].velocity.x)<.1&&Math.abs(a[t].velocity.y)<.1&&Math.abs(l.X)<.1&&Math.abs(l.Y)<.1&&(a[t].velocity.x=0,a[t].velocity.y=0),a[t].position.x+=a[t].velocity.x,a[t].position.y+=a[t].velocity.y,o=i.clientHeight,h=i.clientWidth,a[t].position.y>=o-11-1&&(a[t].velocity.y>0&&(a[t].velocity.y=.7*-a[t].velocity.y),a[t].position.y=o-11-1),a[t].position.x>=h-11&&(a[t].velocity.x>0&&(a[t].velocity.x=.7*-a[t].velocity.x),a[t].position.x=h-11-1),a[t].position.x<0&&(a[t].velocity.x<0&&(a[t].velocity.x=.7*-a[t].velocity.x),a[t].position.x=0),a[t].draw(e)}}(),requestAnimationFrame(u)}function g(t,i){this.X=t,this.Y=i}function y(t,i,e){let n=a[t].position.x-a[i].position.x,o=a[t].position.y-a[i].position.y,h=Math.sqrt(n*n+o*o);if(h>10){let t=10*(h-10);e.X+=n/h*t,e.Y+=o/h*t}}function f(t){this.position={x:c.x,y:c.y},this.velocity={x:0,y:0},this.canv=t,this.draw=function(t){t.drawImage(this.canv,this.position.x-this.canv.width/2,this.position.y-this.canv.height/2,this.canv.width,this.canv.height)}}!function(){i=document.createElement("canvas"),e=i.getContext("2d"),i.style.top="0px",i.style.left="0px",i.style.pointerEvents="none",h?(i.style.position="absolute",s.appendChild(i),i.width=s.clientWidth,i.height=s.clientHeight):(i.style.position="fixed",document.body.appendChild(i),i.width=l,i.height=A),e.font="16px serif",e.textBaseline="middle",e.textAlign="center";let t=e.measureText(o),c=document.createElement("canvas"),g=c.getContext("2d");c.width=t.width,c.height=2*t.actualBoundingBoxAscent,g.textAlign="center",g.font="16px serif",g.textBaseline="middle",g.fillText(o,c.width/2,t.actualBoundingBoxAscent),n=c;let y=0;for(y=0;y<7;y++)a[y]=new f(n);s.addEventListener("mousemove",r),s.addEventListener("touchmove",p,{passive:!0}),s.addEventListener("touchstart",p,{passive:!0}),window.addEventListener("resize",d),u()}()},t.trailingCursor=function(t){let i,e,n=t&&t.element,o=n||document.body,h=window.innerWidth,s=window.innerHeight,l={x:h/2,y:h/2},A=[];const c=t.particles||15;let a=!1,d=new Image;function p(t){h=window.innerWidth,s=window.innerHeight,n?(i.width=o.clientWidth,i.height=o.clientHeight):(i.width=h,i.height=s)}function r(t){if(n){const i=o.getBoundingClientRect();l.x=t.clientX-i.left,l.y=t.clientY-i.top}else l.x=t.clientX,l.y=t.clientY;if(!1===a){a=!0;for(let t=0;t<c;t++)i=l.x,e=l.y,h=d,A.push(new g(i,e,h))}var i,e,h}function u(){!function(){e.clearRect(0,0,h,s);let t=l.x,i=l.y;A.forEach((function(n,o,h){let s=h[o+1]||h[0];n.position.x=t,n.position.y=i,n.move(e),t+=.4*(s.position.x-n.position.x),i+=.4*(s.position.y-n.position.y)}))}(),requestAnimationFrame(u)}function g(t,i,e){this.position={x:t,y:i},this.image=e,this.move=function(t){t.drawImage(this.image,this.position.x,this.position.y)}}d.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAATCAYAAACk9eypAAAAAXNSR0IArs4c6QAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAhGVYSWZNTQAqAAAACAAFARIAAwAAAAEAAQAAARoABQAAAAEAAABKARsABQAAAAEAAABSASgAAwAAAAEAAgAAh2kABAAAAAEAAABaAAAAAAAAAEgAAAABAAAASAAAAAEAA6ABAAMAAAABAAEAAKACAAQAAAABAAAADKADAAQAAAABAAAAEwAAAAAChpcNAAAACXBIWXMAAAsTAAALEwEAmpwYAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAABqElEQVQoFY3SPUvDQBgH8BREpRHExYiDgmLFl6WC+AYmWeyLg4i7buJX8DMpOujgyxGvUYeCgzhUQUSKKLUS0+ZyptXh8Z5Ti621ekPyJHl+uftfomhaf9Ei5JyxXKfynyEA6EYcLHpwyflT958GAQ7DTABNHd8EbtDbEH2BD5QEQmi2mM8P/Iq+A0SzszEg+3sPjDnDdVEtQKQbMUidHD3xVzf6A9UDEmEm+8h9KTqTVUjT+vB53aHrCbAPiceYq1dQI1Aqv4EhMll0jzv+Y0yiRgCnLRSYyDQHVoqUXe4uKL9l+L7GXC4vkMhE6eW/AOJs9k583ORDUyXMZ8F5SVHVVnllmPNKSFagAJ5DofaqGXw/gHBYg51dIldkmknY3tguv3jOtHR4+MqAzaraJXbEhqHhcQlwGSOi5pytVQHZLN5s0WNe8HPrLYlFsO20RPHkImxsbmHdLJFI76th7Z4SeuF53hTeFLvhRCJRCTKZKxgdnRDbW+iozFJbBMw14/ElwGYc0egMBMFzT21f5Rog33Z7dX02GBm7WV5ZfT5Nn5bE3zuCDe9UxdTpNvK+5AAAAABJRU5ErkJggg==",i=document.createElement("canvas"),e=i.getContext("2d"),i.style.top="0px",i.style.left="0px",i.style.pointerEvents="none",n?(i.style.position="absolute",o.appendChild(i),i.width=o.clientWidth,i.height=o.clientHeight):(i.style.position="fixed",document.body.appendChild(i),i.width=h,i.height=s),o.addEventListener("mousemove",r),window.addEventListener("resize",p),u()},Object.defineProperty(t,"__esModule",{value:!0}),t}({});