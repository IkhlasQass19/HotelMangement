package com.example.hotelback.dto;

import com.example.hotelback.Entities.Etat;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.Date;

@Getter
@Setter
public class ReservationsDto implements Serializable {
    private Integer id_reservation;
    private Date dateDeb;
    private Date dateFin;
    private Etat state;
    private UserDto client;
    private CabinDto cabin;
}
