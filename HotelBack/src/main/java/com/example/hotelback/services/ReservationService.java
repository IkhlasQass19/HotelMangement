package com.example.hotelback.services;

import com.example.hotelback.Entities.Etat;
import com.example.hotelback.Entities.Reservation;
import com.example.hotelback.repositories.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.concurrent.TimeUnit;

@Service
public class ReservationService {
    @Autowired
    private ReservationRepository reservationRepository;

    public List<Reservation> getAllReservations() {
        return reservationRepository.findAll();
    }

    public Reservation getReservationById(int id) {
        return reservationRepository.findById(id).orElse(null);
    }

    public Reservation createReservation(Reservation reservation) {

        return reservationRepository.save(reservation);
    }

    public Reservation updateReservation(int id, Reservation reservation) {
        if (reservationRepository.existsById(id)) {
            reservation.setId_reservation(id);
            return reservationRepository.save(reservation);
        } else {
            return null;
        }
    }
    public boolean deleteReservation(int id) {
        if (reservationRepository.existsById(id)) {
            reservationRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }






    // methode for find Overlapping Reservations
    public List<Reservation> findOverlappingReservations(Reservation reservation) {
        List<Reservation> overlappingReservations = new ArrayList<>();
// etat accept and refuse
        // We retrieve all reservations for the same cabin as the canceled reservation, except those with the status "refused"
        List<Reservation> cabinReservations = reservationRepository.findByCabinAndStateNot(reservation.getCabin(), Etat.refused);

        // Check for overlapping reservations
        for (Reservation cabinReservation : cabinReservations) {
            if (overlapExists(reservation, cabinReservation)) {
                overlappingReservations.add(cabinReservation);
            }
        }

        return overlappingReservations;
    }


    // Implement logic to check if two reservations overlap
    // Compare their start and end dates
    private boolean overlapExists(Reservation r1, Reservation r2) {

        return r1.getId_reservation() != r2.getId_reservation() &&
                r1.getDateDeb().before(r2.getDateFin()) && r1.getDateFin().after(r2.getDateDeb());
    }


    public List<Reservation> getReservationByIdUser(Long idUser) {
        return reservationRepository.findByClient_IdUser(idUser);
    }

    public List<Reservation> getReservationByIdCabin(int idCabin) {
        return reservationRepository.findByCabin_Idcabin(idCabin);
    }


    public List<Reservation> getAcceptedReservations() {
        return reservationRepository.findByState(Etat.accepted);
    }

    public List<Reservation> getRefusedReservations() {
        return reservationRepository.findByState(Etat.refused);
    }

    public List<Reservation> getInProgressReservations() {
        return reservationRepository.findByState(Etat.inProgress);
    }

    public static float calculatePrice(Date startDate, Date endDate, float pricePerDay) {
        if (endDate.before(startDate)) {
            System.out.println("End date should be after start date");
            return 0; // You can handle this error condition as needed
        }

        long numDays = TimeUnit.DAYS.convert(endDate.getTime() - startDate.getTime(), TimeUnit.MILLISECONDS) + 1;
        float totalPrice = numDays * pricePerDay;
        System.out.println(totalPrice);
        return totalPrice;
    }

}
