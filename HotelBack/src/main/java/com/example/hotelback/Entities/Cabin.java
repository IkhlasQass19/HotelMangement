
package com.example.hotelback.Entities;

import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import jakarta.persistence.*;
import lombok.*;

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
    private String price;
    private String descreption;

    @OneToOne(mappedBy = "cabin")
    private Reservation reservation;
}