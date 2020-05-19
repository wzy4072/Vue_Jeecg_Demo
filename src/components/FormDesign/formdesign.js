let callBack1 = {
    getParams: (v, p) => {
        return {
            mobile: v,
            financeNo: p.fundSaleCertificateNo,
            financeId: p.facilitatorId
        }
    }

}
callBack1 = JSON.stringify(callBack1, function (key, val) {
    if (typeof val === 'function') {
        return val + '';
    }
    return val;
});

const fileJson = JSON.stringify([{ uid: "666101", name: "法人身份证001.png", status: "done", response: { data: { id: "666101" } } }])

export let resInitialValue = {
    facilitatorName: "上海银行",
    companyName: "上海银行集团股份公司",
    agreementType: "A",
    agreementNumber: "91440400337919362H",
    companyDesc: "No English Name",
    companyImgID: fileJson,
    companyFoundDate: "2020-03-20",
    confirmationDate: "2020-03-21",
    companyIdFromDate: "2020-03-22",
    scopeOfBus: 666,
    agreementMoney: 20,
    comDibilityLimit: "T",
    custType: "3012",
    industry: "A0132",
    depositHuman: "02",
    resDistList: ["130000000000", "130600000000", "130604000000", "130604001000"],
    AddressCascader: [
        "130000000000",
        "130600000000",
        "130604000000",
        "130604001000"
    ],
    regTePhone: "13212345678",
    workDistList: [
        "130000000000",
        "130600000000",
        "130604000000",
        "130604001000"
    ],
    regStrentDoor: [
        "130000000000",
        "130600000000",
        "130604000000",
        "130604001000"
    ],
    appApplyType: "1",
    cfoType: "1",

    bankId: "c77fcb37ba654a79bab5769b3b4ec031",
    acctBank: "313651099999",
    account: "1",
    bankPrefixName: "1",
    bankName: "1",
    bankAcconame: "1",
    bankCode: "1",
    earningOwnerList: [{
        earningOwnerType: '1',
        earningOwnerTypeName: '受益人性质666',
        earningOwnerIdNo: '412744195005051234',
        earningOwnerLimitDate: '2020-03-26',
        earningOwnerName: '受益人张三',
        earningOwnerIdType: 'B',
        earningOwnerCountry: '中国',
        earningOwnerAddress: '深圳市深圳湾人才公园',
    }],

    corpName: '法人金多多有限公司',
    corpMobile: '18666668888',
    corpIdFromDate: '2020-01-01',
    corpIdLimitDate: '2030-01-01',
    legPerId: '625455185001011234',
    dynamicCode: '6666',
    corpIdFrontImgID: fileJson,
    corpIdBackImgID: fileJson,
    cfoIdFrontImgID: fileJson,
    cfoIdBackImgID: fileJson,
    checkerIdFrontImgID: fileJson,
    checkerIdBackImgID: fileJson,
    delegationImgID: fileJson,

};
export let formConfs = [
    {
        "type": "tabs",
        "name": "Tabs",
        "list": [
            {
                "name": "Tab_101", // 不能重复
                "label": "企业资料",
                "list": [
                    {
                        "type": "grid",
                        "className": "form-grid",
                        "gutter": 0,
                        "justify": "start",
                        "align": "top",
                        "list": [{
                            "span": 12,
                            "list": [{
                                type: 'input',
                                name: 'facilitatorName',
                                label: '理财服务商',
                                config: false,
                                disabled: true, // 是否禁用
                                rules: [{ required: true, message: "Please input your note!" }],
                                labelCol: { span: 6 }, // FormItem
                                wrapperCol: { span: 6 }, // FormItem
                            },
                            {
                                type: 'select',
                                name: 'agreementType',
                                label: '企业注册类型',
                                config: false,
                                disabled: true, // 是否禁用
                                rules: [{ required: true, message: '请输入企业注册类型' }],
                                options: [
                                    { label: '企业法人营业执照', value: 'A' },
                                    { label: '个体工商执照', value: 'C' },
                                ]
                            },
                            {
                                type: 'input',
                                name: 'companyDesc',
                                label: '企业英文客户全称',
                                config: false,
                                placeholder: '请输入企业英文客户全称，无则填入“ No English Name ”',
                                rules: [{ required: true, message: '请输入企业英文客户全称' }],
                            },
                            {
                                type: 'datepicker',
                                disabledDate: 'disabledDateBefore', // 日期独有 值是提前设定好的函数名字
                                dateFormat: 'YYYY-MM-DD', // 日期独有 显示的格式 
                                dateValueFormat: 'YYYY-MM-DD', // 日期独有 取值赋值的格式
                                name: 'companyFoundDate',
                                label: '企业成立日期',
                                config: false,
                                rules: [],
                            },

                            {
                                type: 'datepicker',
                                disabledDate: 'disabledDateAfter', // 日期独有 值是提前设定好的函数名字
                                dateFormat: 'YYYY-MM-DD', // 日期独有 显示的格式 
                                dateValueFormat: 'YYYY-MM-DD', // 日期独有 取值赋值的格式
                                name: 'confirmationDate',
                                label: '企业营业执照证件到期日',
                                config: false,
                                placeholder: '企业营业执照证件到期日，如果没有,请统一填写2099-01-01',
                                rules: [{ required: true, message: '请输入企业营业执照证件到期日' }],
                            },
                            {
                                type: 'number',
                                name: 'agreementMoney',
                                label: '企业注册资本',
                                min: 0,
                                config: false,
                                rules: [{ required: true, message: '请输入企业注册资本' }],
                            },
                            {
                                type: 'EnumSelect',
                                name: 'comDibilityLimit',
                                label: '企业规模',
                                config: false,
                                disabled: true, // 是否禁用
                                rules: [{ required: true, message: '请选择企业规模' }],
                                selectOptionEnumCode: 'limbic_shbank_comDibilityLimit'
                            },
                            {
                                type: 'EnumSelect',
                                name: 'custType',
                                label: '客户类别',
                                config: false,
                                disabled: true, // 是否禁用
                                placeholder: '客户类别，无法确认则选择其他责任公司',
                                rules: [{ required: true, message: '请选择客户类别' }],
                                selectOptionEnumCode: 'limbic_shbank_custType'
                            },
                            {
                                type: 'EnumSelect',
                                name: 'industry',
                                label: '行业类别',
                                config: false,
                                disabled: true, // 是否禁用
                                rules: [{ required: true, message: '请选择行业类别' }],
                                selectOptionEnumCode: 'limbic_shbank_industry',
                                showSearch: true, // select 搜索类型 第三种搜索类型
                                showArrow: false // select 下拉小箭头 
                            },
                            {
                                type: 'EnumSelect',
                                name: 'depositHuman',
                                label: '存款人类别',
                                config: false,
                                disabled: true, // 是否禁用
                                rules: [{ required: true, message: '请选择存款人类别' }],
                                selectOptionEnumCode: 'limbic_shbank_depositHuman'
                            },
                            {
                                type: 'AddressCascader', // 地区级联
                                name: 'resDistList',
                                label: '企业注册地址省市区代码',
                                config: false,
                                disabled: true, // 是否禁用
                                rules: [{ required: true, message: '请选择企业注册地址省市区代码' }],
                            },
                            {
                                type: 'input',
                                name: 'regStrentDoor',
                                label: '企业注册街道地址',
                                config: false,
                                disabled: false, // 是否禁用
                                rules: [{ required: true, message: '请选择企业注册街道地址' }],

                            },
                            ]
                        },
                        {
                            "span": 12,
                            "list": [{
                                type: 'input',
                                name: 'companyName',
                                label: '客户名称',
                                config: false,
                                disabled: true, // 是否禁用
                                rules: [],
                            },

                            {
                                type: 'input',
                                name: 'agreementNumber',
                                label: '企业注册登记号',
                                config: false,
                                placeholder: '请输入企业注册登记号(企业营业执照注册号)',
                                rules: [{ required: true, message: '请输入企业注册登记号' }],
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
                                rules: [{ required: true, message: '请上传营业执照文件' }],
                            },

                            {
                                type: 'datepicker',
                                disabledDate: 'disabledDateBefore', // 日期独有 值是提前设定好的函数名字
                                dateFormat: 'YYYY-MM-DD', // 日期独有 显示的格式 
                                dateValueFormat: 'YYYY-MM-DD', // 日期独有 取值赋值的格式
                                name: 'companyIdFromDate',
                                label: '企业营业执照证件起始日',
                                config: false,
                                placeholder: '企业营业执照证件起始日',
                                rules: [],
                            },

                            {
                                type: 'input',
                                name: 'scopeOfBus',
                                label: '企业经营范围',
                                config: false,
                                rules: [{ required: true, message: '请输入企业经营范围' }],
                            },
                            {
                                type: 'input',
                                name: 'busAddress',
                                label: '企业经营住所',
                                config: false,
                                rules: null,
                            },
                            {
                                type: 'input',
                                name: 'regTePhone',
                                label: '企业注册电话号码',
                                config: false,
                                placeholder: '企业注册电话号码，无法确认则输入法人的手机号码',
                                rules: [{ required: false, message: '企业注册电话号码' },],
                            },
                            {
                                type: 'AddressCascader', // 地区级联
                                name: 'workDistList',
                                label: '企业办公省市区代码',
                                config: false,
                                placeholder: '企业办公省市区代码',
                                rules: [{ required: true, message: '请选择企业办公省市区代码' }],
                            },
                            {
                                type: 'input',
                                name: 'workStrentDoor',
                                label: '企业办公街道地址',
                                config: false,
                                rules: [{ max: 300, message: '不超过300字符' }],
                            },
                            {
                                type: 'input',
                                name: 'workAddressPhone',
                                label: '企业注册电话号码',
                                config: false,
                                placeholder: '企业办公电话号码，无法确认则输入法人的手机号码',
                                rules: [],
                            }
                            ]
                        },
                        ]
                    }
                ]
            },
            {
                "name": "Tab_102",
                "label": "银行账户资料",
                "list": [
                    {
                        "type": "grid",
                        "className": "form-grid",
                        "gutter": 0,
                        "justify": "start",
                        "align": "top",
                        "list": [{
                            "span": 12,
                            "list": [
                                {
                                    type: 'AsyncSelect',
                                    name: 'bankId',
                                    label: '已有银行账号',
                                    config: false,
                                    disabled: false, // 是否禁用
                                    rules: [{ required: true, message: '必填' }],
                                    showSearch: true,
                                    options: {
                                        url: '/customer/bankAccount/getBankList',
                                        callBack: (res) => { return res.data },
                                        valueKey: 'id',
                                        labelKeys: 'bankAcco;bankAcconame'
                                    }
                                },
                                {
                                    type: 'input',
                                    name: 'account',
                                    label: '银行账号',
                                    config: false,
                                    disabled: false, // 是否禁用
                                    rules: [{ required: true, message: '必填' }],
                                },
                                {
                                    type: 'input',
                                    name: 'bankPrefixName',
                                    label: '银行类型',
                                    config: false,
                                    disabled: false, // 是否禁用
                                    rules: [{ required: true, message: '必填' }],
                                },
                                {
                                    type: 'input',
                                    name: 'bankName',
                                    label: '银行全称',
                                    config: false,
                                    disabled: false, // 是否禁用
                                    rules: [{ required: true, message: '必填' }],
                                }

                            ]
                        },
                        {
                            "span": 12,
                            "list": [
                                {
                                    type: 'EnumSelect',
                                    name: 'acctBank',
                                    label: '绑定卡清算行行号',
                                    config: false,
                                    disabled: false, // 是否禁用
                                    showSearch: true,
                                    rules: [{ required: true, message: '请选择绑定卡清算行行号' }],
                                    selectOptionEnumCode: 'limbic_shbank_acctBank'
                                },
                                {
                                    type: 'input',
                                    name: 'bankAcconame',
                                    label: '银行账户名称',
                                    config: false,
                                    disabled: false, // 是否禁用
                                    rules: [{ required: true, message: '必填' }],
                                },
                                {
                                    type: 'input',
                                    name: 'bankCode',
                                    label: '银行联行号',
                                    config: false,
                                    disabled: false, // 是否禁用
                                    rules: [{ required: true, message: '必填' }],
                                }
                            ]
                        }]
                    }
                ]
            },
            {
                "name": "Tab_103",
                "label": "受益人",
                "list": [{
                    "type": "grid",
                    "className": "form-grid",
                    "gutter": 0,
                    "justify": "start",
                    "align": "top",
                    "list": [{
                        "span": 12,
                        "list": [
                            {
                                type: 'EnumSelect',
                                name: 'earningOwnerList[' + 0 + '].earningOwnerType',
                                label: '受益所有人性质',
                                config: false,
                                disabled: true, // 是否禁用
                                allowClear: true,
                                rules: [{ required: true, message: '请选择受益所有人性质' }],
                                selectOptionEnumCode: 'limbic_shbank_earningOwnerType'
                            },
                            {
                                type: 'input',
                                name: 'earningOwnerList[' + 0 + '].earningOwnerTypeName',
                                label: '受益所有人性质',
                                config: false,
                                rules: [{ required: true, message: '请输入受益所有人性质' }],
                            },

                            {
                                type: 'input',
                                name: 'earningOwnerList[' + 0 + '].earningOwnerIdNo',
                                label: '受益所有人证件号码',
                                config: false,
                                rules: [{ required: true, message: '请输入受益所有人证件号码' }],
                            },
                            {
                                type: 'datepicker',
                                dateFormat: 'YYYY-MM-DD', // 日期独有 显示的格式 
                                dateValueFormat: 'YYYY-MM-DD', // 日期独有 取值赋值的格式
                                name: 'earningOwnerList[' + 0 + '].earningOwnerLimitDate',
                                label: '受益所有人证件有效期',
                                config: false,
                                rules: [{ required: true, message: '请输入受益所有人证件有效期' }],
                            }
                        ]
                    },
                    {
                        "span": 12,
                        "list": [
                            {
                                type: 'input',
                                name: 'earningOwnerList[' + 0 + '].earningOwnerName',
                                label: '受益所有人姓名',
                                config: false,
                                rules: [{ required: true, message: '请输入受益所有人姓名' }],
                            },
                            {
                                type: 'EnumSelect',
                                name: 'earningOwnerList[' + 0 + '].earningOwnerIdType',
                                label: '受益所有人证件类型',
                                config: false,
                                disabled: true, // 是否禁用
                                allowClear: true,
                                rules: [{ required: true, message: '请输入受益所有人证件类型' }],
                                selectOptionEnumCode: 'limbic_shbank_earningOwnerIdType'
                            },
                            {
                                type: 'input',
                                name: 'earningOwnerList[' + 0 + '].earningOwnerCountry',
                                label: '受益所有人国籍',
                                config: false,
                                rules: [{ required: true, message: '请输入受益所有人国籍' }],
                            },
                            {
                                type: 'input',
                                name: 'earningOwnerList[' + 0 + '].earningOwnerAddress',
                                label: '受益所有人地址',
                                config: false,
                                rules: [{ required: true, message: '请输入受益所有人地址' }],
                            }
                        ]
                    }]
                }]
            },
            {
                "name": "Tab_104",
                "label": "法人资料",
                "list": [{
                    "type": "grid",
                    "className": "form-grid",
                    "gutter": 0,
                    "justify": "start",
                    "align": "top",
                    "list": [{
                        "span": 12,
                        "list": [
                            {
                                type: 'input',
                                name: 'corpName',
                                label: '法人姓名',
                                config: false,
                                rules: [{ required: true, message: '请输入法人姓名' }],
                            },
                            {
                                type: 'MobileVerifi',
                                name: 'corpMobile',
                                label: '法人代表电话',
                                config: false,
                                rules: [{ required: true, message: '请输入法人代表电话' }],
                                countOption:
                                {
                                    time: 3, // 倒计次数
                                    url: '/accountCenter/conductFinanceOpening/sendMobile',
                                    callBack: callBack1
                                }
                            },

                            {
                                type: 'datepicker',
                                disabledDate: 'disabledDateBefore', // 日期独有 值是提前设定好的函数名字
                                dateFormat: 'YYYY-MM-DD', // 日期独有 显示的格式 
                                dateValueFormat: 'YYYY-MM-DD', // 日期独有 取值赋值的格式
                                name: 'corpIdFromDate',
                                label: '法人身份证起始日',
                                config: false,
                                rules: [{ required: true, message: '请选择法人身份证起始日' }],
                            },
                            {
                                type: 'datepicker',
                                disabledDate: 'disabledDateAfter', // 日期独有 值是提前设定好的函数名字
                                dateFormat: 'YYYY-MM-DD', // 日期独有 显示的格式 
                                dateValueFormat: 'YYYY-MM-DD', // 日期独有 取值赋值的格式
                                name: 'corpIdLimitDate',
                                label: '法人身份证到期日',
                                config: false,
                                rules: [{ required: true, message: '请选择法人身份证到期日' }],
                            },

                        ]
                    },
                    {
                        "span": 12,
                        "list": [
                            {
                                type: 'input',
                                name: 'legPerId',
                                label: '法人身份证号码',
                                config: false,
                                rules: [{ required: true, message: '请输入法人身份证号码' }],
                            },
                            {
                                type: 'input',
                                name: 'dynamicCode',
                                label: '动态验证码',
                                config: false,
                                rules: [{ required: true, message: '请输入动态验证码' }],
                            },
                            {
                                type: 'uploads',
                                name: 'corpIdFrontImgID',
                                label: '法人身份证原件正面图片',
                                fileName: 'fileInfo', // 上传专用
                                action: "/api/filesystem/attachmentInfo/uploadFile",  // 上传专用
                                headers: {
                                    authorization: 'authorization-text'
                                }, // 上传专用
                                valuePropName: 'fileList',
                                config: false, // 是否是显示表单配置
                                rules: [{ required: true, message: '请上传法人身份证原件正面图片' }],
                            },
                            {
                                type: 'uploads',
                                name: 'corpIdBackImgID',
                                label: '法人身份证原件反面图片',
                                fileName: 'fileInfo', // 上传专用
                                action: "/api/filesystem/attachmentInfo/uploadFile",  // 上传专用
                                headers: {
                                    authorization: 'authorization-text'
                                }, // 上传专用
                                valuePropName: 'fileList',
                                config: false, // 是否是显示表单配置
                                rules: [{ required: true, message: '请上传法人身份证原件反面图片' }],
                            }
                        ]
                    }]
                }]
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
                        "list": [{
                            "span": 12,
                            "list": [
                                {
                                    type: 'EnumSelect',
                                    name: 'appApplyType',
                                    label: '办理类型',
                                    config: false,
                                    placeholder: '办理类型',
                                    rules: [{ required: true, message: '请选择办理类型666' }],
                                    selectOptionEnumCode: 'limbic_shbank_appApplyType'
                                },
                                {
                                    type: 'input',
                                    name: 'cfoName',
                                    label: '财务主管姓名',
                                    config: false,
                                    placeholder: '请输入财务主管姓名',
                                    rules: [{ required: false, message: '请输入财务主管姓名' }],
                                },
                                {
                                    type: 'input',
                                    name: 'cfoIdNo',
                                    label: '请输入财务主管证件号',
                                    config: false,
                                    placeholder: '请输入财务主管证件号',
                                    rules: [{ required: false, message: '请输入财务主管证件号' }],
                                },
                                {
                                    type: 'input',
                                    name: 'cfoMobile',
                                    label: '财务主管电话',
                                    config: false,
                                    placeholder: '请输入财务主管电话',
                                    rules: [{ required: false, message: '请输入财务主管电话' }],
                                },

                                {
                                    type: 'datepicker',
                                    disabledDate: 'disabledDateBefore', // 日期独有 值是提前设定好的函数名字
                                    dateFormat: 'YYYY-MM-DD', // 日期独有 显示的格式 
                                    dateValueFormat: 'YYYY-MM-DD', // 日期独有 取值赋值的格式
                                    name: 'cfoIdFromDate',
                                    label: '财务主管身份证起始日',
                                    config: false,
                                    placeholder: null,
                                    rules: [],
                                },
                                {
                                    type: 'datepicker',
                                    disabledDate: 'disabledDateAfter', // 日期独有 值是提前设定好的函数名字
                                    dateFormat: 'YYYY-MM-DD', // 日期独有 显示的格式 
                                    dateValueFormat: 'YYYY-MM-DD', // 日期独有 取值赋值的格式
                                    name: 'cfoIdLimitDate',
                                    label: '财务主管证件到期日',
                                    config: false,
                                    placeholder: null,
                                    rules: [{ required: false, message: '请选择财务主管证件到期日' }],
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
                                    rules: [{ required: false, message: '请上传财务主管身份证原件正面图片' }],
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
                                    rules: [{ required: false, message: '请上传财务主管身份证原件反面图片' }],
                                }
                            ]
                        },
                        {
                            "span": 12,
                            "list": [
                                {
                                    type: 'EnumSelect',
                                    name: 'cfoType',
                                    label: '财务主管类型',
                                    config: false,
                                    placeholder: '财务主管类型',
                                    rules: [{ required: true, message: '请选择财务主管类型666' }],
                                    selectOptionEnumCode: 'limbic_shbank_cfoType'
                                },
                                {
                                    type: 'input',
                                    name: 'checkerName',
                                    label: '经办人姓名',
                                    config: false,
                                    placeholder: '请输入经办人姓名',
                                    rules: [{ required: false, message: '请输入经办人姓名' }],
                                },
                                {
                                    type: 'input',
                                    name: 'checkerIdCard',
                                    label: '经办人身份证号码',
                                    config: false,
                                    placeholder: '请输入经办人身份证号码',
                                    rules: [{ required: false, message: '请输入经办人身份证号码' }],
                                },
                                {
                                    type: 'input',
                                    name: 'checkerMobile',
                                    label: '经办人手机号',
                                    config: false,
                                    placeholder: '请输入经办人手机号',
                                    rules: [{ required: false, message: '请输入经办人手机号' }],
                                },
                                {
                                    type: 'datepicker',
                                    disabledDate: 'disabledDateBefore', // 日期独有 值是提前设定好的函数名字
                                    dateFormat: 'YYYY-MM-DD', // 日期独有 显示的格式 
                                    dateValueFormat: 'YYYY-MM-DD', // 日期独有 取值赋值的格式
                                    name: 'checkerIdFromDate',
                                    label: '经办人身份证起始日',
                                    config: false,
                                    placeholder: null,
                                    rules: [],
                                },
                                {
                                    type: 'datepicker',
                                    disabledDate: 'disabledDateAfter', // 日期独有 值是提前设定好的函数名字
                                    dateFormat: 'YYYY-MM-DD', // 日期独有 显示的格式 
                                    dateValueFormat: 'YYYY-MM-DD', // 日期独有 取值赋值的格式
                                    name: 'checkerIdLimitDate',
                                    label: '经办人证件到期日证件到期日',
                                    config: false,
                                    placeholder: null,
                                    rules: [{ required: false, message: '请选择经办人证件到期日证件到期日' }],
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
                                    rules: [{ required: false, message: '请上传经办人身份证原件正面图片' }],
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
                                    rules: [{ required: false, message: '请上传经办人身份证原件反面图片' }],
                                }
                            ]
                        }
                        ]
                    }
                ]
            },
            {
                "name": "Tab_106",
                "label": "其他附件",
                "list": [{
                    "type": "grid",
                    "className": "form-grid",
                    "gutter": 0,
                    "justify": "start",
                    "align": "top",
                    "list": [{
                        "span": 12,
                        "list": [

                            {
                                type: 'uploads',
                                name: 'delegationImgID',
                                label: '上行普惠企业授权委托书文件',
                                fileName: 'fileInfo', // 上传专用
                                action: "/api/filesystem/attachmentInfo/uploadFile",  // 上传专用
                                headers: {
                                    authorization: 'authorization-text'
                                }, // 上传专用
                                valuePropName: 'fileList',
                                config: false, // 是否是显示表单配置
                                rules: [{ required: true, message: '请上传上行普惠企业授权委托书文件' }],
                            }

                        ]
                    }
                    ]
                }]
            },
            {
                "name": "Tab_107",
                "label": "温馨提示",
                "list": [
                    {
                        type: 'rawHTML',
                        content: `<p style="margin-left:250px;">1、开户成功后，请进行汇款激活。</p>
                                    <p style="margin-left:250px;">2、账户激活中将自动签约上海银行易精灵。</p>
                                    <p style="margin-left:250px;">3、开户成功后请在详情页进行风险评估。</p>
                                `
                    }]
            },
        ],
    }
]
export let formRelevanceConfig = [
    {
        rules: [
            { name: "appApplyType", value: "1" },
            { name: "cfoType", value: "1" }
        ],
        relevance: "and",
        target: "config", // 修改目标是设置还是表单的
        result: [
            {
                name: "cfoName",
                key: "rules",
                value: [{ required: false, message: "请输入财务主管姓名" }]
            },
            {
                name: "checkerName",
                key: "rules",
                value: [{ required: false, message: "请输入经办人姓名" }]
            }
        ]
    },
    {
        rules: [
            { name: "appApplyType", value: "1" },
            { name: "cfoType", value: "2" }
        ],
        relevance: "and",
        target: "config", // 修改目标是设置还是表单的
        result: [
            {
                name: "cfoName",
                key: "rules",
                value: [{ required: false, message: "请输入财务主管姓名" }]
            },
            {
                name: "checkerName",
                key: "rules",
                value: [{ required: false, message: "请输入经办人姓名" }]
            }
        ]
    },
    {
        rules: [
            { name: "appApplyType", value: "1" },
            { name: "cfoType", value: "3" }
        ],
        relevance: "and",
        target: "config", // 修改目标是设置还是表单的

        result: [
            {
                name: "cfoName",
                key: "rules",
                value: [{ required: true, message: "请输入财务主管姓名" }]
            },
            {
                name: "checkerName",
                key: "rules",
                value: [{ required: false, message: "请输入经办人姓名" }]
            }
        ]
    },

    {
        rules: [
            { name: "appApplyType", value: "2" },
            { name: "cfoType", value: "1" }
        ],
        relevance: "and",
        target: "config", // 修改目标是设置还是表单的
        result: [
            {
                name: "cfoName",
                key: "rules",
                value: [{ required: false, message: "请输入财务主管姓名" }]
            },
            {
                name: "checkerName",
                key: "rules",
                value: [{ required: true, message: "请输入经办人姓名" }]
            }
        ]
    },
    {
        rules: [
            { name: "appApplyType", value: "2" },
            { name: "cfoType", value: "2" }
        ],
        relevance: "and",
        target: "config", // 修改目标是设置还是表单的
        result: [
            {
                name: "cfoName",
                key: "rules",
                value: [{ required: false, message: "请输入财务主管姓名" }]
            },
            {
                name: "checkerName",
                key: "rules",
                value: [{ required: true, message: "请输入经办人姓名" }]
            }
        ]
    },
    {
        rules: [
            { name: "appApplyType", value: "2" },
            { name: "cfoType", value: "3" }
        ],
        relevance: "and",
        target: "config", // 修改目标是设置还是表单的
        result: [
            {
                name: "cfoName",
                key: "rules",
                value: [{ required: true, message: "请输入财务主管姓名" }]
            },
            {
                name: "checkerName",
                key: "rules",
                value: [{ required: true, message: "请输入经办人姓名" }]
            }
        ]
    }
];
