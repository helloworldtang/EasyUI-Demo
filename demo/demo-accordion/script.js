$(function(){
    $("#box").accordion({
        width: 500,
        height: 300,
        // fit: true,      // 全屏
        // border: false,      // 是否显示边框
        // animate: false,     // 是否显示动画
        // multiple: true,     // 是否允许同时展开
        // selected: 1,        // 默认选定第二个

        // 事件
        // 选中选项卡时候触发
        // onSelect: function(title, index) {
        //     alert("onSelect: " + title + ", " + index);
        // },
        // 取消选中选项卡时候触发
        // onUnselect: function(title, index) {
        //     alert("onUnselect: " + title, + ", " + index);
        // },
        // 添加新面板时触发
        onAdd: function(title, index) {
            alert("onAdd: " + title + ", " + index);
        },
        // 移除时执行
        onRemove: function(title, index) {
            alert("onRemove: " + title + ", " + index);
        },
    });

    console.log($("#box").accordion("panels"));     // 返回所有选项卡对象
    $("#box").accordion("resize");      // 重新调整大小及布局
    console.log($("#box").accordion("getSelected"));    // 获取选中的面板
    console.log($("#box").accordion("getSelections"));  // 获取选中的多个面板(配合multiple属性使用)
    console.log($("#box").accordion("getPanel", 1));    // 获取第二个面板
    console.log($("#box").accordion("getPanelIndex", "#accordion3"));   // 获取指定面板的下标
    $("#box").accordion("select", 1);   // 选择第二个面板
    $("#box").accordion("unselect", 1); // 取消选择第二个面板

    $("#box").accordion("add", {
        // 继承了Panel的所有属性及事件，可参考Panel组件
        title: "新面板",
        content: "新面板内容",
        closable: true,
        onClose: function() {
            alert("close");
        },
        selected: false,        // 默认情况下不展开
        collapsible: false,      // 可否折叠
    });
});