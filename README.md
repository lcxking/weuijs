# weuijs
基本　weui　写的js应用
请加载　weui.min.css  和　zepto.min.js

说明：
１、dialog 
weui.dialog.alert('警告内容',function(){
	点击后的事件
},'标题，默认：警告，如果不显示，请为空')

weui.dialog.confirm(content,callback,title)

2、toast
weui.toast.init()
weui.toast.loading(function(){
	//ajax 加载内容

	完成后请　weui.toast.loaded();
})

weui.toast.toptips(msg)


3、actionsheet(array())


