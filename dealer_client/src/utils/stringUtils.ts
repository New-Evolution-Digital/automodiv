export const capitalize = (s: string) => {
  let retString = ''
  for (let l = 0; l < s.trim().length; l++) {
    if (l === 0) retString += s[l]?.toUpperCase()
    else if (s[l - 1] === ' ') retString += s[l]?.toUpperCase()
    else retString += s[l]
  }
  return retString
}
