package com.example.spring_basic_project.web.main.service;

import com.example.spring_basic_project.web.main.repository.FoodRepository;
import com.example.spring_basic_project.web.main.vo.FoodVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FoodServiceImpl implements  FoodService {

    @Autowired
    private FoodRepository foodRepository;

    @Override
    public List<FoodVo> getFoodList(){
        return foodRepository.getFoodList();
    }
}
