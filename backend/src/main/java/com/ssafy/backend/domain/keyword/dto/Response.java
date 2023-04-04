package com.ssafy.backend.domain.keyword.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import lombok.Data;

import java.util.List;

@Data
public class Response {
    private List<Message> messages;

    @JsonPropertyOrder({"keyPhrase", "news"})
    public static class Message {
        @JsonProperty("key_phrase")
        private String keyPhrase;
        private List<News> news;

        public String getKeyPhrase() {
            return keyPhrase;
        }

        public void setKeyPhrase(String keyPhrase) {
            this.keyPhrase = keyPhrase;
        }

        public List<News> getNews() {
            return news;
        }

        public void setNews(List<News> news) {
            this.news = news;
        }
    }

    public static class News {
        private String title;
        private String url;
        private String date;

        public String getTitle() {
            return title;
        }

        public void setTitle(String title) {
            this.title = title;
        }

        public String getUrl() {
            return url;
        }

        public void setUrl(String url) {
            this.url = url;
        }

        public String getDate() {
            return date;
        }

        public void setDate(String date) {
            this.date = date;
        }
    }
}