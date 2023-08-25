package com.example.hotelback.responses;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class CabinResponse {

    private Integer idcabin;
    private String name;
    private String capacite;
    private float price;
    private String descreption;
    private byte[] imageFile;
    private List<ReservationResponse> reservations;
}
