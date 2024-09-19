class AppError extends Error {
    constructor(message, status_code, print_stack = true) {
        super(message);
        this.status_code = status_code;
        this.name = this.constructor.name;
        this.print_stack = print_stack;
        Error.captureStackTrace(this, this.constructor);
    }
}

export default AppError