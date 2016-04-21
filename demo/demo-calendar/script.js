$(function() {
    $("#box").calendar({
        width: 300,
        height: 300,
        // fit: true,   // 填充父容器
        border: false,  // 是否有边框
        firstDay: 1,    // 每周第一天是星期几(0:周日, 1:周一, ...)
        weeks: ['日', '一', '二', '三', '四', '五', '六'],
        months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        year: 2010,     // 初始化的年份
        month: 1,       // 初始化月份(1:1月, 2:2月, ...)
        current: new Date(),    //默认选定的日期(选中并不是跳转)
        // 格式化日期
        // formatter: function(date) {
        //     return date.getDate() + "日";
        // },
        // 设置日期style
        // styler: function(date) {
        //     if (date.getDay() == 1) {
        //         return "background-color:gray";
        //     }
        // },
        // 校验器，校验某些日期才能被选择
        // validator: function(date) {
        //     if (date.getDay() == 1) {
        //         // 只有周一可以被选择
        //         return true;
        //     } 
        //     return false;
        // },
        // 选择日期时触发
        // onSelect: function(date) {
        //     alert(date);
        // },
        // 选择修改时触发
        // onChange: function(newDate, oldDate) {
        //     alert(newDate + "|" + oldDate);
        // },
    });
    
    // 跳转到对应日期的位置
    $("#box").calendar('moveTo', new Date());
});