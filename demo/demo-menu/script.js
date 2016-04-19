$(function(){
    // 设置系统右击菜单事件
    $(document).contextmenu(function(e) {
        e.preventDefault();     // 阻止原来的默认操作
        // 显示自己设定的菜单
        $("#box").menu('show', {
            left: e.pageX,      // 位置跟随鼠标位置
            top: e.pageY,
        });
    });

    // $(document).contextmenu(function(e) {
    //     e.preventDefault();     // 阻止原来的默认操作
    //     $("#box").menu('hide'); // 隐藏菜单
    // });

    // console.log($('#box').menu('options'));     // 显示菜单项属性值
    // $('#box').menu('destroy');      // 销毁菜单
    // console.log($('#box').menu('getItem', '#new')); // 获取菜单中某个选项对象

    // 设置菜单项文本
    // $('#box').menu('setText', {
    //     target: '#new',
    //     text: '修改新',
    // });
    
    // 设置菜单项图标
    // $('#box').menu('setIcon', {
    //     target: '#new',
    //     iconCls: 'icon-add',
    // });

    // console.log($('#box').menu('findItem', '退出'));  // 查询菜单项    
    
    // 新增菜单项
    // $('#box').menu('appendItem', {
    //     text: '新增',
    //     iconCls: 'icon-add',
    //     // href: '123.html',           // 点击跳转到该页面
    //     onclick: function() {
    //         alert('新增');
    //     },
    // });
    
    // $('#box').menu('removeItem', '#new');   // 移除菜单项
    // $('#box').menu('disableItem', '#new');  // 禁用菜单项
    // $('#box').menu('enableItem', '#new');   // 启用菜单项

    // 设置菜单属性及事件
    $('#box').menu({
        minWidth: 300,              // 菜单最小宽度
        hideOnUnhover: false,       // 鼠标移开时不自动隐藏菜单
        // onShow: function() {
        //     alert('显示时触发');
        // },
        // onHide: function() {
        //     alert('隐藏时触发');
        // },
        // 点击菜单项时触发
        onClick: function(item) {
            alert(item.text);
        },
    })
});