package com.ssafy.backend.domain.member.api;

import com.ssafy.backend.domain.member.api.request.CreateMemberRequest;
import com.ssafy.backend.domain.member.api.request.UpdateMemberRequest;
import com.ssafy.backend.domain.member.api.response.CreateMemberResponse;
import com.ssafy.backend.domain.member.api.response.ReadMemberResponse;
import com.ssafy.backend.domain.member.api.response.UpdateMemberResponse;
import com.ssafy.backend.domain.member.dto.MemberDto;
import com.ssafy.backend.domain.member.mapper.MemberMapper;
import com.ssafy.backend.domain.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/member")
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;
    private final MemberMapper memberMapper;

    @PostMapping
    public ResponseEntity<CreateMemberResponse> createMember(@RequestBody CreateMemberRequest createMemberRequest) {
        MemberDto memberDto = memberMapper.createMemberRequestToMemberDto(createMemberRequest);
        MemberDto response = memberService.createMember(memberDto);
        return ResponseEntity.ok(memberMapper.memberDtoToCreateMemberResponse(response));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ReadMemberResponse> readMember(@PathVariable("id") Long id) throws Exception{
        MemberDto member = memberService.getMember(id);
        return ResponseEntity.ok(memberMapper.memberDtoToReadMemberResponse(member));
    }

    @PutMapping("/{id}")
    public ResponseEntity<UpdateMemberResponse> updateMember(@PathVariable("id")Long id, @RequestBody UpdateMemberRequest updateMemberRequest) throws Exception {
        MemberDto memberDto = memberMapper.updateMemberRequestToMemberDto(updateMemberRequest);
        MemberDto response = memberService.updateMember(id, memberDto);
        return ResponseEntity.ok(memberMapper.memberDtotoUpdateMemberResponse(response));
    }

    @DeleteMapping("/{id}")
    public String deleteMember(@PathVariable("id")Long id){
        Boolean bool = memberService.deleteMember(id);
        if(bool) return "OK";
        return "ERROR";
    }
}
