package com.ssafy.backend.global.jwt;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Transactional
class JwtUtilTest {
    @Autowired
    JwtUtil jwtUtil;

    /**
     * refresh 토큰이 cookie에 잘 저장 / get 되는지 테스트
     */
    @Test
    void setRefreshTokenToCookieTest(HttpServletResponse resp, HttpServletRequest req) {
        jwtUtil.setRefreshTokenToCookie("myrefreshTest");
        Cookie[] cookies = req.getCookies();
        if (cookies != null) {
            for (Cookie c : cookies) {
                if (c.getName().equals(JwtUtil.REFRESH_TOKEN_SUBJECT)) {
                    // Get the value of the "myCookie" cookie
                    String cookieValue = c.getValue();
                    System.out.println("Cookie value: " + cookieValue);
                    break;
                }
            }
//        System.out.println("refreshTokenFromCookie = " + refreshTokenFromCookie);
//        Assertions.assertThat(refreshTokenFromCookie.length()).isGreaterThan(0);
        }
    }
}