package com.example.hotelback.responses;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.List;

public class CabinResponseWithoutResrvation extends CabinResponse{
    @Override
    @JsonIgnore
    public List<ReservationResponse> getReservations(){
        return super.getReservations();
    }
}
