package com.example.hotelback.repositories;
import com.example.hotelback.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {
    Optional<User> findByEmail(String email);

    User findByIdUser(Long idUser);
}

