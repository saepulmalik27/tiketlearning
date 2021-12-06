export const maxTitlesLength = string => {
    if (string.length < 17) {
        return string
    } else {
        return string.slice(0, 15) + '...'
    }
}

export const validateEmail = email => {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
}

export const saveAuthToLocal = data => {
    localStorage.setItem('accessToken', data.token.access)
    localStorage.setItem('refreshToken', data.token.refresh)
    localStorage.setItem('userData', JSON.stringify(data))
}

export const fetchAuthFromLocal = () => {
    const retriveData = localStorage.getItem('userData')
    if (retriveData !== undefined) {
        return JSON.parse(retriveData)
    } else {
        return null
    }
}

export const deleteDataAuthLocal = () => {
    const retriveData = localStorage.getItem('userData')
    const accessToken = localStorage.getItem('accessToken')
    const refreshToken = localStorage.getItem('refreshToken')
    if (retriveData) {
        localStorage.removeItem('userData')
    }
    if (accessToken) {
        localStorage.removeItem('accessToken')
    }
    if (refreshToken) {
        localStorage.removeItem('refreshToken')
    }
}

export const stringToId = string => {
    return string.trim().replace(/\s/g, '_').toLowerCase()
}

export const verifyToken = token => {
    const base64Url = token.split('.')[1]
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    const jsonPayload = decodeURIComponent(
        atob(base64)
            .split('')
            .map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
            })
            .join('')
    )

    const data = JSON.parse(jsonPayload)
    const now = Math.floor(Date.now() / 1000)
    if (data.exp <= now) return { verified: false }
    return { verified: true }
}
