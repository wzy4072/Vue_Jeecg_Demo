export default [
    {
        "type": "tabs",
        "name": "Tabs",
        "panes": [
            // {
            //     "name": "Tab_101", // 不能重复
            //     "label": "企业资料",
            //     "list": [
            //         {
            //             "type": "grid",
            //             "className": "form-grid",
            //             "gutter": 0,
            //             "justify": "start",
            //             "align": "top",
            //             "columns": [{
            //                 "span": 12,
            //                 "list": [{
            //                     type: 'input',
            //                     name: 'facilitatorName',
            //                     label: '理财服务商',
            //                     config: false,
            //                     disabled: true, // 是否禁用
            //                     placeholder: null,
            //                     rules: [{ required: true, message: "Please input your note!" }],
            //                     labelCol: { span: 6 }, // FormItem
            //                     wrapperCol: { span: 6 }, // FormItem
            //                     trigger: null, // FormItem
            //                 },
            //                 {
            //                     type: 'select',
            //                     name: 'agreementType',
            //                     label: '企业注册类型',
            //                     config: false,
            //                     disabled: true, // 是否禁用
            //                     placeholder: '请输入企业注册类型',
            //                     rules: [{ required: true, message: '请输入企业注册类型' }],
            //                     labelCol: null, // FormItem
            //                     wrapperCol: null, // FormItem
            //                     trigger: null, // FormItem
            //                     // 几种类型 1 选项给定
            //                     // selectOptionType: 1,
            //                     options: [
            //                         { label: '企业法人营业执照', value: 'A' },
            //                         { label: '个体工商执照', value: 'C' },
            //                     ]
            //                 },
            //                 {
            //                     type: 'input',
            //                     name: 'companyDesc',
            //                     label: '企业英文客户全称',
            //                     config: false,
            //                     disabled: false, // 是否禁用
            //                     placeholder: '请输入企业英文客户全称，无则填入“ No English Name ”',
            //                     rules: [{ required: true, message: '请输入企业英文客户全称' }],
            //                     labelCol: null, // FormItem
            //                     wrapperCol: null, // FormItem
            //                     trigger: null, // FormItem
            //                 },
            //                 {
            //                     type: 'datepicker',
            //                     disabledDate: 'disabledDateBefore', // 日期独有 值是提前设定好的函数名字
            //                     dateFormat: 'YYYY-MM-DD', // 日期独有 显示的格式 
            //                     dateValueFormat: 'YYYY-MM-DD', // 日期独有 取值赋值的格式
            //                     name: 'companyFoundDate',
            //                     label: '企业成立日期',
            //                     config: false,
            //                     disabled: false, // 是否禁用
            //                     placeholder: '企业成立日期',
            //                     rules: [],
            //                     labelCol: null, // FormItem
            //                     wrapperCol: null, // FormItem
            //                     trigger: null, // FormItem
            //                 },

            //                 {
            //                     type: 'datepicker',
            //                     disabledDate: 'disabledDateAfter', // 日期独有 值是提前设定好的函数名字
            //                     dateFormat: 'YYYY-MM-DD', // 日期独有 显示的格式 
            //                     dateValueFormat: 'YYYY-MM-DD', // 日期独有 取值赋值的格式
            //                     name: 'confirmationDate',
            //                     label: '企业营业执照证件到期日',
            //                     config: false,
            //                     disabled: false, // 是否禁用
            //                     placeholder: '企业营业执照证件到期日，如果没有,请统一填写2099-01-01',
            //                     rules: [{ required: true, message: '请输入企业营业执照证件到期日' }],
            //                     labelCol: null, // FormItem
            //                     wrapperCol: null, // FormItem
            //                     trigger: null, // FormItem
            //                 },
            //                 {
            //                     type: 'number',
            //                     name: 'agreementMoney',
            //                     label: '企业注册资本',
            //                     min: 0,
            //                     config: false,
            //                     disabled: false, // 是否禁用
            //                     placeholder: '企业注册资本',
            //                     rules: [{ required: true, message: '请输入企业注册资本' }],
            //                     labelCol: null, // FormItem
            //                     wrapperCol: null, // FormItem
            //                     trigger: null, // FormItem
            //                 },
            //                 {
            //                     type: 'AsyncSelect',
            //                     name: 'comDibilityLimit',
            //                     label: '企业规模',
            //                     config: false,
            //                     disabled: true, // 是否禁用
            //                     placeholder: '请选择企业规模',
            //                     rules: [{ required: true, message: '请选择企业规模' }],
            //                     labelCol: null, // FormItem
            //                     wrapperCol: null, // FormItem
            //                     trigger: null, // FormItem
            //                     // 几种类型 1 选项给定
            //                     // 几种类型 1 选项给定
            //                     // selectOptionType: 2,
            //                     selectOptionEnumCode: 'em_name1'
            //                 },
            //                 {
            //                     type: 'AsyncSelect',
            //                     name: 'custType',
            //                     label: '客户类别',
            //                     config: false,
            //                     disabled: true, // 是否禁用
            //                     placeholder: '客户类别，无法确认则选择其他责任公司',
            //                     rules: [{ required: true, message: '请选择客户类别' }],
            //                     labelCol: null, // FormItem
            //                     wrapperCol: null, // FormItem
            //                     trigger: null, // FormItem
            //                     // 几种类型 1 选项给定
            //                     // 几种类型 1 选项给定
            //                     // selectOptionType: 2,
            //                     selectOptionEnumCode: 'em_name2'
            //                 },
            //                 {
            //                     type: 'AsyncSelect',
            //                     name: 'industry',
            //                     label: '行业类别',
            //                     config: false,
            //                     disabled: true, // 是否禁用
            //                     placeholder: '行业类别',
            //                     rules: [{ required: true, message: '请选择行业类别' }],
            //                     labelCol: null, // FormItem
            //                     wrapperCol: null, // FormItem
            //                     trigger: null, // FormItem
            //                     // 几种类型 1 选项给定
            //                     // 几种类型 1 选项给定
            //                     // selectOptionType: 2,
            //                     selectOptionEnumCode: 'em_name3',
            //                     showSearch: true, // select 搜索类型 第三种搜索类型
            //                     showArrow: false // select 下拉小箭头 
            //                 },
            //                 {
            //                     type: 'AsyncSelect',
            //                     name: 'depositHuman',
            //                     label: '存款人类别',
            //                     config: false,
            //                     disabled: true, // 是否禁用
            //                     placeholder: '存款人类别',
            //                     rules: [{ required: true, message: '请选择存款人类别' }],
            //                     labelCol: null, // FormItem
            //                     wrapperCol: null, // FormItem
            //                     trigger: null, // FormItem
            //                     selectOptionEnumCode: 'em_name4'
            //                 },
            //                 {
            //                     type: 'AddressCascader', // 地区级联
            //                     name: 'resDistList',
            //                     label: '企业注册地址省市区代码',
            //                     config: false,
            //                     disabled: true, // 是否禁用
            //                     placeholder: '企业注册地址省市区代码',
            //                     rules: [{ required: true, message: '请选择企业注册地址省市区代码' }],
            //                     labelCol: null, // FormItem
            //                     wrapperCol: null, // FormItem
            //                     trigger: null, // FormItem
            //                 },
            //                 {
            //                     type: 'AddressCascader', // 地区级联
            //                     name: 'regStrentDoor',
            //                     label: '企业注册街道地址',
            //                     config: false,
            //                     disabled: false, // 是否禁用
            //                     placeholder: '企业注册街道地址',
            //                     rules: [{ required: true, message: '请选择企业注册街道地址' }],
            //                     labelCol: null, // FormItem
            //                     wrapperCol: null, // FormItem
            //                     trigger: null, // FormItem
            //                 }
            //                 ]
            //             },
            //             {
            //                 "span": 12,
            //                 "list": [{
            //                     type: 'input',
            //                     name: 'companyName',
            //                     label: '客户名称',
            //                     config: false,
            //                     disabled: true, // 是否禁用
            //                     placeholder: null,
            //                     rules: [],
            //                     labelCol: null, // FormItem
            //                     wrapperCol: null, // FormItem
            //                     trigger: null, // FormItem
            //                 },

            //                 {
            //                     type: 'input',
            //                     name: 'agreementNumber',
            //                     label: '企业注册登记号',
            //                     config: false,
            //                     disabled: false, // 是否禁用
            //                     placeholder: '请输入企业注册登记号(企业营业执照注册号)',
            //                     rules: [{ required: true, message: '请输入企业注册登记号' }, { pattern: /^(?:(?![IOZSV])[\dA-Z]){2}\d{6}(?:(?![IOZSV])[\dA-Z]){10}$/, message: '营业执照号码为15或18位数字或字母！' }],
            //                     labelCol: null, // FormItem
            //                     wrapperCol: null, // FormItem
            //                     trigger: null, // FormItem
            //                 },
            //                 {
            //                     type: 'uploads',
            //                     name: 'companyImgID',
            //                     label: '营业执照',
            //                     fileName: 'fileInfo', // 上传专用
            //                     action: "/api/filesystem/attachmentInfo/uploadFile",  // 上传专用
            //                     headers: {
            //                         authorization: 'authorization-text'
            //                     }, // 上传专用
            //                     valuePropName: 'fileList',
            //                     config: false, // 是否是显示表单配置
            //                     disabled: false, // 是否禁用
            //                     rules: [{ required: true, message: '请上传营业执照文件' }],
            //                     labelCol: null, // FormItem
            //                     wrapperCol: null, // FormItem
            //                 },

            //                 {
            //                     type: 'datepicker',
            //                     disabledDate: 'disabledDateBefore', // 日期独有 值是提前设定好的函数名字
            //                     dateFormat: 'YYYY-MM-DD', // 日期独有 显示的格式 
            //                     dateValueFormat: 'YYYY-MM-DD', // 日期独有 取值赋值的格式
            //                     name: 'companyIdFromDate',
            //                     label: '企业营业执照证件起始日',
            //                     config: false,
            //                     disabled: false, // 是否禁用
            //                     placeholder: '企业营业执照证件起始日',
            //                     rules: [],
            //                     labelCol: null, // FormItem
            //                     wrapperCol: null, // FormItem
            //                     trigger: null, // FormItem
            //                 },

            //                 {
            //                     type: 'input',
            //                     name: 'scopeOfBus',
            //                     label: '企业经营范围',
            //                     config: false,
            //                     disabled: false, // 是否禁用
            //                     placeholder: '企业经营范围',
            //                     rules: [{ required: true, message: '请输入企业经营范围' }],
            //                     labelCol: null, // FormItem
            //                     wrapperCol: null, // FormItem
            //                     trigger: null, // FormItem
            //                 },
            //                 {
            //                     type: 'input',
            //                     name: 'busAddress',
            //                     label: '企业经营住所',
            //                     config: false,
            //                     disabled: false, // 是否禁用
            //                     placeholder: '企业经营住所',
            //                     rules: null,
            //                     labelCol: null, // FormItem
            //                     wrapperCol: null, // FormItem
            //                     trigger: null, // FormItem
            //                 },
            //                 {
            //                     type: 'input',
            //                     name: 'regTePhone',
            //                     label: '企业注册电话号码',
            //                     config: false,
            //                     disabled: false, // 是否禁用
            //                     placeholder: '企业注册电话号码，无法确认则输入法人的手机号码',
            //                     rules: [{ required: false, message: '企业注册电话号码' }, { pattern: /^([1][3,4,5,7,8][0-9]{9})|(0\d{2,3}-\d{7,8}|\(?0\d{2,3}[)-]?\d{7,8}|\(?0\d{2,3}[)-]*\d{7,8})$/, message: '联系电话格式不正确！' }],
            //                     labelCol: null, // FormItem
            //                     wrapperCol: null, // FormItem
            //                     trigger: null, // FormItem
            //                 },
            //                 {
            //                     type: 'AddressCascader', // 地区级联
            //                     name: 'workDistList',
            //                     label: '企业办公省市区代码',
            //                     config: false,
            //                     disabled: false, // 是否禁用
            //                     placeholder: '企业办公省市区代码',
            //                     rules: [{ required: true, message: '请选择企业办公省市区代码' }],
            //                     labelCol: null, // FormItem
            //                     wrapperCol: null, // FormItem
            //                     trigger: null, // FormItem
            //                 },
            //                 {
            //                     type: 'input',
            //                     name: 'workStrentDoor',
            //                     label: '企业办公街道地址',
            //                     config: false,
            //                     disabled: false, // 是否禁用
            //                     placeholder: '企业办公街道地址',
            //                     rules: [{ max: 300, message: '不超过300字符' }],
            //                     labelCol: null, // FormItem
            //                     wrapperCol: null, // FormItem
            //                     trigger: null, // FormItem
            //                 },
            //                 {
            //                     type: 'input',
            //                     name: 'workAddressPhone',
            //                     label: '企业注册电话号码',
            //                     config: false,
            //                     disabled: false, // 是否禁用
            //                     placeholder: '企业办公电话号码，无法确认则输入法人的手机号码',
            //                     rules: [{ pattern: /^([1][3,4,5,7,8][0-9]{9})|(0\d{2,3}-\d{7,8}|\(?0\d{2,3}[)-]?\d{7,8}|\(?0\d{2,3}[)-]*\d{7,8})$/, message: '联系电话格式不正确！' }],
            //                     labelCol: null, // FormItem
            //                     wrapperCol: null, // FormItem
            //                     trigger: null, // FormItem
            //                 }
            //                 ]
            //             },
            //             ]
            //         }
            //     ]
            // },
            {
                "name": "Tab_102",
                "label": "银行账户资料",
                "list": []
            },
            {
                "name": "Tab_103",
                "label": "受益人",
                "list": []
            },
            {
                "name": "Tab_104",
                "label": "法人资料",
                "list": []
            },
            {
                "name": "Tab_105",
                "label": "经办信息",
                "list": [
                    {
                        "type": "grid",
                        "className": "form-grid",
                        "gutter": 0,
                        "justify": "start",
                        "align": "top",
                        "columns": [{
                            "span": 12,
                            "list": [
                                {
                                    type: 'AsyncSelect',
                                    name: 'appApplyType',
                                    label: '办理类型',
                                    config: false,
                                    disabled: false, // 是否禁用
                                    placeholder: '办理类型',
                                    rules: [{ required: true, message: '请选择办理类型666' }],
                                    labelCol: null, // FormItem
                                    wrapperCol: null, // FormItem
                                    trigger: null, // FormItem
                                    selectOptionEnumCode: 'em_name5'
                                },
                                {
                                    type: 'input',
                                    name: 'cfoName',
                                    label: '财务主管姓名',
                                    config: false,
                                    disabled: false, // 是否禁用
                                    placeholder: '请输入财务主管姓名',
                                    rules: [{ required: false, message: '请输入财务主管姓名' }],
                                    labelCol: null, // FormItem
                                    wrapperCol: null, // FormItem
                                    trigger: null, // FormItem
                                },
                                {
                                    type: 'input',
                                    name: 'cfoIdNo',
                                    label: '请输入财务主管证件号',
                                    config: false,
                                    disabled: false, // 是否禁用
                                    placeholder: '请输入财务主管证件号',
                                    rules: [{ required: false, message: '请输入财务主管证件号' }, { pattern: /^(\d{15})|(\d{17}([0-9]|X))$/, message: '证件格式不正确！' }],
                                    labelCol: null, // FormItem
                                    wrapperCol: null, // FormItem
                                    trigger: null, // FormItem
                                },
                                {
                                    type: 'input',
                                    name: 'cfoMobile',
                                    label: '财务主管电话',
                                    config: false,
                                    disabled: false, // 是否禁用
                                    placeholder: '请输入财务主管电话',
                                    rules: [{ required: false, message: '请输入财务主管电话' }, { pattern: /^[1][3,4,5,7,8][0-9]{9}$/, message: '联系电话格式不正确！' }],
                                    labelCol: null, // FormItem
                                    wrapperCol: null, // FormItem
                                    trigger: null, // FormItem
                                },

                                {
                                    type: 'datepicker',
                                    disabledDate: 'disabledDateBefore', // 日期独有 值是提前设定好的函数名字
                                    dateFormat: 'YYYY-MM-DD', // 日期独有 显示的格式 
                                    dateValueFormat: 'YYYY-MM-DD', // 日期独有 取值赋值的格式
                                    name: 'cfoIdFromDate',
                                    label: '财务主管身份证起始日',
                                    config: false,
                                    disabled: false, // 是否禁用
                                    placeholder: null,
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
                                    name: 'cfoIdLimitDate',
                                    label: '财务主管证件到期日',
                                    config: false,
                                    disabled: false, // 是否禁用
                                    placeholder: null,
                                    rules: [{ required: false, message: '请选择财务主管证件到期日' }],
                                    labelCol: null, // FormItem
                                    wrapperCol: null, // FormItem
                                    trigger: null, // FormItem
                                },
                                {
                                    type: 'uploads',
                                    name: 'cfoIdFrontImgID',
                                    label: '财务主管身份证原件正面图片',
                                    fileName: 'fileInfo', // 上传专用
                                    action: "/api/filesystem/attachmentInfo/uploadFile",  // 上传专用
                                    headers: {
                                        authorization: 'authorization-text'
                                    }, // 上传专用
                                    valuePropName: 'fileList',
                                    config: false, // 是否是显示表单配置
                                    disabled: false, // 是否禁用
                                    rules: [{ required: false, message: '请上传财务主管身份证原件正面图片' }],
                                    labelCol: null, // FormItem
                                    wrapperCol: null, // FormItem
                                },
                                {
                                    type: 'uploads',
                                    name: 'cfoIdBackImgID',
                                    label: '财务主管身份证原件反面图片',
                                    fileName: 'fileInfo', // 上传专用
                                    action: "/api/filesystem/attachmentInfo/uploadFile",  // 上传专用
                                    headers: {
                                        authorization: 'authorization-text'
                                    }, // 上传专用
                                    valuePropName: 'fileList',
                                    config: false, // 是否是显示表单配置
                                    disabled: false, // 是否禁用
                                    rules: [{ required: false, message: '请上传财务主管身份证原件反面图片' }],
                                    labelCol: null, // FormItem
                                    wrapperCol: null, // FormItem
                                }
                            ]
                        },
                        {
                            "span": 12,
                            "list": [
                                {
                                    type: 'AsyncSelect',
                                    name: 'cfoType',
                                    label: '财务主管类型',
                                    config: false,
                                    disabled: false, // 是否禁用
                                    placeholder: '财务主管类型',
                                    rules: [{ required: true, message: '请选择财务主管类型666' }],
                                    labelCol: null, // FormItem
                                    wrapperCol: null, // FormItem
                                    trigger: null, // FormItem
                                    selectOptionEnumCode: 'em_name6'
                                },
                                {
                                    type: 'input',
                                    name: 'checkerName',
                                    label: '经办人姓名',
                                    config: false,
                                    disabled: false, // 是否禁用
                                    placeholder: '请输入经办人姓名',
                                    rules: [{ required: false, message: '请输入经办人姓名' }],
                                    labelCol: null, // FormItem
                                    wrapperCol: null, // FormItem
                                    trigger: null, // FormItem
                                },
                                {
                                    type: 'input',
                                    name: 'checkerIdCard',
                                    label: '经办人身份证号码',
                                    config: false,
                                    disabled: false, // 是否禁用
                                    placeholder: '请输入经办人身份证号码',
                                    rules: [{ required: false, message: '请输入经办人身份证号码' }, { pattern: /^(\d{15})|(\d{17}([0-9]|X))$/, message: '证件格式不正确！' }],
                                    labelCol: null, // FormItem
                                    wrapperCol: null, // FormItem
                                    trigger: null, // FormItem
                                },
                                {
                                    type: 'input',
                                    name: 'checkerMobile',
                                    label: '经办人手机号',
                                    config: false,
                                    disabled: false, // 是否禁用
                                    placeholder: '请输入经办人手机号',
                                    rules: [{ required: false, message: '请输入经办人手机号' }, { pattern: /^[1][3,4,5,7,8][0-9]{9}$/, message: '联系电话格式不正确！' }],
                                    labelCol: null, // FormItem
                                    wrapperCol: null, // FormItem
                                    trigger: null, // FormItem
                                },
                                {
                                    type: 'datepicker',
                                    disabledDate: 'disabledDateBefore', // 日期独有 值是提前设定好的函数名字
                                    dateFormat: 'YYYY-MM-DD', // 日期独有 显示的格式 
                                    dateValueFormat: 'YYYY-MM-DD', // 日期独有 取值赋值的格式
                                    name: 'checkerIdFromDate',
                                    label: '经办人身份证起始日',
                                    config: false,
                                    disabled: false, // 是否禁用
                                    placeholder: null,
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
                                    name: 'checkerIdLimitDate',
                                    label: '经办人证件到期日证件到期日',
                                    config: false,
                                    disabled: false, // 是否禁用
                                    placeholder: null,
                                    rules: [{ required: false, message: '请选择经办人证件到期日证件到期日' }],
                                    labelCol: null, // FormItem
                                    wrapperCol: null, // FormItem
                                    trigger: null, // FormItem
                                },
                                {
                                    type: 'uploads',
                                    name: 'checkerIdFrontImgID',
                                    label: '经办人身份证原件正面图片',
                                    fileName: 'fileInfo', // 上传专用
                                    action: "/api/filesystem/attachmentInfo/uploadFile",  // 上传专用
                                    headers: {
                                        authorization: 'authorization-text'
                                    }, // 上传专用
                                    valuePropName: 'fileList',
                                    config: false, // 是否是显示表单配置
                                    disabled: false, // 是否禁用
                                    rules: [{ required: false, message: '请上传经办人身份证原件正面图片' }],
                                    labelCol: null, // FormItem
                                    wrapperCol: null, // FormItem
                                },
                                {
                                    type: 'uploads',
                                    name: 'checkerIdBackImgID',
                                    label: '经办人身份证原件反面图片',
                                    fileName: 'fileInfo', // 上传专用
                                    action: "/api/filesystem/attachmentInfo/uploadFile",  // 上传专用
                                    headers: {
                                        authorization: 'authorization-text'
                                    }, // 上传专用
                                    valuePropName: 'fileList',
                                    config: false, // 是否是显示表单配置
                                    disabled: false, // 是否禁用
                                    rules: [{ required: false, message: '请上传经办人身份证原件反面图片' }],
                                    labelCol: null, // FormItem
                                    wrapperCol: null, // FormItem
                                }
                            ]
                        }
                        ]
                    },
                ]
            },
            {
                "name": "Tab_106",
                "label": "其他附件",
                "list": []
            },
            {
                "name": "Tab_107",
                "label": "温馨提示",
                "list": []
            },
        ],
    }
]