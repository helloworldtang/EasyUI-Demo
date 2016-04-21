$(function(){
    // 扩展自 ValidateBox
    $("#box").combo({
        width: 300,
        // height: 50,
        editable: false,    // 能否输入text
        required: true,     // 不能为空
        // readonly: true,     // 只读
        // hasDownArrow: false,    // 是否下拉箭头
        // value: '123',   // 默认value
        // delay: 1000,    // 下拉块延迟出现

        // 事件
        // onShowPanel: function() {
        //     alert("下拉块显示触发");
        // },
        // onHidePanel: function() {
        //     alert("下拉块隐藏触发");
        // },
        // 选项改变时触发
        // onChange: function(newValue, oldValue) {
        //     alert(newValue + "|" + oldValue);
        // },
    });

    var panel = $("#box").combo("panel");       // 返回下拉面板

    // 自行实现下拉单选
    panel.append($("#food"));       // 将列表放到下拉块中
    $("#food li").click(function() {
        var v = $(this).find("input").val();
        var s = $(this).find("span").text();
        $("#box").combo('setValue', v);     // 设置value值
        $("#box").combo('setText', s);      // 设置输入框文字
        $("#box").combo("hidePanel");       // 隐藏下拉面板
    });

    console.log($("#box").combo("textbox"));    // 获取文字输入框
    $(document).click(function() {
        // $("#box").combo("resize", "width");     // 重置宽度为原始值
        // $("#box").combo("showPanel");           // 显示下拉块
        // console.log($("#box").combo("isValid"));    // 验证输入值是否合法
        // var text = $("#box").combo('getText');       // 获取值
        // var value = $("#box").combo('getValue');     // 获取文本
        // console.log(text + "|" + value);

        // $("#box").combo("setValues", ['01', '02', '03']);   // 设置多个值（复选时使用）
        // $("#box").combo("setText", '煎饼果子,牛腩米粉,沙拉');
        // console.log($("#box").combo("getValues"));          // 获取所有值
    });
});