package com.ssafy.backend.domain.member.api.request;

import lombok.Getter;

@Getter
public class UpdateMemberRequest {
    private String name;
    private String email;
}
