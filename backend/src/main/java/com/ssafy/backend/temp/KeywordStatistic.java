package com.ssafy.backend.temp;

import com.ssafy.backend.domain.keyword.entity.Keyword;
import lombok.Getter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDate;

@Getter
@Entity
@Table(name = "keyword_statistic")
public class KeywordStatistic {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "keyword_statistic_id", nullable = false)
    private Long id;

    @NotNull
    @Column(name = "statistic_date", nullable = false)
    private LocalDate statisticDate;

    @NotNull
    @Column(name = "count", nullable = false)
    private Long count;

    @Size(max = 45)
    @Column(name = "category", length = 45)
    private String category;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "keyword_id", nullable = false)
    private Keyword keyword;

}