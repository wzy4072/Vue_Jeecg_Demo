export default [{
    type: 'input',
    name: 'input101',
    label: '输入框001',
    config: false,
    disabled: true, // 是否禁用
    placeholder: null,
    rules: [{ required: true, message: "Please input your note!" }],
    labelCol: { span: 6 }, // FormItem
    wrapperCol: { span: 6 }, // FormItem
    trigger: null, // FormItem
}, {
    "type": "grid",
    "className": "form-grid",
    "gutter": 0,
    "justify": "start",
    "align": "top",
    "columns": [{
        "span": 12,
        "list": []
    },
    {
        "span": 12,
        "list": [{
            type: 'input',
            name: 'input103',
            label: 'input003',
            config: false,
            disabled: true, // 是否禁用
            placeholder: null,
            rules: [{ required: true, message: "Please input your note!" }],
            labelCol: { span: 6 }, // FormItem
            wrapperCol: { span: 6 }, // FormItem
            trigger: null, // FormItem
        }]
    }],
}]