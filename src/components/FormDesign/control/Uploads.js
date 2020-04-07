function getUploadButton(_self, h) {
  return h('AButton', {}, [h('AIcon', { props: { type: 'upload' } }), '上传'])
}

function getFileInfo(file) {
  let fileInfo = {
    uid: file.uid,
    name: file.name,
    status: file.status
  }
  if (file.response && file.response.code == 200 && file.response.data.id) {
    fileInfo.response = { data: { id: file.response.data.id } }
  }
  return fileInfo;
}
function normFile(e) {
  let fileList = Array.isArray(e) ? e : e.fileList

  if (fileList.length > 0) {
    return [getFileInfo(fileList[fileList.length - 1])]
  }
  return []

}

export default (_self, h) => {
  let conf = _self.conf
  return [
    h('AUpload', {
      props: {
        name: conf.fileName,
        action: conf.action,
        headers: conf.headers,
      },
      directives: [
        {
          name: "decorator",
          value: [
            conf.name,
            {
              rules: conf.rules,
              initialValue: eval("_self.initialValue." + conf.name),
              valuePropName: 'fileList',
              getValueFromEvent: normFile,
            }
          ]
        }
      ]
    },
      [getUploadButton(_self, h)]
    )
  ]
}

// initialValue/上传数据的 格式
// [
//   {
//     uid: "xxx",
//     name: "XXX文件.png",
//     status: "done",
//     response: {
//       data: { id: "666" }
//     }
//   }
// ]


export const uploadsConf = {
  // 对应数据库内类型
  type: 'uploads',
  // 是否可配置
  config: true,
  // 上传地址
  action: 'http://workflow.test/imageupload',
  // 是否必填
  require: true,
  // 控件左侧label内容
  label: '上传控件',
  // 上传文件最大限制
  maxSize: 2048,
  // 绑定的值
  value: [],
  // 表单name
  name: '',
  // 验证错误提示信息
  ruleError: '请上传图片',
  // 是否关联字段
  relation: false,
  // 关联字段name
  relation_name: '',
  // 关联字段value
  relation_value: '',
  // 是否被渲染
  visibility: true
}
