export const splitTextRandomly = (
  text: string,
  minWords: number,
  maxWords: number
) => {
  const words = text.split(" ").filter((word) => word.trim() !== "") // Clean extra spaces
  const result = []
  while (words.length > 0) {
    const wordCount = Math.min(
      Math.floor(Math.random() * (maxWords - minWords + 1)) + minWords,
      words.length // Ensure we don't exceed remaining words
    )
    result.push(words.splice(0, wordCount).join(" "))
  }
  return result
}
