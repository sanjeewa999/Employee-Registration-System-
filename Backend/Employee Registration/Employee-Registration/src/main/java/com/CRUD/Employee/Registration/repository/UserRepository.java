package com.CRUD.Employee.Registration.repository;

import com.CRUD.Employee.Registration.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
