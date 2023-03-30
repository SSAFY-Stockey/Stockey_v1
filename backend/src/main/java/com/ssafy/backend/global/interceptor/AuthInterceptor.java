package com.ssafy.backend.global.interceptor;

import com.ssafy.backend.global.annotation.Auth;
import com.ssafy.backend.global.jwt.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
@RequiredArgsConstructor
public class AuthInterceptor implements HandlerInterceptor {

    private final JwtUtil jwtUtil;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
        if (!(handler instanceof HandlerMethod)) {
            return true;
        }

        HandlerMethod method = (HandlerMethod) handler;

        // Auth 어노테이션이 없으면 true
        Auth auth = method.getMethodAnnotation(Auth.class);
        if(auth == null) {
            return true;
        }

        // JWT 토큰 입력값 인증
        String accessToken = request.getHeader("Authorization");
        jwtUtil.isValidForm(accessToken);

        // 토큰이 유효한 토큰인지 인증
        accessToken = accessToken.substring(7);
        jwtUtil.isValidToken(accessToken, "AccessToken");

        return true;
    }
}
