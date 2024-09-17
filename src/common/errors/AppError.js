class AppError extends Error {

    constructor(message, status_code) {
        super(message);
        this.status_code = status_code;
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }

}

export default AppError