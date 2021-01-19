package com.example.projetosapapi.repository;

import com.example.projetosapapi.domain.Person;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class PersonRepository {

    public List<Person> people = new ArrayList<>();

    public List<Person> findAll() {
        return people;
    }

    public void delete(Person person) {
        people.remove(person);
    }

    public Person save(Person person) {
        people.add(person);

        return person;
    }
}
