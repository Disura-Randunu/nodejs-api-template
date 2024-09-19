export const getApiErrRes = (message, status_code = null) => {
    return {
        status: false,
        message,
        status_code,
        data: null
    }
}

export const getApiOkRes = (message, data) => {
    return {
        status: true,
        message,
        data
    }
}

export function asyncHandler(fn) {
    return async (req, res, next) => {
        try {
            const data = await fn(req, res);
            return res.json({ data });
        } catch (err) {
            return next(err);
        }
    };
}

export function syncHandler(fn) {
    return async (req, res, next) => {
        try {
            const data = await fn(req, res);
            return res.json({ data });
        } catch (err) {
            return next(err);
        }
    };
}