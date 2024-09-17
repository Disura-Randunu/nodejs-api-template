const { AxiosError } = require("axios").default;
const logger = require('pino')()

const { getApiErrRes } = require("../../utils/api_util");
const { default: AppError } = require("./AppError");


const handleRouteError = (err) => {
  console.error(err)
  if (err instanceof AppError) {
    return getApiErrRes(err.message, err.status_code)
  }

  if (err instanceof AxiosError) {
    if (err.response) {
      if (err.response.data) {
        // console.error(err.response.data)
        if (err.response.data.message) {
          return getApiErrRes(err.response.data.message , err.response.status)
        }
        return getApiErrRes(err.response.data , err.response.status)
      } else {
        // console.error(err.message)
        return getApiErrRes(err.message , err.response.status)
      }
    } else {
      return getApiErrRes(err.message, 500)
    }
  }
//   console.error(err)
  return getApiErrRes("Something Went Wrong", 500)

};

module.exports = {
  handleRouteError,
}