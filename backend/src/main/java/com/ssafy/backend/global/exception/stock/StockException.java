package com.ssafy.backend.global.exception.stock;

import com.ssafy.backend.global.exception.BaseException;
import com.ssafy.backend.global.exception.BaseExceptionType;

public class StockException extends BaseException {
    private final BaseExceptionType exceptionType;

    public StockException(BaseExceptionType exceptionType) {
        this.exceptionType = exceptionType;
    }

    @Override
    public BaseExceptionType getExceptionType() {
        return exceptionType;
    }
}
