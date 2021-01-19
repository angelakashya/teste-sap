package com.example.projetosapapi.domain;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;

@Getter
@Setter
public class Person {

    @NotEmpty
    private String name;

    @JsonFormat(pattern = "yyyy/MM/dd")
    private LocalDate birthday;

    @NotEmpty
    private String role;

    public Person(String name, LocalDate birthday, String role) {
        this.birthday = birthday;
        this.name = name;
        this.role = role;
    }
}
