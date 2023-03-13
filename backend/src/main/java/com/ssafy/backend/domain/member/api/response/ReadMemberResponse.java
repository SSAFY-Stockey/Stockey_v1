package com.ssafy.backend.domain.member.api.response;

import lombok.Builder;
import lombok.Getter;

@Getter
public class ReadMemberResponse {
    private final Long id;
    private final String name;
    private final String email;

    @Builder
    public ReadMemberResponse(Long id, String name, String email){
        this.id = id;
        this.name = name;
        this.email = email;
    }
}
