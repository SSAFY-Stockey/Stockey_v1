package com.ssafy.backend.temp;

import lombok.Getter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.Instant;

@Getter
@Entity
@Table(name = "chat_log")
public class ChatLog {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "chat_log_id", nullable = false)
    private Long id;

    @Lob
    @Column(name = "chat_content")
    private String chatContent;

    @NotNull
    @Column(name = "created_at", nullable = false)
    private Instant createdAt;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "chat_room_id", nullable = false)
    private ChatRoom chatRoom;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "member_id", nullable = false)
    private Member member;

}