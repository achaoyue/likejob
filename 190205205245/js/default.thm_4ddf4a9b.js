window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","GameApp":"resource/eui_skins/GameApp.exml","HomeTabPanel":"resource/eui_skins/homeTab/HomeTabPanel.exml","RechangePanel":"resource/eui_skins/dialog/RechangePanel.exml","WithdrawPanel":"resource/eui_skins/dialog/WithdrawPanel.exml","GamePanel":"resource/eui_skins/game/GamePanel.exml","VirtualJoystick":"resource/eui_skins/game/VirtualJoystick.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/dialog/RechangePanel.exml'] = window.RechangePanelSkin = (function (_super) {
	__extends(RechangePanelSkin, _super);
	var RechangePanelSkin$Skin1 = 	(function (_super) {
		__extends(RechangePanelSkin$Skin1, _super);
		function RechangePanelSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","asserts_json.b_5")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RechangePanelSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "asserts_json.b_4";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RechangePanelSkin$Skin1;
	})(eui.Skin);

	var RechangePanelSkin$Skin2 = 	(function (_super) {
		__extends(RechangePanelSkin$Skin2, _super);
		function RechangePanelSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","asserts_json.b_5")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RechangePanelSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "asserts_json.b_4";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RechangePanelSkin$Skin2;
	})(eui.Skin);

	function RechangePanelSkin() {
		_super.call(this);
		this.skinParts = ["radio","butCommit","butConcel","qrImage","qrGroup"];
		
		this.height = 584;
		this.width = 620;
		this.elementsContent = [this._Group1_i(),this.qrGroup_i()];
	}
	var _proto = RechangePanelSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 254;
		t.width = 620;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._RadioButton1_i(),this._RadioButton2_i(),this.radio_i(),this.butCommit_i(),this.butConcel_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.9;
		t.fillColor = 0xc1f7b4;
		t.height = 255;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 620;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._RadioButton1_i = function () {
		var t = new eui.RadioButton();
		t.groupName = "radioGroup";
		t.label = "3000豆";
		t.value = "3000";
		t.x = 404;
		t.y = 58;
		return t;
	};
	_proto._RadioButton2_i = function () {
		var t = new eui.RadioButton();
		t.enabled = true;
		t.groupName = "radioGroup";
		t.label = "1000豆";
		t.value = "1000";
		t.x = 82;
		t.y = 58;
		return t;
	};
	_proto.radio_i = function () {
		var t = new eui.RadioButton();
		this.radio = t;
		t.groupName = "radioGroup";
		t.label = "2000豆";
		t.value = "2000";
		t.x = 243;
		t.y = 58;
		return t;
	};
	_proto.butCommit_i = function () {
		var t = new eui.Button();
		this.butCommit = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 59;
		t.label = "确定";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 136;
		t.x = 107;
		t.y = 177.33;
		t.skinName = RechangePanelSkin$Skin1;
		return t;
	};
	_proto.butConcel_i = function () {
		var t = new eui.Button();
		this.butConcel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 59;
		t.label = "取消";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 136;
		t.x = 304;
		t.y = 177.33;
		t.skinName = RechangePanelSkin$Skin2;
		return t;
	};
	_proto.qrGroup_i = function () {
		var t = new eui.Group();
		this.qrGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 308;
		t.visible = false;
		t.width = 490;
		t.x = 65;
		t.y = 268;
		t.elementsContent = [this._Rect2_i(),this._Label1_i(),this.qrImage_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.9;
		t.fillColor = 0xc1f7b4;
		t.height = 329;
		t.width = 620;
		t.x = -65;
		t.y = -14;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "长按二维码充值";
		t.textColor = 0x828282;
		t.x = 25;
		t.y = 13.67;
		return t;
	};
	_proto.qrImage_i = function () {
		var t = new eui.Image();
		this.qrImage = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 260;
		t.width = 260;
		t.x = 115;
		t.y = 41.67;
		return t;
	};
	return RechangePanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/dialog/WithdrawPanel.exml'] = window.WithdrawPanelSkin = (function (_super) {
	__extends(WithdrawPanelSkin, _super);
	var WithdrawPanelSkin$Skin3 = 	(function (_super) {
		__extends(WithdrawPanelSkin$Skin3, _super);
		function WithdrawPanelSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = WithdrawPanelSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "asserts_json.b_3";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return WithdrawPanelSkin$Skin3;
	})(eui.Skin);

	var WithdrawPanelSkin$Skin4 = 	(function (_super) {
		__extends(WithdrawPanelSkin$Skin4, _super);
		function WithdrawPanelSkin$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","asserts_json.b_5")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = WithdrawPanelSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "asserts_json.b_4";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return WithdrawPanelSkin$Skin4;
	})(eui.Skin);

	var WithdrawPanelSkin$Skin5 = 	(function (_super) {
		__extends(WithdrawPanelSkin$Skin5, _super);
		function WithdrawPanelSkin$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","asserts_json.b_5")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = WithdrawPanelSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "asserts_json.b_4";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return WithdrawPanelSkin$Skin5;
	})(eui.Skin);

	function WithdrawPanelSkin() {
		_super.call(this);
		this.skinParts = ["totalBeans","beanNum","btnChoseFile","btnSubmit","btnCancel","qrImg"];
		
		this.height = 347;
		this.width = 620;
		this.elementsContent = [this._Rect1_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this.totalBeans_i(),this.beanNum_i(),this.btnChoseFile_i(),this.btnSubmit_i(),this.btnCancel_i(),this.qrImg_i()];
	}
	var _proto = WithdrawPanelSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xf49090;
		t.height = 347;
		t.width = 620;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.text = "可提现豆豆";
		t.x = 53;
		t.y = 58;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.text = "提现豆豆";
		t.x = 83;
		t.y = 116;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.text = "微信收钱码";
		t.x = 53;
		t.y = 173.5;
		return t;
	};
	_proto.totalBeans_i = function () {
		var t = new eui.Label();
		this.totalBeans = t;
		t.anchorOffsetX = 0;
		t.size = 25;
		t.text = "1200个";
		t.textColor = 0xdbd9d9;
		t.width = 147.67;
		t.x = 223;
		t.y = 63;
		return t;
	};
	_proto.beanNum_i = function () {
		var t = new eui.TextInput();
		this.beanNum = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.displayAsPassword = true;
		t.height = 43;
		t.width = 147;
		t.x = 223;
		t.y = 109.5;
		return t;
	};
	_proto.btnChoseFile_i = function () {
		var t = new eui.Button();
		this.btnChoseFile = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 39.55;
		t.label = "选择";
		t.width = 103;
		t.x = 223;
		t.y = 168.73;
		t.skinName = WithdrawPanelSkin$Skin3;
		return t;
	};
	_proto.btnSubmit_i = function () {
		var t = new eui.Button();
		this.btnSubmit = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 59.55;
		t.label = "确定";
		t.width = 123.21;
		t.x = 175.9;
		t.y = 268.45;
		t.skinName = WithdrawPanelSkin$Skin4;
		return t;
	};
	_proto.btnCancel_i = function () {
		var t = new eui.Button();
		this.btnCancel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 59.55;
		t.label = "取消";
		t.width = 123.21;
		t.x = 317.13;
		t.y = 268.45;
		t.skinName = WithdrawPanelSkin$Skin5;
		return t;
	};
	_proto.qrImg_i = function () {
		var t = new eui.Image();
		this.qrImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 190;
		t.width = 197.33;
		t.x = 401;
		t.y = 47;
		return t;
	};
	return WithdrawPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/GamePanel.exml'] = window.GamePanelSkin = (function (_super) {
	__extends(GamePanelSkin, _super);
	var GamePanelSkin$Skin6 = 	(function (_super) {
		__extends(GamePanelSkin$Skin6, _super);
		function GamePanelSkin$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GamePanelSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "fire_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GamePanelSkin$Skin6;
	})(eui.Skin);

	function GamePanelSkin() {
		_super.call(this);
		this.skinParts = ["rect","vJoystick","meScore","oScore","bgGroup","btnFire","btn_close","loginText","btnStopWait","waitGroup"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.bgGroup_i(),this._Group1_i(),this.waitGroup_i()];
	}
	var _proto = GamePanelSkin.prototype;

	_proto.bgGroup_i = function () {
		var t = new eui.Group();
		this.bgGroup = t;
		t.height = 1136;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.rect_i(),this._Image1_i(),this.vJoystick_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this._Image17_i(),this._Image18_i(),this._Image19_i(),this._Image20_i(),this._Image21_i(),this._Image22_i(),this.meScore_i(),this.oScore_i()];
		return t;
	};
	_proto.rect_i = function () {
		var t = new eui.Rect();
		this.rect = t;
		t.fillColor = 0xd39898;
		t.height = 1136;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "repeat";
		t.percentHeight = 100;
		t.source = "grass_jpg";
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.vJoystick_i = function () {
		var t = new VirtualJoystick();
		this.vJoystick = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 260.6;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 260.6;
		t.x = 20.65;
		t.y = 845.4;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "plant_png";
		t.x = 362;
		t.y = 592;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "plant_png";
		t.x = 50;
		t.y = 525;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "plant_png";
		t.x = 343;
		t.y = 726.5;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "plant_png";
		t.x = 238;
		t.y = 333;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "plant_png";
		t.x = 385;
		t.y = 419;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "plant_png";
		t.x = 507.5;
		t.y = 659;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "plant_png";
		t.x = 218;
		t.y = 486;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "plant_png";
		t.x = 106;
		t.y = 152;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "plant_png";
		t.x = 224;
		t.y = 216;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "plant_png";
		t.x = 362;
		t.y = 248;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "plant_png";
		t.x = 460;
		t.y = 42;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "plant_png";
		t.x = 210;
		t.y = -2;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "plant_png";
		t.x = 309;
		t.y = 111.83;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "plant_png";
		t.x = 50;
		t.y = 333;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "plant_png";
		t.x = 113;
		t.y = 693;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.source = "plant_png";
		t.x = 476;
		t.y = 841;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.source = "plant_png";
		t.x = 343;
		t.y = 975.7;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.source = "plant_png";
		t.x = 146;
		t.y = 908;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.source = "plant_png";
		t.x = 252;
		t.y = 828;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.source = "plant_png";
		t.x = 497;
		t.y = 501;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.source = "plant_png";
		t.x = 507.5;
		t.y = 333;
		return t;
	};
	_proto.meScore_i = function () {
		var t = new eui.Label();
		this.meScore = t;
		t.text = "0分";
		t.x = 48.5;
		t.y = 25;
		return t;
	};
	_proto.oScore_i = function () {
		var t = new eui.Label();
		this.oScore = t;
		t.text = "0分";
		t.textColor = 0xf40707;
		t.x = 450;
		t.y = 16.5;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 193.33;
		t.width = 226;
		t.x = 393;
		t.y = 912.67;
		t.elementsContent = [this.btnFire_i(),this.btn_close_i()];
		return t;
	};
	_proto.btnFire_i = function () {
		var t = new eui.Button();
		this.btnFire = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 145.33;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = true;
		t.width = 145.33;
		t.x = 40.34;
		t.y = 24;
		t.skinName = GamePanelSkin$Skin6;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Button();
		this.btn_close = t;
		t.anchorOffsetX = 0;
		t.height = 56;
		t.label = "关闭";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 56;
		t.x = 170;
		t.y = -890.15;
		return t;
	};
	_proto.waitGroup_i = function () {
		var t = new eui.Group();
		this.waitGroup = t;
		t.anchorOffsetX = 0;
		t.height = 200;
		t.width = 476;
		t.x = 82;
		t.y = 336;
		t.elementsContent = [this._Rect1_i(),this._Rect2_i(),this.loginText_i(),this.btnStopWait_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.4;
		t.fillColor = 0x307f0e;
		t.height = 1134;
		t.width = 640;
		t.x = -82;
		t.y = -336;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.loginText_i = function () {
		var t = new eui.Label();
		this.loginText = t;
		t.fontFamily = "SimSun";
		t.text = "匹配中。。。。";
		t.x = 68.95;
		t.y = 40;
		return t;
	};
	_proto.btnStopWait_i = function () {
		var t = new eui.Button();
		this.btnStopWait = t;
		t.label = "取消等待";
		t.x = 324;
		t.y = 128;
		return t;
	};
	return GamePanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/GamerUi.exml'] = window.GamerUi = (function (_super) {
	__extends(GamerUi, _super);
	function GamerUi() {
		_super.call(this);
		this.skinParts = [];
		
		this.minHeight = 80;
		this.minWidth = 80;
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
	}
	var _proto = GamerUi.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 80;
		t.source = "wandou_png";
		t.width = 80;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 49.04;
		t.anchorOffsetY = 187.86;
		t.height = 150;
		t.source = "saomiao_png";
		t.x = 44.04;
		t.y = 37.86;
		return t;
	};
	return GamerUi;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/VirtualJoystick.exml'] = window.VirtualJoystickSkin = (function (_super) {
	__extends(VirtualJoystickSkin, _super);
	function VirtualJoystickSkin() {
		_super.call(this);
		this.skinParts = ["rect","centerPoint","bgGroup"];
		
		this.minHeight = 100;
		this.minWidth = 100;
		this.elementsContent = [this.bgGroup_i()];
	}
	var _proto = VirtualJoystickSkin.prototype;

	_proto.bgGroup_i = function () {
		var t = new eui.Group();
		this.bgGroup = t;
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.elementsContent = [this.rect_i(),this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.centerPoint_i()];
		return t;
	};
	_proto.rect_i = function () {
		var t = new eui.Rect();
		this.rect = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseWidth = 500;
		t.fillAlpha = 0.4;
		t.fillColor = 0xefe677;
		t.percentHeight = 90;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.percentWidth = 90;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 15.43;
		t.percentHeight = 10;
		t.horizontalCenter = 0;
		t.rotation = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "asserts_json.b_6";
		t.top = 0;
		t.percentWidth = 10;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 15.43;
		t.percentHeight = 10;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "asserts_json.b_6";
		t.verticalCenter = 0;
		t.percentWidth = 10;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 15.43;
		t.bottom = 0;
		t.percentHeight = 10;
		t.horizontalCenter = 0;
		t.rotation = 270;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "asserts_json.b_6";
		t.percentWidth = 10;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 15.43;
		t.percentHeight = 10;
		t.right = 0;
		t.rotation = 180;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "asserts_json.b_6";
		t.verticalCenter = 0;
		t.percentWidth = 10;
		return t;
	};
	_proto.centerPoint_i = function () {
		var t = new eui.Rect();
		this.centerPoint = t;
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.ellipseHeight = 100;
		t.ellipseWidth = 100;
		t.fillColor = 0xe04141;
		t.height = 50;
		t.width = 50;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return VirtualJoystickSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameApp.exml'] = window.GameAppSkin = (function (_super) {
	__extends(GameAppSkin, _super);
	var GameAppSkin$Skin7 = 	(function (_super) {
		__extends(GameAppSkin$Skin7, _super);
		function GameAppSkin$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameAppSkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "play_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameAppSkin$Skin7;
	})(eui.Skin);

	function GameAppSkin() {
		_super.call(this);
		this.skinParts = ["btn_start","bg","headImg","beanImg","beanScore","btn_tixian","btn_congzhi","tabPanel"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.bg_i(),this.headImg_i(),this.beanImg_i(),this.beanScore_i(),this.btn_tixian_i(),this.btn_congzhi_i(),this.tabPanel_i(),this._Image4_i()];
	}
	var _proto = GameAppSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Group();
		this.bg = t;
		t.height = 1136;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.btn_start_i(),this._Label1_i(),this._Image3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1136;
		t.source = "grass_bg_jpg";
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "banner_png";
		t.visible = false;
		t.x = 10;
		t.y = 130;
		return t;
	};
	_proto.btn_start_i = function () {
		var t = new eui.Button();
		this.btn_start = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78.79;
		t.label = "";
		t.width = 197.21;
		t.x = 201;
		t.y = 856;
		t.skinName = GameAppSkin$Skin7;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.backgroundColor = 0x020101;
		t.height = 52;
		t.size = 18;
		t.text = "抢红包游戏素材来自网络，如有侵权，请联系我们，我们将在第一时间删除问题素材";
		t.textAlign = "center";
		t.width = 406;
		t.x = 117;
		t.y = 1056;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 374;
		t.rotation = 342.04;
		t.source = "tree1_png";
		t.width = 362;
		t.x = 320;
		t.y = 151.62;
		return t;
	};
	_proto.headImg_i = function () {
		var t = new eui.Image();
		this.headImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.source = "pangzi_png";
		t.width = 72;
		t.x = 24;
		t.y = 20;
		return t;
	};
	_proto.beanImg_i = function () {
		var t = new eui.Image();
		this.beanImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.source = "asserts_json.s1";
		t.width = 40;
		t.x = 126.7;
		t.y = 40;
		return t;
	};
	_proto.beanScore_i = function () {
		var t = new eui.Label();
		this.beanScore = t;
		t.size = 20;
		t.text = "1200个";
		t.x = 174;
		t.y = 60;
		return t;
	};
	_proto.btn_tixian_i = function () {
		var t = new eui.Button();
		this.btn_tixian = t;
		t.anchorOffsetX = 7.66;
		t.anchorOffsetY = 5.28;
		t.height = 35;
		t.label = "提现";
		t.width = 67;
		t.x = 282.86;
		t.y = 52.51;
		return t;
	};
	_proto.btn_congzhi_i = function () {
		var t = new eui.Button();
		this.btn_congzhi = t;
		t.anchorOffsetX = 7.66;
		t.anchorOffsetY = 5.79;
		t.height = 35;
		t.label = "充值";
		t.width = 67;
		t.x = 358.19;
		t.y = 53.02;
		return t;
	};
	_proto.tabPanel_i = function () {
		var t = new HomeTabPanel();
		this.tabPanel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 580;
		t.visible = false;
		t.width = 620;
		t.x = 10;
		t.y = 250;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 380.52;
		t.rotation = 330.96;
		t.source = "tree2_png";
		t.width = 382.47;
		t.x = -120.89;
		t.y = 225.66;
		return t;
	};
	return GameAppSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/homeTab/HomeTabItem.exml'] = window.HomeTabItemSkin = (function (_super) {
	__extends(HomeTabItemSkin, _super);
	function HomeTabItemSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 66;
		this.width = 450;
		this.elementsContent = [this._Label1_i(),this._Rect1_i(),this._Label2_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this._Label1,"text");
	}
	var _proto = HomeTabItemSkin.prototype;

	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.x = 49;
		t.y = 18;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0x05c2fc;
		t.height = 1;
		t.width = 620;
		t.x = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.rotation = 40.36;
		t.size = 30;
		t.text = "胜利！";
		t.textColor = 0xf41a1a;
		t.x = 212;
		t.y = 0;
		return t;
	};
	return HomeTabItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/homeTab/HomeTabPanel.exml'] = window.HomeTabPanelSkin = (function (_super) {
	__extends(HomeTabPanelSkin, _super);
	var HomeTabPanelSkin$Skin8 = 	(function (_super) {
		__extends(HomeTabPanelSkin$Skin8, _super);
		function HomeTabPanelSkin$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HomeTabPanelSkin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "asserts_json.field";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HomeTabPanelSkin$Skin8;
	})(eui.Skin);

	var HomeTabPanelSkin$Skin9 = 	(function (_super) {
		__extends(HomeTabPanelSkin$Skin9, _super);
		function HomeTabPanelSkin$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HomeTabPanelSkin$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "asserts_json.field";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HomeTabPanelSkin$Skin9;
	})(eui.Skin);

	function HomeTabPanelSkin() {
		_super.call(this);
		this.skinParts = ["realTimeList","realTimeScroller","myHistoryList","myHistoryScroller","vStack","btnRealTime","btnMyHistory"];
		
		this.height = 580;
		this.width = 620;
		this.elementsContent = [this._Image1_i(),this.vStack_i(),this.btnRealTime_i(),this.btnMyHistory_i()];
	}
	var _proto = HomeTabPanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "scale";
		t.height = 520;
		t.source = "asserts_json.f";
		t.width = 620;
		t.x = 0;
		t.y = 60;
		return t;
	};
	_proto.vStack_i = function () {
		var t = new eui.ViewStack();
		this.vStack = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 370;
		t.selectedIndex = 1;
		t.width = 450;
		t.x = 84;
		t.y = 128;
		t.elementsContent = [this._Group2_i(),this._Group4_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 370;
		t.width = 450;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.realTimeScroller_i()];
		return t;
	};
	_proto.realTimeScroller_i = function () {
		var t = new eui.Scroller();
		this.realTimeScroller = t;
		t.x = 0;
		t.y = 0;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.realTimeList_i()];
		return t;
	};
	_proto.realTimeList_i = function () {
		var t = new eui.List();
		this.realTimeList = t;
		t.height = 370;
		t.width = 450;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 370;
		t.width = 450;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.myHistoryScroller_i()];
		return t;
	};
	_proto.myHistoryScroller_i = function () {
		var t = new eui.Scroller();
		this.myHistoryScroller = t;
		t.x = 0;
		t.y = 0;
		t.viewport = this._Group3_i();
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.myHistoryList_i()];
		return t;
	};
	_proto.myHistoryList_i = function () {
		var t = new eui.List();
		this.myHistoryList = t;
		t.height = 370;
		t.width = 450;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btnRealTime_i = function () {
		var t = new eui.Button();
		this.btnRealTime = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 59;
		t.label = "实时战况";
		t.rotation = -350;
		t.width = 222;
		t.x = 90.37;
		t.y = -22.05;
		t.skinName = HomeTabPanelSkin$Skin8;
		return t;
	};
	_proto.btnMyHistory_i = function () {
		var t = new eui.Button();
		this.btnMyHistory = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 59;
		t.label = "我的战绩";
		t.rotation = 350;
		t.width = 222;
		t.x = 312;
		t.y = 16.5;
		t.skinName = HomeTabPanelSkin$Skin9;
		return t;
	};
	return HomeTabPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);