package com.example.spring_basic_project.web.main.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

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
