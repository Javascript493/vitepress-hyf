import fs from 'fs'
import path from 'path'
const excludeDirectory = ['public']
const suffix = /\.[^.]*$/ // 匹配后缀
const mdRegex = /[\u4e00-\u9fa5\w]+\.md$/
const emoji = '🐶'
const nav = [
  { text: 'Home', link: '/' },
]
const docFilePth = path.resolve(__dirname, '../src')
const files = fs.readdirSync(docFilePth).filter(name => {
  const stat = fs.statSync(path.resolve(docFilePth, name)) || {}
  return !excludeDirectory.includes(name) && stat.isDirectory()
})
files.forEach(name => {
  const mds = fs.readdirSync(path.resolve(docFilePth, name)).filter(name => mdRegex.test(name)) || []
  const firstMd = mds[0]
  nav.push({
    text: `${emoji}${name}`,
    link: `${firstMd ? `/${name}/${firstMd}` : '/'}`
  })
})

export default function () {
  return nav
}