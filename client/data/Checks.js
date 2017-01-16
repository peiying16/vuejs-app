const checks = [
  {
    name: 'Auth Service',
    description: 'This is some long text, possibly with Markdown syntax',
    status: {
      code: 1,
      text: 'Healthy'
    },
    id: 1
  },
  {
    name: 'Mongo Database',
    description: 'This is some long text, possibly with Markdown syntax',
    status: {
      code: 3,
      text: 'Warning'
    },
    id: 2
  },
  {
    name: 'Front End App',
    status: {
      code: 2,
      text: 'Notice'
    },
    id: 3
  },
  {
    name: 'User API',
    description: 'This is some long text, possibly with Markdown syntax',
    status: {
      code: 4,
      text: 'Critical'
    },
    id: 4
  }
]

function fakeHttp (data) {
  return new Promise(resolve => resolve(data))
}

export default {

  model () {
    return {
      id: null,
      name: '',
      description: '',
      status: {
        code: null,
        text: ''
      },
      checks: [],
      alerts: []
    }
  },
  find: function (id) {
    return fakeHttp(checks.find(c => parseInt(id) === c.id))
  },
  all: function () {
    return fakeHttp(checks)
  },
  create: function (check) {
    check.id = checks.length + 1
    checks.push(check)
  }
}
