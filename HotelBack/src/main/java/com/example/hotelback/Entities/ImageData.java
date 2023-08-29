package com.example.hotelback.Entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity(name = "imageData")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class ImageData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer imageId;
    private String name;
    @Column(name = "create_date")
    @Temporal(TemporalType.TIMESTAMP)
    private Date createDate;
    private String type;
    private String imgPath;

    @OneToOne(targetEntity = Cabin.class, fetch = FetchType.EAGER)
    @JoinColumn(nullable = false, name = "idcabin")
    private Cabin cabin;


    @PrePersist
    protected void onCreate(){
        createDate = new Date();
    }
}
