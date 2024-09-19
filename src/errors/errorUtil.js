import AppError from "./AppError.js"
import axios from 'axios'

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


// const { AxiosError } = require("axios").default;
// const logger = require('pino')()

// const { getApiErrRes } = require("../../utils/api_util");
// const { default: AppError } = require("./AppError");

// const getApiErrRes = (message, status_code = null) => {
//   return {
//       status : false,
//       message,
//       status_code,
//       data : null
//   }
// }

// const handleRouteError = (err) => {
//   console.error(err)
//   if (err instanceof AppError) {
//     return getApiErrRes(err.message, err.status_code)
//   }

//   if (err instanceof AxiosError) {
//     if (err.response) {
//       if (err.response.data) {
//         // console.error(err.response.data)
//         if (err.response.data.message) {
//           return getApiErrRes(err.response.data.message , err.response.status)
//         }
//         return getApiErrRes(err.response.data , err.response.status)
//       } else {
//         // console.error(err.message)
//         return getApiErrRes(err.message , err.response.status)
//       }
//     } else {
//       return getApiErrRes(err.message, 500)
//     }
//   }
// //   console.error(err)
//   return getApiErrRes("Something Went Wrong", 500)

// };

// module.exports = {
//   handleRouteError,
// }