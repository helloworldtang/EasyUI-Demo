$(function(){
    $('#box').tooltip({
        content: '<strong>这里是内容提示框</strong>',
        position: 'top',         // 提示框显示位置'top', 'left', 'right', 'bottom'(默认)
        trackMouse: true,        // 提示框跟踪鼠标位置
        // deltaX: 100,
        // deltaY: 100,
        // showEvent: 'click',      // 鼠标点击的时候才显示提示框
        // hideEvent: 'dblclick',   // 鼠标双击的时候才隐藏提示框
        // showDelay: 500,          // 提示框出现延迟(ms)
        // hideDelay: 500,          // 提示框隐藏延迟(ms)
        
        // 响应事件
        onShow: function(e) {
            console.log("显示的时候触发");
        },
        onHide: function(e) {
            console.log("隐藏的时候触发");
            $("#box").tooltip("update", "新内容");     // update方法修改提示框内容
        },
        // 内容修改时响应
        onUpdate: function(e) {
            var options = $("#box").tooltip("options");     // options方法获取提示框各选项参数
            console.log("提示框内容更新, 内容为：" + options.content);
        },
        // 当提示框位置发生改变时响应
        onPosition: function(left, top) {
            console.log(left, top);
        },
        // 当提示框被销毁时响应
        onDestroy: function(e) {
            console.log("工具栏被销毁了");
        },
    });

    $("#box").click(function(e) {
        $(this).tooltip("destroy");     // destroy方法销毁提示框
    });
});