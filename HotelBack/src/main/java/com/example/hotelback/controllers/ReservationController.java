package com.example.hotelback.controllers;

import com.example.hotelback.Entities.Cabin;
import com.example.hotelback.Entities.Reservation;
import com.example.hotelback.Entities.User;
import com.example.hotelback.dto.UserDto;
import com.example.hotelback.services.ReservationService;
import com.example.hotelback.services.UserService;
import com.example.hotelback.services.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/reservations")
public class ReservationController {
    @Autowired
    private ReservationService reservationService;
    @Autowired
    private CabinController cabinController;
    @Autowired
    private  UserService userService;

    @GetMapping("/all")
    public List<Reservation> getAllReservations() {
        return reservationService.getAllReservations();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Reservation> getReservationById(@PathVariable int id) {
        Reservation reservation = reservationService.getReservationById(id);
        if (reservation != null) {
            return ResponseEntity.ok(reservation);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
//    @PostMapping("/add")
//    public ResponseEntity<Reservation> createReservation(@RequestBody Reservation reservation) {
//        Reservation createdReservation = reservationService.createReservation(reservation);
//        return ResponseEntity.created(URI.create("/reservations/" + createdReservation.getId_reservation()))
//                .body(createdReservation);
//    }

//    @PostMapping("/add/{idCabin}/{idUser}")
//    public ResponseEntity<Reservation> createReservationWithIds(
//            @PathVariable int idCabin, @PathVariable Long idUser, @RequestBody Reservation reservation) {
//        var cabin = cabinController.getCabinById(idCabin);
//        var user = userService.getUserById(idUser);
//
//        if (cabin == null || user == null) {
//            return ResponseEntity.notFound().build();
//        }
//
//        reservation.setCabin(cabin);
//        reservation.setClient(idUser);
//
//        Reservation createdReservation = reservationService.createReservation(reservation);
//
//        if (createdReservation != null) {
//            return ResponseEntity.created(URI.create("/reservations/" + createdReservation.getId_reservation()))
//                    .body(createdReservation);
//        } else {
//            return ResponseEntity.badRequest().build();
//        }
//    }


    @PostMapping("/add/{idCabin}/{idUser}")
    public ResponseEntity<Reservation> createReservationWithIds(
            @PathVariable int idCabin, @PathVariable Long idUser, @RequestBody Reservation reservation) {
        System.out.println(idUser);
        Cabin cabin = cabinController.getCabinById(idCabin);
        UserDto userDto = userService.getUserById(idUser);

        if (cabin == null || userDto == null) {
            return ResponseEntity.notFound().build();
        }

        User user = UserServiceImpl.ConversionService.convertUserDtoToUser(userDto);

        reservation.setCabin(cabin);
        reservation.setClient(user);

        Reservation createdReservation = reservationService.createReservation(reservation);

        if (createdReservation != null) {
            return ResponseEntity.created(URI.create("/reservations/" + createdReservation.getId_reservation()))
                    .body(createdReservation);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }



    @PutMapping("/update/{id}")
    public ResponseEntity<Reservation> updateReservation(@PathVariable int id, @RequestBody Reservation reservation) {
        Reservation updatedReservation = reservationService.updateReservation(id, reservation);
        if (updatedReservation != null) {
            return ResponseEntity.ok(updatedReservation);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteReservation(@PathVariable int id) {
        if (reservationService.deleteReservation(id)) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
