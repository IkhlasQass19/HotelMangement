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
    private String capacite;
    private float price;
    private String descreption;
    @JsonIgnore
    private List<Reservation> reservations;
}
