$(function(){
    /*
     Window是继承于Panel组件，可以使用Panel组建的属性, 方法及事件
     */
    $("#box").window({
        width: 600,
        height: 400,
        title: '窗口',
        collapsible: false,
        minimizable: false,
        maximizable: false,
        closable: false,
        // closed: true,   // 默认为关闭状态
        zIndex: 9999,       // 窗口层级
        // draggable: false,   // 是否可以拖动
        resizable: false,   // 是否可以改变大小
        shadow: false,      // 是否有阴影
        modal: true,        // 是否为模态窗口(窗口以外的都不能操作)
        // inline: true,       // 是否显示在它的父容器中, 如果不是，则显示在所有元素的上面(默认为false)
        
        // 事件，window的事件都是继承于Panel，没有新增事件，可参考Panel事件
    });

    console.log($("#box").window('window'));    // 返回window整体
    console.log($("#box").window('body'));    // 返回window主体
    
    // $(document).click(function() {
    //     $('#box').window("move", {left:0, top:0});    // 移动窗口
    // });
    // $(document).dblclick(function() {
    //     $('#box').window("center");     // 窗口回到中间
    //     // $('#box').window("hcenter");     // 窗口水平坐标回到中间
    //     // $('#box').window("vcenter");     // 窗口垂直坐标回到中间
    // });
});