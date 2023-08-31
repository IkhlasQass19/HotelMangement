package com.example.hotelback.services;

import com.example.hotelback.Entities.Cabin;
import com.example.hotelback.Entities.Etat;
import com.example.hotelback.Entities.Reservation;
import com.example.hotelback.Entities.User;
import com.example.hotelback.repositories.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.*;
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
        List<Reservation> cabinReservations = reservationRepository.findByCabinAndStateNot(reservation.getCabin(),
                Etat.refused);

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








    //statistique


    // Methode pour calculer le bénéfice/mois


//    public Map<String, Float> calculateProfitPerMonth() {
//        List<Reservation> allReservations = reservationRepository.findAll();
//        Map<String, Float> profitPerMonth = new TreeMap<>();
//
//        SimpleDateFormat monthFormat = new SimpleDateFormat("MMMM", new Locale("fr", "FR"));
//
//        for (Reservation reservation : allReservations) {
//            String month = monthFormat.format(reservation.getDateDeb());
//            profitPerMonth.put(month, profitPerMonth.getOrDefault(month, 0f) + reservation.getTotalPrice());
//        }
//
//        return profitPerMonth;
//    }



    public Map<String, Float> calculateProfitPerMonth() {
        List<Reservation> allReservations = reservationRepository.findAll();
        Map<String, Float> profitPerMonth = new TreeMap<>();

        SimpleDateFormat monthFormat = new SimpleDateFormat("MMMM", new Locale("fr", "FR"));

        // Créer un ensemble de tous les mois de l'année
        Set<String> allMonths = new HashSet<>();
        allMonths.add("janvier");
        allMonths.add("février");
        allMonths.add("mars");
        allMonths.add("avril");
        allMonths.add("mai");
        allMonths.add("juin");
        allMonths.add("juillet");
        allMonths.add("août");
        allMonths.add("septembre");
        allMonths.add("octobre");
        allMonths.add("novembre");
        allMonths.add("décembre");

        // Initialiser les mois avec un bénéfice de zéro
        for (String month : allMonths) {
            profitPerMonth.put(month, 0f);
        }

        for (Reservation reservation : allReservations) {
            String month = monthFormat.format(reservation.getDateDeb());
            profitPerMonth.put(month, profitPerMonth.get(month) + reservation.getTotalPrice());
        }

        return profitPerMonth;
    }











    // Methode pour trouver la cabin la plus occuppée

    public Cabin findMostBookedCabin() {
        List<Reservation> allReservations = reservationRepository.findAll();
        Map<Cabin, Integer> cabinBookingsCount = new HashMap<>();

        for (Reservation reservation : allReservations) {
            Cabin cabin = reservation.getCabin();
            cabinBookingsCount.put(cabin, cabinBookingsCount.getOrDefault(cabin, 0) + 1);
        }

        return Collections.max(cabinBookingsCount.entrySet(), Map.Entry.comparingByValue()).getKey();
    }



//    public List<Map.Entry<Cabin, Float>> findMostBookedCabinsWithPercentage(int topCount) {
//        List<Reservation> allReservations = reservationRepository.findAll();
//        Map<Cabin, Integer> cabinBookingsCount = new HashMap<>();
//
//        for (Reservation reservation : allReservations) {
//            Cabin cabin = reservation.getCabin();
//            cabinBookingsCount.put(cabin, cabinBookingsCount.getOrDefault(cabin, 0) + 1);
//        }
//
//        List<Map.Entry<Cabin, Integer>> sortedEntries = new ArrayList<>(cabinBookingsCount.entrySet());
//        sortedEntries.sort(Map.Entry.<Cabin, Integer>comparingByValue().reversed());
//
//        int totalBookings = allReservations.size();
//
//        List<Map.Entry<Cabin, Float>> topCabinsWithPercentage = new ArrayList<>();
//        for (int i = 0; i < Math.min(topCount, sortedEntries.size()); i++) {
//            Map.Entry<Cabin, Integer> entry = sortedEntries.get(i);
//            Cabin cabin = entry.getKey();
//            int bookingsCount = entry.getValue();
//            float percentage = (bookingsCount / (float) totalBookings) * 100;
//
//            topCabinsWithPercentage.add(Map.entry(cabin, percentage));
//        }
//
//        return topCabinsWithPercentage;
//    }


    // Methode pour trouver uer qui réserve le plus

    public User findMostActiveClient() {
        List<Reservation> allReservations = reservationRepository.findAll();
        Map<User, Integer> clientReservationsCount = new HashMap<>();

        for (Reservation reservation : allReservations) {
            User client = reservation.getClient();
            clientReservationsCount.put(client, clientReservationsCount.getOrDefault(client, 0) + 1);
        }

        return Collections.max(clientReservationsCount.entrySet(), Map.Entry.comparingByValue()).getKey();
    }



//    public List<Map.Entry<User, Float>> findMostActiveClientsWithPercentage(int topCount) {
//        List<Reservation> allReservations = reservationRepository.findAll();
//        Map<User, Integer> clientReservationsCount = new HashMap<>();
//
//        for (Reservation reservation : allReservations) {
//            User client = reservation.getClient();
//            clientReservationsCount.put(client, clientReservationsCount.getOrDefault(client, 0) + 1);
//        }
//
//        // Créer une liste triée des entrées de clientReservationsCount
//        List<Map.Entry<User, Integer>> sortedEntries = new ArrayList<>(clientReservationsCount.entrySet());
//        sortedEntries.sort(Map.Entry.<User, Integer>comparingByValue().reversed());
//
//        // Calculer le nombre total de réservations
//        int totalReservations = allReservations.size();
//
//        // Calculer le pourcentage de réservations pour chaque utilisateur
//        List<Map.Entry<User, Float>> topClientsWithPercentage = new ArrayList<>();
//        for (int i = 0; i < Math.min(topCount, sortedEntries.size()); i++) {
//            Map.Entry<User, Integer> entry = sortedEntries.get(i);
//            User client = entry.getKey();
//            int reservationsCount = entry.getValue();
//            float percentage = (reservationsCount / (float) totalReservations) * 100;
//
//            topClientsWithPercentage.add(Map.entry(client, percentage));
//        }
//
//        return topClientsWithPercentage;
//    }




}
