$(function(){
    $("#box").layout({
        // fit: true,   // 全屏
    });

    $("#box").layout("resize");     //重新调整大小及布局
    console.log($("#box").layout('panel', 'north'));    // 返回上面的面板
    console.log($("#box").layout("expand", "north"));   // 展开上面的面板

    // 添加中间的面板
    $("#box").layout('add', {
        title: '中间',
        region: 'center',
    });
    // 删除右边的面板
    $("#box").layout("remove", 'east');
});