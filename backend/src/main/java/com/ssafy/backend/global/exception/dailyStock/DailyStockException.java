package com.ssafy.backend.global.exception.dailyStock;

import com.ssafy.backend.global.exception.BaseException;
import com.ssafy.backend.global.exception.BaseExceptionType;

public class DailyStockException extends BaseException {
    private final BaseExceptionType exceptionType;

    public DailyStockException(BaseExceptionType exceptionType) {
        this.exceptionType = exceptionType;
    }

    @Override
    public BaseExceptionType getExceptionType() {
        return exceptionType;
    }
}
