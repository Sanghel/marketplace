import React, { createContext, useContext } from 'react'

export function createSafeContext<ContextValue>() {
  const Context = createContext<ContextValue | null>(null)

  const useSafeContext = () => {
    const ctx = useContext(Context)

    if (ctx === null) {
      throw new Error(
        'useSafeContext must be used inside a Provider with a value'
      )
    }

    return ctx
  }

  function Provider(props: { value: ContextValue; children: React.ReactNode }) {
    return (
      <Context.Provider value={props.value}>{props.children}</Context.Provider>
    )
  }

  return [Provider, useSafeContext] as const
}
