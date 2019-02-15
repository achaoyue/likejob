var __reflect=this&&this.__reflect||function(t,e,n){t.__class__=e,n?n.push(e):n=[e],t.__types__=t.__types__?n.concat(t.__types__):n},__extends=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);n.prototype=e.prototype,t.prototype=new n},__awaiter=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))(function(o,r){function s(t){try{h(i.next(t))}catch(e){r(e)}}function a(t){try{h(i["throw"](t))}catch(e){r(e)}}function h(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(s,a)}h((i=i.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){function n(t){return function(e){return i([t,e])}}function i(n){if(o)throw new TypeError("Generator is already executing.");for(;h;)try{if(o=1,r&&(s=r[2&n[0]?"return":n[0]?"throw":"next"])&&!(s=s.call(r,n[1])).done)return s;switch(r=0,s&&(n=[0,s.value]),n[0]){case 0:case 1:s=n;break;case 4:return h.label++,{value:n[1],done:!1};case 5:h.label++,r=n[1],n=[0];continue;case 7:n=h.ops.pop(),h.trys.pop();continue;default:if(s=h.trys,!(s=s.length>0&&s[s.length-1])&&(6===n[0]||2===n[0])){h=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){h.label=n[1];break}if(6===n[0]&&h.label<s[1]){h.label=s[1],s=n;break}if(s&&h.label<s[2]){h.label=s[2],h.ops.push(n);break}s[2]&&h.ops.pop(),h.trys.pop();continue}n=e.call(t,h)}catch(i){n=[6,i],r=0}finally{o=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,r,s,a,h={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return a={next:n(0),"throw":n(1),"return":n(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a},RechangePanel=function(t){function e(){return t.call(this)||this}return __extends(e,t),e.prototype.partAdded=function(e,n){t.prototype.partAdded.call(this,e,n)},e.prototype.childrenCreated=function(){t.prototype.childrenCreated.call(this),this.radioGroup=this.radio.group,this.radioGroup.addEventListener(egret.Event.CHANGE,this.OnRadioChange,this),this.butConcel.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){this.parent.removeChild(this)},this),this.butCommit.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onCommitCash,this)},e.prototype.OnRadioChange=function(t){console.log("selected:"+this.radioGroup.selectedValue)},e.prototype.onCommitCash=function(){console.log("commit click"),this.qrGroup.visible=!0},e}(eui.Component);__reflect(RechangePanel.prototype,"RechangePanel",["eui.UIComponent","egret.DisplayObject"]);var WithdrawPanel=function(t){function e(){return t.call(this)||this}return __extends(e,t),e.prototype.partAdded=function(e,n){t.prototype.partAdded.call(this,e,n)},e.prototype.childrenCreated=function(){t.prototype.childrenCreated.call(this),this.btnSubmit.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onSubmit,this),this.btnCancel.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onCancel,this),this.btnChoseFile.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onChoseFile,this)},e.prototype.onSubmit=function(){console.log("submig")},e.prototype.onCancel=function(){this.parent.removeChild(this)},e.prototype.onChoseFile=function(){},e}(eui.Component);__reflect(WithdrawPanel.prototype,"WithdrawPanel",["eui.UIComponent","egret.DisplayObject"]);var GamePanel=function(t){function e(){var e=t.call(this)||this;return e.sprites=[],e.bombs=[],e}return __extends(e,t),e.prototype.partAdded=function(e,n){t.prototype.partAdded.call(this,e,n)},e.prototype.childrenCreated=function(){t.prototype.childrenCreated.call(this),this.vJoystick.setFixed(!1,this.bgGroup),this.vJoystick.addMoveListener(this.changeMove,this),this.btnFire.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onFire,this),this.initWebsocket(),this.btnStopWait.addEventListener(egret.TouchEvent.TOUCH_TAP,this.stopWait,this),this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClose,this)},e.prototype.onFire=function(t){var e=new WebsocketRequest;e.messageType=RequestMessageTypeEnum.Fire,e.data=new FireEvent,this.sendMsg(e)},e.prototype.changeMove=function(t){this.jsEvent=t;var e=new MoveChangeEvent;e.dirAngel=Math.floor(100*t.dirAngle)/100,e.speed=Math.floor(t.strength/(this.vJoystick.width/2)*5*100)/100;var n=new WebsocketRequest;n.messageType=RequestMessageTypeEnum.Move,n.data=e,this.sendMsg(n),0!=t.strength&&(this.me.rotation=180*t.dirAngle/Math.PI+90)},e.prototype.moveSprite=function(){void 0!==this.jsEvent&&void 0!==this.jsEvent.strength&&(this.sprites[0].y+=Math.sin(this.jsEvent.dirAngle)*this.jsEvent.strength/this.vJoystick.maxStrength*8,this.sprites[0].x+=Math.cos(this.jsEvent.dirAngle)*this.jsEvent.strength/this.vJoystick.maxStrength*8)},e.prototype.onClose=function(){this.socket.close(),this.parent.removeChild(this)},e.prototype.initWebsocket=function(){this.socket=new egret.WebSocket,this.socket.type=egret.WebSocket.TYPE_STRING,this.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA,this.onReceiveMessage,this),this.socket.addEventListener(egret.Event.CONNECT,this.onSocketOpen,this),this.socket.addEventListener(egret.Event.CLOSE,this.onSocketClose,this),this.socket.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onSocketError,this),this.socket.connectByUrl(GameConfig.instance.gameSocket+StoryTool.getToken())},e.prototype.onReceiveMessage=function(t){var e=this.socket.readUTF(),n=JSON.parse(e);if(n.messageType==ResponseMessageTypeEnum.Room_Status)this.updateSpriteStatus(n.data);else if(n.messageType==ResponseMessageTypeEnum.LOGIN)this.onLoginMsg(n.data);else if(n.messageType==ResponseMessageTypeEnum.START_GAME)this.onStartGame(n.data);else if(n.messageType==ResponseMessageTypeEnum.GAME_OVER){if(this.status==ResponseMessageTypeEnum.GAME_OVER)return;this.onGameOver(n.data),this.status=ResponseMessageTypeEnum.GAME_OVER}},e.prototype.onSocketOpen=function(){console.log("connect"),setTimeout(function(){this.socket.writeUTF('{"messageType":5}')}.bind(this),1e3),this.socket.flush()},e.prototype.onSocketClose=function(){this.onGameOver("close")},e.prototype.onSocketError=function(){this.onGameOver("close")},e.prototype.updateSpriteStatus=function(t){var e=0;for(e;void 0!=t.bombs&&e<this.bombs.length&&e<t.bombs.length;e++)this.bombs[e].rotation=180*Math.atan2(t.bombs[e].y-this.bombs[e].y,t.bombs[e].x-this.bombs[e].x)/Math.PI,this.bombs[e].x=t.bombs[e].x,this.bombs[e].y=t.bombs[e].y,this.bombs[e].toRemove=t.bombs[e].remove;for(;void 0!=t.bombs&&e<t.bombs.length;e++){var n=new BombSprite(RES.getRes("stone_png"),0);this.globalToLocal();n.x=t.bombs[e].x,n.y=t.bombs[e].y,this.bombs.push(n),this.addChild(n);var i=RES.getRes("fire_mp3");i.play(0,1)}for(var o=0;o<this.bombs.length;o++){var r=this.bombs[o];this.contains(r)&&(r.x<=0||r.y<=0||r.x>=this.width||r.y>=this.height||this.bombs[o].toRemove===!0)&&(this.removeChild(r),this.bombs.splice(o,1))}void 0!=t.gift&&(console.log(t.gift,(new Date).getTime()-t.gift.time),1==t.gift.remove&&null!=this.gift?(this.removeChild(this.gift),this.gift=null):0==t.gift.remove&&null==this.gift&&this.buildGift(t.gift.x,t.gift.y,t.gift.time));for(var s=0;void 0!=t.gamers&&s<t.gamers.length;s++)this.sprites[s].id!=userInfo.id&&this.sprites[s].x!=t.gamers[s].x&&this.sprites[s].y!=t.gamers[s].y&&(this.sprites[s].rotation=180*Math.atan2(t.gamers[s].y-this.sprites[s].y,t.gamers[s].x-this.sprites[s].x)/Math.PI+90),this.sprites[s].id==userInfo.id?this.meScore.text=t.gamers[s].score+"分":this.oScore.text=t.gamers[s].score+"分",this.sprites[s].x=t.gamers[s].x,this.sprites[s].y=t.gamers[s].y},e.prototype.log=function(){},e.prototype.onLoginMsg=function(t){t===!0||(this.loginText.text="登录失败！")},e.prototype.onStartGame=function(t){for(var e=0,n=t;e<n.length;e++){var i=n[e],o=new GamerSprite(RES.getRes("guaiwu_png"));o.x=100,o.y=100,o.id=i,o.id==userInfo.id&&(this.me=o),this.addChild(o),this.setChildIndex(o,1),this.sprites.push(o)}this.waitGroup.visible=!1},e.prototype.onGameOver=function(t){"close"==t?this.loginText.text="链接断开了":t==this.me.id?this.loginText.text="你还需努力":t!=this.me.id&&(this.loginText.text="胜利"),this.btnStopWait.label="关闭",this.waitGroup.visible=!0},e.prototype.buildGift=function(t,e,n){this.gift=new GiftSprite,this.gift.width=40,this.gift.height=50,this.gift.x=t,this.gift.y=e,this.gift.time=n-(new Date).getTime(),this.addChild(this.gift)},e.prototype.stopWait=function(){this.socket.close(),this.parent.removeChild(this)},e.prototype.sendMsg=function(t){this.socket.writeUTF(JSON.stringify(t))},e}(eui.Component);__reflect(GamePanel.prototype,"GamePanel",["eui.UIComponent","egret.DisplayObject"]);var VirtualJoystick=function(t){function e(){var e=t.call(this)||this;return e.statues=0,e.moveListener=new Array,e.fixed=!0,e.originPoint=new egret.Point,e}return __extends(e,t),e.prototype.partAdded=function(e,n){t.prototype.partAdded.call(this,e,n)},e.prototype.childrenCreated=function(){t.prototype.childrenCreated.call(this),this.centerPoint.x=this.width/2,this.centerPoint.y=this.height/2,this.maxStrength=this.width/2,this.bgGroup.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouchStart,this),this.bgGroup.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.onTouchMove,this),this.bgGroup.addEventListener(egret.TouchEvent.TOUCH_END,this.onTouchEnd,this),this.bgGroup.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,this.onTouchEnd,this),window.vsj=this},e.prototype.onTouchStart=function(t){if(1!=this.statues&&(this.statues=1,this.touchId=t.touchPointID,!this.fixed)){this.originPoint=new egret.Point(this.x,this.y);var e=this.parent.globalToLocal(t.stageX-this.width/2,t.stageY-this.height/2);this.x=e.x,this.y=e.y}},e.prototype.onTouchMove=function(t){if(1==this.statues&&this.touchId==t.touchPointID){var e=this.globalToLocal(t.stageX,t.stageY);this.centerPoint.x=e.x,this.centerPoint.y=e.y;var n=this.getJoystickEvent();n.strength>this.maxStrength&&(this.centerPoint.x=this.width/2+this.maxStrength*Math.cos(n.dirAngle),this.centerPoint.y=this.height/2-this.maxStrength*Math.sin(-n.dirAngle),n.strength=this.maxStrength),this.dispatchjsEvent(n)}},e.prototype.onTouchEnd=function(t){this.touchId==t.touchPointID&&(this.statues=0,this.touchId=void 0,this.centerPoint.x=this.width/2,this.centerPoint.y=this.height/2,this.dispatchjsEvent(new JoystickEvent))},e.prototype.addMoveListener=function(t,e){var n=new Listener;n.fun=t,n.target=e,this.moveListener.push(n)},e.prototype.setFixed=function(t,e){if(t!=this.fixed){if(t)this.bgGroup.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouchStart,this),this.bgGroup.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.onTouchMove,this),this.bgGroup.addEventListener(egret.TouchEvent.TOUCH_END,this.onTouchEnd,this),this.bgGroup.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,this.onTouchEnd,this);else{if(void 0==e)return;this.bgGroup.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouchStart,this),this.bgGroup.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.onTouchMove,this),this.bgGroup.removeEventListener(egret.TouchEvent.TOUCH_END,this.onTouchEnd,this),this.bgGroup.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,this.onTouchEnd,this),e.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouchStart,this),e.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.onTouchMove,this),e.addEventListener(egret.TouchEvent.TOUCH_END,this.onTouchEnd,this),e.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,this.onTouchEnd,this)}this.fixed=t}},e.prototype.getJoystickEvent=function(){var t=new JoystickEvent,e=this.centerPoint.localToGlobal().y-this.localToGlobal().y-this.height/2+this.centerPoint.height/2,n=this.centerPoint.localToGlobal().x-this.localToGlobal().x-this.width/2+this.centerPoint.width/2;return t.dirAngle=Math.atan2(e,n),t.strength=Math.sqrt(e*e+n*n),t},e.prototype.dispatchjsEvent=function(t){for(var e=this.moveListener.length-1;e>=0;e--){var n=this.moveListener[e];n.target?n.fun.call(n.target,t):this.moveListener.splice(e,1)}},e}(eui.Component);__reflect(VirtualJoystick.prototype,"VirtualJoystick",["eui.UIComponent","egret.DisplayObject"]);var Listener=function(){function t(){}return t}();__reflect(Listener.prototype,"Listener");var HomeTabItem=function(t){function e(){return t.call(this)||this}return __extends(e,t),e.prototype.partAdded=function(e,n){t.prototype.partAdded.call(this,e,n)},e.prototype.childrenCreated=function(){t.prototype.childrenCreated.call(this)},e}(eui.Component);__reflect(HomeTabItem.prototype,"HomeTabItem",["eui.UIComponent","egret.DisplayObject"]);var HomeTabPanel=function(t){function e(){var e=t.call(this)||this;return e.realTimeCollection=new eui.ArrayCollection,e.historyCollection=new eui.ArrayCollection,e}return __extends(e,t),e.prototype.partAdded=function(e,n){t.prototype.partAdded.call(this,e,n)},e.prototype.childrenCreated=function(){t.prototype.childrenCreated.call(this),this.btnRealTime.addEventListener(egret.TouchEvent.TOUCH_TAP,this.changeTab,this),this.btnMyHistory.addEventListener(egret.TouchEvent.TOUCH_TAP,this.changeTab,this),this.realTimeCollection=new eui.ArrayCollection([1,2,3,4,5,6,7,8,9,10,11,12,14,15]),this.realTimeList.dataProvider=this.realTimeCollection,this.realTimeList.itemRendererSkinName="HomeTabItemSkin",this.realTimeScroller.viewport=this.realTimeList,this.historyCollection=new eui.ArrayCollection([1,2,3,4]),this.myHistoryList.dataProvider=this.historyCollection,this.myHistoryList.itemRendererSkinName="HomeTabItemSkin",this.myHistoryScroller.viewport=this.myHistoryList},e.prototype.changeTab=function(t){t.target==this.btnRealTime?this.vStack.selectedIndex=0:t.target==this.btnMyHistory&&(this.vStack.selectedIndex=1)},e}(eui.Component);__reflect(HomeTabPanel.prototype,"HomeTabPanel",["eui.UIComponent","egret.DisplayObject"]);var GamerSprite=function(t){function e(e){var n=t.call(this)||this;return n.width=80,n.height=80,n.anchorOffsetX=40,n.anchorOffsetY=40,n.saomiao=new egret.Bitmap,n.saomiao.texture=RES.getRes("saomiao_png"),n.saomiao.width=100,n.saomiao.height=150,n.saomiao.anchorOffsetX=50,n.saomiao.anchorOffsetY=150,n.saomiao.x=n.width/2,n.saomiao.y=n.height/2,n.addChild(n.saomiao),n.img=new egret.Bitmap,n.img.texture=e,n.img.width=80,n.img.height=110,n.addChild(n.img),n.once(egret.Event.ADDED_TO_STAGE,n.onAddToStage,n),n}return __extends(e,t),e.prototype.onAddToStage=function(t){},e.prototype.dir=function(t){this.saomiao.rotation=t+90,this.dirAngle=t},e}(egret.Sprite);__reflect(GamerSprite.prototype,"GamerSprite");var StoryTool=function(){function t(){}return t.getToken=function(){return egret.localStorage.getItem(t.TOKEN)},t.setToken=function(e){egret.localStorage.setItem(t.TOKEN,e)},t.getItem=function(t,e){var n=egret.localStorage.getItem(t);return n?n:e},t.setItem=function(t,e){egret.localStorage.setItem(t,e)},t.TOKEN="token",t}();__reflect(StoryTool.prototype,"StoryTool");var ThemeAdapter=function(){function t(){}return t.prototype.getTheme=function(t,e,n,i){function o(t){e.call(i,t)}function r(e){e.resItem.url==t&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,r,null),n.call(i))}var s=this;if("undefined"!=typeof generateEUI)egret.callLater(function(){e.call(i,generateEUI)},this);else if("undefined"!=typeof generateEUI2)RES.getResByUrl("resource/gameEui.json",function(t,n){window.JSONParseClass.setData(t),egret.callLater(function(){e.call(i,generateEUI2)},s)},this,RES.ResourceItem.TYPE_JSON);else if("undefined"!=typeof generateJSON)if(t.indexOf(".exml")>-1){var a=t.split("/");a.pop();var h=a.join("/")+"_EUI.json";generateJSON.paths[t]?egret.callLater(function(){e.call(i,generateJSON.paths[t])},this):RES.getResByUrl(h,function(n){window.JSONParseClass.setData(n),egret.callLater(function(){e.call(i,generateJSON.paths[t])},s)},this,RES.ResourceItem.TYPE_JSON)}else egret.callLater(function(){e.call(i,generateJSON)},this);else RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,r,null),RES.getResByUrl(t,o,this,RES.ResourceItem.TYPE_TEXT)},t}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);var GameApp=function(t){function e(){return t.call(this)||this}return __extends(e,t),e.prototype.partAdded=function(e,n){t.prototype.partAdded.call(this,e,n)},e.prototype.childrenCreated=function(){t.prototype.childrenCreated.call(this),this.btn_congzhi.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onCongzhi,this),this.btn_tixian.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTixian,this),this.btn_start.addEventListener(egret.TouchEvent.TOUCH_TAP,this.startGame,this),this.btnFankui.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onFeedback,this),this.startAnimation()},e.prototype.onCongzhi=function(t){null==this.tixianPanel&&(this.tixianPanel=new RechangePanel,this.tixianPanel.x=10,this.tixianPanel.y=(this.height-584)/2),this.addChild(this.tixianPanel)},e.prototype.onTixian=function(){null==this.congzhiPanel&&(this.congzhiPanel=new WithdrawPanel,this.congzhiPanel.x=10,this.congzhiPanel.y=(this.height-584)/2),this.addChild(this.congzhiPanel)},e.prototype.startGame=function(){var t=new GamePanel;t.x=0,t.y=0,this.addChild(t)},e.prototype.onFeedback=function(){this.addChild(new Feedback)},e.prototype.startAnimation=function(){egret.Tween.get(this.caidan,{loop:!0}).to({rotation:360},4e3,egret.Ease.backInOut)},e}(eui.Component);__reflect(GameApp.prototype,"GameApp",["eui.UIComponent","egret.DisplayObject"]);var AssetAdapter=function(){function t(){}return t.prototype.getAsset=function(t,e,n){function i(i){e.call(n,i,t)}if(RES.hasRes(t)){var o=RES.getRes(t);o?i(o):RES.getResAsync(t,i,this)}else RES.getResByUrl(t,i,this,RES.ResourceItem.TYPE_IMAGE)},t}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var LoadingUI=function(t){function e(){var e=t.call(this)||this;return e.createView(),e}return __extends(e,t),e.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},e.prototype.onProgress=function(t,e){this.textField.text="Loading..."+t+"/"+e},e}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var Feedback=function(t){function e(){return t.call(this)||this}return __extends(e,t),e.prototype.partAdded=function(e,n){t.prototype.partAdded.call(this,e,n)},e.prototype.childrenCreated=function(){t.prototype.childrenCreated.call(this),this.btnSubmit.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onSubmit,this),this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP,this.close,this),this.btnCancel.addEventListener(egret.TouchEvent.TOUCH_TAP,this.close,this)},e.prototype.onSubmit=function(){var t=this.phoneInput.text,e=this.contentInput.text,n=GameConfig.instance.host+GameConfig.instance.feedback+"?phone="+t+"&content="+e+"&userId="+userInfo.id;this.resultGP.visible=!0,NetTool.get(n).then(function(t){this.subLabel.text="提交完成。\n谢谢你的反馈，我们会尽快联系你."}.bind(this),function(){this.subLabel.text="提交失败，麻烦稍后再试"}.bind(this))},e.prototype.close=function(){this.parent.removeChild(this)},e}(eui.Component);__reflect(Feedback.prototype,"Feedback",["eui.UIComponent","egret.DisplayObject"]);var BombSprite=function(t){function e(e,n){var i=t.call(this)||this;return e||console.error("texture error"),i.img=new egret.Bitmap,i.img.texture=e,i.img.width=50,i.img.height=20,i.width=50,i.height=20,i.addChild(i.img),i.img.rotation=n+180,i.id=1e3*Math.random(),i}return __extends(e,t),e.prototype.dir=function(t){this.img.rotation=t+90},e}(egret.Sprite);__reflect(BombSprite.prototype,"BombSprite");var Main=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.createChildren=function(){t.prototype.createChildren.call(this),egret.lifecycle.addLifecycleListener(function(t){}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()};var e=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",e),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),this.runGame()["catch"](function(t){console.log(t)})},e.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var t,e,n;return __generator(this,function(i){switch(i.label){case 0:return[4,this.loadResource()];case 1:return i.sent(),this.createGameScene2(),[4,RES.getResAsync("description_json")];case 2:return t=i.sent(),e=StoryTool.getItem("loginId","common_"),n=StoryTool.getItem("pwd","common_"),[4,platform.login(e,n).then(function(t){if(0!=t.code)throw new Error("登录存在问题，返回值"+JSON.stringify(t));t=t.data,StoryTool.setItem("loginId",t.loginId),StoryTool.setItem("ssid",t.id),StoryTool.setToken(t.token)})["catch"](function(t){console.log("登录失败",t)})];case 3:return i.sent(),[4,platform.getUserInfo()];case 4:return userInfo=i.sent(),console.log(userInfo),[2]}})})},e.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,4,,5]),t=new LoadingUI,this.stage.addChild(t),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return n.sent(),[4,this.loadTheme()];case 2:return n.sent(),[4,RES.loadGroup("preload",0,t)];case 3:return n.sent(),this.stage.removeChild(t),[3,5];case 4:return e=n.sent(),console.error(e),[3,5];case 5:return[2]}})})},e.prototype.loadTheme=function(){var t=this;return new Promise(function(e,n){var i=new eui.Theme("resource/default.thm.json",t.stage);i.addEventListener(eui.UIEvent.COMPLETE,function(){e()},t)})},e.prototype.createGameScene2=function(){var t=new GameApp;this.addChild(t),t.y=(this.height-t.height)/2},e.prototype.createGameScene=function(){var t=this.createBitmapByName("bg_jpg");this.addChild(t);var e=this.stage.stageWidth,n=this.stage.stageHeight;t.width=e,t.height=n;var i=new egret.Shape;i.graphics.beginFill(0,.5),i.graphics.drawRect(0,0,e,172),i.graphics.endFill(),i.y=33,this.addChild(i);var o=this.createBitmapByName("egret_icon_png");this.addChild(o),o.x=26,o.y=33;var r=new egret.Shape;r.graphics.lineStyle(2,16777215),r.graphics.moveTo(0,0),r.graphics.lineTo(0,117),r.graphics.endFill(),r.x=172,r.y=61,this.addChild(r);var s=new egret.TextField;s.textColor=16777215,s.width=e-172,s.textAlign="center",s.text="Hello Egret",s.size=24,s.x=172,s.y=80,this.addChild(s);var a=new egret.TextField;this.addChild(a),a.alpha=0,a.width=e-172,a.textAlign=egret.HorizontalAlign.CENTER,a.size=24,a.textColor=16777215,a.x=172,a.y=135,this.textfield=a;var h=new eui.Button;h.label="Click!",h.horizontalCenter=0,h.verticalCenter=0,this.addChild(h),h.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onButtonClick,this)},e.prototype.createBitmapByName=function(t){var e=new egret.Bitmap,n=RES.getRes(t);return e.texture=n,e},e.prototype.startAnimation=function(t){var e=this,n=new egret.HtmlTextParser,i=t.map(function(t){return n.parse(t)}),o=this.textfield,r=-1,s=function(){r++,r>=i.length&&(r=0);var t=i[r];o.textFlow=t;var n=egret.Tween.get(o);n.to({alpha:1},200),n.wait(2e3),n.to({alpha:0},200),n.call(s,e)};s()},e.prototype.onButtonClick=function(t){var e=new eui.Panel;e.title="Title",e.horizontalCenter=0,e.verticalCenter=0,this.addChild(e)},e}(eui.UILayer);__reflect(Main.prototype,"Main");var GameConfig=function(){function t(){this.evn="online";var e=t[this.evn];for(var n in e)this[n]=e[n];t.instance=this}return t.online={host:"http://lelefans.top:8080/",loginUrl:"lele/game/user/login",gameSocket:"ws://lelefans.top:8000?token=",feedback:"/lele/game/feedback/add"},t.local={host:"http://192.168.99.103:8080/",loginUrl:"lele/game/user/login",gameSocket:"ws://192.168.99.103:8000?token=",feedback:"/lele/game/feedback/add"},t}();__reflect(GameConfig.prototype,"GameConfig"),new GameConfig;var GiftSprite=function(t){function e(){var e=t.call(this)||this;return e.time=1e3,e}return __extends(e,t),e.prototype.partAdded=function(e,n){t.prototype.partAdded.call(this,e,n)},e.prototype.childrenCreated=function(){t.prototype.childrenCreated.call(this),this.anchorOffsetX=this.width/2,this.anchorOffsetY=this.height/2;for(var e=egret.Tween.get(this,{loop:!0}),n=0;10>n;n++)e.to({rotation:15},100,egret.Ease.backInOut).wait(300),e.to({rotation:0},100,egret.Ease.backInOut).wait(300),e.to({rotation:-15},100,egret.Ease.backInOut).wait(300),e.to({rotation:0},100,egret.Ease.backInOut).wait(300);e.wait(4e3),this.light1.width=this.width,this.light1.height=this.height,this.light2.width=this.width,this.light2.height=this.height,setTimeout(this.startAnimation.bind(this),this.time)},e.prototype.startAnimation=function(){this.light1.visible=!0,this.light2.visible=!0,egret.Tween.get(this.light1,{loop:!0}).to({rotation:180,scaleX:2,scaleY:2},2e3).to({rotation:180,scaleX:.5,scaleY:.5},2e3),egret.Tween.get(this.light2,{loop:!0}).to({rotation:180,scaleX:2,scaleY:2},2e3).to({rotation:180,scaleX:.5,scaleY:.5},2e3)},e}(eui.Component);__reflect(GiftSprite.prototype,"GiftSprite",["eui.UIComponent","egret.DisplayObject"]);var JoystickEvent=function(){function t(){this.dirAngle=0,this.strength=0}return t}();__reflect(JoystickEvent.prototype,"JoystickEvent");var NetTool=function(){function t(){}return t.post=function(t,e){return new Promise(function(n,i){var o;o=new egret.HttpRequest,o.responseType=egret.HttpResponseType.TEXT,o.addEventListener(egret.Event.COMPLETE,function(t){n(JSON.parse(t.currentTarget.response))},this),o.addEventListener(egret.IOErrorEvent.IO_ERROR,function(t){i(t)},this),o.open(t,egret.HttpMethod.POST),o.setRequestHeader("Content-type","application/x-www-form-urlencoded"),o.send(e)})},t.get=function(t){return new Promise(function(e,n){var i;i=new egret.HttpRequest,i.responseType=egret.HttpResponseType.TEXT,i.addEventListener(egret.Event.COMPLETE,function(t){e(JSON.parse(t.currentTarget.response))},this),i.addEventListener(egret.IOErrorEvent.IO_ERROR,function(t){n(t)},this),i.open(t,egret.HttpMethod.GET),i.setRequestHeader("Content-type","application/x-www-form-urlencoded"),i.send()})},t}();__reflect(NetTool.prototype,"NetTool");var DebugPlatform=function(){function t(){}return t.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,{nickName:"username"}]})})},t.prototype.login=function(t,e){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2]})})},t}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var MyLoginPlatform=function(){function t(){}return t.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,{loginId:StoryTool.getItem("loginId","common_"),token:StoryTool.getToken(),id:StoryTool.getItem("ssid","common_")}]})})},t.prototype.login=function(t,e){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(n){return console.log(t,e),[2,new Promise(function(n,i){var o=new egret.HttpRequest;o.responseType=egret.HttpResponseType.TEXT,o.open(GameConfig.instance.host+GameConfig.instance.loginUrl+"?name="+t+"&pwd="+e,egret.HttpMethod.GET),o.setRequestHeader("Content-Type","application/json"),o.send(),o.addEventListener(egret.Event.COMPLETE,function(t){n(JSON.parse(t.currentTarget.response))},this),o.addEventListener(egret.IOErrorEvent.IO_ERROR,function(t){i(t)},this)})]})})},t}();__reflect(MyLoginPlatform.prototype,"MyLoginPlatform",["Platform"]);var UserInfo=function(){function t(){}return t}();__reflect(UserInfo.prototype,"UserInfo"),window.platform=new MyLoginPlatform,window.HomeTabPanel=HomeTabPanel,window.RechangePanel=RechangePanel,window.WithdrawPanel=WithdrawPanel,window.GamePanel=GamePanel,window.VirtualJoystick=VirtualJoystick,window.HomeTabItem=HomeTabItem,window.HomeTabPanel=HomeTabPanel;var SocketResponse=function(){function t(){}return t}();__reflect(SocketResponse.prototype,"SocketResponse");var RequestMessageTypeEnum;!function(t){t[t.Game_Rand_Match=5]="Game_Rand_Match",t[t.Move=6]="Move",t[t.Fire=7]="Fire"}(RequestMessageTypeEnum||(RequestMessageTypeEnum={}));var ResponseMessageTypeEnum;!function(t){t[t.Room_Status=1]="Room_Status",t[t.Game_Config=2]="Game_Config",t[t.LOGIN=3]="LOGIN",t[t.ENTER_ROOM=4]="ENTER_ROOM",t[t.CREATE_ROOM=5]="CREATE_ROOM",t[t.START_GAME=6]="START_GAME",t[t.GAME_OVER=7]="GAME_OVER"}(ResponseMessageTypeEnum||(ResponseMessageTypeEnum={}));var FireEvent=function(){function t(){}return t}();__reflect(FireEvent.prototype,"FireEvent");var MoveChangeEvent=function(){function t(){}return t}();__reflect(MoveChangeEvent.prototype,"MoveChangeEvent");var WebsocketRequest=function(){function t(){}return t}();__reflect(WebsocketRequest.prototype,"WebsocketRequest");var Bomb=function(){function t(){}return t}();__reflect(Bomb.prototype,"Bomb");var Gamer=function(){function t(){}return t}();__reflect(Gamer.prototype,"Gamer");var GameStartEvent=function(){function t(){}return t}();__reflect(GameStartEvent.prototype,"GameStartEvent");var Gift=function(){function t(){}return t}();__reflect(Gift.prototype,"Gift");