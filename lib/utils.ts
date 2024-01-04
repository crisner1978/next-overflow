import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getTimestamp = (createdAt: Date) => {
  const now = new Date()
  const diff = Math.floor((now.getTime() - createdAt.getTime()) / 1000)

  const intervals = {
    year: Math.floor(diff / (60 * 60 * 24 * 30 * 12)),
    month: Math.floor(diff / (60 * 60 * 24 * 30)),
    week: Math.floor(diff / (60 * 60 * 24 * 7)),
    day: Math.floor(diff / (60 * 60 * 24)),
    hour: Math.floor(diff / (60 * 60)),
    minute: Math.floor(diff / 60),
    second: diff,
  }

  if (intervals.year > 0) {
    return `${intervals.year} year${intervals.year > 1 ? 's' : ''} ago`
  } else if (intervals.month > 0) {
    return `${intervals.month} month${intervals.month > 1 ? 's' : ''} ago`
  } else if (intervals.week > 0) {
    return `${intervals.week} week${intervals.week > 1 ? 's' : ''} ago`
  } else if (intervals.day > 0) {
    return `${intervals.day} day${intervals.day > 1 ? 's' : ''} ago`
  } else if (intervals.hour > 0) {
    return `${intervals.hour} hour${intervals.hour > 1 ? 's' : ''} ago`
  } else if (intervals.minute > 0) {
    return `${intervals.minute} minute${intervals.minute > 1 ? 's' : ''} ago`
  } else {
    return `${intervals.second} second${intervals.second !== 1 ? 's' : ''} ago`
  }
}

export const formatNumber = (num: number) => {
  if (num >= 1e6) {
    return (num / 1e6).toFixed(1).replace(/\.0$/, '') + 'M'
  } else if (num >= 1e3) {
    return (num / 1e3).toFixed(0).replace(/\.0$/, '') + 'K'
  } else {
    return num.toString()
  }
}
