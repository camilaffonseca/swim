import _fakeDB from '#/fakeDB.json'

export const validateSession = ({ token }) =>
  new Promise((resolve, reject) => {
    if (token === _fakeDB.token) {
      resolve({
        token: _fakeDB.token,
        status: 'OK',
        statusCode: 200,
        message: 'Signed in.',
        user: {
          id: _fakeDB.id,
          name: _fakeDB.name,
          email: _fakeDB.email,
        },
      })
    } else {
      reject({
        status: 'BAD REQUEST',
        statusCode: 401,
        message: 'Invalid credentials.',
      })
    }
  })

export const signIn = ({ email, password }) =>
  new Promise((resolve, reject) => {
    if (email === _fakeDB.email && password === _fakeDB.password) {
      resolve({
        token: _fakeDB.token,
        status: 'OK',
        statusCode: 200,
        message: 'Signed in.',
        user: {
          id: _fakeDB.id,
          name: _fakeDB.name,
          email: _fakeDB.email,
        },
      })
    } else {
      reject({
        status: 'BAD REQUEST',
        statusCode: 401,
        message: 'Invalid credentials.',
      })
    }
  })
