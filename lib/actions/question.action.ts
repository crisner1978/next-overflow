'use server'

import { revalidatePath } from 'next/cache'
import Question from '../database/question.model'
import Tag from '../database/tag.model'
import { connectToDatabase } from '../mongoose'
import { CreateQuestionParams, GetQuestionsParams } from './shared.param.types'
import User from '../database/user.model'

export async function createQuestion(params: CreateQuestionParams) {
  try {
    connectToDatabase()
    const { title, content, tags, author, path } = params
    const question = await Question.create({
      title,
      content,
      author,
    })

    const tagDocuments = []

    for (const tag of tags) {
      const existingTag = await Tag.findOneAndUpdate(
        { name: { $regex: new RegExp(`^${tag}$`, 'i') } },
        { $setOnInsert: { name: tag }, $push: { questions: question._id } },
        { upsert: true, new: true },
      )
      tagDocuments.push(existingTag._id)
    }
    await Question.findByIdAndUpdate(question._id, {
      $push: { tags: { $each: tagDocuments } },
    })

    revalidatePath(path)
    // TODO: create an interaction record for the User's ask_question action
    // TODO: Increment author's reputation by +5 for asking a question
  } catch (error) {
    console.log(error)
    throw error
  }
}

export async function getQuestions(params?: GetQuestionsParams) {
  try {
    connectToDatabase()
    const questions = await Question.find({})
      .populate({ path: 'tags', model: Tag })
      .populate({ path: 'author', model: User })
      .sort({ createdAt: -1 })

    return questions
  } catch (error) {
    console.log(error)
    throw error
  }
}
