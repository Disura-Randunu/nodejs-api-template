export const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

export const getErrorRes = (message, status_code = null) => {
    return {
        status: false,
        message,
        status_code,
        data: null
    }
}

export const getSuccessRes = (data = null, message = "OK") => {
    return {
        status: true,
        message,
        data
    }
}
