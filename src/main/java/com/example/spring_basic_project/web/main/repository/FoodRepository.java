package com.example.spring_basic_project.web.main.repository;

import com.example.spring_basic_project.web.main.vo.FoodVo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface FoodRepository {
    List<FoodVo> getFoodList();
}
