
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
    private Integer idcabin;
    private String name;
    private  int capacite;
    private float price;
    private String descreption;
    private String type;
    private float surface;
    private String basicFeatures;
    private String bedroomFeatures;
    private String livingRoomFeatures;
    private String kitchenFeatures;
    private String bathroomFeatures;
    private String additionalFeatures;
    @JsonIgnore
    @OneToMany(mappedBy = "cabin", cascade = CascadeType.ALL)
    private List<Reservation> reservations;
    @OneToOne(mappedBy = "cabin", cascade = CascadeType.ALL)
    private ImageData imageData;


}