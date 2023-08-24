package com.example.hotelback.responses;


import com.example.hotelback.Entities.Etat;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Date;

@Getter
@Setter
public class ReservationResponse {

    private Integer id_reservation;
    private Date dateDeb;
    private Date dateFin;
    private Etat state;
    private UserResponseWithoutReservation client;
    private CabinResponse cabin;
}
