export function deepCamelCaseKeys(obj: Record<string, any>): Record<string, any> {
  if (Array.isArray(obj)) {
    return obj.map(deepCamelCaseKeys)
  } else if (typeof obj === 'object' && obj !== null) {
    return Object.keys(obj).reduce((acc: Record<string, any>, key: string) => {
      const camelCaseKey = key.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase())
      acc[camelCaseKey] = deepCamelCaseKeys(obj[key])
      return acc
    }, {})
  }
  return obj
}
