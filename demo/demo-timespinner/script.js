$(function() {
    /*
     大部分属性与事件都与Spinner组件相同，这里不再解释
     */
    $("#box").timespinner({
        editable: false,
        value: '09:02',
        min: '08:00',       // 设置时间范围
        max: '12:00',
        // separator: '/',     // 设置分割符
        showSeconds: true,  // 显示秒
        highlight: 1,       // 默认选择的字段(0:时，1:分，2:秒)
    });

    $("#box").timespinner("setValue", "11:19:20");      // 设置值
    console.log($("#box").timespinner("getValue"));     // 获取值
    console.log($("#box").timespinner("getHours"));     // 获取时
    console.log($("#box").timespinner("getMinutes"));     // 获取分
    console.log($("#box").timespinner("getSeconds"));     // 获取秒
});