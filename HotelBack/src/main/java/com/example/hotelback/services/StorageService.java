package com.example.hotelback.services;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface StorageService {
    public String uploadImageToFileSystem(Integer idCabin, MultipartFile file) throws IOException;

    String getImageByIdCabin(Integer idCabin);
}
