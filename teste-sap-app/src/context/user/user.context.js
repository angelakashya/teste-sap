import createGlobalState from 'react-create-global-state'

const [useGlobalUser, UserProvider] = createGlobalState({})

export { useGlobalUser, UserProvider }