$(function(){
    $("#box").slider({
        width: 300,     // 宽度，水平滚动条才有用
        height: 300,    // 高度，垂直滚动条才有用
        mode: 'h',      // 'h': 水平滚动条, 'v': 垂直滚动条
        rule: [0, '|', 25, '|', 50, '|', 75, '|', 100],
        showTip: true,      // 动态显示滚动条现在的值
        reversed: false,    // 翻转
        value: 12,          // 默认值
        min: 10,            // 设置最小值
        max: 90,            // 设置最大值
        step: 1,            // 步长

        // 设置Tip的显示格式
        tipFormatter: function(value) {
            return value + "%";
        },
        // 开始拖动事件
        onSlideStart: function(value) {
            console.log(value);
        },
        // 结束拖动事件
        onSlideEnd: function(value) {
            console.log(value);
        },
        // 滚动条的值变化事件
        onChange: function(newValue, oldValue) {
            $("#text").css("font-size", newValue);
        },
    });

    // 设置滚动条大小
    $("#box").slider('resize', {
        width: 500,
        height: 500,
    });

    $("#box").slider("setValue", 50);               // 设置滚动条的值
    console.log($("#box").slider("getValue"));      // 显示滚动条的值

    $("#box").slider("disable");        // 禁用滚动条
    $("#box").slider("enable");         // 启动滚动条
});