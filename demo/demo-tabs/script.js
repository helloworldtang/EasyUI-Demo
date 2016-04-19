$(function(){
    $("#box").tabs({
        width: 500,
        height: 200,
        plain: true,
        // border: false,
        tabWidth: 300,              // 标签宽度
        tabHeight: 30,              // 标签高度
        scrollIncrement: 300,       // 标签栏每次滚动像素
        scrollDuration: 200,        // 标签栏滚动时长
        tools: [
            {
                iconCls: 'icon-add',
                handler: function() {
                    alert('add');
                }
            },
            {
                iconCls: 'icon-cut',
                handler: function() {
                    alert('cut');
                }
            }
        ],
        // toolPosition: 'left',               // 工具栏位置
        // tabPosition: 'right',            // 标签栏位置
        // headerWidth: 300,                // 标签栏宽度(当tabPosition设为'left'或'right'时才有效果)
        // selected: 1,            // 默认选择第二个标签栏(下标从0开始)
        // showHeader: false,      // 是否显示标签栏

        // 事件
        // 选中标签时触发
        // onSelect: function(title, index) {
        //     alert(title + ', ' + index);
        // },
        // 不再选择标签时触发
        // onUnselect: function(title, index) {
        //     alert(title + ', ' + index);
        // },
        // 关闭标签时触发
        // onBeforeClose: function(title, index) {
        //     alert(title + ', ' + index);
        // },
        // 在onBeforeClose事件后触发
        // onClose: function(title, index) {
        //     alert(title + ", " + index);
        // },
        // 右击标签时触发
        // onContextMenu: function(e, title, index) {
        //     console.log(e);
        //     alert(title + ", " + index);
        // },
        // 添加选项卡时触发
        // onAdd: function(title, index) {
        //     alert(title + ", " + index);
        // },
        // Ajax加载页面时触发
        // onLoad: function(title, index) {
        //     alert("onLoad: " + title + ", " + index);
        // },
        // 修改标签时触发(注意：所有选项卡初始化加载时都会触发该事件)
        // onUpdate: function(title, index) {
        //     alert("onUpdate: " + title + ", " + index);
        // }
    });

    // 方法
    console.log($("#box").tabs("tabs"));        // 返回所有标签对象
    
    $("#box").tabs("resize");       // 调整设置大小和布局

    $("#box").tabs("add", {
        id: 'tab4',          // id
        title: 'tab4',        // 标题
        content: '新面板',     // 内容
        // href: "content.html",   // ajax加载选项卡页面
        // cache: true,        // ajax加载选项卡页面缓存
        iconCls: 'icon-add',    // 标签图标
        width: 1,       // 宽度(不是第一个标签体现不出来)
        height: 1,      // 高度(不是第一个标签体现不出来)
        collapsible: true,  // 可否折叠
        closable: true, // 可否关闭
        selected: false, // 新建后立刻选定(默认为true)
    });

    $("#box").tabs("close", 2); // 关闭第三个选项卡
    console.log($("#box").tabs("getTab", 1));   // 获取第二个标签对象
    console.log($("#box").tabs("getTabIndex", "#tab2"));    // 获取ID为tab2的选项卡的下标位置
    console.log($("#box").tabs("getSelected"));     // 获取正在选定的选项卡
    $("#box").tabs("select", 0);        // 选择第一个选项卡
    $("#box").tabs("unselect", 0);      // 取消选择第一个选项卡
    $("#box").tabs("hideHeader");       // 隐藏标签栏
    $("#box").tabs("showHeader");       // 显示标签栏
    console.log($("#box").tabs("exists", 1));   // 查看是否存在第二个选项卡

    $("#box").tabs("update", {
        tab: $("#tab2"),        // 要修改的标签
        options: {
            title: "修改标题",
        }
    });

    $("#box").tabs("disableTab", 1);    // 禁用第二个选项卡
    $("#box").tabs("enableTab", 1);     // 启用第二个选项卡
    $("#box").tabs("scrollBy", 100);    // 默认标签栏向右滚动100个像素
});