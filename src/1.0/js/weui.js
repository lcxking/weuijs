var weui = {
	init : function(){

	},
	//消息提示框
	dialog: {
		confirm : function(msg,callback,title){
			var $dom = $('#weui_dialog_confirm');
			if(! $dom.length){
				$dom = $('<div id="weui_dialog_confirm" class="weui_dialog_confirm" style="display:none;"><div class="weui_mask"></div><div class="weui_dialog"><div class="weui_dialog_hd"><strong class="weui_dialog_title">提醒</strong></div><div class="weui_dialog_bd"></div><div class="weui_dialog_ft"><a href="javascript:;" class="weui_btn_dialog default">取消</a><a href="javascript:;" class="weui_btn_dialog primary">确定</a></div></div></div>');
				$('body').append($dom);
			}
			$dom.show();
			title!=undefined && $dom.find('.weui_dialog_title').html(title);
			msg && $dom.find('.weui_dialog_bd').html(msg);
			$dom.off('click').on('click','.weui_btn_dialog.primary',function(){
				$dom.hide();
				if(typeof callback == 'function'){
					return callback();
				}
			}).on('click','.weui_btn_dialog.default',function(){
				$dom.hide();
				return false;
			});
		},
		alert : function(msg,callback,title){
			var $dom = $('#weui_dialog_alert');
			if(! $dom.length){
				$dom = $('<div id="weui_dialog_alert" class="weui_dialog_alert" style="display:none;"><div class="weui_mask"></div><div class="weui_dialog"><div class="weui_dialog_hd"><strong class="weui_dialog_title">警告</strong></div><div class="weui_dialog_bd"></div><div class="weui_dialog_ft"><a href="javascript:;" class="weui_btn_dialog primary">确定</a></div></div></div>');
				$('body').append($dom);
			}
			$dom.show();
			title!=undefined && $dom.find('.weui_dialog_title').html(title);
			msg && $dom.find('.weui_dialog_bd').html(msg);
			$dom.off('click').on('click','.weui_btn_dialog.primary',function(){
				$dom.hide();
				if(typeof callback == 'function'){
					return callback();
				}
			});
		},
	},
	//简易消息
	toast : {
		init : function(msg){
			var $dom = $('#weui_toast');
			if(! $dom.length){
				$dom = $('<div id="weui_toast" style="display:none;"><div class="weui_mask_transparent"></div><div class="weui_toast"><i class="weui_icon_toast"></i><p class="weui_toast_content">已完成</p></div></div>');
				$('body').append($dom);
			}
			if ($dom.css('display') != 'none') {
            	return;
            }
            msg!=undefined && $dom.find('.weui_toast_content').html(msg);
			$dom.show();
			setTimeout(function () {
			    $dom.hide();
			}, 2000);
		},
		loading : function(callback,msg){
			var $dom = $('#weui_loading_toast');
			if(! $dom.length){
				$dom = $('<div id="weui_loading_toast" class="weui_loading_toast" style="display:none;"><div class="weui_mask_transparent"></div><div class="weui_toast"><div class="weui_loading"><div class="weui_loading_leaf weui_loading_leaf_0"></div><div class="weui_loading_leaf weui_loading_leaf_1"></div><div class="weui_loading_leaf weui_loading_leaf_2"></div><div class="weui_loading_leaf weui_loading_leaf_3"></div><div class="weui_loading_leaf weui_loading_leaf_4"></div><div class="weui_loading_leaf weui_loading_leaf_5"></div><div class="weui_loading_leaf weui_loading_leaf_6"></div><div class="weui_loading_leaf weui_loading_leaf_7"></div><div class="weui_loading_leaf weui_loading_leaf_8"></div><div class="weui_loading_leaf weui_loading_leaf_9"></div><div class="weui_loading_leaf weui_loading_leaf_10"></div><div class="weui_loading_leaf weui_loading_leaf_11"></div></div><p class="weui_toast_content">数据加载中</p></div></div>');
				$('body').append($dom);
			}
			if ($dom.css('display') != 'none') {
            	return;
            }
            msg!=undefined && $dom.find('.weui_toast_content').html(msg);
			$dom.show();
			if(typeof callback == 'function'){
				callback();
			}else{
				setTimeout(function () {
				    $dom.hide();
				}, 2000);
			}
		},
		loaded : function(){
			$('#weui_loading_toast').hide();
		},
		toptips : function(msg){
			var $dom = $('#weui_toast_toptips');
			if(! $dom.length){
				$dom = $('<div id="weui_toast_toptips" class="weui_toptips weui_warn js_tooltips" style="display: none;">格式不对</div>');
				$('body').append($dom);
			}
			msg!=undefined && $dom.html(msg);
            if ($dom.css('display') != 'none') {
                return;
            }
            $dom.show();
            setTimeout(function () {
                $dom.hide();
            }, 2000);
		}
	},
	//菜单
	actionsheet : {
		_dom : $('#weui_actionsheet'),
		init : function(cell){
			var self = this;
			if(! self._dom.length){
				self._dom = $('<div id="weui_actionsheet"><div class="weui_mask_transition"></div><div class="weui_actionsheet"><div class="weui_actionsheet_menu"></div><div class="weui_actionsheet_action"><div class="weui_actionsheet_cell">取消</div></div></div></div>');
				$('body').append(self._dom);
			}
			if(l=cell.length){
				var cell_html = '';
				self._dom.find('.weui_actionsheet_menu').html(cell_html);
				for(i=0;i<l;i++){
					cell_html+='<div class="weui_actionsheet_cell">'+cell[i]+'</div>';
				}
				self._dom.find('.weui_actionsheet_menu').append(cell_html);
			}
			var sheet = self._dom.find('.weui_actionsheet');
			var mask = self._dom.find('.weui_mask_transition');
			sheet.addClass('weui_actionsheet_toggle');
			mask.show().addClass('weui_fade_toggle').on('click',function(){
				self.cancle(sheet,mask);
			});
			self._dom.find('.weui_actionsheet_action').on('click',function(){
				self.cancle(sheet,mask);
			});
			sheet.unbind('transitionend').unbind('webkitTransitionEnd');
		},
		cancle : function(sheet,mask){
			var self = this;
			if(! sheet){
				sheet = self._dom.find('.weui_actionsheet');
			}
			if(! mask){
				mask = self._dom.find('.weui_mask_transition');
			}
			mask.removeClass('weui_fade_toggle');
			sheet.removeClass('weui_actionsheet_toggle').on('transitionend', function () {
                mask.hide();
            }).on('webkitTransitionEnd', function () {
                mask.hide();
            });
		}
	},
	file : {
		change : function(obj){

		},
		upload : function(obj){
			
		}
	}
	
};