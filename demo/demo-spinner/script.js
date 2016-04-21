$(function() {
    $("#box").spinner({
        required: true,
        width: 300,
        height: 40,
        value: 2,
        min: 1,         // 没用
        max: 100,       // 没用
        increment: 1,   // 没用
        editable: false,    // 可否输入文本
        // disabled: true,     // 是否失效
        
        // 点击微调按钮触发
        // spin: function(down) {
        //     // 点下面的按钮时, down=true, 否则, down=false.
        //     alert(down);
        // },
        // 点击下方微调按钮时触发
        onSpinDown: function() {
            var val = $("#box").spinner('getValue');    // 获取数据值
            $("#box").spinner("setValue", --val);
        },
        // 点击上方的微调按钮时触发
        onSpinUp: function() {
            var val = $("#box").spinner('getValue');
            $("#box").spinner("setValue", ++val);
        },
    });
});