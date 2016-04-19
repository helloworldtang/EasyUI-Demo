$(function(){
    // 设置提示框默认值
    $.messager.defaults = {
        ok: '是',
        cancel: '否',
        width: 300,
    };

    // $.messager.alert('警告框', "这是一个提示!", 'info', function() {
    //     alert('回调函数');
    // });
    
    // $.messager.confirm('确认框', '真的要删除吗?', function(flag) {
    //     // 用户选择OK，flag=true
    //     if (flag) {
    //         alert('删除成功');
    //     } else {
    //         alert('不删除了');
    //     }
    // });
    
    // $.messager.prompt('提示框', '请输入你的姓名', function(content) {
    //     // content表示用户输入的内容, 如果用户点击取消，则content=undefined
    //     alert(content);
    // });

    // $.messager.progress({
    //     title: '执行中',
    //     msg: '努力上传中',
    //     text: '{value}#',
    //     interval: 100,      // 每100ms增量一次
    // });

    // console.log($.messager.progress('bar'));    // 获取进度条
    // $.messager.progress('close');       // 关闭进度框

    // 右下角弹出的消息框
    // $.messager.show({
    //     title: '我的消息',
    //     msg: '消息2秒钟后关闭',
    //     timeout: 2000,          // 2秒后自动消失
    //     showType: 'fade',       // 淡入淡出效果
    //     style: {
    //         top: 0,         // 设置顶部出现
    //     },
    // });
});