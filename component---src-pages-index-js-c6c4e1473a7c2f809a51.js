/*! For license information please see component---src-pages-index-js-c6c4e1473a7c2f809a51.js.LICENSE.txt */
"use strict";(self.webpackChunksharanya_land=self.webpackChunksharanya_land||[]).push([[936],{4824:function(e,t,o){o.r(t),o.d(t,{default:function(){return M}});var r=o(1504),a=o(8236),n=o(8764),i=o(8376),c=o(5648),l=o(2888),s=o(5412),d=o(2760),u=o(6656);class h extends r.PureComponent{constructor(e){super(e),this.$=r.createRef(),this._=r.createRef()}render(){return r.createElement("span",{ref:this.$},r.createElement("a",{...this.props,ref:this._},this.props.children))}componentDidMount(){this.paint()}getSnapshotBeforeUpdate(){return this.reset(),null}componentDidUpdate(){this.paint()}componentWillUnmount(){this.reset()}paint(){const e=this.$.current.appendChild(document.createElement("span"));Promise.resolve().then(o.bind(o,6060)).then((({render:t})=>{null!=this._.current&&t(e.appendChild(this._.current),(function(t){try{e.parentNode.replaceChild(t,e)}catch(e){}}))}))}reset(){this.$.current.replaceChild(this._.current,this.$.current.lastChild)}}var g=h;var f,p=()=>r.createElement(r.Fragment,null,r.createElement(g,{className:"github-button",href:"https://github.com/cobidev/gatsby-simplefolio/fork","data-icon":"octicon-repo-forked","data-size":"large","data-show-count":"true","aria-label":"Fork cobidev/gatsby-simplefolio on GitHub"},"Fork"),r.createElement(g,{className:"github-button",href:"https://github.com/cobidev/gatsby-simplefolio","data-icon":"octicon-star","data-size":"large","data-show-count":"true","aria-label":"Star cobidev/gatsby-simplefolio on GitHub"},"Star")),b=new Uint8Array(16);function m(){if(!f&&!(f="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return f(b)}var v=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var w=function(e){return"string"==typeof e&&v.test(e)},A=[],k=0;k<256;++k)A.push((k+256).toString(16).substr(1));var y,E,C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=(A[e[t+0]]+A[e[t+1]]+A[e[t+2]]+A[e[t+3]]+"-"+A[e[t+4]]+A[e[t+5]]+"-"+A[e[t+6]]+A[e[t+7]]+"-"+A[e[t+8]]+A[e[t+9]]+"-"+A[e[t+10]]+A[e[t+11]]+A[e[t+12]]+A[e[t+13]]+A[e[t+14]]+A[e[t+15]]).toLowerCase();if(!w(o))throw TypeError("Stringified UUID is invalid");return o},x=0,L=0;var F=function(e,t,o){var r=t&&o||0,a=t||new Array(16),n=(e=e||{}).node||y,i=void 0!==e.clockseq?e.clockseq:E;if(null==n||null==i){var c=e.random||(e.rng||m)();null==n&&(n=y=[1|c[0],c[1],c[2],c[3],c[4],c[5]]),null==i&&(i=E=16383&(c[6]<<8|c[7]))}var l=void 0!==e.msecs?e.msecs:Date.now(),s=void 0!==e.nsecs?e.nsecs:L+1,d=l-x+(s-L)/1e4;if(d<0&&void 0===e.clockseq&&(i=i+1&16383),(d<0||l>x)&&void 0===e.nsecs&&(s=0),s>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");x=l,L=s,E=i;var u=(1e4*(268435455&(l+=122192928e5))+s)%4294967296;a[r++]=u>>>24&255,a[r++]=u>>>16&255,a[r++]=u>>>8&255,a[r++]=255&u;var h=l/4294967296*1e4&268435455;a[r++]=h>>>8&255,a[r++]=255&h,a[r++]=h>>>24&15|16,a[r++]=h>>>16&255,a[r++]=i>>>8|128,a[r++]=255&i;for(var g=0;g<6;++g)a[r+g]=n[g];return t||C(a)};const S={title:"Hiya, I'm Sharanya --",name:"Sharanya Soundararajan",subtitle:"UX engineer  |  Builder of things",intro:"I have a background in visual communication and user experience design, and I'm passionate about engineering engaging experiences using a variety of media, frequently combining art and code. \n I'm currently part of a team working on developer experience at Autodesk."},Z={img:"Sharanya_mugshot.jpg",paragraphOne:"",paragraphTwo:"",paragraphThree:"",resume:""},O=[{id:F(),img:"01-malloci.png",title:"Malloci",info:"Grad school capstone project focussing on facilitating the creation of platform agnostic VR by using markdown files of text and images -- and no code whatsoever.",info2:"",url:"https://mallocivr.github.io",projpage:"https://github.com/mallocivr/mallocivr.github.io"},{id:F(),img:"sos-02.png",title:"Save Our Species",info:'A collaborative curation of infographics illustrating the dire straits of endangered species at the hands of humans. The driver I focused on was "art".',info2:"",url:"https://sharanya204.github.io/sos/",projpage:"https://github.com/sharanya204/sos/"},{id:F(),img:"aa_01.png",title:"Avian Ambiguities",info:"A graphic novella about the evolution of birds.",info2:"",url:"https://issuu.com/sharanya204/docs/bookfinaled",projpage:"avianambiguities"},{id:F(),img:"portaledge.png",title:"Portaledge",info:"If you'd like to see more whimsy but in CLI",info2:"",url:"https://github.com/sharanya204/term-site",projpage:""}],I={isEnabled:!1},P={networks:[{id:F(),name:"codepen",url:"https://codepen.io/sharanya204-the-flexboxer"},{id:F(),name:"linkedin",url:"https://www.linkedin/com/in/sharanya-sound"},{id:F(),name:"github",url:"https://github.com/sharanya204"}]};var D=()=>{const{footer:e}=(0,r.useContext)(u.cp),{networks:t}=e,{isEnabled:o}=I;return r.createElement("footer",{className:"footer navbar-static-bottom"},r.createElement(d.c,null,r.createElement("a",{href:"#top","aria-label":"Back To Top",className:"back-to-top"},r.createElement("i",{className:"fa fa-angle-up fa-2x","aria-hidden":"true"})),r.createElement("div",{className:"social-links"},t&&t.map((e=>{const{id:t,name:o,url:a}=e;return r.createElement("a",{key:t,href:a||"https://github.com/sharanya204",rel:"noopener noreferrer",target:"_blank","aria-label":o},r.createElement("i",{className:"fa fa-"+(o||"refresh")+" fa-inverse"}))}))),r.createElement("p",{className:"footer__text"},"© ",(new Date).getFullYear()," - sharanya soundararajan"),o&&r.createElement(p,null)))},j=o(7592);function z(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function G(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?z(Object(o),!0).forEach((function(t){(0,i.c)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):z(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var V=function(){const{0:e,1:t}=(0,r.useState)({}),{0:o,1:a}=(0,r.useState)({}),{0:i,1:d}=(0,r.useState)([]),{0:h,1:g}=(0,r.useState)({});return(0,r.useEffect)((()=>{t(G({},S)),a(G({},Z)),d((0,n.c)(O)),g(G({},P))}),[]),r.createElement(u.sb,{value:{hero:e,projects:i,about:o,footer:h}},r.createElement("nav",{className:"nav"},r.createElement(c.cH,{className:"nav__text",to:"/"},"Home"),r.createElement(c.cH,{className:"nav__text",to:"#projects"},"Projects"),r.createElement(c.cH,{className:"nav__text",to:"#about"},"About")),r.createElement(l.c,null),r.createElement(j.c,null),r.createElement(s.c,null),r.createElement(D,null))},R=o(2281);var M=()=>r.createElement(r.Fragment,null,r.createElement(a.S,null,r.createElement("meta",{charSet:"utf-8"}),r.createElement("title",null,"Sharanya Soundararajan"),r.createElement("html",{lang:"en"}),r.createElement("meta",{name:"description",content:"Sharanya Soundararajan"}),r.createElement("link",{rel:"icon",type:"image/png",href:"data:image/png;base64,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"})),r.createElement(R.Router,{basepath:"/"},r.createElement(s.c,{path:"#about"}),r.createElement(j.c,{path:"#projects"})),r.createElement(V,null))},6060:function(e,t,o){o.r(t),o.d(t,{render:function(){return Z}});var r=window.document,a=window.Math,n=window.HTMLElement,i=window.XMLHttpRequest,c=function(e,t){for(var o=0,r=e.length;o<r;o++)t(e[o])},l=function(e){return function(t,o,r){var a=e.createElement(t);if(null!=o)for(var n in o){var i=o[n];null!=i&&(null!=a[n]?a[n]=i:a.setAttribute(n,i))}return null!=r&&c(r,(function(t){a.appendChild("string"==typeof t?e.createTextNode(t):t)})),a}},s=l(r),d=function(e,t){return{}.hasOwnProperty.call(e,t)},u=function(e){return(""+e).toLowerCase()},h="github.com",g="https://api."+h,f=i&&"prototype"in i&&"withCredentials"in i.prototype,p=f&&n&&"attachShadow"in n.prototype&&!("prototype"in n.prototype.attachShadow),b=function(e,t,o){e.addEventListener?e.addEventListener(t,o,!1):e.attachEvent("on"+t,o)},m=function(e,t,o){e.removeEventListener?e.removeEventListener(t,o,!1):e.detachEvent("on"+t,o)},v={light:".btn:focus-visible,.social-count:focus-visible{outline:2px solid #0969da;outline-offset:-2px}.btn{color:#24292f;background-color:#ebf0f4;border-color:#ccd1d5;border-color:rgba(31,35,40,.15);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23f6f8fa'/%3e%3cstop offset='90%25' stop-color='%23ebf0f4'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #f6f8fa, #ebf0f4 90%);background-image:linear-gradient(180deg, #f6f8fa, #ebf0f4 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF6F8FA', endColorstr='#FFEAEFF3')}:root .btn{filter:none}.btn:hover,.btn:focus{background-color:#e9ebef;background-position:0 -0.5em;border-color:#cbcdd1;border-color:rgba(31,35,40,.15);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23f3f4f6'/%3e%3cstop offset='90%25' stop-color='%23e9ebef'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #f3f4f6, #e9ebef 90%);background-image:linear-gradient(180deg, #f3f4f6, #e9ebef 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF3F4F6', endColorstr='#FFE8EAEE')}:root .btn:hover,:root .btn:focus{filter:none}.btn:active{background-color:#e5e9ed;border-color:#c7cbcf;border-color:rgba(31,35,40,.15);background-image:none;filter:none}.social-count{color:#24292f;background-color:#fff;border-color:#dddedf;border-color:rgba(31,35,40,.15)}.social-count:hover,.social-count:focus{color:#0969da}.octicon-heart{color:#bf3989}",light_high_contrast:".btn:focus-visible,.social-count:focus-visible{outline:2px solid #0349b4;outline-offset:-2px}.btn{color:#0e1116;background-color:#e7ecf0;border-color:#2f3237;border-color:rgba(1,4,9,.8);background-image:none;filter:none}.btn:hover,.btn:focus{background-color:#c4cdd5;background-position:0 -0.5em;border-color:#282c32;border-color:rgba(1,4,9,.8);background-image:none;filter:none}.btn:active{background-color:#d8dde1;border-color:#2c2f34;border-color:rgba(1,4,9,.8)}.social-count{color:#0e1116;background-color:#fff;border-color:#34363a;border-color:rgba(1,4,9,.8)}.social-count:hover,.social-count:focus{color:#0349b4}.octicon-heart{color:#971368}",dark:".btn:focus-visible,.social-count:focus-visible{outline:2px solid #2f81f7;outline-offset:-2px}.btn{color:#c9d1d9;background-color:#1a1e23;border-color:#2f3439;border-color:rgba(240,246,252,.1);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%2321262d'/%3e%3cstop offset='90%25' stop-color='%231a1e23'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #21262d, #1a1e23 90%);background-image:linear-gradient(180deg, #21262d, #1a1e23 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF21262D', endColorstr='#FF191D22')}:root .btn{filter:none}.btn:hover,.btn:focus{background-color:#292e33;background-position:0 -0.5em;border-color:#8b949e;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%2330363d'/%3e%3cstop offset='90%25' stop-color='%23292e33'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #30363d, #292e33 90%);background-image:linear-gradient(180deg, #30363d, #292e33 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF30363D', endColorstr='#FF282D32')}:root .btn:hover,:root .btn:focus{filter:none}.btn:active{background-color:#161719;border-color:#8b949e;background-image:none;filter:none}.social-count{color:#c9d1d9;background-color:#0d1117;border-color:#24282e;border-color:rgba(240,246,252,.1)}.social-count:hover,.social-count:focus{color:#2f81f7}.octicon-heart{color:#db61a2}",dark_dimmed:".btn:focus-visible,.social-count:focus-visible{outline:2px solid #539bf5;outline-offset:-2px}.btn{color:#adbac7;background-color:#30363d;border-color:#40464e;border-color:rgba(205,217,229,.1);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23373e47'/%3e%3cstop offset='90%25' stop-color='%2330363d'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #373e47, #30363d 90%);background-image:linear-gradient(180deg, #373e47, #30363d 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF373E47', endColorstr='#FF2F353C')}:root .btn{filter:none}.btn:hover,.btn:focus{background-color:#3c444d;background-position:0 -0.5em;border-color:#768390;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23444c56'/%3e%3cstop offset='90%25' stop-color='%233c444d'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #444c56, #3c444d 90%);background-image:linear-gradient(180deg, #444c56, #3c444d 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF444C56', endColorstr='#FF3B434C')}:root .btn:hover,:root .btn:focus{filter:none}.btn:active{background-color:#2e3031;border-color:#768390;background-image:none;filter:none}.social-count{color:#adbac7;background-color:#22272e;border-color:#333940;border-color:rgba(205,217,229,.1)}.social-count:hover,.social-count:focus{color:#539bf5}.octicon-heart{color:#c96198}",dark_high_contrast:".btn:focus-visible,.social-count:focus-visible{outline:2px solid #71b7ff;outline-offset:-2px}.btn{color:#f0f3f6;background-color:#272b33;border-color:#7a828e;background-image:none;filter:none}.btn:hover,.btn:focus{background-color:#4a515b;background-position:0 -0.5em;border-color:#bdc4cc;background-image:none;filter:none}.btn:active{background-color:#1d1d1f;border-color:#bdc4cc}.social-count{color:#f0f3f6;background-color:#0a0c10;border-color:#7a828e}.social-count:hover,.social-count:focus{color:#71b7ff}.octicon-heart{color:#ef6eb1}"},w=function(e,t){return"@media(prefers-color-scheme:"+e+"){"+v[d(v,t)?t:e]+"}"},A=function(e){if(null==e)return v.light;if(d(v,e))return v[e];var t=function(e,t,o,r){null==t&&(t="&"),null==o&&(o="="),null==r&&(r=window.decodeURIComponent);var a={};return c(e.split(t),(function(e){if(""!==e){var t=e.split(o);a[r(t[0])]=null!=t[1]?r(t.slice(1).join(o)):void 0}})),a}(e,";",":",(function(e){return e.replace(/^[ \t\n\f\r]+|[ \t\n\f\r]+$/g,"")}));return v[d(v,t["no-preference"])?t["no-preference"]:"light"]+w("light",t.light)+w("dark",t.dark)},k={"comment-discussion":{heights:{16:{width:16,path:'<path d="M1.75 1h8.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 10.25 10H7.061l-2.574 2.573A1.458 1.458 0 0 1 2 11.543V10h-.25A1.75 1.75 0 0 1 0 8.25v-5.5C0 1.784.784 1 1.75 1ZM1.5 2.75v5.5c0 .138.112.25.25.25h1a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h3.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25Zm13 2a.25.25 0 0 0-.25-.25h-.5a.75.75 0 0 1 0-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 14.25 12H14v1.543a1.458 1.458 0 0 1-2.487 1.03L9.22 12.28a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l2.22 2.22v-2.19a.75.75 0 0 1 .75-.75h1a.25.25 0 0 0 .25-.25Z"></path>'}}},download:{heights:{16:{width:16,path:'<path d="M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14Z"></path><path d="M7.25 7.689V2a.75.75 0 0 1 1.5 0v5.689l1.97-1.969a.749.749 0 1 1 1.06 1.06l-3.25 3.25a.749.749 0 0 1-1.06 0L4.22 6.78a.749.749 0 1 1 1.06-1.06l1.97 1.969Z"></path>'}}},eye:{heights:{16:{width:16,path:'<path d="M8 2c1.981 0 3.671.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 0 1 0 1.798c-.45.678-1.367 1.932-2.637 3.023C11.67 13.008 9.981 14 8 14c-1.981 0-3.671-.992-4.933-2.078C1.797 10.83.88 9.576.43 8.898a1.62 1.62 0 0 1 0-1.798c.45-.677 1.367-1.931 2.637-3.022C4.33 2.992 6.019 2 8 2ZM1.679 7.932a.12.12 0 0 0 0 .136c.411.622 1.241 1.75 2.366 2.717C5.176 11.758 6.527 12.5 8 12.5c1.473 0 2.825-.742 3.955-1.715 1.124-.967 1.954-2.096 2.366-2.717a.12.12 0 0 0 0-.136c-.412-.621-1.242-1.75-2.366-2.717C10.824 4.242 9.473 3.5 8 3.5c-1.473 0-2.825.742-3.955 1.715-1.124.967-1.954 2.096-2.366 2.717ZM8 10a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 10Z"></path>'}}},heart:{heights:{16:{width:16,path:'<path d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z"></path>'}}},"issue-opened":{heights:{16:{width:16,path:'<path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>'}}},"mark-github":{heights:{16:{width:16,path:'<path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>'}}},package:{heights:{16:{width:16,path:'<path d="m8.878.392 5.25 3.045c.54.314.872.89.872 1.514v6.098a1.75 1.75 0 0 1-.872 1.514l-5.25 3.045a1.75 1.75 0 0 1-1.756 0l-5.25-3.045A1.75 1.75 0 0 1 1 11.049V4.951c0-.624.332-1.201.872-1.514L7.122.392a1.75 1.75 0 0 1 1.756 0ZM7.875 1.69l-4.63 2.685L8 7.133l4.755-2.758-4.63-2.685a.248.248 0 0 0-.25 0ZM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432Zm6.25 8.271 4.625-2.683a.25.25 0 0 0 .125-.216V5.677L8.75 8.432Z"></path>'}}},play:{heights:{16:{width:16,path:'<path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path>'}}},"repo-forked":{heights:{16:{width:16,path:'<path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>'}}},"repo-template":{heights:{16:{width:16,path:'<path d="M13.25 8a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-.75a.75.75 0 0 1 0-1.5h.75v-.25a.75.75 0 0 1 .75-.75ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2ZM2.75 8a.75.75 0 0 1 .75.75v.268c.083-.012.166-.018.25-.018h.5a.75.75 0 0 1 0 1.5h-.5a.25.25 0 0 0-.25.25v.75c0 .28.114.532.3.714a.75.75 0 1 1-1.05 1.072A2.495 2.495 0 0 1 2 11.5V8.75A.75.75 0 0 1 2.75 8ZM11 .75a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V1.5h-.75A.75.75 0 0 1 11 .75Zm-5 0A.75.75 0 0 1 6.75 0h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 6 .75Zm0 9A.75.75 0 0 1 6.75 9h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 6 9.75ZM4.992.662a.75.75 0 0 1-.636.848c-.436.063-.783.41-.846.846a.751.751 0 0 1-1.485-.212A2.501 2.501 0 0 1 4.144.025a.75.75 0 0 1 .848.637ZM2.75 4a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 2.75 4Zm10.5 0a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75Z"></path>'}}},star:{heights:{16:{width:16,path:'<path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>'}}}},y=function(e,t){e=u(e).replace(/^octicon-/,""),d(k,e)||(e="mark-github");var o=t>=24&&24 in k[e].heights?24:16,r=k[e].heights[o];return'<svg viewBox="0 0 '+r.width+" "+o+'" width="'+t*r.width/o+'" height="'+t+'" class="octicon octicon-'+e+'" aria-hidden="true">'+r.path+"</svg>"},E={},C=function(e,t){var o=E[e]||(E[e]=[]);if(!(o.push(t)>1)){var r=function(e){var t;return function(){t||(t=1,e.apply(this,arguments))}}((function(){for(delete E[e];t=o.shift();)t.apply(null,arguments)}));if(f){var a=new i;b(a,"abort",r),b(a,"error",r),b(a,"load",(function(){var e;try{e=JSON.parse(this.responseText)}catch(t){return void r(t)}r(200!==this.status,e)})),a.open("GET",e),a.send()}else{var n=this||window;n._=function(e){n._=null,r(200!==e.meta.status,e.data)};var c=l(n.document)("script",{async:!0,src:e+(-1!==e.indexOf("?")?"&":"?")+"callback=_"}),s=function(){n._&&n._({meta:{}})};b(c,"load",s),b(c,"error",s),function(e,t,o){if(null!=e.readyState){var r="readystatechange",a=function(){if(t.test(e.readyState))return m(e,r,a),o.apply(this,arguments)};b(e,r,a)}}(c,/de|m/,s),n.document.getElementsByTagName("head")[0].appendChild(c)}}},x=function(e,t,o){var r=l(e.ownerDocument),a=e.appendChild(r("style",{type:"text/css"})),n="body{margin:0}a{text-decoration:none;outline:0}.widget{display:inline-block;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;font-size:0;line-height:0;white-space:nowrap}.btn,.social-count{position:relative;display:inline-block;display:inline-flex;height:14px;padding:2px 5px;font-size:11px;font-weight:600;line-height:14px;vertical-align:bottom;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-repeat:repeat-x;background-position:-1px -1px;background-size:110% 110%;border:1px solid}.btn{border-radius:.25em}.btn:not(:last-child){border-radius:.25em 0 0 .25em}.social-count{border-left:0;border-radius:0 .25em .25em 0}.widget-lg .btn,.widget-lg .social-count{height:16px;padding:5px 10px;font-size:12px;line-height:16px}.octicon{display:inline-block;vertical-align:text-top;fill:currentColor;overflow:visible}"+A(t["data-color-scheme"]);a.styleSheet?a.styleSheet.cssText=n:a.appendChild(e.ownerDocument.createTextNode(n));var i="large"===u(t["data-size"]),c=r("a",{className:"btn",href:t.href,rel:"noopener",target:"_blank",title:t.title||void 0,"aria-label":t["aria-label"]||void 0,innerHTML:y(t["data-icon"],i?16:14)+"&nbsp;"},[r("span",{},[t["data-text"]||""])]),s=e.appendChild(r("div",{className:"widget"+(i?" widget-lg":"")},[c])),d=c.hostname.replace(/\.$/,"");if(("."+d).substring(d.length-10)!=="."+h)return c.removeAttribute("href"),void o(s);var f=(" /"+c.pathname).split(/\/+/);if(((d===h||d==="gist."+h)&&"archive"===f[3]||d===h&&"releases"===f[3]&&("download"===f[4]||"latest"===f[4]&&"download"===f[5])||d==="codeload."+h)&&(c.target="_top"),"true"===u(t["data-show-count"])&&d===h&&"marketplace"!==f[1]&&"sponsors"!==f[1]&&"orgs"!==f[1]&&"users"!==f[1]&&"-"!==f[1]){var p,b;if(!f[2]&&f[1])b="followers",p="?tab=followers";else if(!f[3]&&f[2])b="stargazers_count",p="/stargazers";else if(f[4]||"subscription"!==f[3])if(f[4]||"fork"!==f[3]){if("issues"!==f[3])return void o(s);b="open_issues_count",p="/issues"}else b="forks_count",p="/forks";else b="subscribers_count",p="/watchers";var m=f[2]?"/repos/"+f[1]+"/"+f[2]:"/users/"+f[1];C.call(this,g+m,(function(e,t){if(!e){var a=t[b];s.appendChild(r("a",{className:"social-count",href:t.html_url+p,rel:"noopener",target:"_blank","aria-label":a+" "+b.replace(/_count$/,"").replace("_"," ").slice(0,a<2?-1:void 0)+" on GitHub"},[(""+a).replace(/\B(?=(\d{3})+(?!\d))/g,",")]))}o(s)}))}else o(s)},L=window.devicePixelRatio||1,F=function(e){return(L>1?a.ceil(a.round(e*L)/L*2)/2:a.ceil(e))||0},S=function(e,t){e.style.width=t[0]+"px",e.style.height=t[1]+"px"},Z=function(e,t){if(null!=e&&null!=t)if(e.getAttribute&&(e=function(e){var t={href:e.href,title:e.title,"aria-label":e.getAttribute("aria-label")};return c(["icon","color-scheme","text","size","show-count"],(function(o){var r="data-"+o;t[r]=e.getAttribute(r)})),null==t["data-text"]&&(t["data-text"]=e.textContent||e.innerText),t}(e)),p){var o=s("span");x(o.attachShadow({mode:"closed"}),e,(function(){t(o)}))}else{var n=s("iframe",{src:"javascript:0",title:e.title||void 0,allowtransparency:!0,scrolling:"no",frameBorder:0});S(n,[0,0]),n.style.border="none";var i=function(){var o,c=n.contentWindow;try{o=c.document.body}catch(l){return void r.body.appendChild(n.parentNode.removeChild(n))}m(n,"load",i),x.call(c,o,e,(function(o){var r=function(e){var t=e.offsetWidth,o=e.offsetHeight;if(e.getBoundingClientRect){var r=e.getBoundingClientRect();t=a.max(t,F(r.width)),o=a.max(o,F(r.height))}return[t,o]}(o);n.parentNode.removeChild(n),function(e,t,o){var r=function(){return m(e,t,r),o.apply(this,arguments)};b(e,t,r)}(n,"load",(function(){S(n,r)})),n.src="https://unpkg.com/github-buttons@2.27.0/dist/buttons.html#"+(n.name=function(e,t,o,r){null==t&&(t="&"),null==o&&(o="="),null==r&&(r=window.encodeURIComponent);var a=[];for(var n in e){var i=e[n];null!=i&&a.push(r(n)+o+r(i))}return a.join(t)}(e)),t(n)}))};b(n,"load",i),r.body.appendChild(n)}}}}]);
//# sourceMappingURL=component---src-pages-index-js-c6c4e1473a7c2f809a51.js.map