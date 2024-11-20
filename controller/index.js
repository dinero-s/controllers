import userRouter from '../router/user.js'

const controller = (app) => {
  app.use('/user', userRouter)
}

export default controller