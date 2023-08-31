package com.example.hotelback.repositories;
import com.example.hotelback.Entities.Cabin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CabinRepository extends JpaRepository<Cabin,Long> {

    Cabin findByIdcabin(Long idcabin);
}

