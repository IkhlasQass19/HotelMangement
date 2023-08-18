package com.example.hotelback.services;

import com.example.hotelback.dto.UserDto;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;

public interface UserService extends UserDetailsService {
    List<UserDto> getAllUsers();

    void deleteUser(Long idUser);

    UserDto getUserById(Long idUser);
}
