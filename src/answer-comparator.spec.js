import answerComparator from './answer-comparator'

describe('answerComparator', () => {
  test('true if string equals other string', () => {
    const str1 = "Money"
    const str2 = "Money"
    const result = answerComparator(str1, str2)

    expect(result).toEqual(true)
  })

  test('true if string contains other string', () => {
    const str1 = "Money"
    const str2 = "Money ft. Roger Waters"
    const result = answerComparator(str1, str2)

    expect(result).toEqual(true)
  })

  test('true with spaces at beginning or end', () => {
    const str1 = "   mOnEy   "
    const str2 = "Money ft. Roger Waters"
    const result = answerComparator(str1, str2)

    expect(result).toEqual(true)
  })

  test('false if string does not equal other string', () => {
    const str1 = "Money"
    const str2 = "Cash"
    const result = answerComparator(str1, str2)

    expect(result).toEqual(false)
  })

  test('false if string is not contained in other string', () => {
    const str1 = "Money"
    const str2 = "Cash ft. Johnny Cash"
    const result = answerComparator(str1, str2)

    expect(result).toEqual(false)
  })

  test('test cases from Spotify data', () => {
    truthComparison('bank account', 'Bank Account')
    truthComparison('wild thoughts', 'Wild Thoughts')
    truthComparison('XO TOUR', 'XO TOUR Llif3')
    truthComparison('Llif3', 'XO TOUR Llif3')
    truthComparison('friends', 'Friends (with BloodPop)')
    truthComparison('Despacito', 'Despacito - Remix')
    truthComparison('bodak yellow', 'Bodak Yellow')
    truthComparison('humble', 'HUMBLE.')
    truthComparison('slippery', 'Slippery (feat. Gucci Mane)')
    truthComparison('dna', 'DNA.')
    truthComparison('2u', '2U')
  })
})

function truthComparison(str1, str2) {
  expect(answerComparator(str1, str2)).toEqual(true)
}
