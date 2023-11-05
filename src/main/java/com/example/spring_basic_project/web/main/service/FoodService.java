package com.example.spring_basic_project.web.main.service;

import com.example.spring_basic_project.web.main.vo.FoodVo;
import org.springframework.stereotype.Service;

import java.util.List;

public interface FoodService {
     public List<FoodVo> getFoodList();
}
