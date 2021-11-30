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

export const saveDataToLocal = data => {
    localStorage.setItem('accessToken', data.token.access)
    localStorage.setItem('refreshToken', data.token.refresh)
    localStorage.setItem('userData', JSON.stringify(data))
}

export const fetchDataFromLocal = data => {
    const retriveData = localStorage.getItem('userData')
    if (retriveData !== undefined) {
        return JSON.parse(retriveData)
    } else {
        return null
    }
}
