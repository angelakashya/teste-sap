package com.example.projetosapapi.repository;

import com.example.projetosapapi.domain.Report;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class ReportRepository {

    private static List<Report> reports = new ArrayList<>();

    public List<Report> findAll() {
        return reports;
    }

    public void delete(Report report) {
        reports.remove(report);
    }

    public Report save(Report report) {
        reports.add(report);

        return report;
    }
}
