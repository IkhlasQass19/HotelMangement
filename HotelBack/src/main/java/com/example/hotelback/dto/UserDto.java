package com.example.hotelback.dto;

import com.example.hotelback.Entities.Reservation;
import com.example.hotelback.Entities.Role;
import com.example.hotelback.token.Token;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.List;

@Getter
@Setter
public class UserDto implements Serializable {

    private Long idUser;
    private String firstname;
    private String lastname;
    private String email;
    @JsonIgnore
    private String password;
    private String phoneNumber;
    private String adresse;
    private Role role;
    @JsonIgnore
    private List<Token> tokens;
    @JsonIgnore
    private List<Reservation> reservations ;
}
