package com.ssafy.backend.domain.member.entity;

import lombok.Getter;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.Instant;

@Getter
@Entity
@Table(name = "member")
public class Member {
    @ToString.Include
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id", nullable = false)
    private Long id;

    @ToString.Include
    @Size(max = 50)
    @NotNull
    @Column(name = "nickname", nullable = false, length = 50)
    private String nickname;

    @ToString.Include
    @Size(max = 2083)
    @Column(name = "image_url", length = 2083)
    private String imageUrl;

    @ToString.Include
    @Size(max = 50)
    @NotNull
    @Column(name = "oauth_type", nullable = false, length = 50)
    private String oauthType;

    @ToString.Include
    @NotNull
    @Column(name = "oauth_id", nullable = false)
    private Long oauthId;

    @ToString.Include
    @NotNull
    @Column(name = "created_at", nullable = false)
    private Instant createdAt;

    @ToString.Include
    @NotNull
    @Column(name = "updated_at", nullable = false)
    private Instant updatedAt;

}