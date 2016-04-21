$(function() {
    // 新增按钮
    var buttons = $.extend([], $.fn.datebox.defaults.buttons);
    buttons.splice(1, 0, {
        text: '新增',
        handler: function(e) {
            alert("新增");
        }
    });

    $("#box").datebox({
        panelWidth: 300,
        panelHeight: 300,
        currentText: '今天',     // 今天按钮文本
        // okText: '确认',
        closeText: '关闭',       // 关闭按钮文本
        buttons: buttons,       // 设置按钮
        // 格式化日期字符串(EasyUI 1.4.5有BUG)
        // formatter: function(date) {
        //     console.log(date);
        //     return date.getFullYear() + "/" + (date.getMonth()+1) + "/" + date.getDate();
        // },
        // 解析器，决定最终选择的结果
        // parser: function(date) {
        //     return new Date(2016,3,11);
        // },
        // onSelect: function(date) {
        //     alert(date);
        // },
    });

    $("#cc").calendar({
        firstDay: 1,
    });

    var cal = $("#box").datebox('calendar');    // 获取日历对象
    cal.calendar({
        firstDay: 2,
    });

    $("#box").datebox("setValue", "09/22/2016");    // 设置值
    console.log($("#box").datebox("getValue"));
});