import { User } from './user.model'
const findLastUserId = async () => {
  const lastUserId = await User.findOne({}, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean()
  return lastUserId?.id
}
export const generatedId = async () => {
  const currentId = (await findLastUserId()) || (0).toString().padStart(5, '0')
  const newId = (parseInt(currentId) + 1).toString().padStart(5, '0')
  return newId
}
