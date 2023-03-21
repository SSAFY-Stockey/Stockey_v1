package com.ssafy.backend.temp;

import lombok.Getter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Getter
@Entity
@Table(name = "quest")
public class Quest {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "quest_id", nullable = false)
    private Long id;

    @NotNull
    @Column(name = "quest_date", nullable = false)
    private LocalDate questDate;

    @Column(name = "completion", columnDefinition = "INT UNSIGNED not null")
    private Long completion;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "member_id", nullable = false)
    private Member member;

}