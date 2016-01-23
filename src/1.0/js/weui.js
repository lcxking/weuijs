var weui = {
	init : function(){

	},
	//消息提示框
	dialog: {
		confirm : function(bd,callback,title){
			var $dom = $('.weui_dialog_confirm');
			if(! $dom.length){
				var dialog_config_html = '<div class="weui_dialog_confirm" style="display:none;"><div class="weui_mask"></div><div class="weui_dialog"><div class="weui_dialog_hd"><strong class="weui_dialog_title">提醒</strong></div><div class="weui_dialog_bd"></div><div class="weui_dialog_ft"><a href="javascript:;" class="weui_btn_dialog default">取消</a><a href="javascript:;" class="weui_btn_dialog primary">确定</a></div></div></div>';
				$('body').append(dialog_config_html);
				$dom = $('.weui_dialog_confirm');
			}
			$dom.show();
			title!=undefined && $dom.find('.weui_dialog_title').html(title);
			bd && $dom.find('.weui_dialog_bd').html(bd);
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
		alert : function(bd,callback,title){
			var $dom = $('.weui_dialog_alert');
			if(! $dom.length){
				var dialog_config_html = '<div class="weui_dialog_alert" style="display:none;"><div class="weui_mask"></div><div class="weui_dialog"><div class="weui_dialog_hd"><strong class="weui_dialog_title">警告</strong></div><div class="weui_dialog_bd"></div><div class="weui_dialog_ft"><a href="javascript:;" class="weui_btn_dialog primary">确定</a></div></div></div>';
				$('body').append(dialog_config_html);
				$dom = $('.weui_dialog_alert');
			}
			$dom.show();
			title!=undefined && $dom.find('.weui_dialog_title').html(title);
			bd && $dom.find('.weui_dialog_bd').html(bd);
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
		loading : function(callback,bd){
			var $dom = $('#loadingToast');
			if(! $dom.length){
				var dom_html = '<div id="loadingToast" class="weui_loading_toast" style="display:none;"><div class="weui_mask_transparent"></div><div class="weui_toast"><div class="weui_loading"><div class="weui_loading_leaf weui_loading_leaf_0"></div><div class="weui_loading_leaf weui_loading_leaf_1"></div><div class="weui_loading_leaf weui_loading_leaf_2"></div><div class="weui_loading_leaf weui_loading_leaf_3"></div><div class="weui_loading_leaf weui_loading_leaf_4"></div><div class="weui_loading_leaf weui_loading_leaf_5"></div><div class="weui_loading_leaf weui_loading_leaf_6"></div><div class="weui_loading_leaf weui_loading_leaf_7"></div><div class="weui_loading_leaf weui_loading_leaf_8"></div><div class="weui_loading_leaf weui_loading_leaf_9"></div><div class="weui_loading_leaf weui_loading_leaf_10"></div><div class="weui_loading_leaf weui_loading_leaf_11"></div></div><p class="weui_toast_content">数据加载中</p></div></div>';
				$('body').append(dom_html);
				$dom = $('#loadingToast');
			}
			if ($dom.css('display') != 'none') {
            	return;
            }
            bd!=undefined && $dom.find('.weui_toast_content').html(bd);
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
			$('#loadingToast').hide();
		},
		show : function(bd){
			var $dom = $('#toast');
			if(! $dom.length){
				var dom_html = '<div id="toast" style="display:none;"><div class="weui_mask_transparent"></div><div class="weui_toast"><i class="weui_icon_toast"></i><p class="weui_toast_content">已完成</p></div></div>';
				$('body').append(dom_html);
				$dom = $('#toast');
			}
			if ($dom.css('display') != 'none') {
            	return;
            }
            bd!=undefined && $dom.find('.weui_toast_content').html(bd);
			$dom.show();
			setTimeout(function () {
			    $dom.hide();
			}, 2000);
		}
	},

};