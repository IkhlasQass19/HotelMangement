package com.example.hotelback.responses;

import com.example.hotelback.Entities.Reservation;
import com.example.hotelback.Entities.Role;
import com.example.hotelback.token.Token;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class UserResponse {

    private Long idUser;
    private String firstname;
    private String lastname;
    private String email;
    private String phoneNumber;
    private String adresse;
    private Role role;
    private List<ReservationResponse> reservations ;
}
