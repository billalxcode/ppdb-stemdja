const saveSession = (key, value) => {
    localStorage.setItem(key, value)
}

const getSession = (key) => {
    return localStorage.getItem(key)
}

const removeSession = (key) => {
    localStorage.removeItem(key)
}

export { saveSession, getSession, removeSession }