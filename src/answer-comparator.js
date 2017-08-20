export default function answerComparator(str1, str2) {
  str1 = str1.toLowerCase().trim()
  str2 = str2.toLowerCase().trim()

  return str2.includes(str1)
}
