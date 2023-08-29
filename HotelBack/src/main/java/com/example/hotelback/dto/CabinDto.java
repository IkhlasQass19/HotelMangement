package com.example.hotelback.dto;

import com.example.hotelback.Entities.Reservation;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.List;

@Getter
@Setter
public class CabinDto implements Serializable {
    private Integer idcabin;
    private String name;
    private int capacite;
    private float price;
    private String descreption;
    private String type;
    private float surface;
    private String basicFeatures;
    private String bedroomFeatures;
    private String livingRoomFeatures;
    private String kitchenFeatures;
    private String bathroomFeatures;
    private String additionalFeatures;
    @JsonIgnore
    private List<Reservation> reservations;
}
