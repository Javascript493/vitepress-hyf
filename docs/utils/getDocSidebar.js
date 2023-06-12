const fs = require('fs')
const _path = require('path')
//正则
const mdRegex = /[\u4e00-\u9fa5\w]+\.md$/ 
const suffix = /\.[^.]*$/ // 匹配后缀

const app = function() {
// 拼接路径
const getPath =  function () {
  return _path.resolve(...arguments)
}

// 或者文件信息
const getFileStat = function(path) {
  return fs.statSync(path)
}

// 获取某个目录下的目录文件，返回[name]
const getFileList = function (path) {
    // 根据目录返回文件列表
    const files =  fs.readdirSync(path)
    // console.log(files, 'files')
    const nameList = new Array() // 直接= 赋值
    files.forEach(name => {
      const stat  = getFileStat(getPath(path, name))
      if(stat.isDirectory()) {
        // 为目录
        nameList.push(name)
      }
      // console.log(stat.isDirectory(), name , sidebarGroup)
    })
    // console.log(nameList, 'nameList')
  return nameList
}

const docFilePth = getPath(__dirname, '../src') //文档根目录
console.log(_path.resolve(docFilePth, 'base', ''))
const sidebarGroup = getFileList(docFilePth)
console.log(sidebarGroup, 'sidebarGroup')
const sidebar = {
  '/': [
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            // { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        }
      ],
}
sidebarGroup.forEach(name => {
  const list = []

  const getSidebarItem = function(path, name, name1){
    const files = fs.readdirSync(getPath(path, name, name1)) //所有目录
    const mdFiles = files && files.filter(i => mdRegex.test(i)) // 文档
    const sidebarItem = {
      text: name1 || name,
      collapsible: true,
      items: [] // text， link
    }

    mdFiles.forEach(md => {
      const mdName = md.replace(suffix, '')
      sidebarItem.items.push({
        text: mdName,
        link: `/${name}${name1 ? `/${name1}` : ''}/${mdName}`
      })
    })

    return sidebarItem
  }
  list.push(getSidebarItem(docFilePth, name, ''))
  const folder = getFileList(getPath(docFilePth, name)) // 文件夹
  folder.forEach(filderName => {
    const path = docFilePth
    list.push(getSidebarItem(path, name, filderName))

  })
  sidebar[`/${name}/`] = list
})
return sidebar
}

app()
// module.export = app
export default app
