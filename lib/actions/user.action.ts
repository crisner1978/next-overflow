'use server'

import { revalidatePath } from 'next/cache'
import User from '../database/user.model'
import { connectToDatabase } from '../mongoose'
import { CreateUserParams, DeleteUserParams, UpdateUserParams } from './shared.param.types'
import Question from '../database/question.model'

export async function getUserById(params: { userId: string }) {
  try {
    connectToDatabase()
    const { userId } = params
    const user = await User.findOne({ clerkId: userId })

    return user
  } catch (error) {
    console.log(error)
    throw error
  }
}

export async function createUser(userData: CreateUserParams) {
  try {
    connectToDatabase()
    const newUser = await User.create(userData)
    return newUser
  } catch (error) {
    console.log(error)
    throw error
  }
}

export async function updateUser(userData: UpdateUserParams) {
  const { clerkId, updateData, path } = userData
  try {
    connectToDatabase()
    await User.findOneAndUpdate({ clerkId }, updateData, { new: true })
    revalidatePath(path)
  } catch (error) {
    console.log(error)
    throw error
  }
}

export async function deleteUser(userData: DeleteUserParams) {
  const { clerkId } = userData

  const user = await User.findOneAndDelete({ clerkId })

  if (!user) {
    throw new Error('User not found')
  }

  // eslint-disable-next-line no-unused-vars
  const userQuestionIds = await Question.find({ author: user._id }).distinct('_id')

  await Question.deleteMany({ author: user._id })

  // TODO delete user answers, comments, etc...

  const deletedUser = await User.findByIdAndDelete(user._id)

  return deletedUser
}
