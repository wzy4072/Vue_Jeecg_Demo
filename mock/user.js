
const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  },
  teller: {
    token: 'teller-token'
  }
}

const menus = {
  menus: [
    {
      'label': '基础平台', // 名称
      'id': 'base', // 身份Id
      'pId': 'teller', // 所属上级Id
      'checked': true, // 是否选中此权限(true/false)
      'disabled': false, // 是否可以操作此权限(true/false)
      'children': [
        {
          'label': '用户管理', // 名称
          'id': 'example', // 身份Id
          'pId': 'base', // 所属上级Id
          'checked': true, // 是否选中此权限(true/false)
          'disabled': false, // 是否可以操作此权限(true/false)
          'children': [] // 子菜单，无子菜单为空数组
        }, {
          'label': '帐号管理', // 名称
          'id': 'bankAccManager', // 身份Id
          'pId': 'base', // 所属上级Id
          'checked': true, // 是否选中此权限(true/false)
          'disabled': false, // 是否可以操作此权限(true/false)
          'children': [] // 子菜单，无子菜单为空数组
        }, {
          'label': '权限配置', // 名称
          'id': 'permission', // 身份Id
          'pId': 'base', // 所属上级Id
          'checked': true, // 是否选中此权限(true/false)
          'disabled': false, // 是否可以操作此权限(true/false)
          'children': [] // 子菜单，无子菜单为空数组
        }
      ]
    },
    {
      'label': '机构管理', // 名称
      'id': 'orgManagement', // 身份Id
      'pId': 'teller', // 所属上级Id
      'checked': true, // 是否选中此权限(true/false)
      'disabled': false, // 是否可以操作此权限(true/false)
      'children': [
        {
          'label': '机构管理维护', // 名称
          'id': 'orgManagement/orgOps', // 身份Id
          'pId': 'orgManagement', // 所属上级Id
          'checked': true, // 是否选中此权限(true/false)
          'disabled': false, // 是否可以操作此权限(true/false)
          'children': [] // 子菜单，无子菜单为空数组
        }
      ]
    },
    {
      'label': '客户管理', // 名称
      'id': 'custMangement', // 身份Id
      'pId': 'teller', // 所属上级Id
      'checked': false, // 是否选中此权限(true/false)
      'disabled': false, // 是否可以操作此权限(true/false)
      'children': [
        {
          'label': '签约管理', // 名称
          'id': 'contractManagement', // 身份Id
          'pId': 'custMangement', // 所属上级Id
          'checked': false, // 是否选中此权限(true/false)
          'disabled': false, // 是否可以操作此权限(true/false)
          'children': [
            {
              'label': '企业签约', // 名称
              'id': 'contractManagement/enterpriseContract', // 身份Id
              'pId': 'contractManagement', // 所属上级Id
              'checked': true, // 是否选中此权限(true/false)
              'disabled': false, // 是否可以操作此权限(true/false)
              'children': [] // 子菜单，无子菜单为空数组
            },
            {
              'label': '用户管理', // 名称
              'id': 'contractManagement/userManagement', // 身份Id
              'pId': 'contractManagement', // 所属上级Id
              'checked': true, // 是否选中此权限(true/false)
              'disabled': false, // 是否可以操作此权限(true/false)
              'children': [] // 子菜单，无子菜单为空数组
            },
            {
              'label': '签约查询', // 名称
              'id': 'contractQuery', // 身份Id
              'pId': 'contractManagement', // 所属上级Id
              'checked': true, // 是否选中此权限(true/false)
              'disabled': false, // 是否可以操作此权限(true/false)
              'children': [] // 子菜单，无子菜单为空数组
            }
          ]
        },
        {
          'label': '企业签约维护', // 名称
          'id': 'contractOps', // 身份Id
          'pId': 'custMangement', // 所属上级Id
          'checked': true, // 是否选中此权限(true/false)
          'disabled': false, // 是否可以操作此权限(true/false)
          'children': [
            {
              'label': '实体父子关系维护', // 名称
              'id': 'contractQuery1', // 身份Id
              'pId': 'contractOps', // 所属上级Id
              'checked': true, // 是否选中此权限(true/false)
              'disabled': false, // 是否可以操作此权限(true/false)
              'children': [] // 子菜单，无子菜单为空数组
            },
            {
              'label': '委贷父子关系维护', // 名称
              'id': 'contractQuery2', // 身份Id
              'pId': 'contractOps', // 所属上级Id
              'checked': true, // 是否选中此权限(true/false)
              'disabled': false, // 是否可以操作此权限(true/false)
              'children': [] // 子菜单，无子菜单为空数组
            }
          ]
        }
      ]
    },
    // {
    //   'label': '一级可访问菜单', // 名称
    //   'id': 'levelOne', // 身份Id
    //   'pId': 'teller', // 所属上级Id
    //   'checked': true, // 是否选中此权限(true/false)
    //   'disabled': true, // 是否可以操作此权限(true/false)
    //   'children': []
    // },
    {
      'label': '公共管理', // 名称
      'id': 'publicManage', // 身份Id
      'pId': 'teller', // 所属上级Id
      'checked': true, // 是否选中此权限(true/false)
      'disabled': true, // 是否可以操作此权限(true/false)
      'children': [
        {
          'label': '支付限额管理', // 名称
          'id': 'publicManage/btPublicPaymentLimit', // 身份Id
          'pId': 'publicManage', // 所属上级Id
          'checked': true, // 是否选中此权限(true/false)
          'disabled': true, // 是否可以操作此权限(true/false)
          'children': [] // 子菜单，无子菜单为空数组
        },
        {
          'label': '监管账户管理', // 名称
          'id': 'publicManage/regulatoryAccount', // 身份Id
          'pId': 'publicManage', // 所属上级Id
          'checked': true, // 是否选中此权限(true/false)
          'disabled': true, // 是否可以操作此权限(true/false)
          'children': [] // 子菜单，无子菜单为空数组
        },
        {
          'label': '定向支付控制', // 名称
          'id': 'publicManage/directionalPayment', // 身份Id
          'pId': 'publicManage', // 所属上级Id
          'checked': true, // 是否选中此权限(true/false)
          'disabled': true, // 是否可以操作此权限(true/false)
          'children': [] // 子菜单，无子菜单为空数组
        },
        {
          'label': '定向支付控制-详情', // 名称
          'id': 'publicManage/directionalPayment/directionalPaymentDetail', // 身份Id
          'pId': 'publicManage', // 所属上级Id
          'checked': true, // 是否选中此权限(true/false)
          'disabled': true, // 是否可以操作此权限(true/false)
          'hidden': true,
          'children': [] // 子菜单，无子菜单为空数组
        },
        {
          'label': '签约账户信息', // 名称
          'id': 'publicManage/signingAccount', // 身份Id
          'pId': 'publicManage', // 所属上级Id
          'checked': true, // 是否选中此权限(true/false)
          'disabled': true, // 是否可以操作此权限(true/false)
          'hidden': false,
          'children': [] // 子菜单，无子菜单为空数组
        },
        {
          'label': '电子验印', // 名称
          'id': 'publicManage/electronicInspection', // 身份Id
          'pId': 'publicManage', // 所属上级Id
          'checked': true, // 是否选中此权限(true/false)
          'disabled': true, // 是否可以操作此权限(true/false)
          'hidden': false,
          'children': [] // 子菜单，无子菜单为空数组
        },
        {
          'label': 'Ukey维护', // 名称
          'id': 'publicManage/ukeyMaintenance', // 身份Id
          'pId': 'publicManage', // 所属上级Id
          'checked': true, // 是否选中此权限(true/false)
          'disabled': true, // 是否可以操作此权限(true/false)
          'hidden': false,
          'children': [] // 子菜单，无子菜单为空数组
        },
      ]
    },
    {
      'label': '文档中心', // 名称
      'id': 'venusDemo', // 身份Id
      'pId': 'teller', // 所属上级Id
      'checked': true, // 是否选中此权限(true/false)
      'disabled': true, // 是否可以操作此权限(true/false)
      'children': [
        {
          'label': 'VUE练兵', // 名称
          'id': 'learnVue', // 身份Id
          'pId': 'venusDemo', // 所属上级Id
          'checked': true, // 是否选中此权限(true/false)
          'disabled': true, // 是否可以操作此权限(true/false)
          'children': [
            {
              'label': '总览', // 名称
              'id': 'learnVue/preview', // 身份Id
              'pId': 'learnVue', // 所属上级Id
              'checked': true, // 是否选中此权限(true/false)
              'disabled': true, // 是否可以操作此权限(true/false)
              'children': []
            },
            {
              'label': 'VUE练兵', // 名称
              'id': 'learnVue/demos', // 身份Id
              'pId': 'learnVue', // 所属上级Id
              'checked': true, // 是否选中此权限(true/false)
              'disabled': true, // 是否可以操作此权限(true/false)
              'children': []
            },
          ]
        },
        {
          'label': '监管帐户DEMO', // 名称
          'id': 'venusDemo/regulatoryAccount', // 身份Id
          'pId': 'venusDemo', // 所属上级Id
          'checked': true, // 是否选中此权限(true/false)
          'disabled': true, // 是否可以操作此权限(true/false)
          'children': []
        },
        {
          'label': 'VENUS_组件预览', // 名称
          'id': 'venusDemo/venusUi', // 身份Id
          'pId': 'venusDemo', // 所属上级Id
          'checked': true, // 是否选中此权限(true/false)
          'disabled': true, // 是否可以操作此权限(true/false)
          'children': []
        }, {
          'label': 'VENUS_Table', // 名称
          'id': 'venusDemo/venusList', // 身份Id
          'pId': 'venusDemo', // 所属上级Id
          'checked': true, // 是否选中此权限(true/false)
          'disabled': true, // 是否可以操作此权限(true/false)
          'children': []
        }, {
          'label': 'VENUS_Form', // 名称
          'id': 'venusDemo/venusForm', // 身份Id
          'pId': 'venusDemo', // 所属上级Id
          'checked': true, // 是否选中此权限(true/false)
          'disabled': true, // 是否可以操作此权限(true/false)
          'children': []
        }, {
          'label': '草稿纸', // 名称
          'id': 'venusDemo/test', // 身份Id
          'pId': 'venusDemo', // 所属上级Id
          'checked': true, // 是否选中此权限(true/false)
          'disabled': true, // 是否可以操作此权限(true/false)
          'children': []
        }
      ]
    },
    {
      'label': '签约管理', // 名称
      'id': 'signMangement', // 身份Id
      'pId': 'teller', // 所属上级Id
      'checked': false, // 是否选中此权限(true/false)
      'disabled': true, // 是否可以操作此权限(true/false)
      'children': [
        {
          'label': '企业门户签约', // 名称
          'id': 'accSign', // 身份Id
          'pId': 'signMangement', // 所属上级Id
          'checked': false, // 是否选中此权限(true/false)
          'disabled': true, // 是否可以操作此权限(true/false)
          'children': [
            {
              'label': '企业账号签约', // 名称
              'id': 'accSign/bankacc', // 身份Id
              'pId': 'accSign', // 所属上级Id
              'checked': true, // 是否选中此权限(true/false)
              'disabled': true, // 是否可以操作此权限(true/false)
              'children': [] // 子菜单，无子菜单为空数组
            },
            {
              'label': '企业用户管理', // 名称
              'id': 'accSign/user', // 身份Id
              'pId': 'accSign', // 所属上级Id
              'checked': true, // 是否选中此权限(true/false)
              'disabled': true, // 是否可以操作此权限(true/false)
              'children': [] // 子菜单，无子菜单为空数组
            },
            {
              'label': '集团关系管理', // 名称
              'id': 'accSign/org', // 身份Id
              'pId': 'accSign', // 所属上级Id
              'checked': true, // 是否选中此权限(true/false)
              'disabled': true, // 是否可以操作此权限(true/false)
              'children': [] // 子菜单，无子菜单为空数组
            },
            {
              'label': '业务权限管理', // 名称
              'id': 'accSign/permission', // 身份Id
              'pId': 'accSign', // 所属上级Id
              'checked': true, // 是否选中此权限(true/false)
              'disabled': true, // 是否可以操作此权限(true/false)
              'children': [] // 子菜单，无子菜单为空数组
            },
            {
              'label': '资金池关系管理', // 名称
              'id': 'accSign/cash', // 身份Id
              'pId': 'accSign', // 所属上级Id
              'checked': true, // 是否选中此权限(true/false)
              'disabled': true, // 是否可以操作此权限(true/false)
              'children': [] // 子菜单，无子菜单为空数组
            }
          ]
        }
      ]
    },
  ]
}

const avatar = 'data:image/gif;base64,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'

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: '我是一个管理员',
    avatar: avatar,
    name: '管理员'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: '我是一个操作员',
    avatar: avatar,
    name: '操作员'
  },
  'teller-token': {
    roles: ['teller'],
    introduction: '我是一颗桂圆',
    avatar: avatar,
    name: '柜员'
  }
}

export default [
  //  user login
  {
    url: '/user/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      const token = tokens[username]

      //  mock error
      if (!token) {
        return {
          errcode: 60204,
          message: '用户名或密码错误.'
        }
      }

      return {
        errcode: 0,
        data: token
      }
    }
  },

  //  get user info
  {
    url: '/user/info\.*',
    type: 'get',
    response: config => {
      // const { token } = config.query
      // const info = users[token]
      //
      // //  mock error
      // if (!info) {
      //   return {
      //     errcode: 50008,
      //     message: 'Login failed, unable to get user details.'
      //   }
      // }

      return {
        errcode: 0,
        data: users['admin-token']
      }
    }
  },

  //  user logout
  {
    url: '/user/logout',
    type: 'post',
    response: _ => {
      return {
        errcode: 0,
        data: 'success'
      }
    }
  },

  //  user menus
  {
    url: '/user/menus',
    type: 'post',
    response: _ => {
      return {
        errcode: 0,
        errmesg: '查询成功',
        data: menus
      }
    }
  }
]
