package com.ssafy.backend.domain.member.mapper;

import com.ssafy.backend.domain.member.api.request.CreateMemberRequest;
import com.ssafy.backend.domain.member.api.request.UpdateMemberRequest;
import com.ssafy.backend.domain.member.api.response.CreateMemberResponse;
import com.ssafy.backend.domain.member.api.response.ReadMemberResponse;
import com.ssafy.backend.domain.member.api.response.UpdateMemberResponse;
import com.ssafy.backend.domain.member.dto.MemberDto;
import com.ssafy.backend.domain.member.entity.Member;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    MemberDto memberToMemberDto(Member member);
    ReadMemberResponse memberDtoToReadMemberResponse(MemberDto memberDto);
    MemberDto createMemberRequestToMemberDto(CreateMemberRequest createMemberRequest);

    CreateMemberResponse memberDtoToCreateMemberResponse(MemberDto response);

    UpdateMemberResponse memberDtotoUpdateMemberResponse(MemberDto response);
    MemberDto updateMemberRequestToMemberDto(UpdateMemberRequest updateMemberRequest);

    Member memberDtoToMember(MemberDto memberDto);
}
