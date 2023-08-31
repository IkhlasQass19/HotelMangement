package com.example.hotelback.services;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface StorageService {
    public String uploadImageToFileSystem(Long  idCabin, MultipartFile file) throws IOException;

    String getImageByIdCabin(Long idCabin);
    boolean deleteImageByIdCabin(Long  idCabin);
}
