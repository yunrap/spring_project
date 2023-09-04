package com.example.spring_basic_project.web.main.repository;

import com.example.spring_basic_project.web.main.entity.FoodEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FoodListRepository extends JpaRepository<FoodEntity, Long>  {


}
