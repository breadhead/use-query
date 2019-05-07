const getPatchedMethod = (methodName: string) => {
  const originalMethod = (history as any)[methodName]

  return function(...args: any[]) {
    const originalMethodResult = originalMethod.apply(this, args)

    const event: any = new Event('routeChanges')
    event.url = window.location.href
      .replace(window.location.host, '')
      .replace(`${window.location.protocol}//`, '')

    window.dispatchEvent(event)

    return originalMethodResult
  }
}

export const patchHistoryMethod = (methodName: string) => {
  history[methodName] = getPatchedMethod(methodName)
}
