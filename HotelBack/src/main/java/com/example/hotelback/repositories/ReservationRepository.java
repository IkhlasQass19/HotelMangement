package com.example.hotelback.repositories;

import com.example.hotelback.Entities.Cabin;
import com.example.hotelback.Entities.Etat;
import com.example.hotelback.Entities.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReservationRepository extends JpaRepository<Reservation, Integer> {
    List<Reservation> findByCabinAndStateNot(Cabin cabin, Etat state);
    List<Reservation> findByClient_IdUser(Long idUser);
    List<Reservation> findByCabin_Idcabin(int idCabin);
    List<Reservation> findByState(Etat state);
}
