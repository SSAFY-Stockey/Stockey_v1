package com.ssafy.backend.domain.member.service;

import com.auth0.jwt.interfaces.DecodedJWT;
import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
import com.ssafy.backend.domain.member.dto.MemberDto;
import com.ssafy.backend.domain.member.dto.OauthMemberDto;
import com.ssafy.backend.global.exception.member.AuthException;
import com.ssafy.backend.global.exception.member.AuthExceptionType;
import com.ssafy.backend.global.exception.member.MemberException;
import com.ssafy.backend.global.exception.member.MemberExceptionType;
import com.ssafy.backend.global.jwt.JwtUtil;
import com.ssafy.backend.global.redis.dto.RefreshTokenDto;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService{

    @Value("${kakaoOauth.REST_API_KEY}")
    private String rest_api_key;
    @Value("${kakaoOauth.REDIRECT_URL}")
    private String redirect_uri;
    private final JwtUtil jwtUtil;
    private final MemberService memberService;


    // oAuth access token으로 사용자 정보 가져오는 로직
    public OauthMemberDto getKakaoMemberInfo(String token) {
        String reqURL = "https://kapi.kakao.com/v2/user/me";
        //access_token을 이용하여 사용자 정보 조회
        try {
            URL url = new URL(reqURL);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();

            conn.setRequestMethod("POST");
            conn.setDoOutput(true);
            conn.setRequestProperty("Authorization", "Bearer " + token); //전송할 header 작성, access_token전송

            //결과 코드가 200이라면 성공
            int responseCode = conn.getResponseCode();
            if (responseCode != 200) {
                throw new MemberException(MemberExceptionType.OAUTH_TOKEN_ERROR);
            }

            //요청을 통해 얻은 JSON타입의 Response 메세지 읽어오기
            BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            String line = "";
            String result = "";

            while ((line = br.readLine()) != null) {
                result += line;
            }

            //Gson 라이브러리로 JSON파싱
            JsonElement element = JsonParser.parseString(result);
            long id = element.getAsJsonObject().get("id").getAsLong();

            OauthMemberDto oAuthMemberDto = OauthMemberDto.builder()
                    .id(id)
                    .build();

            br.close();

            return oAuthMemberDto;

        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

    public String getKakaoAccessToken (String code) {
        String access_Token = "";
//        String refresh_Token = "";
        String reqURL = "https://kauth.kakao.com/oauth/token";

        try {
            URL url = new URL(reqURL);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();

            //POST 요청을 위해 기본값이 false인 setDoOutput을 true로
            conn.setRequestMethod("POST");
            conn.setDoOutput(true);

            //POST 요청에 필요로 요구하는 파라미터 스트림을 통해 전송
            BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(conn.getOutputStream()));
            StringBuilder sb = new StringBuilder();
            sb.append("grant_type=authorization_code");
            sb.append("&client_id="+rest_api_key); // TODO REST_API_KEY 입력
            sb.append("&redirect_uri="+redirect_uri); // TODO 인가코드 받은 redirect_uri 입력
            sb.append("&code=" + code);
            bw.write(sb.toString());
            bw.flush();

            //결과 코드가 200이라면 성공
            int responseCode = conn.getResponseCode();
            if (responseCode != 200) {
                throw new AuthException(AuthExceptionType.INCORRECT_KAKAO_AUTH_CODE);
            }

            //요청을 통해 얻은 JSON타입의 Response 메세지 읽어오기
            BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            String line = "";
            String result = "";

            while ((line = br.readLine()) != null) {
                result += line;
            }

            //Gson 라이브러리에 포함된 클래스로 JSON파싱 객체 생성
            JsonParser parser = new JsonParser();
            JsonElement element = parser.parse(result);

            access_Token = element.getAsJsonObject().get("access_token").getAsString();
//            refresh_Token = element.getAsJsonObject().get("refresh_token").getAsString();

            br.close();
            bw.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return access_Token;
    }

    @Override
    public String createJwt(MemberDto memberDto) {
        return jwtUtil.createJwt(memberDto);
    }

    @Override
    public String tokenRefresh() {
        // refresh token 받아오기
        String refreshToken = jwtUtil.getRefreshTokenFromCookie();

        // refresh token 인증
        jwtUtil.isValidForm(refreshToken);
        refreshToken = refreshToken.substring(7);
        jwtUtil.isValidToken(refreshToken, JwtUtil.REFRESH_TOKEN_SUBJECT);

        // refresh token 에서 유저 aud값 가져오기
        DecodedJWT payload = jwtUtil.getDecodedJWT(refreshToken);
        long memberId = Long.parseLong(payload.getAudience().get(0));

        // redis에 refresh 토큰이 있는지 체크 -> 없다면 refresh token 효력 없음
        RefreshTokenDto refreshTokenDto = jwtUtil.getRefreshTokenFromRedis(refreshToken);

        if (memberId != refreshTokenDto.getMemberId()) {
            throw new MemberException(MemberExceptionType.NOT_FOUND_MEMBER);
        }

        MemberDto memberDto = memberService.getMember(memberId);
        return jwtUtil.createJwt(memberDto); // access token return
    }

    @Override
    public void logout() {
        String refreshToken = jwtUtil.getRefreshTokenFromCookie();

        // refresh token 인증
        jwtUtil.isValidForm(refreshToken);
        refreshToken = refreshToken.substring(7);
        jwtUtil.isValidToken(refreshToken, "RefreshToken");

        // redis에 저장된 refresh토큰 삭제하기
        jwtUtil.deleteRefreshToken(refreshToken);
    }

}