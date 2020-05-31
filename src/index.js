import trace from '../traceWithDate.js'

console.log('Hello world')

const getUsers = () => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => resolve([{ id: 'jon' }, { id: 'andrey' }, { id: 'tania' }]), 600)
  })
}

// Second promise relies on the result of first promise
const getIdFromUser = users => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => resolve(users.id), 500)
  })
}

// Third promise relies on the result of the second promise
const capitalizeIds = id => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => resolve(id.toUpperCase()), 200)
  })
}

const runAsyncFunctions = async () => {
  trace('let\'s start')
  const users = await getUsers()

  for (let user of users) {
    const userId = await getIdFromUser(user)
    trace(userId)

    const capitalizedId = await capitalizeIds(userId)
    trace(capitalizedId)
  }

  trace(JSON.stringify(users))
}

const resolveCapitalizedName = (users) => {
  return Promise.resolve().then(() => {

    trace('ResolveCapitalizedName>>')
    return getIdFromUser(users)
    }
  ).then( (id => {
    trace('id:' + id)
    return id
  }))
    .then( id => capitalizeIds(id))
    .then( capital => trace(capital))

}

const runAsyncFunctions2 = async () => {
  trace('let\'s start')
  const users = await getUsers()

  for (let user of users) {
    resolveCapitalizedName(user)
  }

  trace(JSON.stringify(users))
}

const runAsyncFunctions3 = async () => {
  trace('let\'s start F3')
  const users = await getUsers()

  Promise.all( users.map(user => resolveCapitalizedName(user)))

  trace(JSON.stringify(users))
}

runAsyncFunctions3()