package com.example.projetosapapi.domain;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;

@Getter
@Setter
public class Report {

    @NotEmpty
    private Person person;

    @NotEmpty
    private String title;

    @NotEmpty
    private String text;
}
