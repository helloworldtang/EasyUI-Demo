$(function(){
    var btnList = [
        {
            text: "编辑",
            plain: true,
            handler: function() {
                alert('编辑');
            }
        },
        {
            iconCls: "icon-cut",
            plain: true,
            handler: function() {
                alert('cut');
            }
        },
    ];

    $("#box").dialog({
        width: 500,
        height: 350,
        title: "对话框",
        // collapsible: true,  // 继承于window组件，默认为false
        // minimizable: true,  // 继承于window组件，默认为false
        // maximizable: true,  // 继承于window组件，默认为false
        // closable: true,     // 继承于window组件，默认为false
        toolbar: btnList,     // 标题栏下侧的工具栏
        tools: btnList,       // 标题栏上的工具栏(这里不能显示无图标按钮)
        buttons: btnList,     // 对话框最底部的按钮
    });

    console.log($("#box").dialog('dialog'));        // 返回对话框整体部分

    // 其余的方法属性请参考Window组件
});