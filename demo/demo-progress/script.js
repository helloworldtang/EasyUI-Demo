$(function(){
    $.fn.progressbar.defaults.value = 30;   // 进度条默认百分比为30%

    $("#box").progressbar({
        width: 400,
        height: 30,
        // value: 30,          // 进度条百分比
        text: "{value}#",   // 进度条中显示的百分比样式
        
        // 进度条百分比更改事件
        onChange: function(newValue, oldValue) {
            console.log("new: " + newValue + ", old: " + oldValue);
        },
    });

    setInterval(function() {
        var nowValue = $("#box").progressbar("getValue");   // 获取进度条当前百分比
        $("#box").progressbar("setValue", nowValue + 5);    // 设置进度条百分比
    }, 200);

    console.log($("#box").progressbar("options"));  // 返回对象属性
    console.log($("#box").progressbar("resize", 600));  // 修改进度条宽度
});