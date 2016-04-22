$(function(){
	$("#box").form({
		url: "form.php",
		// 提交表单时的事件, 返回false则不提交表单
		onSubmit: function(param) {
			// 可以在这里强制为表单提交添加新数据
			param.code = "123456";
			// 验证表单中的数据是否都有效
			// 如果存在无效数据，则无法提交表单
			return $(this).form("validate");	
		},
		// 表单提交成功后触发
		success: function(data) {
			// console.log(data);
			var obj = JSON.parse(data);
			console.log(obj);
		},
		// 加载远程页面数据前触发
		onBeforeLoad: function() {
			alert("load之前");
		},
		// Load成功后触发
		onLoadSuccess: function(data) {
			alert("load成功");
			console.log(data);
		},
		// Load失败后触发
		onLoadError: function(e) {
			alert("load失败");
			console.log(e);
		}
	});

	// 表单加载本地数据
	// $("#box").form("load", {
	// 	name: "蜡笔小新",
	// 	email: "abc@163.com",
	// });

	// 表单加载远程页面数据
	$("#box").form("load", 'content.php');

	// 启动或关闭表单验证
	// $("#box").form("disableValidation");
	// $("#box").form("enableValidation");
});