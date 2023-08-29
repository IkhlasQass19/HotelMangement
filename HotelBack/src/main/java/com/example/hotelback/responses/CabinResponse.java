package com.example.hotelback.responses;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class CabinResponse {

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
    private byte[] imageFile;
    private List<ReservationResponse> reservations;
}
