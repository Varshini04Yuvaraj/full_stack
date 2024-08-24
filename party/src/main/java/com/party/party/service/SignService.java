package com.party.party.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
// import com.backend.backend.model.Signinmodel;
// import com.backend.backend.repository.SigninRepo;
import com.party.party.model.Sign;
import com.party.party.repository.SignRepository;

import java.util.List;
import java.util.Optional;


@Service
public class SignService implements UserDetailsService{
    @Autowired
    private SignRepository userRepository;
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException
    {
        Sign user = userRepository.findByEmail(email);
        if(user!=null)
        {
            var springUser = User.withUsername(user.getEmail())
                                 .password(user.getPassword())
                                 .roles(user.getRole())
                                 .build();
            
            return springUser;
        }
        return null;
    }
    public Sign saveUser(Sign user) {
        return userRepository.save(user);
    }

    public List<Sign> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<Sign> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public boolean userExists(String email) {
        return userRepository.existsByEmail(email);
    }

    public Sign validateUser(String email, String password) {
        return userRepository.findByEmailAndPassword(email, password).orElse(null);
    }
}
// import com.party.party.model.Sign;
// import com.party.party.repository.SignRepository;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import java.util.List;
// import java.util.Optional;

// @Service
// public class SignService {

//     @Autowired
//     private SignRepository signRepository;

//     public Sign registerUser(Sign sign) {
//         return signRepository.save(sign);
//     }

//     public boolean isEmailTaken(String email) {
//         return signRepository.existsByEmail(email);
//     }

//     public Optional<Sign> getUserByEmail(String email) {
//         return signRepository.findByEmail(email);
//     }

//     public List<Sign> getAllUsers() {
//         return signRepository.findAll();
//     }
// }
