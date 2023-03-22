package com.ssafy.backend.domain.industry.api;

import com.ssafy.backend.domain.industry.dto.IndustryDto;
import com.ssafy.backend.domain.industry.service.IndustryService;
import com.ssafy.backend.global.dto.ResponseDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@Slf4j
@RequestMapping("/industry")
@RequiredArgsConstructor
public class IndustryController {
    private final IndustryService industryService;




    @GetMapping
    public ResponseEntity<ResponseDto> getAll(){
        List<IndustryDto> all = industryService.getAll();
        return new ResponseEntity<>( new ResponseDto("OK",all), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ResponseDto> getOne(@PathVariable  Long id ){
        IndustryDto one = industryService.getOne(id);
        return new ResponseEntity<>( new ResponseDto("OK",one), HttpStatus.OK);
    }


    // TODO 주식 구현시 진행
//    @GetMapping("/stocklist/{id}")
//    public ResponseEntity<ResponseDto>  getStockList(@PathVariable Long id){
//        industryService.getStockList(id);
//    }
    
    // 관심 산업 구분
//    @GetMapping("/stock")








}
