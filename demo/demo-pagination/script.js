$(function(){
    $("#box").pagination({
        total: 5,			// 记录总数
        pageSize: 1,		// 每页记录条数
        pageNumber: 1,		// 页码(以1开始)
        pageList:[1, 2],	// 每页显示记录条数可选择项
        // 添加工具栏
        buttons: [
	        {
	        	iconCls: 'icon-add',
	        	handler: function(){alert('add');}
	        },
        	'-',
        	{
        		iconCls: 'icon-edit',
        		handler: function(){alert('edit');}
        	},
        ],
        // layout: ['first', 'prev', 'links' ,'next', 'last'],		// 控件布局
        // showPageList: false,		// 是否显示页面行数选择
        // showRefresh: false,		// 是否显示刷新
        beforePageText: "第",			// 显示页码文本框前内容
        afterPageText: "有{pages}页",	// 显示页码文本框后内容，{pages}指总页数
        displayMsg: '共{total}条记录',	// 分页栏最右边的信息，{total}记录总条数

        // 事件
        // 翻页事件触发
        onSelectPage: function(pageNumber, pageSize) {
        	$("#box").pagination("loading");	// 刷新按钮变加载中
        	$('#content').panel('refresh', 
        		'data.php?page=' + pageNumber + '&pagesize=' + pageSize);
        	setTimeout(function() {
	        	$("#box").pagination("loaded");		// 刷新按钮加载中变回正常
        	}, 1000);
        },
        // 刷新前触发
        onBeforeRefresh: function(pageNumber, pageSize) {
        	alert("刷新之前");
        },
        // 刷新后触发
		onRefresh: function(pageNumber, pageSize) {
        	alert("刷新之后");
        },
        // 改变每页记录数量时触发
        onChangePageSize: function(pageSize) {
        	alert('每页显示' + pageSize + "条");
        },
    });

    // $(document).click(function() {
    // 	// 改变分页栏属性
    // 	$("#box").pagination("refresh", {
    // 		pageSize: 2,
    // 		pageNumber: 2,
    // 	});
    // });

	$("#box").pagination('select', 2);		// 当前页面选为第二页   
});