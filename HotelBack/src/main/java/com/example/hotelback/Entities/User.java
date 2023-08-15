package com.example.hotelback.Entities;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Setter
@Getter
public class User  {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long idUser;

    @Column(name = "nom")
    private String firstname;
    @Column(name = "prenom")
    private String lastname;
    @Column(name = "email", unique = true )
    private String email;
    @Column(name = "password")
    private String password;
    @Column(name = "specialite")
    private String speciality;
    @Column(name = "numTele")
    private String phoneNumber;
    @Column(name = "adresse")
    private String adresse;
    @Column(name = "diplome")
    private String diplome;



    @Enumerated(EnumType.STRING)
    private Role role;






}