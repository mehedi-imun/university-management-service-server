import { IUser } from './user.interface'
import { User } from './user.model'
import { generatedId } from './user.utils'

const createUserService = async (userData: IUser): Promise<IUser | null> => {
  const id = await generatedId()
  userData.id = id

  if (!userData.password) {
    userData.password = process.env.DEFAULT_USER_PASS as string
  }
  const result = await User.create(userData)
  if (!result) {
    throw Error('Create to failed user')
  }
  return result
}

export default {
  createUserService,
}
