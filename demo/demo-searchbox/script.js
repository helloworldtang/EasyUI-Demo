$(function(){
    $("#ss").searchbox({
    	width: 300,
    	height: 22,
        menu: "#box",		// 左侧菜单栏
        // 点击搜索按钮事件
        searcher: function(name, value) {
            alert(name + "-" + value);
        },
        prompt: '请输入关键字',		// 提示语句
        value: '固定值',		// 默认值
        // disabled: true,			// 使其失效
    });

    var m = $("#ss").searchbox('menu');		// 获取左侧菜单栏
    m.menu('setIcon', {		// 通过获取左侧菜单，修改菜单中的选项卡
    	target: m.menu('findItem', '体育频道').target,
    	iconCls: 'icon-save',
    });

    // console.log($('#ss').searchbox('textbox'));	// 获取输入文本框
    // console.log($("#ss").searchbox('getValue'));	// 获取搜索框中的值
    // $("#ss").searchbox('setValue', "123");		// 设置搜索框中的值
    // console.log($("#ss").searchbox('getName'));		// 获取菜单选项
	
	/*
	 * 根据"name"属性，设置菜单选项值
	 * 请先保证在菜单中为指定选项div设置了"name"属性
	 */
    $("#ss").searchbox('selectName', 'sports');

    // $("#ss").searchbox("destroy");

    // $("#ss").searchbox("resize", 500);		// 重置宽度
    // $("#ss").searchbox("disable");		// 使搜索框失效
    // $("#ss").searchbox("enable");		// 使搜索框生效
    // $("#ss").searchbox("clear");		// 清理搜索框中输入的内容

    $("#reset-btn").click(function() {
    	$("#ss").searchbox("reset");
    });
});