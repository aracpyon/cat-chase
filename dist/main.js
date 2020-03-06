!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);var o=new THREE.Color("#ffe066"),i=new THREE.PlaneGeometry(30,window.innerHeight),a=new THREE.MeshBasicMaterial({color:o}),s=new THREE.Mesh(i,a);s.position.set(0,0,0),s.rotation.x=-.5*Math.PI;var r=new THREE.BoxGeometry(1,1,1),d=new THREE.MeshLambertMaterial({color:16250871}),c=(new THREE.Mesh(r,d),new THREE.MeshStandardMaterial({color:16250871})),E=new THREE.SphereBufferGeometry(.8,32,Math.round(8),0,2*Math.PI,0,.5*Math.PI),p=new THREE.Mesh(E,c);p.position.set(0,0,0);var l=new THREE.SphereGeometry(.2,20),u=new THREE.Mesh(l,c),w=new THREE.Mesh(l,c);function m(e){THREE.Curve.call(this),this.scale=void 0===e?1:e}u.position.set(-.5,.5,-.5),w.position.set(.5,.5,-.5),m.prototype=Object.create(THREE.Curve.prototype),m.prototype.constructor=m,m.prototype.getPoint=function(e){var t=3*e-1.5,n=Math.sin(2*Math.PI*e);return new THREE.Vector3(t,n,0).multiplyScalar(this.scale)};var h=new m(.3),T=new THREE.TubeGeometry(h,20,.08,8,!1),f=new THREE.Mesh(T,c);f.position.set(0,.5,1),f.rotation.y=1.5;var y=new THREE.Group;y.add(p,u,w,f);var H=new THREE.PointLight(16777215,1,1e3),v=new THREE.PointLight(16777215,2,1e3);function M(e,t,n,o){var i=e-n,a=t-o;return Math.sqrt(Math.pow(i,2)+Math.pow(a,2))}H.position.set(0,10,0),v.position.set(0,0,25);var R=(new THREE.TextureLoader).load("src/assets/cat_face_2.PNG"),g=(new THREE.TextureLoader).load("src/assets/cat_ear.PNG"),x=new THREE.MeshBasicMaterial({map:g}),L=new THREE.MeshBasicMaterial({map:R}),b=(new THREE.MeshLambertMaterial({color:16250871}),new THREE.Geometry),P=new THREE.Vector3(-1.5,0,0),z=new THREE.Vector3(1.5,0,0),B=new THREE.Vector3(0,3,0);b.vertices.push(P),b.vertices.push(z),b.vertices.push(B),b.faces.push(new THREE.Face3(0,1,2)),b.computeFaceNormals();var G=new THREE.CircleGeometry(4,32,32),I=(new THREE.TextureLoader).load("src/assets/cat_leg.PNG"),S=(new THREE.TextureLoader).load("src/assets/cat_paw.PNG"),_=new THREE.CylinderGeometry(2,2.3,23,32),j=new THREE.MeshBasicMaterial({map:I}),C=new THREE.MeshLambertMaterial({map:S}),O=new THREE.TorusGeometry(1.5,2,16,100);var N=[],k=[];function F(e,t){var n=new THREE.Mesh(G,L),o=new THREE.Mesh(b,x),i=new THREE.Mesh(b,x);n.position.set(0,0,0),o.position.set(-2,3,0),o.rotation.z=44.5,i.position.set(2,3,0),i.rotation.z=-44.5;var a=new THREE.Group;a.add(n,o,i);var s=new THREE.Mesh(_,j),r=new THREE.Mesh(O,C);s.position.set(0,0,0),s.rotation.y=360,r.position.set(0,-9.5,1),r.rotation.x=.5*Math.PI;var d=new THREE.Group;d.add(s,r);var c=t.position.z-35,E=t.position.z-70;d.position.x=30*(Math.random()-.5),d.position.y=40,d.position.z=Math.random()*(E-c)+c,a.position.x=30*(Math.random()-.5),a.position.y=-2,a.position.z=Math.random()*(E-c)+c,function(e){(new TimelineMax).to(e.position,1,{y:11,ease:Expo.easeIn})}(d),function(e){(new TimelineMax).to(e.position,1,{y:3,ease:Expo.easeIn})}(a),a.position.x!==d.position.x&&a.position.z!==d.position.z&&(e.add(d,a),k.push(d),N.push(a))}var W,V=new THREE.Scene,A=0,q=!0,X=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,1e3);X.position.z=4,X.position.x=0,X.position.y=2;var D=new THREE.WebGLRenderer({antialias:!0}),J=document.getElementById("game-over-container");D.setClearColor("#80e5ff"),D.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(D.domElement);var K=document.getElementsByTagName("canvas")[0],Q=document.getElementById("play-song"),U=document.getElementById("splash-song"),Y=document.getElementById("blast1");document.getElementById("blast2");window.addEventListener("resize",(function(){D.setSize(window.innerWidth,window.innerHeight),X.aspect=window.innerWidth/window.innerHeight,X.updateProjectionMatrix()})),V.add(y,s,v,H),document.addEventListener("mousemove",(function(e){var t=document.getElementsByTagName("canvas")[0],n=e.clientX-t.offsetLeft-t.width/2;n>-t.width/2&&n<t.width/2&&(y.position.x=n/110)}),!1),q&&U.play();var Z=document.getElementById("sound-on"),$=document.getElementById("sound-off");function ee(){W=requestAnimationFrame(ee),A>60&&(F(V,y),A=0),k.forEach((function(e){M(y.position.x,y.position.z,e.position.x,e.position.z)<3&&(Q.pause(),cancelAnimationFrame(W),J.classList.add("show"),K.classList.add("faded"),q&&Y.play())})),N.forEach((function(e){M(y.position.x,y.position.z,e.position.x,e.position.z)<3&&(Q.pause(),q&&Y.play(),cancelAnimationFrame(W),J.classList.add("show"),K.classList.add("faded"))})),y.position.z-=.3,X.position.z-=.3,s.position.z-=.3,A+=1,D.render(V,X)}Z.addEventListener("click",(function(){Z.classList.add("hidden"),$.classList.remove("hidden"),q=!1,U.pause()})),$.addEventListener("click",(function(){$.classList.add("hidden"),Z.classList.remove("hidden"),q=!0,U.play()})),window.addEventListener("click",(function(e){var t=new TimelineMax;t.to(y.position,.3,{y:5,ease:Expo.easeOut}),t.to(y.position,.1,{y:0,ease:Expo.ease})})),D.render(V,X);var te=document.getElementById("start"),ne=document.getElementById("splash"),oe=document.getElementById("start-again");te.addEventListener("click",(function(){ne.classList.add("hidden"),ee(),q&&(U.pause(),Q.play())})),oe.addEventListener("click",(function(){location.reload(),q=!0}))}]);
//# sourceMappingURL=main.js.map