var test_drag_basic = new function() {
	this.test_load = {
		method: "open",
		params: {
			url: "/test/?project=more&path=/Drag/Drag.Move_(basic).html"
		}
	};
	this.test_wait_for_loaded = {
		method: "waits.forJS",
		params: {
			js: function(){
				return document.body.className == "loaded";
			}
		}
	};
	this.test_position_box = function(){
		window.scrollTo(0,0);
		$('box').setStyles({top: 0, left: 0});
	};
	this.test_drag = {
		method: 'dragDropElem',
		params: {
			id: 'box',
			pixels: '(100,100)'
		}
	};
	this.test_measure = function(){
		var end = $('box').getPosition($('box').getOffsetParent());
		jum.assertEquals(100, end.x);
		jum.assertEquals(100, end.y);
	};
};

var test_disabled_drag = new function(){
	this.test_disable_drag = {
		method: 'click',
		params: {
			'id': 'disable'
		}
	};
	this.test_position_box = function(){
		window.scrollTo(0,0);
		$('box').setStyles({top: 0, left: 0});
	};
	this.test_drag = {
		method: 'dragDropElem',
		params: {
			id: 'box',
			pixels: '(100,100)'
		}
	};
	this.test_measure = function(){
		var end = $('box').getPosition($('box').getOffsetParent());
		jum.assertEquals(0, end.x);
		jum.assertEquals(0, end.y);
	};
	
};

var test_enable_drag = new function(){
	this.test_enable_drag = {
		method: 'click',
		params: {
			'id': 'enable'
		}
	};
	this.test_position_box = function(){
		window.scrollTo(0,0);
		$('box').setStyles({top: 0, left: 0});
	};
	this.test_drag = {
		method: 'dragDropElem',
		params: {
			id: 'box',
			pixels: '(100,100)'
		}
	};
	this.test_measure = function(){
		var end = $('box').getPosition($('box').getOffsetParent());
		jum.assertEquals(100, end.x);
		jum.assertEquals(100, end.y);
	};
};