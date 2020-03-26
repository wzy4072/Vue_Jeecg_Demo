
export default [
    {
        type: 'input',
        name: 'facilitatorName',
        label: '理财服务商',
        config: false,
        disabled: true, // 是否禁用
        placeholder: null,
        rules: [{ required: true, message: "Please input your note!" }],
        labelCol: { span: 6 }, // FormItem
        wrapperCol: { span: 6 }, // FormItem
        trigger: null, // FormItem
    },
    {
        type: 'input',
        name: 'companyName',
        label: '客户名称',
        config: false,
        disabled: true, // 是否禁用
        placeholder: null,
        rules: [],
        labelCol: null, // FormItem
        wrapperCol: null, // FormItem
        trigger: null, // FormItem
    },
    {
        type: 'select',
        name: 'agreementType',
        label: '企业注册类型',
        config: false,
        disabled: true, // 是否禁用
        placeholder: '请输入企业注册类型',
        rules: [{ required: true, message: '请输入企业注册类型' }],
        labelCol: null, // FormItem
        wrapperCol: null, // FormItem
        trigger: null, // FormItem
        // 几种类型 1 选项给定
        // selectOptionType: 1,
        options: [
            { label: 'label A', value: 'A' },
            { label: 'label C', value: 'C' },
        ]
    },
    {
        type: 'input',
        name: 'agreementNumber',
        label: '企业注册登记号',
        config: false,
        disabled: false, // 是否禁用
        placeholder: '请输入企业注册登记号(企业营业执照注册号)',
        rules: [{ required: true, message: '请输入企业注册登记号' }, { pattern: /^(?:(?![IOZSV])[\dA-Z]){2}\d{6}(?:(?![IOZSV])[\dA-Z]){10}$/, message: '营业执照号码为15或18位数字或字母！' }],
        labelCol: null, // FormItem
        wrapperCol: null, // FormItem
        trigger: null, // FormItem
    },
    {
        type: 'input',
        name: 'companyDesc',
        label: '企业英文客户全称',
        config: false,
        disabled: false, // 是否禁用
        placeholder: '请输入企业英文客户全称，无则填入“ No English Name ”',
        rules: [{ required: true, message: '请输入企业英文客户全称' }],
        labelCol: null, // FormItem
        wrapperCol: null, // FormItem
        trigger: null, // FormItem
    },
    {
        type: 'uploads',
        name: 'companyImgID',
        label: '营业执照',
        fileName: 'fileInfo', // 上传专用
        action: "/api/filesystem/attachmentInfo/uploadFile",  // 上传专用
        headers: {
            authorization: 'authorization-text'
        }, // 上传专用
        valuePropName: 'fileList',
        config: false, // 是否是显示表单配置
        disabled: false, // 是否禁用
        rules: [{ required: true, message: '请上传营业执照文件' }],
        labelCol: null, // FormItem
        wrapperCol: null, // FormItem
    },
    {
        type: 'uploads',
        name: 'companyImgID',
        label: '营业执照',
        fileName: 'fileInfo', // 上传专用
        action: "/api/filesystem/attachmentInfo/uploadFile",  // 上传专用
        headers: {
            authorization: 'authorization-text'
        }, // 上传专用
        valuePropName: 'fileList',
        config: false, // 是否是显示表单配置
        disabled: false, // 是否禁用
        rules: [{ required: true, message: '请上传营业执照文件' }],
        labelCol: null, // FormItem
        wrapperCol: null, // FormItem
    },
    {
        type: 'datepicker',
        disabledDate: 'disabledDateBefore', // 日期独有 值是提前设定好的函数名字
        dateFormat: 'YYYY-MM-DD', // 日期独有 显示的格式 
        dateValueFormat: 'YYYY-MM-DD', // 日期独有 取值赋值的格式
        name: 'companyFoundDate',
        label: '企业成立日期',
        config: false,
        disabled: false, // 是否禁用
        placeholder: '企业成立日期',
        rules: [],
        labelCol: null, // FormItem
        wrapperCol: null, // FormItem
        trigger: null, // FormItem
    }
    ,
    {
        type: 'datepicker',
        disabledDate: 'disabledDateBefore', // 日期独有 值是提前设定好的函数名字
        dateFormat: 'YYYY-MM-DD', // 日期独有 显示的格式 
        dateValueFormat: 'YYYY-MM-DD', // 日期独有 取值赋值的格式
        name: 'companyIdFromDate',
        label: '企业营业执照证件起始日',
        config: false,
        disabled: false, // 是否禁用
        placeholder: '企业营业执照证件起始日',
        rules: [],
        labelCol: null, // FormItem
        wrapperCol: null, // FormItem
        trigger: null, // FormItem
    },
    {
        type: 'datepicker',
        disabledDate: 'disabledDateAfter', // 日期独有 值是提前设定好的函数名字
        dateFormat: 'YYYY-MM-DD', // 日期独有 显示的格式 
        dateValueFormat: 'YYYY-MM-DD', // 日期独有 取值赋值的格式
        name: 'confirmationDate',
        label: '企业营业执照证件到期日',
        config: false,
        disabled: false, // 是否禁用
        placeholder: '企业营业执照证件到期日，如果没有,请统一填写2099-01-01',
        rules: [{ required: true, message: '请输入企业营业执照证件到期日' }],
        labelCol: null, // FormItem
        wrapperCol: null, // FormItem
        trigger: null, // FormItem
    },

    {
        type: 'input',
        name: 'scopeOfBus',
        label: '企业经营范围',
        config: false,
        disabled: false, // 是否禁用
        placeholder: '企业经营范围',
        rules: [{ required: true, message: '请输入企业经营范围' }],
        labelCol: null, // FormItem
        wrapperCol: null, // FormItem
        trigger: null, // FormItem
    },
    {
        type: 'input',
        name: 'busAddress',
        label: '企业经营住所',
        config: false,
        disabled: false, // 是否禁用
        placeholder: '企业经营住所',
        rules: null,
        labelCol: null, // FormItem
        wrapperCol: null, // FormItem
        trigger: null, // FormItem
    },

    {
        type: 'number',
        name: 'agreementMoney',
        label: '企业注册资本',
        min: 0,
        config: false,
        disabled: false, // 是否禁用
        placeholder: '企业注册资本',
        rules: [{ required: true, message: '请输入企业注册资本' }],
        labelCol: null, // FormItem
        wrapperCol: null, // FormItem
        trigger: null, // FormItem
    },

    {
        type: 'select',
        name: 'comDibilityLimit',
        label: '企业规模',
        config: false,
        disabled: true, // 是否禁用
        placeholder: '请选择企业规模',
        rules: [{ required: true, message: '请选择企业规模' }],
        labelCol: null, // FormItem
        wrapperCol: null, // FormItem
        trigger: null, // FormItem
        // 几种类型 1 选项给定
        // selectOptionType: 1,

        //------------------改为枚举
        options: [
            { label: '少于15人', value: 'T' },
            { label: '15-150人', value: 'S' },
            { label: '150-2000人', value: 'M' },
            { label: '2000人以上', value: 'L' },
        ]
    },


]