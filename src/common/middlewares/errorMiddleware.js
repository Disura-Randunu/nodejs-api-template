import { handleRouteError } from "../errors/errorHandler";

export function errorHandlerMiddleware(err, req, res, next) {
    console.error(err); // Log the error for debugging purposes

    const errorData = handleRouteError(err)

    res.status(errorData.status_code || 500).json({
        status: false,
        message: errorData.message || 'Internal Server Error',
        data: null
    });
}