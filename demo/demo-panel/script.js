$(function(){
    $("#box").panel({
        title: "JS生成面板",    // 设置标题
        width: 500,             // 宽度
        height: 150,            // 高度
        iconCls: "icon-search", // 左上角标题图标
        left: 150,              // 需要设置面板css的position属性为absolute
        top: 300,
        cls: 'a',               // Panel最外层div的样式class
        headerCls: 'b',         // Panel标题栏的样式class
        bodyCls: 'c',           // Panel主题部分的样式class
        style: {                // Panel最外层div的样式
            "height": "200px",
        },
        // fit: true,              // 屏幕自适应，宽高为100%
        // border: false,           // 是否显示边框
        // doSize: false,          // 创建时是否重置大小和重新布局
                                // 如果为false，则上述设置的width, height等布局属性都
        // noheader: true,         // 取消标题栏
        content: "修改了",       // 设置主题中的内容
        collapsible: true,      // 是否可折叠，默认为false
        minimizable: true,      // 可否最小化，默认为false
        maximizable: true,      // 可否最大化，默认为false
        closable: true,        // 可否关闭，默认为false
        // tools: '#tt',        // 设置工具栏，方法1
                                // 这种写法工具栏写在html中，参考html文件中的 '#tt'
        tools: [                // 设置工具栏，方法2
            {
                iconCls: 'icon-add',
                handler: function() {
                    alert('add');
                },
            },
            {
                iconCls: 'icon-cut',
                handler: function() {
                    alert('cut');
                },
            },
        ],
        // collapsed: true,        // 默认折叠Panel
        // minimized: true,        // 默认最小化Panel
        // maximized: true,        // 默认最大化Panel
        // closed: true,           // 默认关闭Panel
        // href: 'content.html',      // AJAX加载页面到主体中
        // cache: true,                // 超链接载入时缓存面板内容，默认为true
        // loadingMessage: '正在加载...',  // 设置ajax加载页面时，加载中的文字信息
        // extractor: function(data) {     // 定义如何从ajax应答数据中提取内容
        //     alert(data);
        //     return data.substring(0, 3);    // 返回提取的内容结果
        // }
    });

    $("#box").panel("panel").css("position", "absolute");   // 设置panel的css样式
});