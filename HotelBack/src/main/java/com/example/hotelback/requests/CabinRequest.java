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
    private String typeCabin;
    private float surface;
    private String basicFeatures;
    private String bedroomFeatures;
    private String livingRoomFeatures;
    private String kitchenFeatures;
    private String bathroomFeatures;
    private String additionalFeatures;

}
