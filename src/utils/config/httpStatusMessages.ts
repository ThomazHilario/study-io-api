import { HttpStatus } from "@nestjs/common";

export const HttpStatusMessages: Record<HttpStatus, { message: string; description: string }> = {
    [HttpStatus.OK]: {
        message: "Success",
        description: "The request was successful."
    },
    [HttpStatus.CREATED]: {
        message: "Created",
        description: "The request was successful and a new resource was created."
    },
    [HttpStatus.ACCEPTED]: {
        message: "Accepted",
        description: "The request was accepted but not yet processed."
    },
    [HttpStatus.NO_CONTENT]: {
        message: "No Content",
        description: "The request was successful but there is no content to return."
    },
    [HttpStatus.BAD_REQUEST]: {
        message: "Bad Request",
        description: "The request was invalid or cannot be processed."
    },
    [HttpStatus.UNAUTHORIZED]: {
        message: "Unauthorized",
        description: "The request requires user authentication."
    },
    [HttpStatus.FORBIDDEN]: {
        message: "Forbidden",
        description: "The server understood the request but refuses to fulfill it."
    },
    [HttpStatus.NOT_FOUND]: {
        message: "Not Found",
        description: "The requested resource could not be found."
    },
    [HttpStatus.INTERNAL_SERVER_ERROR]: {
        message: "Internal Server Error",
        description: "An unexpected error occurred on the server.",
    },
    [HttpStatus.CONTINUE]: {
        message: "",
        description: ""
    },
    [HttpStatus.SWITCHING_PROTOCOLS]: {
        message: "",
        description: ""
    },
    [HttpStatus.PROCESSING]: {
        message: "",
        description: ""
    },
    [HttpStatus.EARLYHINTS]: {
        message: "",
        description: ""
    },
    [HttpStatus.NON_AUTHORITATIVE_INFORMATION]: {
        message: "",
        description: ""
    },
    [HttpStatus.RESET_CONTENT]: {
        message: "",
        description: ""
    },
    [HttpStatus.PARTIAL_CONTENT]: {
        message: "",
        description: ""
    },
    [HttpStatus.AMBIGUOUS]: {
        message: "",
        description: ""
    },
    [HttpStatus.MOVED_PERMANENTLY]: {
        message: "",
        description: ""
    },
    [HttpStatus.FOUND]: {
        message: "",
        description: ""
    },
    [HttpStatus.SEE_OTHER]: {
        message: "",
        description: ""
    },
    [HttpStatus.NOT_MODIFIED]: {
        message: "",
        description: ""
    },
    [HttpStatus.TEMPORARY_REDIRECT]: {
        message: "",
        description: ""
    },
    [HttpStatus.PERMANENT_REDIRECT]: {
        message: "",
        description: ""
    },
    [HttpStatus.PAYMENT_REQUIRED]: {
        message: "",
        description: ""
    },
    [HttpStatus.METHOD_NOT_ALLOWED]: {
        message: "",
        description: ""
    },
    [HttpStatus.NOT_ACCEPTABLE]: {
        message: "",
        description: ""
    },
    [HttpStatus.PROXY_AUTHENTICATION_REQUIRED]: {
        message: "",
        description: ""
    },
    [HttpStatus.REQUEST_TIMEOUT]: {
        message: "",
        description: ""
    },
    [HttpStatus.CONFLICT]: {
        message: "",
        description: ""
    },
    [HttpStatus.GONE]: {
        message: "",
        description: ""
    },
    [HttpStatus.LENGTH_REQUIRED]: {
        message: "",
        description: ""
    },
    [HttpStatus.PRECONDITION_FAILED]: {
        message: "",
        description: ""
    },
    [HttpStatus.PAYLOAD_TOO_LARGE]: {
        message: "",
        description: ""
    },
    [HttpStatus.URI_TOO_LONG]: {
        message: "",
        description: ""
    },
    [HttpStatus.UNSUPPORTED_MEDIA_TYPE]: {
        message: "",
        description: ""
    },
    [HttpStatus.REQUESTED_RANGE_NOT_SATISFIABLE]: {
        message: "",
        description: ""
    },
    [HttpStatus.EXPECTATION_FAILED]: {
        message: "",
        description: ""
    },
    [HttpStatus.I_AM_A_TEAPOT]: {
        message: "",
        description: ""
    },
    [HttpStatus.MISDIRECTED]: {
        message: "",
        description: ""
    },
    [HttpStatus.UNPROCESSABLE_ENTITY]: {
        message: "",
        description: ""
    },
    [HttpStatus.FAILED_DEPENDENCY]: {
        message: "",
        description: ""
    },
    [HttpStatus.PRECONDITION_REQUIRED]: {
        message: "",
        description: ""
    },
    [HttpStatus.TOO_MANY_REQUESTS]: {
        message: "",
        description: ""
    },
    [HttpStatus.NOT_IMPLEMENTED]: {
        message: "",
        description: ""
    },
    [HttpStatus.BAD_GATEWAY]: {
        message: "",
        description: ""
    },
    [HttpStatus.SERVICE_UNAVAILABLE]: {
        message: "",
        description: ""
    },
    [HttpStatus.GATEWAY_TIMEOUT]: {
        message: "",
        description: ""
    },
    [HttpStatus.HTTP_VERSION_NOT_SUPPORTED]: {
        message: "",
        description: ""
    }
};  