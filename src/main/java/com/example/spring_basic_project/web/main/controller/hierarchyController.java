package com.example.spring_basic_project.web.main.controller;
import com.example.spring_basic_project.web.main.service.FoodService;
import com.example.spring_basic_project.web.main.vo.FoodVo;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@RestController
@RequestMapping("/hierarchy")
@RequiredArgsConstructor

public class hierarchyController {
    private static final Logger log = LoggerFactory.getLogger(HomeController.class);

    @Autowired
    private FoodService foodService;

    @GetMapping("/foodTableList.action")
    public ModelAndView titleDetailPage() {
        ModelAndView mav = new ModelAndView("hierarchy.foodTableList");
        log.info("Request page: foodTableList.action");
        return mav;
    }

    @RequestMapping("/getFoodList")
    public void getFoodList() {
        List<FoodVo> foodVoList = foodService.getFoodList();
        System.out.println(foodVoList + "데이터확인");
    }


}
