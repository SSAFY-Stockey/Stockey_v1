package com.ssafy.backend.global.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // url 패턴
                .allowedOrigins("*") // 자원 공유 허락 Origin
                .allowedMethods("GET","POST","DELETE","PUT"); //HTTP 메소드
    }
}
