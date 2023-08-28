package com.example.hotelback.responses;

import com.example.hotelback.Entities.Etat;
import com.fasterxml.jackson.annotation.JsonIgnore;

public class OnlyDatesReservationResponse extends ReservationResponse{

    @Override
    @JsonIgnore
    public Integer getId_reservation(){
        return super.getId_reservation();
    }

    @Override
    @JsonIgnore
    public CabinResponse getCabin(){
        return super.getCabin();
    }

    @Override
    @JsonIgnore
    public UserResponseWithoutReservation getClient(){
        return super.getClient();
    }

    @Override
    @JsonIgnore
    public Etat getState(){
        return super.getState();
    }
}
