$(function(){
	$("#box").numberbox({
		min: 5,			// 最小值
		// max: 500,		// 最大值
		precision: 2,	// 保留两位小数(四舍五入)
		// decimalSeparator: ':',	// 小数点改成":"
		groupSeparator: ",",	// 每三位以","隔开
		// prefix: '$',	// 前缀
		// suffix: '€',	// 后缀

		// 事件
		// 过滤输入值
		// filter: function() {
		// 	return false;
		// },
		// 定制格式，此处添加的字符，不会写入value
		// formatter: function(value) {
		// 	return 'abc' + value;
		// },
		// 解析器，与定制格式类似，但此处添加的字符会写入value
		// parser: function(value) {
		// 	return 'abc' + value;
		// },
		// 值修改时触发
		// onChange: function(newValue, oldValue) {
		// 	alert(newValue + "|" + oldValue);
		// },
	});

	// $(document).keyup(function() {
	// 	$("#box").numberbox('fix');		// 执行修正
	// });
});