var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},e=function(t){return t&&t.Math==Math&&t},n=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof t&&t)||function(){return this}()||Function("return this")(),r=function(t){return"function"==typeof t},o=r,i=function(t){return"object"==typeof t?null!==t:o(t)},a=i,u=n.document,c=a(u)&&a(u.createElement),s=function(t){return c?u.createElement(t):{}},l=s("span").classList,f=l&&l.constructor&&l.constructor.prototype,p=f===Object.prototype?void 0:f,y=function(t){try{return!!t()}catch(t){return!0}},d=!y((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),h=d,v=Function.prototype,g=v.bind,m=v.call,b=h&&g.bind(m,m),j=h?function(t){return t&&b(t)}:function(t){return t&&function(){return m.apply(t,arguments)}},S=j,O=S({}.toString),x=S("".slice),w=y,T=function(t){return x(O(t),8,-1)},P=Object,M=j("".split),L=w((function(){return!P("z").propertyIsEnumerable(0)}))?function(t){return"String"==T(t)?M(t,""):P(t)}:P,E=TypeError,k=function(t){if(null==t)throw E("Can't call method on "+t);return t},_=L,A=k,C=function(t){return _(A(t))},I={exports:{}},R=n,F=Object.defineProperty,G=function(t,e){try{F(R,t,{value:e,configurable:!0,writable:!0})}catch(n){R[t]=e}return e},J=G,D=n["__core-js_shared__"]||J("__core-js_shared__",{}),H=D;(I.exports=function(t,e){return H[t]||(H[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.23.3",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.23.3/LICENSE",source:"https://github.com/zloirock/core-js"});var N,$,V=k,z=Object,B=function(t){return z(V(t))},U=B,W=j({}.hasOwnProperty),X=Object.hasOwn||function(t,e){return W(U(t),e)},q=j,Q=0,Y=Math.random(),K=q(1..toString),Z=function(t){return"Symbol("+(void 0===t?"":t)+")_"+K(++Q+Y,36)},tt=n,et=r,nt=function(t){return et(t)?t:void 0},rt=function(t,e){return arguments.length<2?nt(tt[t]):tt[t]&&tt[t][e]},ot=n,it=rt("navigator","userAgent")||"",at=ot.process,ut=ot.Deno,ct=at&&at.versions||ut&&ut.version,st=ct&&ct.v8;st&&($=(N=st.split("."))[0]>0&&N[0]<4?1:+(N[0]+N[1])),!$&&it&&(!(N=it.match(/Edge\/(\d+)/))||N[1]>=74)&&(N=it.match(/Chrome\/(\d+)/))&&($=+N[1]);var lt=$,ft=y,pt=!!Object.getOwnPropertySymbols&&!ft((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&lt&&lt<41})),yt=pt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,dt=n,ht=I.exports,vt=X,gt=Z,mt=pt,bt=yt,jt=ht("wks"),St=dt.Symbol,Ot=St&&St.for,xt=bt?St:St&&St.withoutSetter||gt,wt=function(t){if(!vt(jt,t)||!mt&&"string"!=typeof jt[t]){var e="Symbol."+t;mt&&vt(St,t)?jt[t]=St[t]:jt[t]=bt&&Ot?Ot(e):xt(e)}return jt[t]},Tt=i,Pt=String,Mt=TypeError,Lt=function(t){if(Tt(t))return t;throw Mt(Pt(t)+" is not an object")},Et={},kt=!y((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),_t=kt&&y((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),At={},Ct=s,It=!kt&&!y((function(){return 7!=Object.defineProperty(Ct("div"),"a",{get:function(){return 7}}).a})),Rt=d,Ft=Function.prototype.call,Gt=Rt?Ft.bind(Ft):function(){return Ft.apply(Ft,arguments)},Jt=j({}.isPrototypeOf),Dt=rt,Ht=r,Nt=Jt,$t=Object,Vt=yt?function(t){return"symbol"==typeof t}:function(t){var e=Dt("Symbol");return Ht(e)&&Nt(e.prototype,$t(t))},zt=String,Bt=r,Ut=function(t){try{return zt(t)}catch(t){return"Object"}},Wt=TypeError,Xt=function(t){if(Bt(t))return t;throw Wt(Ut(t)+" is not a function")},qt=Gt,Qt=r,Yt=i,Kt=TypeError,Zt=Gt,te=i,ee=Vt,ne=function(t,e){var n=t[e];return null==n?void 0:Xt(n)},re=function(t,e){var n,r;if("string"===e&&Qt(n=t.toString)&&!Yt(r=qt(n,t)))return r;if(Qt(n=t.valueOf)&&!Yt(r=qt(n,t)))return r;if("string"!==e&&Qt(n=t.toString)&&!Yt(r=qt(n,t)))return r;throw Kt("Can't convert object to primitive value")},oe=TypeError,ie=wt("toPrimitive"),ae=function(t,e){if(!te(t)||ee(t))return t;var n,r=ne(t,ie);if(r){if(void 0===e&&(e="default"),n=Zt(r,t,e),!te(n)||ee(n))return n;throw oe("Can't convert object to primitive value")}return void 0===e&&(e="number"),re(t,e)},ue=Vt,ce=function(t){var e=ae(t,"string");return ue(e)?e:e+""},se=kt,le=It,fe=_t,pe=Lt,ye=ce,de=TypeError,he=Object.defineProperty,ve=Object.getOwnPropertyDescriptor;At.f=se?fe?function(t,e,n){if(pe(t),e=ye(e),pe(n),"function"==typeof t&&"prototype"===e&&"value"in n&&"writable"in n&&!n.writable){var r=ve(t,e);r&&r.writable&&(t[e]=n.value,n={configurable:"configurable"in n?n.configurable:r.configurable,enumerable:"enumerable"in n?n.enumerable:r.enumerable,writable:!1})}return he(t,e,n)}:he:function(t,e,n){if(pe(t),e=ye(e),pe(n),le)try{return he(t,e,n)}catch(t){}if("get"in n||"set"in n)throw de("Accessors not supported");return"value"in n&&(t[e]=n.value),t};var ge=Math.ceil,me=Math.floor,be=Math.trunc||function(t){var e=+t;return(e>0?me:ge)(e)},je=function(t){var e=+t;return e!=e||0===e?0:be(e)},Se=je,Oe=Math.max,xe=Math.min,we=je,Te=Math.min,Pe=function(t){return t>0?Te(we(t),9007199254740991):0},Me=C,Le=function(t,e){var n=Se(t);return n<0?Oe(n+e,0):xe(n,e)},Ee=function(t){return Pe(t.length)},ke=function(t){return function(e,n,r){var o,i=Me(e),a=Ee(i),u=Le(r,a);if(t&&n!=n){for(;a>u;)if((o=i[u++])!=o)return!0}else for(;a>u;u++)if((t||u in i)&&i[u]===n)return t||u||0;return!t&&-1}},_e={includes:ke(!0),indexOf:ke(!1)},Ae={},Ce=X,Ie=C,Re=_e.indexOf,Fe=Ae,Ge=j([].push),Je=function(t,e){var n,r=Ie(t),o=0,i=[];for(n in r)!Ce(Fe,n)&&Ce(r,n)&&Ge(i,n);for(;e.length>o;)Ce(r,n=e[o++])&&(~Re(i,n)||Ge(i,n));return i},De=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],He=Je,Ne=De,$e=Object.keys||function(t){return He(t,Ne)},Ve=kt,ze=_t,Be=At,Ue=Lt,We=C,Xe=$e;Et.f=Ve&&!ze?Object.defineProperties:function(t,e){Ue(t);for(var n,r=We(e),o=Xe(e),i=o.length,a=0;i>a;)Be.f(t,n=o[a++],r[n]);return t};var qe,Qe=rt("document","documentElement"),Ye=I.exports,Ke=Z,Ze=Ye("keys"),tn=function(t){return Ze[t]||(Ze[t]=Ke(t))},en=Lt,nn=Et,rn=De,on=Ae,an=Qe,un=s,cn=tn("IE_PROTO"),sn=function(){},ln=function(t){return"<script>"+t+"<\/script>"},fn=function(t){t.write(ln("")),t.close();var e=t.parentWindow.Object;return t=null,e},pn=function(){try{qe=new ActiveXObject("htmlfile")}catch(t){}var t,e;pn="undefined"!=typeof document?document.domain&&qe?fn(qe):((e=un("iframe")).style.display="none",an.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(ln("document.F=Object")),t.close(),t.F):fn(qe);for(var n=rn.length;n--;)delete pn.prototype[rn[n]];return pn()};on[cn]=!0;var yn=Object.create||function(t,e){var n;return null!==t?(sn.prototype=en(t),n=new sn,sn.prototype=null,n[cn]=t):n=pn(),void 0===e?n:nn.f(n,e)},dn=wt,hn=yn,vn=At.f,gn=dn("unscopables"),mn=Array.prototype;null==mn[gn]&&vn(mn,gn,{configurable:!0,value:hn(null)});var bn=function(t){mn[gn][t]=!0},jn={},Sn=r,On=D,xn=j(Function.toString);Sn(On.inspectSource)||(On.inspectSource=function(t){return xn(t)});var wn,Tn,Pn,Mn=On.inspectSource,Ln=r,En=Mn,kn=n.WeakMap,_n=Ln(kn)&&/native code/.test(En(kn)),An=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},Cn=At,In=An,Rn=kt?function(t,e,n){return Cn.f(t,e,In(1,n))}:function(t,e,n){return t[e]=n,t},Fn=_n,Gn=n,Jn=j,Dn=i,Hn=Rn,Nn=X,$n=D,Vn=tn,zn=Ae,Bn=Gn.TypeError,Un=Gn.WeakMap;if(Fn||$n.state){var Wn=$n.state||($n.state=new Un),Xn=Jn(Wn.get),qn=Jn(Wn.has),Qn=Jn(Wn.set);wn=function(t,e){if(qn(Wn,t))throw new Bn("Object already initialized");return e.facade=t,Qn(Wn,t,e),e},Tn=function(t){return Xn(Wn,t)||{}},Pn=function(t){return qn(Wn,t)}}else{var Yn=Vn("state");zn[Yn]=!0,wn=function(t,e){if(Nn(t,Yn))throw new Bn("Object already initialized");return e.facade=t,Hn(t,Yn,e),e},Tn=function(t){return Nn(t,Yn)?t[Yn]:{}},Pn=function(t){return Nn(t,Yn)}}var Kn={set:wn,get:Tn,has:Pn,enforce:function(t){return Pn(t)?Tn(t):wn(t,{})},getterFor:function(t){return function(e){var n;if(!Dn(e)||(n=Tn(e)).type!==t)throw Bn("Incompatible receiver, "+t+" required");return n}}},Zn={},tr={},er={}.propertyIsEnumerable,nr=Object.getOwnPropertyDescriptor,rr=nr&&!er.call({1:2},1);tr.f=rr?function(t){var e=nr(this,t);return!!e&&e.enumerable}:er;var or=kt,ir=Gt,ar=tr,ur=An,cr=C,sr=ce,lr=X,fr=It,pr=Object.getOwnPropertyDescriptor;Zn.f=or?pr:function(t,e){if(t=cr(t),e=sr(e),fr)try{return pr(t,e)}catch(t){}if(lr(t,e))return ur(!ir(ar.f,t,e),t[e])};var yr={exports:{}},dr=kt,hr=X,vr=Function.prototype,gr=dr&&Object.getOwnPropertyDescriptor,mr=hr(vr,"name"),br={EXISTS:mr,PROPER:mr&&"something"===function(){}.name,CONFIGURABLE:mr&&(!dr||dr&&gr(vr,"name").configurable)},jr=y,Sr=r,Or=X,xr=kt,wr=br.CONFIGURABLE,Tr=Mn,Pr=Kn.enforce,Mr=Kn.get,Lr=Object.defineProperty,Er=xr&&!jr((function(){return 8!==Lr((function(){}),"length",{value:8}).length})),kr=String(String).split("String"),_r=yr.exports=function(t,e,n){"Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!Or(t,"name")||wr&&t.name!==e)&&(xr?Lr(t,"name",{value:e,configurable:!0}):t.name=e),Er&&n&&Or(n,"arity")&&t.length!==n.arity&&Lr(t,"length",{value:n.arity});try{n&&Or(n,"constructor")&&n.constructor?xr&&Lr(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var r=Pr(t);return Or(r,"source")||(r.source=kr.join("string"==typeof e?e:"")),t};Function.prototype.toString=_r((function(){return Sr(this)&&Mr(this).source||Tr(this)}),"toString");var Ar=r,Cr=At,Ir=yr.exports,Rr=G,Fr=function(t,e,n,r){r||(r={});var o=r.enumerable,i=void 0!==r.name?r.name:e;if(Ar(n)&&Ir(n,i,r),r.global)o?t[e]=n:Rr(e,n);else{try{r.unsafe?t[e]&&(o=!0):delete t[e]}catch(t){}o?t[e]=n:Cr.f(t,e,{value:n,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})}return t},Gr={},Jr=Je,Dr=De.concat("length","prototype");Gr.f=Object.getOwnPropertyNames||function(t){return Jr(t,Dr)};var Hr={};Hr.f=Object.getOwnPropertySymbols;var Nr,$r,Vr,zr=rt,Br=Gr,Ur=Hr,Wr=Lt,Xr=j([].concat),qr=zr("Reflect","ownKeys")||function(t){var e=Br.f(Wr(t)),n=Ur.f;return n?Xr(e,n(t)):e},Qr=X,Yr=qr,Kr=Zn,Zr=At,to=y,eo=r,no=/#|\.prototype\./,ro=function(t,e){var n=io[oo(t)];return n==uo||n!=ao&&(eo(e)?to(e):!!e)},oo=ro.normalize=function(t){return String(t).replace(no,".").toLowerCase()},io=ro.data={},ao=ro.NATIVE="N",uo=ro.POLYFILL="P",co=ro,so=n,lo=Zn.f,fo=Rn,po=Fr,yo=G,ho=function(t,e,n){for(var r=Yr(e),o=Zr.f,i=Kr.f,a=0;a<r.length;a++){var u=r[a];Qr(t,u)||n&&Qr(n,u)||o(t,u,i(e,u))}},vo=co,go=function(t,e){var n,r,o,i,a,u=t.target,c=t.global,s=t.stat;if(n=c?so:s?so[u]||yo(u,{}):(so[u]||{}).prototype)for(r in e){if(i=e[r],o=t.dontCallGetSet?(a=lo(n,r))&&a.value:n[r],!vo(c?r:u+(s?".":"#")+r,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;ho(i,o)}(t.sham||o&&o.sham)&&fo(i,"sham",!0),po(n,r,i,t)}},mo=!y((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype})),bo=X,jo=r,So=B,Oo=mo,xo=tn("IE_PROTO"),wo=Object,To=wo.prototype,Po=Oo?wo.getPrototypeOf:function(t){var e=So(t);if(bo(e,xo))return e[xo];var n=e.constructor;return jo(n)&&e instanceof n?n.prototype:e instanceof wo?To:null},Mo=y,Lo=r,Eo=Po,ko=Fr,_o=wt("iterator"),Ao=!1;[].keys&&("next"in(Vr=[].keys())?($r=Eo(Eo(Vr)))!==Object.prototype&&(Nr=$r):Ao=!0),(null==Nr||Mo((function(){var t={};return Nr[_o].call(t)!==t})))&&(Nr={}),Lo(Nr[_o])||ko(Nr,_o,(function(){return this}));var Co={IteratorPrototype:Nr,BUGGY_SAFARI_ITERATORS:Ao},Io=At.f,Ro=X,Fo=wt("toStringTag"),Go=function(t,e,n){t&&!n&&(t=t.prototype),t&&!Ro(t,Fo)&&Io(t,Fo,{configurable:!0,value:e})},Jo=Co.IteratorPrototype,Do=yn,Ho=An,No=Go,$o=jn,Vo=function(){return this},zo=r,Bo=String,Uo=TypeError,Wo=j,Xo=Lt,qo=function(t){if("object"==typeof t||zo(t))return t;throw Uo("Can't set "+Bo(t)+" as a prototype")},Qo=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Wo(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(n,[]),e=n instanceof Array}catch(t){}return function(n,r){return Xo(n),qo(r),e?t(n,r):n.__proto__=r,n}}():void 0),Yo=go,Ko=Gt,Zo=r,ti=function(t,e,n,r){var o=e+" Iterator";return t.prototype=Do(Jo,{next:Ho(+!r,n)}),No(t,o,!1),$o[o]=Vo,t},ei=Po,ni=Qo,ri=Go,oi=Rn,ii=Fr,ai=jn,ui=br.PROPER,ci=br.CONFIGURABLE,si=Co.IteratorPrototype,li=Co.BUGGY_SAFARI_ITERATORS,fi=wt("iterator"),pi=function(){return this},yi=C,di=bn,hi=jn,vi=Kn,gi=At.f,mi=function(t,e,n,r,o,i,a){ti(n,e,r);var u,c,s,l=function(t){if(t===o&&h)return h;if(!li&&t in y)return y[t];switch(t){case"keys":case"values":case"entries":return function(){return new n(this,t)}}return function(){return new n(this)}},f=e+" Iterator",p=!1,y=t.prototype,d=y[fi]||y["@@iterator"]||o&&y[o],h=!li&&d||l(o),v="Array"==e&&y.entries||d;if(v&&(u=ei(v.call(new t)))!==Object.prototype&&u.next&&(ei(u)!==si&&(ni?ni(u,si):Zo(u[fi])||ii(u,fi,pi)),ri(u,f,!0)),ui&&"values"==o&&d&&"values"!==d.name&&(ci?oi(y,"name","values"):(p=!0,h=function(){return Ko(d,this)})),o)if(c={values:l("values"),keys:i?h:l("keys"),entries:l("entries")},a)for(s in c)(li||p||!(s in y))&&ii(y,s,c[s]);else Yo({target:e,proto:!0,forced:li||p},c);return y[fi]!==h&&ii(y,fi,h,{name:o}),ai[e]=h,c},bi=kt,ji=vi.set,Si=vi.getterFor("Array Iterator"),Oi=mi(Array,"Array",(function(t,e){ji(this,{type:"Array Iterator",target:yi(t),index:0,kind:e})}),(function(){var t=Si(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values"),xi=hi.Arguments=hi.Array;if(di("keys"),di("values"),di("entries"),bi&&"values"!==xi.name)try{gi(xi,"name",{value:"values"})}catch(t){}var wi=n,Ti={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},Pi=p,Mi=Oi,Li=Rn,Ei=wt,ki=Ei("iterator"),_i=Ei("toStringTag"),Ai=Mi.values,Ci=function(t,e){if(t){if(t[ki]!==Ai)try{Li(t,ki,Ai)}catch(e){t[ki]=Ai}if(t[_i]||Li(t,_i,e),Ti[e])for(var n in Mi)if(t[n]!==Mi[n])try{Li(t,n,Mi[n])}catch(e){t[n]=Mi[n]}}};for(var Ii in Ti)Ci(wi[Ii]&&wi[Ii].prototype,Ii);Ci(Pi,"DOMTokenList");var Ri=_e.includes,Fi=bn;go({target:"Array",proto:!0,forced:y((function(){return!Array(1).includes()}))},{includes:function(t){return Ri(this,t,arguments.length>1?arguments[1]:void 0)}}),Fi("includes");const Gi=()=>{let t,e={messageStyle:"none",tex2jax:{inlineMath:[["$","$"],["\\(","\\)"]],skipTags:["script","noscript","style","textarea","pre"]},skipStartupTypeset:!0};return{id:"mathjax2",init:function(n){t=n;let r=t.getConfig().mathjax2||t.getConfig().math||{},o={...e,...r},i=(o.mathjax||"https://cdn.jsdelivr.net/npm/mathjax@2/MathJax.js")+"?config="+(o.config||"TeX-AMS_HTML-full");o.tex2jax={...e.tex2jax,...r.tex2jax},o.mathjax=o.config=null,function(t,e){let n=document.querySelector("head"),r=document.createElement("script");r.type="text/javascript",r.src=t;let o=()=>{"function"==typeof e&&(e.call(),e=null)};r.onload=o,r.onreadystatechange=()=>{"loaded"===this.readyState&&o()},n.appendChild(r)}(i,(function(){MathJax.Hub.Config(o),MathJax.Hub.Queue(["Typeset",MathJax.Hub,t.getRevealElement()]),MathJax.Hub.Queue(t.layout),t.on("slidechanged",(function(t){MathJax.Hub.Queue(["Typeset",MathJax.Hub,t.currentSlide])}))}))}}},Ji=Gi;
/*!
 * This plugin is a wrapper for the MathJax2,
 * MathJax3 and KaTeX typesetter plugins.
 */
var Di=Plugin=Object.assign(Ji(),{KaTeX:()=>{let t,e={version:"latest",delimiters:[{left:"$$",right:"$$",display:!0},{left:"$",right:"$",display:!1},{left:"\\(",right:"\\)",display:!1},{left:"\\[",right:"\\]",display:!0}],ignoredTags:["script","noscript","style","textarea","pre"]};const n=t=>new Promise(((e,n)=>{const r=document.createElement("script");r.type="text/javascript",r.onload=e,r.onerror=n,r.src=t,document.head.append(r)}));return{id:"katex",init:function(r){t=r;let o=t.getConfig().katex||{},i={...e,...o};const{local:a,version:u,extensions:c,...s}=i;let l=i.local||"https://cdn.jsdelivr.net/npm/katex",f=i.local?"":"@"+i.version,p=l+f+"/dist/katex.min.css",y=l+f+"/dist/contrib/mhchem.min.js",d=l+f+"/dist/contrib/auto-render.min.js",h=[l+f+"/dist/katex.min.js"];i.extensions&&i.extensions.includes("mhchem")&&h.push(y),h.push(d);const v=()=>{renderMathInElement(r.getSlidesElement(),s),t.layout()};(t=>{let e=document.createElement("link");e.rel="stylesheet",e.href=t,document.head.appendChild(e)})(p),async function(t){for(const e of t)await n(e)}(h).then((()=>{t.isReady()?v():t.on("ready",v.bind(this))}))}}},MathJax2:Gi,MathJax3:()=>{let t,e={tex:{inlineMath:[["$","$"],["\\(","\\)"]]},options:{skipHtmlTags:["script","noscript","style","textarea","pre"]},startup:{ready:()=>{MathJax.startup.defaultReady(),MathJax.startup.promise.then((()=>{Reveal.layout()}))}}};return{id:"mathjax3",init:function(n){t=n;let r=t.getConfig().mathjax3||{},o={...e,...r};o.tex={...e.tex,...r.tex},o.options={...e.options,...r.options},o.startup={...e.startup,...r.startup};let i=o.mathjax||"https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";o.mathjax=null,window.MathJax=o,function(t,e){let n=document.createElement("script");n.type="text/javascript",n.id="MathJax-script",n.src=t,n.async=!0,n.onload=()=>{"function"==typeof e&&(e.call(),e=null)},document.head.appendChild(n)}(i,(function(){Reveal.addEventListener("slidechanged",(function(t){MathJax.typeset()}))}))}}}});export{Di as default};
