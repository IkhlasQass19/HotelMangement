package com.example.hotelback.services;


import com.example.hotelback.Entities.Cabin;
import com.example.hotelback.dto.CabinDto;

import java.util.List;

public interface CabinService {
    CabinDto addCabine(CabinDto cabinDto);

    List<CabinDto> getAllCabines();

    CabinDto getCabinByIdCabin(Integer idCabin);

    Cabin getCabinById(int idCabin);
}
