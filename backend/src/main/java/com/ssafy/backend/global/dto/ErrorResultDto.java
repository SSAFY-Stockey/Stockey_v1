package com.ssafy.backend.global.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ErrorResultDto {
    String field;
    String message;
}