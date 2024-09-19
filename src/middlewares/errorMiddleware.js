import { getErrorData } from "../errors/errorUtil.js";

export function handleError(err, req, res, next) {
    const errorData = getErrorData(err)
    return res.status(errorData.status_code || 500).json({
        status: false,
        message: errorData.message || 'Internal Server Error',
        data: null
    });
}
