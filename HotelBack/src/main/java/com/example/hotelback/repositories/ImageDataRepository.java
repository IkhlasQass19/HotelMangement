package com.example.hotelback.repositories;


import com.example.hotelback.Entities.Cabin;
import com.example.hotelback.Entities.ImageData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageDataRepository extends JpaRepository<ImageData, Integer> {
    boolean existsByCabin(Cabin cabin);
    ImageData getImageDataByCabin(Cabin cabin);
}
