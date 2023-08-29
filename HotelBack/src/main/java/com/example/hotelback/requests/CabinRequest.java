package com.example.hotelback.requests;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CabinRequest {

    private String name;
    private int capacite;
    private float price;
    private String descreption;

}
