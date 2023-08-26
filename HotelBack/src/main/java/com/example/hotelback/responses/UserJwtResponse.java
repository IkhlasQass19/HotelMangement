package com.example.hotelback.responses;

import com.example.hotelback.Entities.Role;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserJwtResponse {

        private Long idUser;
        private String firstname;
        private String lastname;
        private String email;
        private String phoneNumber;
        private String adresse;
        private Role role;



}
