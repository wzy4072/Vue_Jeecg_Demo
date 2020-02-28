// 配置本地node服务端读取JSON文件
var http = require('http')
var fs = require('fs')
var server = http.createServer(function (req, res) {
  var url_info = require('url').parse(req.url, true)
  var file = './JSON' + url_info.pathname + '.json'
  console.log('this is server1:', file)
  fs.exists(file, (exists) => {
    var result = { 'code': 0, 'desc': file + '文件不存在' }
    if (exists) {
      result = JSON.parse(fs.readFileSync(file))
      res.writeHead(200, {
        'Content-Type': 'application/json; charset=utf-8'
      })
    } else {
      res.writeHead(400, {
        'Content-Type': 'application/json; charset=utf-8'
      })
    }
    res.end(JSON.stringify(result))
    res.end(result.join)
  })
})
server.listen(3001, 'localhost') 