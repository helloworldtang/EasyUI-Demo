$(function() {
    /*
     大部分属性与事件都与Spinner组件相同，这里不再解释
     */
    $("#box").numberspinner({
        value: 10,
        increment: 5,
        min:1,
        max:500,
        // onSpinUp: function() {
        //     alert("up");
        // },
        // onSpinDown: function() {
        //     alert("down");
        // },
    });

    // 取值与赋值必须全为数字
    console.log($("#box").numberspinner("getValue"));
    $("#box").numberspinner("setValue", 123);
});