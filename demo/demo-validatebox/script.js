$(function(){
	// 添加自定义验证
	$.extend($.fn.validatebox.defaults.rules, {
		minLength: {
			validator: function(value, param) {
				return value.length >= param[0];		// 之所以param[0]是因为传入的参数可能有多个，是一个数组
			},
			message: '请输入长度不小于{0}的字符',
		}
	});

	$("#email").validatebox({
		required: true,
		// validType: 'email',			// 限制email格式
		// validType: 'url',			// 限制url格式
		// validType: 'length[2,10]',	// 限制长度
		// validType: "remote['content.php', 'abc']",	// 远程页面验证格式(性能消耗较大，不推荐)
		// validType: ['email', 'length[5,10]'],	// 组合验证格式
		validType: 'minLength[5]',					// 使用自定义验证
		// missingMessage: "请输入内容",			// 缺少
		// invalidMessage: "您输入的格式非法",

		// 继承Tooltip的属性
		tipPosition: 'right',		// 'left', 'right', 'top', 'bottom'
		deltaX: 100,			// tip的水平偏移
		// novalidate: true,		// 关闭验证
	});

	// console.log($("#email").validatebox('options'));
	// $("#email").validatebox("destroy");

	// console.log($("#email").validatebox('validate'));	// 返回输入框对象
	$("#email").blur(function(e) {
		console.log($("#email").validatebox('isValid'));	// 验证输入是否合法(验证开启才有效)
	});

	// $("#email").validatebox("disableValidation");		// 关闭验证
	// $("#email").validatebox("enableValidation");		// 开启验证
});