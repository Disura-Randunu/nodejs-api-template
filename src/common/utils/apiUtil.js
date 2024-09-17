export const getApiErrRes = (message, status_code = null) => {
    return {
        status : false,
        message,
        status_code,
        data : null
    }
}

export const getApiOkRes = (message, data) => {
    return {
        status : true,
        message,
        data
    }
}