package com.ssafy.backend.domain.favorites.entity;

import com.ssafy.backend.domain.industry.entity.Industry;
import com.ssafy.backend.domain.member.entity.Member;
import com.ssafy.backend.domain.stock.entity.Stock;
import com.ssafy.backend.temp.Keyword;
import lombok.Getter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Getter
@Entity
@Table(name = "favorite")
public class Favorite {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "favorite_id", nullable = false)
    private Long id;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "member_id", nullable = false)
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY,optional = true)
    @JoinColumn(name = "stock_id",nullable = true)
    private Stock stock;


    @ManyToOne(fetch = FetchType.LAZY, optional = true)
    @JoinColumn(name = "industry_id", nullable = true)
    private Industry industry;


    @ManyToOne(fetch = FetchType.LAZY, optional = true)
    @JoinColumn(name = "keyword_id", nullable = true)
    private Keyword keyword;

}