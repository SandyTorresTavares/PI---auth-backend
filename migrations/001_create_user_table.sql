-- Migration: Criar banco de dados e tabela de usuários

CREATE DATABASE IF NOT EXISTS registerAPI;

USE registerAPI;

CREATE TABLE IF NOT EXISTS `user` (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('professor', 'aluno') NOT NULL DEFAULT 'aluno',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);