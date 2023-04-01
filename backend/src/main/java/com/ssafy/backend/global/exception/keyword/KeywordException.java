package com.ssafy.backend.global.exception.keyword;

import com.ssafy.backend.global.exception.BaseException;
import com.ssafy.backend.global.exception.BaseExceptionType;

public class KeywordException extends BaseException {
    private final BaseExceptionType exceptionType;

    public KeywordException(BaseExceptionType exceptionType) {
        this.exceptionType = exceptionType;
    }

    @Override
    public BaseExceptionType getExceptionType() {
        return exceptionType;
    }
}
