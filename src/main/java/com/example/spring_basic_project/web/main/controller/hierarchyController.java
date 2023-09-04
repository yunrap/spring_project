package com.example.spring_basic_project.web.main.controller;

import com.example.spring_basic_project.web.main.entity.FoodEntity;
import com.example.spring_basic_project.web.main.repository.FoodListRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/hierarchy")
@RequiredArgsConstructor

public class hierarchyController {
    private static final Logger log = LoggerFactory.getLogger(HomeController.class);

    private final FoodListRepository foodListRepository;

    @GetMapping("/foodTableList.action")
    public ModelAndView titleDetailPage() {
        ModelAndView mav = new ModelAndView("hierarchy.foodTableList");
        log.info("Request page: foodTableList.action");
        return mav;
    }

    // foot List 조회
    @RequestMapping("/json/getFoodList.json")
    @ResponseBody
    public Map<String, Object> getFoodList(){
        log.info("Request getFoodList");
        Map<String, Object> result = new HashMap<>();

        List<FoodEntity> foodList =  foodListRepository.findAll();
        result.put("result", foodList);

        return result;
    }

}
