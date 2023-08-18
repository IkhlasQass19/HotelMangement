package com.example.hotelback.services.impl;

import com.example.hotelback.Entities.User;
import com.example.hotelback.dto.UserDto;
import com.example.hotelback.repositories.UserRepository;
import com.example.hotelback.services.UserService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    UserRepository userRepository;
    @Override
    public List<UserDto> getAllUsers() {
        List<UserDto> userDtoList = new ArrayList<>();
        List<User> userEntityList =new ArrayList<>();
        userRepository.findAll().forEach(userEntityList::add);

        for(User userEntity: userEntityList){
            UserDto userDto = new UserDto();
            BeanUtils.copyProperties(userEntity,userDto);

            /*userEntity.setOffers(null);
            UserDto userWithoutOffer = new UserDto();
            BeanUtils.copyProperties(userEntity,userWithoutOffer);

            List<OfferDto> offerDtoList = userDto.getOffers();
            for(int i = 0; i < offerDtoList.size(); i++){
                offerDtoList.get(i).setUsers(null);
                offerDtoList.get(i).setUser(userWithoutOffer);
            }

            userDto.setOffers(offerDtoList);*/

            userDtoList.add(userDto);
        }

        return userDtoList;
    }

    @Override
    public UserDto getUserById(Long idUser) {
        User userEntity = userRepository.findByIdUser(idUser);
        UserDto user = new UserDto();
        if(userEntity == null) throw new UsernameNotFoundException(userEntity.getUsername());
        BeanUtils.copyProperties(userEntity,user);
        return user;
    }

    @Override
    public void deleteUser(Long idUser) {
        User userEntity = userRepository.findByIdUser(idUser);
        if(userEntity == null) throw new UsernameNotFoundException(userEntity.getUsername());
        userRepository.delete(userEntity);
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return null;
    }
}
