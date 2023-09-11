import getTimeAgo from './timeago'

describe('timeago', () => {
  const currentDate = new Date('2021-03-01T10:00:00Z')
  it.each([
    ['seconds ago (negative)', '2021-03-01T10:00:44Z', 'seconds ago'],
    ['seconds ago', '2021-03-01T09:59:30Z', '30 seconds ago'],
    ['minutes ago singular', '2021-03-01T09:59:00Z', '1 minute ago'],
    ['minutes ago plural', '2021-03-01T09:30:00Z', '30 minutes ago'],
    ['hours ago singular', '2021-03-01T09:00:00Z', '1 hour ago'],
    ['hours ago plural', '2021-03-01T07:00:00Z', '3 hours ago'],
    ['days ago singular', '2021-02-28T10:00:00Z', '1 day ago'],
    ['days ago plural', '2021-02-26T10:00:00Z', '3 days ago'],
    ['months ago', '2021-01-26T10:00:00Z', '1 month ago'],
    ['years ago', '2020-02-26T10:00:00Z', '1 year ago']
  ])('returns %s', (_, date, expected) => {
    expect(getTimeAgo(date, currentDate)).toStrictEqual(expected)
  })
})