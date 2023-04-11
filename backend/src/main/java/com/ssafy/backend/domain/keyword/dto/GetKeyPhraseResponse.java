package com.ssafy.backend.domain.keyword.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Data
public class GetKeyPhraseResponse {
    private List<Message> messages;

    @Getter
    @Setter
    @JsonPropertyOrder({"keyPhrase", "news"})
    public static class Message {
        @JsonProperty("key_phrase")
        private String keyPhrase;
        private List<News> news;
    }


    @Getter
    @Setter
    public static class News {
        private String title;
        private String url;
        private String date;
    }
}