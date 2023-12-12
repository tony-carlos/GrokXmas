(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9996],{1269:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about-light",function(){return __webpack_require__(4587)}])},7645:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(dynamicOptions,options){let loadableFn=_loadable.default,loadableOptions=(null==options?void 0:options.suspense)?{}:{loading(param){let{error,isLoading,pastDelay}=param;return null}};if(dynamicOptions instanceof Promise?loadableOptions.loader=()=>dynamicOptions:"function"==typeof dynamicOptions?loadableOptions.loader=dynamicOptions:"object"==typeof dynamicOptions&&(loadableOptions=_extends({},loadableOptions,dynamicOptions)),(loadableOptions=_extends({},loadableOptions,options)).suspense&&(delete loadableOptions.ssr,delete loadableOptions.loading),loadableOptions.loadableGenerated&&delete(loadableOptions=_extends({},loadableOptions,loadableOptions.loadableGenerated)).loadableGenerated,"boolean"==typeof loadableOptions.ssr&&!loadableOptions.suspense){if(!loadableOptions.ssr)return delete loadableOptions.ssr,noSSR(loadableFn,loadableOptions);delete loadableOptions.ssr}return loadableFn(loadableOptions)},exports.noSSR=noSSR;var _extends=__webpack_require__(6495).Z,_interop_require_default=__webpack_require__(2648).Z,_loadable=(_interop_require_default(__webpack_require__(7294)),_interop_require_default(__webpack_require__(4588)));function noSSR(LoadableInitializer,loadableOptions){return delete loadableOptions.webpack,delete loadableOptions.modules,LoadableInitializer(loadableOptions)}("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},3644:function(__unused_webpack_module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.LoadableContext=void 0;var _react=(0,__webpack_require__(2648).Z)(__webpack_require__(7294));let LoadableContext=_react.default.createContext(null);exports.LoadableContext=LoadableContext},4588:function(__unused_webpack_module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _extends=__webpack_require__(6495).Z,_react=(0,__webpack_require__(1598).Z)(__webpack_require__(7294)),_loadableContext=__webpack_require__(3644);let ALL_INITIALIZERS=[],READY_INITIALIZERS=[],initialized=!1;function load(loader){let promise=loader(),state={loading:!0,loaded:null,error:null};return state.promise=promise.then(loaded=>(state.loading=!1,state.loaded=loaded,loaded)).catch(err=>{throw state.loading=!1,state.error=err,err}),state}class LoadableSubscription{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:res,_opts:opts}=this;res.loading&&("number"==typeof opts.delay&&(0===opts.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},opts.delay)),"number"==typeof opts.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},opts.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(_err=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(partial){this._state=_extends({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},partial),this._callbacks.forEach(callback=>callback())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(callback){return this._callbacks.add(callback),()=>{this._callbacks.delete(callback)}}constructor(loadFn,opts){this._loadFn=loadFn,this._opts=opts,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function Loadable(opts){return function(loadFn,options){let opts=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},options);opts.suspense&&(opts.lazy=_react.default.lazy(opts.loader));let subscription=null;function init(){if(!subscription){let sub=new LoadableSubscription(loadFn,opts);subscription={getCurrentValue:sub.getCurrentValue.bind(sub),subscribe:sub.subscribe.bind(sub),retry:sub.retry.bind(sub),promise:sub.promise.bind(sub)}}return subscription.promise()}if(!initialized){let moduleIds=opts.webpack?opts.webpack():opts.modules;moduleIds&&READY_INITIALIZERS.push(ids=>{for(let moduleId of moduleIds)if(-1!==ids.indexOf(moduleId))return init()})}function useLoadableModule(){init();let context=_react.default.useContext(_loadableContext.LoadableContext);context&&Array.isArray(opts.modules)&&opts.modules.forEach(moduleName=>{context(moduleName)})}let LoadableComponent=opts.suspense?function(props,ref){return useLoadableModule(),_react.default.createElement(opts.lazy,_extends({},props,{ref}))}:function(props,ref){useLoadableModule();let state=_react.useSyncExternalStore(subscription.subscribe,subscription.getCurrentValue,subscription.getCurrentValue);return _react.default.useImperativeHandle(ref,()=>({retry:subscription.retry}),[]),_react.default.useMemo(()=>{var obj;return state.loading||state.error?_react.default.createElement(opts.loading,{isLoading:state.loading,pastDelay:state.pastDelay,timedOut:state.timedOut,error:state.error,retry:subscription.retry}):state.loaded?_react.default.createElement((obj=state.loaded)&&obj.__esModule?obj.default:obj,props):null},[props,state])};return LoadableComponent.preload=()=>init(),LoadableComponent.displayName="LoadableComponent",_react.default.forwardRef(LoadableComponent)}(load,opts)}function flushInitializers(initializers,ids){let promises=[];for(;initializers.length;){let init=initializers.pop();promises.push(init(ids))}return Promise.all(promises).then(()=>{if(initializers.length)return flushInitializers(initializers,ids)})}Loadable.preloadAll=()=>new Promise((resolveInitializers,reject)=>{flushInitializers(ALL_INITIALIZERS).then(resolveInitializers,reject)}),Loadable.preloadReady=function(){let ids=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(resolvePreload=>{let res=()=>(initialized=!0,resolvePreload());flushInitializers(READY_INITIALIZERS,ids).then(res,res)})},window.__NEXT_PRELOADREADY=Loadable.preloadReady,exports.default=Loadable},4587:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__N_SSG:function(){return __N_SSG},default:function(){return AboutLight}});var jsx_runtime=__webpack_require__(5893),next_link=__webpack_require__(1664),link_default=__webpack_require__.n(next_link);function ArtWorkSection(){return(0,jsx_runtime.jsx)("div",{className:"fugu--artwork-section fugu--section-padding",children:(0,jsx_runtime.jsx)("div",{className:"container",children:(0,jsx_runtime.jsxs)("div",{className:"row",children:[(0,jsx_runtime.jsx)("div",{className:"col-lg-6",children:(0,jsx_runtime.jsxs)("div",{className:"fugu--artwork-right left",children:[(0,jsx_runtime.jsxs)("div",{className:"fugu--artwork-thumb",id:"rotateThree",children:[(0,jsx_runtime.jsx)("img",{className:"wow fadeInLeft","data-wow-delay":".10s",src:"/images/all-img/v4/thumb1.png",alt:""}),(0,jsx_runtime.jsx)("div",{className:"fugu--artwork-data wow fadeInUpX","data-wow-delay":".50s",style:{backgroundImage:"url(/images/all-img/v4/shape.png)"},children:(0,jsx_runtime.jsxs)("p",{children:["fugu--Gen NFT ",(0,jsx_runtime.jsx)("br",{}),"Marketplace"]})})]}),(0,jsx_runtime.jsx)("div",{className:"fugu--shape-art fugu--shape-art2",children:(0,jsx_runtime.jsx)("img",{src:"/images/shape2/shape-v2-3.png",alt:""})})]})}),(0,jsx_runtime.jsx)("div",{className:"col-lg-5",children:(0,jsx_runtime.jsxs)("div",{className:"fugu--default-content content-black",children:[(0,jsx_runtime.jsx)("h2",{children:"We add value to your artwork & sell them"}),(0,jsx_runtime.jsx)("p",{children:"Start your NFT collection quickly & easily by grabbing a free NFT every week! Get in early and grab NFTs before most of the world. Start your journey here."}),(0,jsx_runtime.jsx)("p",{children:"We're excited about a brand new type of digital a called NFT. NFTs have exciting new properties: provably scarce, tradeable, and across multiple applications."}),(0,jsx_runtime.jsx)("div",{className:"fugu--btn-wrap",children:(0,jsx_runtime.jsx)(link_default(),{legacyBehavior:!0,href:"/",children:(0,jsx_runtime.jsx)("a",{className:"fugu--btn bg-orange",children:"Join Community"})})})]})})]})})})}function BreadCrumbSection(){return(0,jsx_runtime.jsx)("div",{className:"fugu--breadcrumbs-section",children:(0,jsx_runtime.jsx)("div",{className:"container",children:(0,jsx_runtime.jsxs)("div",{className:"fugu--breadcrumbs-data dark-content",children:[(0,jsx_runtime.jsx)("h1",{children:"We are creative thinkers about NFTs"}),(0,jsx_runtime.jsx)("p",{children:"An NFT is a digital asset that represents real-world objects like art, music, in-game items, and videos. They are bought and sold online frequently with cryptocurrency, & they are generally encoded with the same underlying software as many cryptos."})]})})})}function CounterSection(){return(0,jsx_runtime.jsxs)("div",{className:"fugu--counter-section",children:[(0,jsx_runtime.jsx)("div",{id:"fugu--counter"}),(0,jsx_runtime.jsx)("div",{className:"container",children:(0,jsx_runtime.jsxs)("div",{className:"fugu--counter-wrap fugu--counter-wrap3",children:[(0,jsx_runtime.jsxs)("div",{className:"fugu--counter-data wow fadeInUpX","data-wow-delay":".10s",children:[(0,jsx_runtime.jsxs)("h2",{children:[(0,jsx_runtime.jsx)("span",{"data-percentage":"45",className:"fugu--counter",children:"0"}),(0,jsx_runtime.jsx)("strong",{children:"K"})]}),(0,jsx_runtime.jsx)("p",{children:"Digital Artworks"})]}),(0,jsx_runtime.jsxs)("div",{className:"fugu--counter-data wow fadeInUpX","data-wow-delay":".20s",children:[(0,jsx_runtime.jsxs)("h2",{children:[(0,jsx_runtime.jsx)("span",{"data-percentage":"87",className:"fugu--counter",children:"0"}),(0,jsx_runtime.jsx)("strong",{children:"K"})]}),(0,jsx_runtime.jsx)("p",{children:"Registered investors"})]}),(0,jsx_runtime.jsxs)("div",{className:"fugu--counter-data wow fadeInUpX","data-wow-delay":".30s",children:[(0,jsx_runtime.jsxs)("h2",{children:[(0,jsx_runtime.jsx)("span",{"data-percentage":"60",className:"fugu--counter",children:"0"}),(0,jsx_runtime.jsx)("strong",{children:"K"})]}),(0,jsx_runtime.jsx)("p",{children:"Total transactions"})]}),(0,jsx_runtime.jsxs)("div",{className:"fugu--counter-data wow fadeInUpX","data-wow-delay":".40s",children:[(0,jsx_runtime.jsxs)("h2",{children:[(0,jsx_runtime.jsx)("span",{"data-percentage":"32",className:"fugu--counter",children:"0"}),(0,jsx_runtime.jsx)("strong",{children:"K"})]}),(0,jsx_runtime.jsx)("p",{children:"Global Creators"})]})]})})]})}function FaqSection(){return(0,jsx_runtime.jsx)("div",{className:"fugu--faq-section fugu--section-padding",children:(0,jsx_runtime.jsx)("div",{className:"container",children:(0,jsx_runtime.jsxs)("div",{className:"row",children:[(0,jsx_runtime.jsx)("div",{className:"col-lg-4",children:(0,jsx_runtime.jsxs)("div",{className:"fugu--default-content content-black",children:[(0,jsx_runtime.jsx)("h2",{children:"Frequently asked questions"}),(0,jsx_runtime.jsx)("p",{children:"FAQ used to refer to a list of answers to typical NFTs questions that users might ask."})]})}),(0,jsx_runtime.jsx)("div",{className:"col-lg-7 offset-lg-1",children:(0,jsx_runtime.jsxs)("div",{className:"fugu--accordion-one",id:"accordionExample",children:[(0,jsx_runtime.jsxs)("div",{className:"accordion-item",children:[(0,jsx_runtime.jsx)("h2",{className:"accordion-header",id:"headingOne",children:(0,jsx_runtime.jsx)("button",{className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:"What is an NFT?"})}),(0,jsx_runtime.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:(0,jsx_runtime.jsx)("div",{className:"accordion-body",children:"At the most basic level, a non-fungible token is a one-of-a-kind, verifiable digital asset that can be exchanged between a creator and a buyer."})})]}),(0,jsx_runtime.jsxs)("div",{className:"accordion-item",children:[(0,jsx_runtime.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:(0,jsx_runtime.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:"What makes an NFT valuable?"})}),(0,jsx_runtime.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:(0,jsx_runtime.jsx)("div",{className:"accordion-body",children:"At the most basic level, a non-fungible token is a one-of-a-kind, verifiable digital asset that can be exchanged between a creator and a buyer."})})]}),(0,jsx_runtime.jsxs)("div",{className:"accordion-item",children:[(0,jsx_runtime.jsx)("h2",{className:"accordion-header",id:"headingThree",children:(0,jsx_runtime.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:"What’s the connection between NFTs & crypto?"})}),(0,jsx_runtime.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:(0,jsx_runtime.jsx)("div",{className:"accordion-body",children:"At the most basic level, a non-fungible token is a one-of-a-kind, verifiable digital asset that can be exchanged between a creator and a buyer."})})]}),(0,jsx_runtime.jsxs)("div",{className:"accordion-item",children:[(0,jsx_runtime.jsx)("h2",{className:"accordion-header",id:"headingFour",children:(0,jsx_runtime.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseFour","aria-expanded":"false","aria-controls":"collapseFour",children:"Are NFTs the future of art and collectibles?"})}),(0,jsx_runtime.jsx)("div",{id:"collapseFour",className:"accordion-collapse collapse","aria-labelledby":"headingFour","data-bs-parent":"#accordionExample",children:(0,jsx_runtime.jsx)("div",{className:"accordion-body",children:"At the most basic level, a non-fungible token is a one-of-a-kind, verifiable digital asset that can be exchanged between a creator and a buyer."})})]}),(0,jsx_runtime.jsxs)("div",{className:"accordion-item",children:[(0,jsx_runtime.jsx)("h2",{className:"accordion-header",id:"headingFive",children:(0,jsx_runtime.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseFive","aria-expanded":"false","aria-controls":"collapseFive",children:"What questions remain about NFTs?"})}),(0,jsx_runtime.jsx)("div",{id:"collapseFive",className:"accordion-collapse collapse","aria-labelledby":"headingFive","data-bs-parent":"#accordionExample",children:(0,jsx_runtime.jsx)("div",{className:"accordion-body",children:"At the most basic level, a non-fungible token is a one-of-a-kind, verifiable digital asset that can be exchanged between a creator and a buyer."})})]})]})})]})})})}var react=__webpack_require__(7294);function FeatureSection(){return(0,jsx_runtime.jsx)("div",{className:"fugu--feature2-section fugu--section-padding2",children:(0,jsx_runtime.jsxs)("div",{className:"container",children:[(0,jsx_runtime.jsx)("div",{className:"fugu--section-title",children:(0,jsx_runtime.jsxs)("div",{className:"fugu--default-content content-black",children:[(0,jsx_runtime.jsx)("h2",{children:"Our vision is to build a strong NFT portfolio of denomination"}),(0,jsx_runtime.jsx)("p",{children:"We're excited about a brand new type of digital good called a non-fungible token. NFTs get their value the transaction proves ownership of the art."})]})}),(0,jsx_runtime.jsxs)("div",{className:"row",children:[(0,jsx_runtime.jsx)("div",{className:"col-xl-4 col-md-6",children:(0,jsx_runtime.jsx)("div",{className:"fugu--feature-wrap wow fadeInUpX","data-wow-delay":".10s",children:(0,jsx_runtime.jsxs)("div",{className:"fugu--feature-data",children:[(0,jsx_runtime.jsx)("h2",{children:"01"}),(0,jsx_runtime.jsx)("span",{children:"Safe and secure"}),(0,jsx_runtime.jsx)("p",{children:"NFTs are safe when bought or sold on reputable exchanges, & they cannot be stolen if users properly secure."})]})})}),(0,jsx_runtime.jsx)("div",{className:"col-xl-4 col-md-6",children:(0,jsx_runtime.jsx)("div",{className:"fugu--feature-wrap wow fadeInUpX","data-wow-delay":".20s",children:(0,jsx_runtime.jsxs)("div",{className:"fugu--feature-data",children:[(0,jsx_runtime.jsx)("h2",{children:"02"}),(0,jsx_runtime.jsx)("span",{children:"Complete transparency"}),(0,jsx_runtime.jsx)("p",{children:"Transparency in a process involves it being completely visible and open to scrutiny, so that it's clear."})]})})}),(0,jsx_runtime.jsx)("div",{className:"col-xl-4 col-md-6",children:(0,jsx_runtime.jsx)("div",{className:"fugu--feature-wrap wow fadeInUpX","data-wow-delay":".30s",children:(0,jsx_runtime.jsxs)("div",{className:"fugu--feature-data",children:[(0,jsx_runtime.jsx)("h2",{children:"03"}),(0,jsx_runtime.jsx)("span",{children:"Creative team"}),(0,jsx_runtime.jsx)("p",{children:"Nexto has creative artists, painters, and designers working tirelessly on NFT art all over the world."})]})})})]})]})})}var v4=__webpack_require__(7632);let teamMemberList=[{name:"Eleanor Pena",designation:"CEO & 3D Designer",fbUserName:"none",liUserName:"none",instaUserName:"none",twitterUserName:"none",image:"team1"},{name:"Arlene McCoy",designation:"Marketing Officer",fbUserName:"none",liUserName:"none",instaUserName:"none",twitterUserName:"none",image:"team2"},{name:"Kathryn Murphy",designation:"Operating Officer",fbUserName:"none",liUserName:"none",instaUserName:"none",twitterUserName:"none",image:"team3"},{name:"Jerome Bell",designation:"Art Director",fbUserName:"none",liUserName:"none",instaUserName:"none",twitterUserName:"none",image:"team4"}];function TeamSection(){return(0,jsx_runtime.jsx)("div",{className:"fugu--team-section fugu--team-three fugu--section-padding2",children:(0,jsx_runtime.jsxs)("div",{className:"container",children:[(0,jsx_runtime.jsxs)("div",{className:"fugu--section-title-wrap",children:[(0,jsx_runtime.jsx)("div",{className:"fugu--section-title",children:(0,jsx_runtime.jsxs)("div",{className:"fugu--default-content content-black",children:[(0,jsx_runtime.jsx)("h2",{children:"A team of innovative and confident people"}),(0,jsx_runtime.jsx)("p",{children:"Meet our expert team who value these relationships and will look for NFTs with a unique and creation processes."})]})}),(0,jsx_runtime.jsx)("div",{className:"fugu--section-button",children:(0,jsx_runtime.jsx)("a",{className:"fugu--btn bg-orange",href:"",children:"View All Members"})})]}),(0,jsx_runtime.jsx)("div",{className:"row",children:teamMemberList.map(el=>(0,jsx_runtime.jsx)("div",{className:"col-xl-3 col-md-6",children:(0,jsx_runtime.jsxs)("div",{className:"fugu--team-wrap wow fadeInUpX","data-wow-delay":".10s",children:[(0,jsx_runtime.jsx)("div",{className:"fugu--team-thumb",children:(0,jsx_runtime.jsx)("img",{src:"/images/all-img/about2/".concat(el.image,".png"),alt:""})}),(0,jsx_runtime.jsxs)("div",{className:"fugu--team-data",children:[(0,jsx_runtime.jsx)("h4",{children:el.name}),(0,jsx_runtime.jsx)("p",{children:el.designation}),(0,jsx_runtime.jsx)("div",{className:"fugu--social-icon fugu--social-icon4",children:(0,jsx_runtime.jsxs)("ul",{children:[(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(link_default(),{href:el.fbUserName,children:(0,jsx_runtime.jsx)("svg",{width:"8",height:"14",viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{d:"M2.61761 13.7535V7.8033H0.615234V5.48437H2.61761V3.77424C2.61761 1.78964 3.82974 0.708984 5.60014 0.708984C6.44818 0.708984 7.17702 0.772123 7.38943 0.800344V2.87437L6.16156 2.87492C5.19872 2.87492 5.01229 3.33245 5.01229 4.00385V5.48437H7.30858L7.00959 7.8033H5.01228V13.7535H2.61761Z",fill:"white"})})})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(link_default(),{href:el.liUserName,children:(0,jsx_runtime.jsxs)("svg",{width:"21",height:"20",viewBox:"0 0 21 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,jsx_runtime.jsx)("path",{d:"M20.1831 20.0002V12.6752C20.1831 9.0752 19.4081 6.3252 15.2081 6.3252C13.1831 6.3252 11.8331 7.4252 11.2831 8.4752H11.2331V6.6502H7.25806V20.0002H11.4081V13.3752C11.4081 11.6252 11.7331 9.9502 13.8831 9.9502C16.0081 9.9502 16.0331 11.9252 16.0331 13.4752V19.9752H20.1831V20.0002Z",fill:"#13111A"}),(0,jsx_runtime.jsx)("path",{d:"M0.508301 6.65039H4.6583V20.0004H0.508301V6.65039Z",fill:"#13111A"}),(0,jsx_runtime.jsx)("path",{d:"M2.58311 0C1.25811 0 0.183105 1.075 0.183105 2.4C0.183105 3.725 1.25811 4.825 2.58311 4.825C3.90811 4.825 4.98311 3.725 4.98311 2.4C4.98311 1.075 3.90811 0 2.58311 0Z",fill:"#13111A"})]})})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(link_default(),{href:el.instaUserName,children:(0,jsx_runtime.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,jsx_runtime.jsx)("path",{d:"M8.00214 2.04978C9.94005 2.04978 10.1695 2.05704 10.9351 2.09194C11.3954 2.09758 11.8513 2.1821 12.283 2.34183C12.5961 2.46257 12.8804 2.64753 13.1177 2.8848C13.355 3.12207 13.5399 3.4064 13.6607 3.71948C13.8204 4.1512 13.9049 4.60711 13.9106 5.0674C13.9451 5.83296 13.9527 6.06245 13.9527 8.00035C13.9527 9.93826 13.9455 10.1677 13.9106 10.9333C13.9049 11.3936 13.8204 11.8495 13.6607 12.2812C13.5399 12.5943 13.355 12.8786 13.1177 13.1159C12.8804 13.3532 12.5961 13.5381 12.283 13.6589C11.8513 13.8186 11.3954 13.9031 10.9351 13.9088C10.1699 13.9433 9.94039 13.9509 8.00214 13.9509C6.0639 13.9509 5.8344 13.9437 5.06919 13.9088C4.60891 13.9031 4.15299 13.8186 3.72127 13.6589C3.40819 13.5381 3.12386 13.3532 2.88659 13.1159C2.64932 12.8786 2.46436 12.5943 2.34362 12.2812C2.18389 11.8495 2.09937 11.3936 2.09373 10.9333C2.05917 10.1677 2.05157 9.93826 2.05157 8.00035C2.05157 6.06245 2.05883 5.83296 2.09373 5.0674C2.09937 4.60711 2.18389 4.1512 2.34362 3.71948C2.46436 3.4064 2.64932 3.12207 2.88659 2.8848C3.12386 2.64753 3.40819 2.46257 3.72127 2.34183C4.15299 2.1821 4.60891 2.09758 5.06919 2.09194C5.83475 2.05738 6.06424 2.04978 8.00214 2.04978ZM8.00214 0.741943C6.0321 0.741943 5.78394 0.750238 5.00975 0.785492C4.40734 0.797474 3.81134 0.911533 3.24707 1.12282C2.76303 1.30519 2.32461 1.59099 1.9624 1.96026C1.59279 2.3226 1.30675 2.76127 1.12426 3.24563C0.912978 3.80989 0.798919 4.4059 0.786937 5.0083C0.752375 5.7818 0.74408 6.02996 0.74408 8.00001C0.74408 9.97005 0.752374 10.2182 0.787628 10.9924C0.79961 11.5948 0.91367 12.1908 1.12496 12.7551C1.30724 13.2394 1.59304 13.678 1.9624 14.0404C2.32481 14.4098 2.76347 14.6956 3.24777 14.8779C3.81203 15.0892 4.40804 15.2032 5.01044 15.2152C5.78463 15.2498 6.03175 15.2588 8.00284 15.2588C9.97392 15.2588 10.221 15.2505 10.9952 15.2152C11.5976 15.2032 12.1936 15.0892 12.7579 14.8779C13.2399 14.6911 13.6776 14.4057 14.043 14.04C14.4084 13.6744 14.6935 13.2365 14.88 12.7544C15.0913 12.1901 15.2054 11.5941 15.2174 10.9917C15.2519 10.2182 15.2602 9.97005 15.2602 8.00001C15.2602 6.02996 15.2519 5.7818 15.2167 5.00761C15.2047 4.40521 15.0906 3.8092 14.8793 3.24494C14.697 2.76065 14.4112 2.32198 14.0419 1.95957C13.6795 1.59021 13.2408 1.30441 12.7565 1.12213C12.1923 0.910842 11.5963 0.796783 10.9938 0.784801C10.2203 0.750238 9.97219 0.741943 8.00214 0.741943Z",fill:"white"}),(0,jsx_runtime.jsx)("path",{d:"M8.0035 4.27417C7.26633 4.27417 6.54571 4.49277 5.93278 4.90231C5.31985 5.31186 4.84213 5.89397 4.56002 6.57503C4.27792 7.25608 4.20411 8.00549 4.34792 8.7285C4.49174 9.4515 4.84672 10.1156 5.36798 10.6369C5.88923 11.1581 6.55335 11.5131 7.27636 11.6569C7.99936 11.8007 8.74878 11.7269 9.42983 11.4448C10.1109 11.1627 10.693 10.685 11.1025 10.0721C11.5121 9.45914 11.7307 8.73853 11.7307 8.00136C11.7307 7.01285 11.338 6.06482 10.639 5.36584C9.94003 4.66686 8.99201 4.27417 8.0035 4.27417ZM8.0035 10.4207C7.52499 10.4207 7.05724 10.2788 6.65938 10.013C6.26151 9.74714 5.95142 9.36928 5.7683 8.92721C5.58519 8.48513 5.53728 7.99867 5.63063 7.52937C5.72398 7.06006 5.9544 6.62897 6.29275 6.29062C6.63111 5.95226 7.0622 5.72184 7.5315 5.62849C8.00081 5.53514 8.48726 5.58305 8.92934 5.76617C9.37142 5.94928 9.74927 6.25938 10.0151 6.65724C10.281 7.0551 10.4229 7.52286 10.4229 8.00136C10.4229 8.64301 10.168 9.25838 9.71424 9.7121C9.26052 10.1658 8.64515 10.4207 8.0035 10.4207Z",fill:"white"}),(0,jsx_runtime.jsx)("path",{d:"M11.8768 4.99755C12.3578 4.99755 12.7477 4.6076 12.7477 4.12658C12.7477 3.64556 12.3578 3.25562 11.8768 3.25562C11.3957 3.25562 11.0058 3.64556 11.0058 4.12658C11.0058 4.6076 11.3957 4.99755 11.8768 4.99755Z",fill:"white"})]})})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(link_default(),{href:el.twitterUserName,children:(0,jsx_runtime.jsx)("svg",{width:"13",height:"11",viewBox:"0 0 13 11",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{d:"M12.6519 1.76691C12.2029 1.96645 11.729 2.09116 11.2302 2.16598C11.729 1.86668 12.1281 1.39279 12.3027 0.819124C11.8288 1.09348 11.305 1.29302 10.7314 1.41773C10.2824 0.943833 9.63392 0.644531 8.93554 0.644531C7.58869 0.644531 6.49125 1.74197 6.49125 3.08883C6.49125 3.28836 6.51619 3.46295 6.56607 3.63755C4.54579 3.53778 2.72504 2.56505 1.50289 1.06854C1.30335 1.44267 1.17865 1.84174 1.17865 2.29069C1.17865 3.13871 1.60266 3.88697 2.27608 4.33592C1.87702 4.31098 1.50289 4.21121 1.1537 4.03662V4.06156C1.1537 5.25876 2.00173 6.25644 3.12411 6.48091C2.92457 6.5308 2.7001 6.55574 2.47562 6.55574C2.32597 6.55574 2.15138 6.5308 2.00173 6.50585C2.32597 7.47859 3.22387 8.2019 4.29637 8.2019C3.44835 8.85038 2.40079 9.24945 1.25347 9.24945C1.05394 9.24945 0.854402 9.24945 0.67981 9.22451C1.77725 9.92288 3.04928 10.322 4.44602 10.322C8.96049 10.322 11.4297 6.58068 11.4297 3.33825C11.4297 3.23848 11.4297 3.11377 11.4297 3.014C11.9036 2.68976 12.3276 2.26575 12.6519 1.76691Z",fill:"white"})})})})]})})]})]})},(0,v4.Z)()))})]})})}var dynamic=__webpack_require__(5152),dynamic_default=__webpack_require__.n(dynamic);let ModalVideo=dynamic_default()(()=>__webpack_require__.e(1239).then(__webpack_require__.bind(__webpack_require__,1239)),{loadableGenerated:{webpack:()=>[1239]},ssr:!1});function VideoSection(){let[isOpen,setOpen]=(0,react.useState)(!1);return(0,jsx_runtime.jsxs)("div",{className:"fugu--video-section3 fugu--section-padding",children:[(0,jsx_runtime.jsx)("div",{className:"container",children:(0,jsx_runtime.jsxs)("div",{className:"fugu--video-wrap",children:[(0,jsx_runtime.jsxs)("div",{className:"fugu--video-column",children:[(0,jsx_runtime.jsx)("div",{className:"fugu--video-thumb wow fadeInUpX","data-wow-delay":".10s",children:(0,jsx_runtime.jsx)("img",{src:"/images/all-img/about2/video-thumb2.png",alt:""})}),(0,jsx_runtime.jsx)("div",{className:"fugu--video-thumb wow fadeInUpX","data-wow-delay":".20s",children:(0,jsx_runtime.jsx)("img",{src:"/images/all-img/about2/video-thumb3.png",alt:""})})]}),(0,jsx_runtime.jsxs)("div",{className:"fugu--popup",onClick:()=>setOpen(!0),children:[(0,jsx_runtime.jsx)("img",{src:"/images/all-img/about2/play-button-orange.png",alt:""}),(0,jsx_runtime.jsx)("div",{className:"fugu--play-btn",children:(0,jsx_runtime.jsx)("img",{src:"/images/all-img/about2/play.png",alt:""})})]})]})}),(0,jsx_runtime.jsx)(ModalVideo,{channel:"youtube",autoplay:!0,isOpen:isOpen,videoId:"E1xkXZs0cAQ",onClose:()=>setOpen(!1)})]})}var __N_SSG=!0;function AboutLight(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(BreadCrumbSection,{}),(0,jsx_runtime.jsx)(CounterSection,{}),(0,jsx_runtime.jsx)(VideoSection,{}),(0,jsx_runtime.jsx)(FeatureSection,{}),(0,jsx_runtime.jsx)(TeamSection,{}),(0,jsx_runtime.jsx)(ArtWorkSection,{}),(0,jsx_runtime.jsx)(FaqSection,{})]})}},5152:function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__(7645)},7632:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";let getRandomValues;__webpack_require__.d(__webpack_exports__,{Z:function(){return esm_browser_v4}});let randomUUID="undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var esm_browser_native={randomUUID};let rnds8=new Uint8Array(16);function rng(){if(!getRandomValues&&!(getRandomValues="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return getRandomValues(rnds8)}let byteToHex=[];for(let i=0;i<256;++i)byteToHex.push((i+256).toString(16).slice(1));var esm_browser_v4=function(options,buf,offset){if(esm_browser_native.randomUUID&&!buf&&!options)return esm_browser_native.randomUUID();options=options||{};let rnds=options.random||(options.rng||rng)();if(rnds[6]=15&rnds[6]|64,rnds[8]=63&rnds[8]|128,buf){offset=offset||0;for(let i=0;i<16;++i)buf[offset+i]=rnds[i];return buf}return function(arr,offset=0){return(byteToHex[arr[offset+0]]+byteToHex[arr[offset+1]]+byteToHex[arr[offset+2]]+byteToHex[arr[offset+3]]+"-"+byteToHex[arr[offset+4]]+byteToHex[arr[offset+5]]+"-"+byteToHex[arr[offset+6]]+byteToHex[arr[offset+7]]+"-"+byteToHex[arr[offset+8]]+byteToHex[arr[offset+9]]+"-"+byteToHex[arr[offset+10]]+byteToHex[arr[offset+11]]+byteToHex[arr[offset+12]]+byteToHex[arr[offset+13]]+byteToHex[arr[offset+14]]+byteToHex[arr[offset+15]]).toLowerCase()}(rnds)}}},function(__webpack_require__){__webpack_require__.O(0,[9774,2888,179],function(){return __webpack_require__(__webpack_require__.s=1269)}),_N_E=__webpack_require__.O()}]);