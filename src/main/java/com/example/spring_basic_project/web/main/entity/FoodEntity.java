package com.example.spring_basic_project.web.main.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Setter
@Getter
@Table(name = "food_entity")
@ToString
@NoArgsConstructor
public class FoodEntity {
    @Id
    @Column(name ="food_id")
    private String foodId;

    @Column(name ="food_name")
    private String foodName;


}
