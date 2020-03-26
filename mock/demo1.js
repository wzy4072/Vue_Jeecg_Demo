let enumItems = {
  code: 200,
  data: [
    { ename: '少于15人', evalue: 'T' },
    { ename: '15-150人', evalue: 'S' },
    { ename: '150-2000人', evalue: 'M' },
    { ename: '2000人以上', evalue: 'L' },
  ]
}
export default [
  {
    url: '/api/enumtype/getEnumItems',
    type: 'get',
    response: config => {
      console.log(config.query.code)
      return enumItems
    }
  }
]
