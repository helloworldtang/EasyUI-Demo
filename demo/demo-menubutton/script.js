$(function(){
    $("#edit").menubutton({
        menu: "#box",
        iconCls: "icon-edit",
        plain: false,       // 简洁链接按钮, 默认true
        duration: 500,      // 鼠标经过时，要延迟500ms才出现自动菜单
        // disabled: true,     // 失效
    });

    console.log($("#edit").menubutton("options"));
    $("#edit").menubutton("disable");       // 失效
    $("#edit").menubutton("enable");        // 生效
    // $("#edit").menubutton("destroy");       // 销毁
    
    // 菜单响应点击事件
    $("#box").menu({
        onClick: function(item) {
            alert(item.text);
        }
    })
});