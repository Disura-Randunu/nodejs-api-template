// Country API routes goes here
const router = require("express").Router();

const { handleRouteError } = require("../../common/errors/errorHandler");
const { getApiOkRes } = require("../../common/utils/apiUtil");
const { getCountries } = require("./countryService");

router.get("/", async (req, res) => {
  try {
    const data = await getCountries();
    return res.json(getApiOkRes("Ok", data));
  } catch (error) {
    const error_data = handleRouteError(error)
    return res.status(error_data.status_code).json(getApiErrRes (error_data.message, error_data.status_code));
  }
});