package com.ssafy.backend.domain.keyword.entity;

import com.ssafy.backend.domain.keyword.enums.StatisticType;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDate;

@Getter
@Entity
@Table(name = "keywords_statistic")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class KeywordStatistic {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "keywords_statistic_id", nullable = false)
    private Long id;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "keyword_id", nullable = false)
    private Keyword keyword;

    @NotNull
    @Column(name = "statistic_date", nullable = false)
    private LocalDate statisticDate;

    @NotNull
    @Column(name = "count", nullable = false)
    private Long count;

    @Column(name = "category", length = 45)
    private StatisticType category;

    @Builder
    public KeywordStatistic(Long id, Keyword keyword, LocalDate statisticDate, Long count, StatisticType category) {
        this.id = id;
        this.keyword = keyword;
        this.statisticDate = statisticDate;
        this.count = count;
        this.category = category;
    }
}
