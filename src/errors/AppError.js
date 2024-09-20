import axios from 'axios'

export default class AppError extends Error {
    constructor(message, status_code, print_stack = true) {
        super(message);
        this.status_code = status_code;
        this.name = this.constructor.name;
        this.print_stack = print_stack;
        Error.captureStackTrace(this, this.constructor);
    }
}

const getApiErrRes = (message, status_code = null, print_stack = true) => {
    return {
        status: false,
        message,
        status_code,
        data: null,
        print_stack: print_stack
    }
}

export const getErrorData = (err) => {
    if (err instanceof AppError) {
        return getApiErrRes(err.message, err.status_code, err.print_stack)
    }
    if (axios.isAxiosError(err)) {
        if (err.response) {
            if (err.response.data) {
                if (err.response.data.message) {
                    return getApiErrRes(err.response.data.message, err.response.status)
                }
                return getApiErrRes(err.response.data, err.response.status)
            } else {
                return getApiErrRes(err.message, err.response.status)
            }
        } else {
            return getApiErrRes(err.message, 500)
        }
    }
    return getApiErrRes("Something Went Wrong", 500)
}
