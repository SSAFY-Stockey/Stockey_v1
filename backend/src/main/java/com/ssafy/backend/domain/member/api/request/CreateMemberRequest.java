package com.ssafy.backend.domain.member.api.request;

import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class CreateMemberRequest {
    private String name;
    private String email;
}
