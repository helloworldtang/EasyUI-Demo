$(function(){
    $("#box").linkbutton({
        text: '提交',            // 按钮内容
        // disabled: true,         // 按钮失效
        toggle: true,           // 模拟复选框效果
        selected: true,         // 设置为选中状态, 与toggle配合使用
        group: 'sex',           // 模拟单选按钮功能，与toggle配合使用
        plain: true,            // 简洁按钮样式
        iconCls: 'icon-add',    // 设置按钮图标
        iconAlign: 'right',     // 按钮图标在文字右边, 可设为'left'(默认) 或 'right'
    });

    $("#pox").linkbutton({
        text: '提交',            // 按钮内容
        toggle: true,           // 模拟复选框效果
        group: 'sex',
        iconCls: 'icon-mini-add',    // 设置按钮图标
    });
});