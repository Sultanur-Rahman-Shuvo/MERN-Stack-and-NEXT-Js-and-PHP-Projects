-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 19, 2024 at 10:54 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbshuvo`
--

-- --------------------------------------------------------

--
-- Table structure for table `phptrip`
--

CREATE TABLE `phptrip` (
  `Name` varchar(11) NOT NULL,
  `Age` int(11) NOT NULL,
  `City` varchar(11) NOT NULL,
  `Gender` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `phptrip`
--

INSERT INTO `phptrip` (`Name`, `Age`, `City`, `Gender`) VALUES
('Shuvo', 12, 'Dinajpur', 'Male'),
('Arif', 10, 'Shatkhira', 'Male'),
('Afia', 9, 'Jesore', 'Female'),
('Monser', 11, 'Tangail', 'Male'),
('Rafid', 12, 'Russia', 'Male'),
('Ronggon', 12, 'Rajshahi', 'Male');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
