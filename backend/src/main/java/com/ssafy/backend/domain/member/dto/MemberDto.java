package com.ssafy.backend.domain.member.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class MemberDto {
    private Long id;
    private String name;
    private String email;
    @Builder
    public MemberDto(Long id, String name, String email){
        this.id = id;
        this.name = name;
        this.email = email;
    }

    public void setId(Long id){
        this.id = id;
    }
}
