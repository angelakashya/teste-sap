package com.example.projetosapapi.controller.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Data
@Getter
@Setter
public class PersonResponse {

    private String name;

    @JsonFormat(pattern = "yyyy/MM/dd")
    private LocalDate birthday;

    private String role;
}
