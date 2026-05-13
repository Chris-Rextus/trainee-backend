package com.trainee.backend.shared.errors;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.Instant;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(AppError.class)
    public ResponseEntity<Map<String, Object>> handleAppError(AppError ex) {
        return ResponseEntity.status(ex.getStatus()).body(Map.of(
                "status", ex.getStatus().value(),
                "code", ex.getCode(),
                "message", ex.getMessage(),
                "timestamp", Instant.now().toString()
        ));
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Map<String, Object>> handleGeneric(Exception ex) {
        return ResponseEntity.internalServerError().body(Map.of(
                "status", 500,
                "code", "INTERNAL_ERROR",
                "message", "An unexpected error occurred",
                "timestamp", Instant.now().toString()
        ));
    }
}