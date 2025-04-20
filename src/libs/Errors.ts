export enum HttpCode {
    OK = 200,
    CREATED = 201,
    NOT_MODIFIED = 304,
    BAD_RAQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    INTARNAL_SERVER_ERROR = 500,
}
export enum Massege {
    SOMETHING_WENT_WRONG = "Somenthing went wrong!",
    NO_DATA_FOUND = "No date is found!",
    CREATE_FAILED = "Create is failed!",
    UPDATE_FAILED = "Update is failed",
}

class Errors extends Error {
    public code: HttpCode;
    public massage: MessageChannel;

    constructor(statusCode: HttpCode, statusMessage: Massage) {
        super();
        this.code = statusCode;
        this.massage = statusMessage;
    }
}

export default Errors;