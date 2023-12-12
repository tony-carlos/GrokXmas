(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1239],{2703:function(module,__unused_webpack_exports,__webpack_require__){"use strict";var ReactPropTypesSecret=__webpack_require__(414);function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,module.exports=function(){function shim(props,propName,componentName,location,propFullName,secret){if(secret!==ReactPropTypesSecret){var err=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw err.name="Invariant Violation",err}}function getShim(){return shim}shim.isRequired=shim;var ReactPropTypes={array:shim,bigint:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return ReactPropTypes.PropTypes=ReactPropTypes,ReactPropTypes}},5697:function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__(2703)()},414:function(module){"use strict";module.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},1239:function(__unused_webpack_module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_react2=_interopRequireDefault(__webpack_require__(7294)),_CSSTransition2=_interopRequireDefault(__webpack_require__(129));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var ModalVideo=function(_React$Component){function ModalVideo(props){!function(instance,Constructor){if(!(instance instanceof Constructor))throw TypeError("Cannot call a class as a function")}(this,ModalVideo);var _this=function(self1,call){if(!self1)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return call&&("object"==typeof call||"function"==typeof call)?call:self1}(this,(ModalVideo.__proto__||Object.getPrototypeOf(ModalVideo)).call(this,props));return _this.state={isOpen:!1,modalVideoWidth:_this.getWidthFulfillAspectRatio(_this.props.ratio,window.innerHeight,window.innerWidth)},_this.closeModal=_this.closeModal.bind(_this),_this.updateFocus=_this.updateFocus.bind(_this),_this.timeout,_this}return!function(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}(ModalVideo,_React$Component),_createClass(ModalVideo,[{key:"openModal",value:function(){this.setState({isOpen:!0})}},{key:"closeModal",value:function(){this.setState({isOpen:!1}),"function"==typeof this.props.onClose&&this.props.onClose()}},{key:"keydownHandler",value:function(e){27===e.keyCode&&this.closeModal()}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.keydownHandler.bind(this)),window.addEventListener("resize",this.resizeModalVideoWhenHeightGreaterThanWindowHeight.bind(this))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.keydownHandler.bind(this)),window.removeEventListener("resize",this.resizeModalVideoWhenHeightGreaterThanWindowHeight.bind(this))}},{key:"componentDidUpdate",value:function(){this.state.isOpen&&this.modal&&this.modal.focus()}},{key:"updateFocus",value:function(e){9===e.keyCode&&(e.preventDefault(),e.stopPropagation(),this.modal===document.activeElement?this.modalbtn.focus():this.modal.focus())}},{key:"resizeModalVideoWhenHeightGreaterThanWindowHeight",value:function(){var _this2=this;clearTimeout(this.timeout),this.timeout=setTimeout(function(){var width=_this2.getWidthFulfillAspectRatio(_this2.props.ratio,window.innerHeight,window.innerWidth);_this2.state.modalVideoWidth!=width&&_this2.setState({modalVideoWidth:width})},10)}},{key:"getQueryString",value:function(obj){var url="";for(var key in obj)obj.hasOwnProperty(key)&&null!==obj[key]&&(url+=key+"="+obj[key]+"&");return url.substr(0,url.length-1)}},{key:"getYoutubeUrl",value:function(youtube,videoId){return"//www.youtube.com/embed/"+videoId+"?"+this.getQueryString(youtube)}},{key:"getVimeoUrl",value:function(vimeo,videoId){return"//player.vimeo.com/video/"+videoId+"?"+this.getQueryString(vimeo)}},{key:"getYoukuUrl",value:function(youku,videoId){return"//player.youku.com/embed/"+videoId+"?"+this.getQueryString(youku)}},{key:"getVideoUrl",value:function(opt,videoId){return"youtube"===opt.channel?this.getYoutubeUrl(opt.youtube,videoId):"vimeo"===opt.channel?this.getVimeoUrl(opt.vimeo,videoId):"youku"===opt.channel?this.getYoukuUrl(opt.youku,videoId):"custom"===opt.channel?opt.url:void 0}},{key:"getPadding",value:function(ratio){var arr=ratio.split(":"),width=Number(arr[0]);return 100*Number(arr[1])/width+"%"}},{key:"getWidthFulfillAspectRatio",value:function(ratio,maxHeight,maxWidth){var arr=ratio.split(":"),width=Number(arr[0]),height=Number(arr[1]);return maxHeight<maxWidth*(height/width)?Math.floor(width/height*maxHeight):"100%"}},{key:"render",value:function(){var _this3=this,modalVideoInnerStyle={width:this.state.modalVideoWidth},modalVideoIframeWrapStyle={paddingBottom:this.getPadding(this.props.ratio)};return _react2.default.createElement(_CSSTransition2.default,{classNames:this.props.classNames.modalVideoEffect,timeout:this.props.animationSpeed},function(){return _this3.state.isOpen?_react2.default.createElement("div",{className:_this3.props.classNames.modalVideo,tabIndex:"-1",role:"dialog","aria-label":_this3.props.aria.openMessage,onClick:_this3.closeModal,ref:function(node){_this3.modal=node},onKeyDown:_this3.updateFocus},_react2.default.createElement("div",{className:_this3.props.classNames.modalVideoBody},_react2.default.createElement("div",{className:_this3.props.classNames.modalVideoInner,style:modalVideoInnerStyle},_react2.default.createElement("div",{className:_this3.props.classNames.modalVideoIframeWrap,style:modalVideoIframeWrapStyle},_react2.default.createElement("button",{className:_this3.props.classNames.modalVideoCloseBtn,"aria-label":_this3.props.aria.dismissBtnMessage,ref:function(node){_this3.modalbtn=node},onKeyDown:_this3.updateFocus}),_this3.props.children||_react2.default.createElement("iframe",{width:"460",height:"230",src:_this3.getVideoUrl(_this3.props,_this3.props.videoId),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:_this3.props.allowFullScreen,tabIndex:"-1"}))))):null})}}],[{key:"getDerivedStateFromProps",value:function(props){return{isOpen:props.isOpen}}}]),ModalVideo}(_react2.default.Component);exports.default=ModalVideo,ModalVideo.defaultProps={channel:"youtube",isOpen:!1,youtube:{autoplay:1,cc_load_policy:1,color:null,controls:1,disablekb:0,enablejsapi:0,end:null,fs:1,h1:null,iv_load_policy:1,list:null,listType:null,loop:0,modestbranding:null,origin:null,playlist:null,playsinline:null,rel:0,showinfo:1,start:0,wmode:"transparent",theme:"dark",mute:0},ratio:"16:9",vimeo:{api:!1,autopause:!0,autoplay:!0,byline:!0,callback:null,color:null,height:null,loop:!1,maxheight:null,maxwidth:null,player_id:null,portrait:!0,title:!0,width:null,xhtml:!1},youku:{autoplay:1,show_related:0},allowFullScreen:!0,animationSpeed:300,classNames:{modalVideoEffect:"modal-video-effect",modalVideo:"modal-video",modalVideoClose:"modal-video-close",modalVideoBody:"modal-video-body",modalVideoInner:"modal-video-inner",modalVideoIframeWrap:"modal-video-movie-wrap",modalVideoCloseBtn:"modal-video-close-btn"},aria:{openMessage:"You just opened the modal video",dismissBtnMessage:"Close the modal by clicking here"}}},129:function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0,exports.default=void 0,function(obj){if(!obj||!obj.__esModule){var newObj={};if(null!=obj){for(var key in obj)if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};desc.get||desc.set?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}}newObj.default=obj}}(__webpack_require__(5697));var _addClass=_interopRequireDefault(__webpack_require__(3971)),_removeClass=_interopRequireDefault(__webpack_require__(5641)),_react=_interopRequireDefault(__webpack_require__(7294)),_Transition=_interopRequireDefault(__webpack_require__(644));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}__webpack_require__(4726);var addClass=function(node,classes){return node&&classes&&classes.split(" ").forEach(function(c){return(0,_addClass.default)(node,c)})},removeClass=function(node,classes){return node&&classes&&classes.split(" ").forEach(function(c){return(0,_removeClass.default)(node,c)})},CSSTransition=function(_React$Component){function CSSTransition(){for(var _this,_len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=_React$Component.call.apply(_React$Component,[this].concat(args))||this).onEnter=function(node,appearing){var className=_this.getClassNames(appearing?"appear":"enter").className;_this.removeClasses(node,"exit"),addClass(node,className),_this.props.onEnter&&_this.props.onEnter(node,appearing)},_this.onEntering=function(node,appearing){var activeClassName=_this.getClassNames(appearing?"appear":"enter").activeClassName;_this.reflowAndAddClass(node,activeClassName),_this.props.onEntering&&_this.props.onEntering(node,appearing)},_this.onEntered=function(node,appearing){var appearClassName=_this.getClassNames("appear").doneClassName,enterClassName=_this.getClassNames("enter").doneClassName;_this.removeClasses(node,appearing?"appear":"enter"),addClass(node,appearing?appearClassName+" "+enterClassName:enterClassName),_this.props.onEntered&&_this.props.onEntered(node,appearing)},_this.onExit=function(node){var className=_this.getClassNames("exit").className;_this.removeClasses(node,"appear"),_this.removeClasses(node,"enter"),addClass(node,className),_this.props.onExit&&_this.props.onExit(node)},_this.onExiting=function(node){var activeClassName=_this.getClassNames("exit").activeClassName;_this.reflowAndAddClass(node,activeClassName),_this.props.onExiting&&_this.props.onExiting(node)},_this.onExited=function(node){var doneClassName=_this.getClassNames("exit").doneClassName;_this.removeClasses(node,"exit"),addClass(node,doneClassName),_this.props.onExited&&_this.props.onExited(node)},_this.getClassNames=function(type){var classNames=_this.props.classNames,isStringClassNames="string"==typeof classNames,className=isStringClassNames?(isStringClassNames&&classNames?classNames+"-":"")+type:classNames[type],activeClassName=isStringClassNames?className+"-active":classNames[type+"Active"],doneClassName=isStringClassNames?className+"-done":classNames[type+"Done"];return{className:className,activeClassName:activeClassName,doneClassName:doneClassName}},_this}(subClass=CSSTransition).prototype=Object.create(_React$Component.prototype),subClass.prototype.constructor=subClass,subClass.__proto__=_React$Component;var subClass,_proto=CSSTransition.prototype;return _proto.removeClasses=function(node,type){var _this$getClassNames6=this.getClassNames(type),className=_this$getClassNames6.className,activeClassName=_this$getClassNames6.activeClassName,doneClassName=_this$getClassNames6.doneClassName;className&&removeClass(node,className),activeClassName&&removeClass(node,activeClassName),doneClassName&&removeClass(node,doneClassName)},_proto.reflowAndAddClass=function(node,className){className&&(node&&node.scrollTop,addClass(node,className))},_proto.render=function(){var props=_extends({},this.props);return delete props.classNames,_react.default.createElement(_Transition.default,_extends({},props,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},CSSTransition}(_react.default.Component);CSSTransition.defaultProps={classNames:""},CSSTransition.propTypes={},exports.default=CSSTransition,module.exports=exports.default},644:function(__unused_webpack_module,exports,__webpack_require__){"use strict";exports.__esModule=!0,exports.default=exports.EXITING=exports.ENTERED=exports.ENTERING=exports.EXITED=exports.UNMOUNTED=void 0;var PropTypes=function(obj){if(obj&&obj.__esModule)return obj;var newObj={};if(null!=obj){for(var key in obj)if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};desc.get||desc.set?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}}return newObj.default=obj,newObj}(__webpack_require__(5697)),_react=_interopRequireDefault(__webpack_require__(7294)),_reactDom=_interopRequireDefault(__webpack_require__(3935)),_reactLifecyclesCompat=__webpack_require__(6871);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}__webpack_require__(4726);var UNMOUNTED="unmounted";exports.UNMOUNTED=UNMOUNTED;var EXITED="exited";exports.EXITED=EXITED;var ENTERING="entering";exports.ENTERING=ENTERING;var ENTERED="entered";exports.ENTERED=ENTERED;var EXITING="exiting";exports.EXITING=EXITING;var Transition=function(_React$Component){function Transition(props,context){_this=_React$Component.call(this,props,context)||this;var _this,initialStatus,parentGroup=context.transitionGroup,appear=parentGroup&&!parentGroup.isMounting?props.enter:props.appear;return _this.appearStatus=null,props.in?appear?(initialStatus=EXITED,_this.appearStatus=ENTERING):initialStatus=ENTERED:initialStatus=props.unmountOnExit||props.mountOnEnter?UNMOUNTED:EXITED,_this.state={status:initialStatus},_this.nextCallback=null,_this}(subClass=Transition).prototype=Object.create(_React$Component.prototype),subClass.prototype.constructor=subClass,subClass.__proto__=_React$Component;var subClass,_proto=Transition.prototype;return _proto.getChildContext=function(){return{transitionGroup:null}},Transition.getDerivedStateFromProps=function(_ref,prevState){return _ref.in&&prevState.status===UNMOUNTED?{status:EXITED}:null},_proto.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},_proto.componentDidUpdate=function(prevProps){var nextStatus=null;if(prevProps!==this.props){var status=this.state.status;this.props.in?status!==ENTERING&&status!==ENTERED&&(nextStatus=ENTERING):(status===ENTERING||status===ENTERED)&&(nextStatus=EXITING)}this.updateStatus(!1,nextStatus)},_proto.componentWillUnmount=function(){this.cancelNextCallback()},_proto.getTimeouts=function(){var exit,enter,appear,timeout=this.props.timeout;return exit=enter=appear=timeout,null!=timeout&&"number"!=typeof timeout&&(exit=timeout.exit,enter=timeout.enter,appear=void 0!==timeout.appear?timeout.appear:enter),{exit:exit,enter:enter,appear:appear}},_proto.updateStatus=function(mounting,nextStatus){if(void 0===mounting&&(mounting=!1),null!==nextStatus){this.cancelNextCallback();var node=_reactDom.default.findDOMNode(this);nextStatus===ENTERING?this.performEnter(node,mounting):this.performExit(node)}else this.props.unmountOnExit&&this.state.status===EXITED&&this.setState({status:UNMOUNTED})},_proto.performEnter=function(node,mounting){var _this2=this,enter=this.props.enter,appearing=this.context.transitionGroup?this.context.transitionGroup.isMounting:mounting,timeouts=this.getTimeouts(),enterTimeout=appearing?timeouts.appear:timeouts.enter;if(!mounting&&!enter){this.safeSetState({status:ENTERED},function(){_this2.props.onEntered(node)});return}this.props.onEnter(node,appearing),this.safeSetState({status:ENTERING},function(){_this2.props.onEntering(node,appearing),_this2.onTransitionEnd(node,enterTimeout,function(){_this2.safeSetState({status:ENTERED},function(){_this2.props.onEntered(node,appearing)})})})},_proto.performExit=function(node){var _this3=this,exit=this.props.exit,timeouts=this.getTimeouts();if(!exit){this.safeSetState({status:EXITED},function(){_this3.props.onExited(node)});return}this.props.onExit(node),this.safeSetState({status:EXITING},function(){_this3.props.onExiting(node),_this3.onTransitionEnd(node,timeouts.exit,function(){_this3.safeSetState({status:EXITED},function(){_this3.props.onExited(node)})})})},_proto.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},_proto.safeSetState=function(nextState,callback){callback=this.setNextCallback(callback),this.setState(nextState,callback)},_proto.setNextCallback=function(callback){var _this4=this,active=!0;return this.nextCallback=function(event){active&&(active=!1,_this4.nextCallback=null,callback(event))},this.nextCallback.cancel=function(){active=!1},this.nextCallback},_proto.onTransitionEnd=function(node,timeout,handler){this.setNextCallback(handler);var doesNotHaveTimeoutOrListener=null==timeout&&!this.props.addEndListener;if(!node||doesNotHaveTimeoutOrListener){setTimeout(this.nextCallback,0);return}this.props.addEndListener&&this.props.addEndListener(node,this.nextCallback),null!=timeout&&setTimeout(this.nextCallback,timeout)},_proto.render=function(){var status=this.state.status;if(status===UNMOUNTED)return null;var _this$props=this.props,children=_this$props.children,childProps=function(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)excluded.indexOf(key=sourceKeys[i])>=0||(target[key]=source[key]);return target}(_this$props,["children"]);if(delete childProps.in,delete childProps.mountOnEnter,delete childProps.unmountOnExit,delete childProps.appear,delete childProps.enter,delete childProps.exit,delete childProps.timeout,delete childProps.addEndListener,delete childProps.onEnter,delete childProps.onEntering,delete childProps.onEntered,delete childProps.onExit,delete childProps.onExiting,delete childProps.onExited,"function"==typeof children)return children(status,childProps);var child=_react.default.Children.only(children);return _react.default.cloneElement(child,childProps)},Transition}(_react.default.Component);function noop(){}Transition.contextTypes={transitionGroup:PropTypes.object},Transition.childContextTypes={transitionGroup:function(){}},Transition.propTypes={},Transition.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:noop,onEntering:noop,onEntered:noop,onExit:noop,onExiting:noop,onExited:noop},Transition.UNMOUNTED=0,Transition.EXITED=1,Transition.ENTERING=2,Transition.ENTERED=3,Transition.EXITING=4;var _default=(0,_reactLifecyclesCompat.polyfill)(Transition);exports.default=_default},3971:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__(4836);exports.__esModule=!0,exports.default=function(element,className){element.classList?element.classList.add(className):(0,_hasClass.default)(element,className)||("string"==typeof element.className?element.className=element.className+" "+className:element.setAttribute("class",(element.className&&element.className.baseVal||"")+" "+className))};var _hasClass=_interopRequireDefault(__webpack_require__(5962));module.exports=exports.default},5962:function(module,exports){"use strict";exports.__esModule=!0,exports.default=function(element,className){return element.classList?!!className&&element.classList.contains(className):-1!==(" "+(element.className.baseVal||element.className)+" ").indexOf(" "+className+" ")},module.exports=exports.default},5641:function(module){"use strict";function replaceClassName(origClass,classToRemove){return origClass.replace(RegExp("(^|\\s)"+classToRemove+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}module.exports=function(element,className){element.classList?element.classList.remove(className):"string"==typeof element.className?element.className=replaceClassName(element.className,className):element.setAttribute("class",replaceClassName(element.className&&element.className.baseVal||"",className))}},4726:function(__unused_webpack_module,exports,__webpack_require__){"use strict";var obj;exports.__esModule=!0,exports.classNamesShape=exports.timeoutsShape=void 0,(obj=__webpack_require__(5697))&&obj.__esModule,exports.timeoutsShape=null,exports.classNamesShape=null},4836:function(module){module.exports=function(obj){return obj&&obj.__esModule?obj:{default:obj}},module.exports.__esModule=!0,module.exports.default=module.exports}}]);