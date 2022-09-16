export const findUri = (response: string) => {
  const str = JSON.stringify(response)
  const formats = [/file:.*?.jpg/, /file:.*?.jpeg/, /file:.*?.png/]
  for (const format of formats) {
    if (str.match(format))
      return str.match(format)!.toString()
  }
  return ''
}
