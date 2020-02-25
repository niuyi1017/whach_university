// const compose = require('koa-compose')
const glob = require('glob')
const { resolve } = require('path')

initSchoolList = () => {
  let schools = [];
  glob.sync(resolve(__dirname, './', '**/*.js'))
    .filter(value => (value.indexOf('index.js') === -1))
    .map(school => {
      schools.push(require(school).main())
    })
  
  console.log(schools)
  // return compose(routers)
}
initSchoolList()
// module.exports = registerRouter