export const getAge = (date: Date) => {
  const birthDay = new Date(date)
  const today = new Date()
  const difference = today.getTime() - birthDay.getTime()
  const age = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
  return age
}
