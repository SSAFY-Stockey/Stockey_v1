package com.ssafy.backend.domain.member.api.response;

import lombok.Builder;
import lombok.Getter;

@Getter
public class UpdateMemberResponse {
    private final Long id;
    private final String name;
    private final String email;

    @Builder
    public UpdateMemberResponse(Long id, String name, String email){
        this.id = id;
        this.name = name;
        this.email = email;
    }
}
