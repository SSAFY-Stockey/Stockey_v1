package com.ssafy.backend.domain.member.service;

import com.ssafy.backend.domain.member.dto.MemberDto;
import com.ssafy.backend.domain.member.entity.Member;
import com.ssafy.backend.domain.member.mapper.MemberMapper;
import com.ssafy.backend.domain.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;
    private final MemberMapper memberMapper;
    public MemberDto getMember(Long id) throws Exception {
        Member member = memberRepository.findById(id).orElseThrow(()-> new Exception());
        MemberDto memberDto = memberMapper.memberToMemberDto(member);
        return memberDto;
    }

    public MemberDto createMember(MemberDto memberDto) {
        Member member = memberMapper.memberDtoToMember(memberDto);
        System.out.println(member);
        Member saveMember = memberRepository.save(member);
        return memberMapper.memberToMemberDto(saveMember);
    }

    public Boolean deleteMember(Long id) {
        try{
            boolean bool = memberRepository.existsById(id);
            if(!bool) return false;
            memberRepository.deleteById(id);
            return true;
        }catch (Exception e){
            return false;
        }
    }

    public MemberDto updateMember(Long id, MemberDto memberDto) throws Exception{
        boolean b = memberRepository.existsById(id);
        if(!b) throw new Exception();
        memberDto.setId(id);
        Member member = memberMapper.memberDtoToMember(memberDto);
        Member save = memberRepository.save(member);
        return memberMapper.memberToMemberDto(save);
    }
}
