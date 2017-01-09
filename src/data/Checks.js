const checks = [
  {
    name: 'Something',
    id: 1
  },
  {
    name: 'Something Else',
    id: 2
  },
  {
    name: 'Another One',
    id: 3
  }
]

export default {
  find: function (id) {
    return new Promise((resolve, reject) => resolve(checks.find(c => parseInt(id) === c.id)))
  },
  all: function () {
    return new Promise((resolve, reject) => resolve(checks))
  },
  create: function (check) {
    return new Promise((resolve, reject) => resolve(console.log(check)))
  }
}
