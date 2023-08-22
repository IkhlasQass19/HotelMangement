
package com.example.hotelback.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Cabin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idcabin;
    private String name;
    private String capacite;
    private String image;
    private Float price;
    private String descreption;
    @JsonIgnore
    @OneToMany(mappedBy = "cabin")
    private List<Reservation> reservations;

}