package com.example.hotelback.auth;
import com.example.hotelback.Entities.Role;
import com.example.hotelback.Entities.User;
import com.example.hotelback.helpers.jwtHelper;
import com.example.hotelback.repositories.UserRepository;
import com.example.hotelback.responses.UserJwtResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/auth")

//@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService service;

    @Autowired
    public  final UserRepository userRepository;

    @PostMapping("/register")
    public Map<String, Object>  register(
            @RequestBody RegisterRequest request
    ) {
        Map<String, Object> response = new HashMap<>();
        UserJwtResponse userJwtResponse= new UserJwtResponse();

        try {
            AuthenticationResponse authResponse = service.register(request);
            String authToken = authResponse.getAccessToken();
            String refreshToken = authResponse.getRefreshToken();
            User user=authResponse.getUser();
            userJwtResponse.setAdresse(user.getAdresse());
            userJwtResponse.setIdUser(user.getIdUser());
            userJwtResponse.setRole(user.getRole());
            userJwtResponse.setEmail(user.getEmail());
            userJwtResponse.setLastname(user.getLastName());
            userJwtResponse.setFirstname(user.getFirstName());
            userJwtResponse.setPhoneNumber(user.getPhoneNumber());
            response.put("access_token", authToken);
            response.put("refresh_token", refreshToken);
            response.put("user", userJwtResponse);


        } catch (Exception e) {
            response.put("error", e.getMessage());
        }
        return response;
    }
    //    @PostMapping("/authenticate")
//    public ResponseEntity authenticate(
//            @RequestBody AuthenticationRequest request
//    ) {
//        try {
//            service.authenticate(request);
//        }catch (Exception e){
//            return ResponseEntity.badRequest().body(e.getMessage());
//        }
//        return ResponseEntity.ok("good");
//    }
    @PostMapping("/authenticate")
    public ResponseEntity<?> authenticate(
            @RequestBody AuthenticationRequest request
    ) {
        try {

            var auth = service.authenticate(request);
            String authToken = auth.getAccessToken();
            User user=auth.getUser();
            Map<String, Object> response = new HashMap<>();

            UserJwtResponse userJwtResponse= new UserJwtResponse();
            userJwtResponse.setAdresse(user.getAdresse());
            userJwtResponse.setIdUser(user.getIdUser());
            userJwtResponse.setRole(user.getRole());
            userJwtResponse.setEmail(user.getEmail());
            userJwtResponse.setLastname(user.getLastName());
            userJwtResponse.setFirstname(user.getFirstName());
            userJwtResponse.setPhoneNumber(user.getPhoneNumber());
            response.put("token", authToken);
            response.put("user",userJwtResponse);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }

    }

    @PostMapping("/refresh-token")
    public void refreshToken(
            HttpServletRequest request,
            HttpServletResponse response
    ) throws IOException {
        service.refreshToken(request, response);
    }

    @GetMapping("/Profile")
    public ResponseEntity<User> docProfile(HttpServletRequest request) {
        var email = jwtHelper.getEmail(request);
        return ResponseEntity.ok(userRepository.findByEmail(email).get());

    }


}
