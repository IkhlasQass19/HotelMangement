package com.example.hotelback.controllers;

import com.example.hotelback.dto.UserDto;
import com.example.hotelback.responses.UserResponse;
import com.example.hotelback.services.UserService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v1/user")
public class UserController {

    @Autowired
    private UserService userService;


    @GetMapping("/allUsers")
    @PreAuthorize("hasAuthority('admin:read')")
    public ResponseEntity<List<UserResponse>> getAllUsers(){
        List<UserResponse> allUsersResponse = new ArrayList<>();
        List<UserDto> users = userService.getAllUsers();

        for(UserDto userDto : users){
            UserResponse userResponse = new UserResponse();
            BeanUtils.copyProperties(userDto,userResponse);
            allUsersResponse.add(userResponse);
        }

        return ResponseEntity.ok(allUsersResponse);
    }

    @GetMapping("/{idUser}")
    @PreAuthorize("hasAuthority('admin:read')")
    public ResponseEntity<UserResponse> getUserById(@PathVariable Long idUser){
        UserResponse userResponse = new UserResponse();
        UserDto user = userService.getUserById(idUser);

        BeanUtils.copyProperties(user,userResponse);

        return ResponseEntity.ok(userResponse);
    }

    @DeleteMapping("/{idUser}")
    @PreAuthorize("hasAuthority('admin:delete')")
    public ResponseEntity<Object> deleteUser(@PathVariable Long idUser){
        userService.deleteUser(idUser);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
