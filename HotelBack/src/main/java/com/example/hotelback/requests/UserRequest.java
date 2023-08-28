package com.example.hotelback.requests;

import jakarta.persistence.Column;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserRequest {
    private String firstname;
    private String lastname;
    private String phoneNumber;
    private String adresse;
}
