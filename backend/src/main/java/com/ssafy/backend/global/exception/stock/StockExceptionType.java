package com.ssafy.backend.global.exception.stock;

import com.ssafy.backend.global.exception.BaseExceptionType;
import org.springframework.http.HttpStatus;

public enum StockExceptionType implements BaseExceptionType {

    NOT_FOUND(HttpStatus.NOT_FOUND, "해당 종목이 존재하지 않습니다.");


    private final HttpStatus httpStatus;
    private final String errorMessage;

    StockExceptionType(HttpStatus httpStatus, String errorMessage) {
        this.httpStatus = httpStatus;
        this.errorMessage = errorMessage;
    }

    @Override
    public HttpStatus getHttpStatus() {
        return this.httpStatus;
    }

    @Override
    public String getErrorMessage() {
        return this.errorMessage;
    }
}
