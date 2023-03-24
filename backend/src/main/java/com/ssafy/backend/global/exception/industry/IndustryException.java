package com.ssafy.backend.global.exception.industry;

import com.ssafy.backend.global.exception.BaseException;
import com.ssafy.backend.global.exception.BaseExceptionType;

public class IndustryException  extends BaseException {
    private final BaseExceptionType exceptionType;

    public IndustryException(BaseExceptionType exceptionType) {
        this.exceptionType = exceptionType;
    }

    @Override
    public BaseExceptionType getExceptionType() {
        return exceptionType;
    }
}
