export function composeActions<T1 extends object, T2 extends object>(
  actionsObject1: T1,
  actionsObject2: T2,
): T1 & T2 {
  if (process.env.NODE_ENV === 'development') {
    const actionTypes1: string[] = Object.keys(actionsObject1)
    const duplicates: string[] = []

    Object.keys(actionsObject2).forEach((key) => {
      if (actionTypes1.includes(key)) {
        duplicates.push(key)
      }
    })

    if (duplicates.length) {
      throw new Error(`Duplicate action types: ${duplicates.join(', ')}`)
    }
  }

  return {
    ...actionsObject1,
    ...actionsObject2,
  }
}
