package com.trainee.backend.shared.errors;

import org.springframework.http.HttpStatus;

public class AppError extends RuntimeException {

    private final HttpStatus status;
    private final String code;

    public AppError(HttpStatus status, String code, String message) {
        super(message);
        this.status = status;
        this.code = code;
    }

    public HttpStatus getStatus() { return status; }
    public String getCode() { return code; }
}