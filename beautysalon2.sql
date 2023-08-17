-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Aug 17, 2023 at 05:53 PM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `beautysalon`
--

-- --------------------------------------------------------

--
-- Table structure for table `appointment`
--

DROP TABLE IF EXISTS `appointment`;
CREATE TABLE IF NOT EXISTS `appointment` (
  `AppointmentID` int NOT NULL AUTO_INCREMENT,
  `AppointmentDateTime` datetime NOT NULL,
  `CustomerID` int DEFAULT NULL,
  `ServiceID` int NOT NULL,
  `EmployeeID` int NOT NULL,
  `available` smallint NOT NULL,
  PRIMARY KEY (`AppointmentID`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `appointment`
--

INSERT INTO `appointment` (`AppointmentID`, `AppointmentDateTime`, `CustomerID`, `ServiceID`, `EmployeeID`, `available`) VALUES
(1, '2023-10-22 11:00:00', 10, 1, 6, 0),
(2, '2023-08-23 12:00:00', 11, 3, 6, 0),
(3, '2023-09-13 14:00:00', 12, 21, 7, 0),
(4, '2023-08-26 14:00:00', 13, 41, 9, 0),
(5, '2023-11-15 15:00:00', 14, 24, 7, 0),
(6, '2023-11-01 10:00:00', 15, 31, 8, 0),
(7, '2023-08-23 15:00:00', 16, 31, 8, 0),
(8, '2023-08-31 12:00:00', 17, 43, 9, 0),
(9, '2023-08-29 14:00:00', 10, 4, 6, 1);

-- --------------------------------------------------------

--
-- Table structure for table `salonservice`
--

DROP TABLE IF EXISTS `salonservice`;
CREATE TABLE IF NOT EXISTS `salonservice` (
  `ServiceID` int NOT NULL AUTO_INCREMENT,
  `ServiceName` varchar(30) NOT NULL,
  `ServiceDuration` int NOT NULL,
  `ServicePrice` int NOT NULL,
  `ServiceMaterials` varchar(300) NOT NULL,
  `ServiceDescription` varchar(500) NOT NULL,
  PRIMARY KEY (`ServiceID`)
) ENGINE=MyISAM AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `salonservice`
--

INSERT INTO `salonservice` (`ServiceID`, `ServiceName`, `ServiceDuration`, `ServicePrice`, `ServiceMaterials`, `ServiceDescription`) VALUES
(1, 'Manikir', 30, 1000, 'Manikir makaze/cangle, nastavci za aparatni manikir, turpija', 'skracivanje i oblikovanje noktiju uz sredjivanje zanoktica'),
(2, 'Manikir sa gellakom', 90, 2000, 'Manikir makaze/cangle, nastavci za aparatni manikir, turpija, gellak + boja', 'ojacavanje prirodnih noktiju gellakom'),
(3, 'Pedikir', 45, 3000, 'Cangle, nastavci za aparatni pedikir, turpija', 'Ruski pedikir profidiskom bez gellaka'),
(4, 'Pedikir sa gellakom', 90, 4000, 'Cangle, nastavci za aparatni pedikir, turpija', 'Ruski pedikir profidiskom sa gellakom'),
(21, 'Relax masaza', 30, 1500, 'Ulje za masazu', 'Masaza za opustanje sa sertifikovanim fizioterapeutom'),
(22, 'Relax masaza', 45, 2000, 'Ulje za masazu', 'Masaza za opustanje sa sertifikovanim fizioterapeutom'),
(23, 'Relax masaza', 60, 3000, 'Ulje za masazu', 'Masaza za opustanje sa sertifikovanim fizioterapeutom'),
(24, 'Sportska masaza', 30, 2000, 'Ulje za masazu, sportska krema, aparatura ', 'Masaza namenjena lecnenju sportskih povreda sa sertifikovanim fizioterapeutom'),
(25, 'Sportska masaza', 45, 3000, 'Ulje za masazu, sportska krema, aparatura ', 'Masaza namenjena lecnenju sportskih povreda sa sertifikovanim fizioterapeutom'),
(26, 'Sportska masaza', 60, 4000, 'Ulje za masazu, sportska krema, aparatura ', 'Masaza namenjena lecnenju sportskih povreda sa sertifikovanim fizioterapeutom'),
(31, 'Sminkanje', 60, 4000, 'Puder, senke, maskara, trepavice, karmini, rumenila, bronzeri', 'Sminka za sve prilike'),
(41, 'Feniranje', 30, 1000, 'Cetka, Fen, Sampon, Regenerator', 'Feniranje i pranje kose'),
(42, 'Sisanje + Feniranje', 60, 3000, 'Cetka, Fen, Sampon, Regenerator, Makaze', 'Sisanje,feniranje i pranje kose'),
(43, 'Frizura', 30, 2000, 'Cetka, Fen, Sampon, Regenerator, Snalice', 'Pravljenje frizure po izboru (30 min)'),
(44, 'Frizura', 60, 2000, 'Cetka, Fen, Sampon, Regenerator', 'Pravljenje frizure po izboru (60min)');

-- --------------------------------------------------------

--
-- Table structure for table `serviceassignment`
--

DROP TABLE IF EXISTS `serviceassignment`;
CREATE TABLE IF NOT EXISTS `serviceassignment` (
  `serviceID` int NOT NULL,
  `employeeID` int NOT NULL,
  UNIQUE KEY `serviceID` (`serviceID`,`employeeID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `serviceassignment`
--

INSERT INTO `serviceassignment` (`serviceID`, `employeeID`) VALUES
(1, 6),
(2, 6),
(3, 6),
(4, 6),
(21, 7),
(22, 7),
(23, 7),
(24, 7),
(25, 8),
(26, 8),
(31, 8),
(41, 9),
(42, 9),
(43, 9),
(44, 9);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `UserID` int NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `LastName` varchar(30) COLLATE utf8mb4_general_ci NOT NULL,
  `PhoneNumber` varchar(15) COLLATE utf8mb4_general_ci NOT NULL,
  `Username` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `pass` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `roleID` smallint NOT NULL,
  PRIMARY KEY (`UserID`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`UserID`, `FirstName`, `LastName`, `PhoneNumber`, `Username`, `pass`, `email`, `roleID`) VALUES
(1, 'Kristina', 'Mojsic', '06060606', 'kristina.mojsic', '8155fefcc7588d84f7dc1d200267dbd7439e66f3', 'kristina@gmail.com', 1),
(2, 'Andjela', 'Stanojevic', '06060606', 'andjela.stanojevic', '78b9ffc465a05deee3bdda787b991f205632e816', 'andjela@gmail.com', 1),
(3, 'Ivana', 'Djokanovic', '06060606', 'ivana.djokanovic', 'da39a3ee5e6b4b0d3255bfef95601890afd80709', 'ivana@gmail.com', 1),
(4, 'Ana', 'Cvijovic', '06060606', 'ana.cvijovic', 'beec983e1d29e81bde7148cec004bbbc9e1034f5', 'ana@gmail.com', 1),
(5, 'Veljko', 'Kizic', '06060606', 'veljko.kizic', '8c40f1ae4b519aeaa083c35cd8467e12be8e172a', 'kiza@gmail.com', 1),
(6, 'Jelena', 'Jevtic', '060600', 'jelena.jevtic', 'ef2b08b58bbf8b756a54e6664193e0abfb1ce709', 'jelena@gmail.com', 2),
(7, 'Snezana', 'Stanisavljevic', '060600', 'snezana.stanisavljev', '0eefd31c645d954b2bbac11cc537f115c4acb5f9', 'snezana@gmail.com', 2),
(8, 'Mia', 'Loncar', '060600', 'mia.loncar', '27258354aaebba8ae382f5b9d6c4c8ef42d799fd', 'mia@gmail.com', 2),
(9, 'Sofija', 'Jovanovic', '060600', 'sofija.jovanovic', 'c92cc2c14c2556aba66405b7904eaa95b6ff9081', 'sofija@gmail.com', 2),
(10, 'Nevena', 'Stankovic', '0621166523', 'nevena.stanovic', 'a5802219d92f5381e752582c2e376de8cca36089', 'nevena@gmail.com', 3),
(11, 'Natalija', 'Nesic', '0621667890', 'natalija.nesic', '000b2645e00fdb9683b1b83c04ca7a18475c0d8e', 'natalija@gmail.com', 3),
(12, 'Aleksandra', 'Jovicic', '066272615', 'aleksandra.jovicic', '714268094e0dfe16c77117792b896894bfdc671e', 'aleksandra@gmail.com', 3),
(13, 'Nikolina', 'Petrovic', '0642516117', 'nikolina.petrovic', '0c35713bbc28d4a3e578a88d4ebd1787ed1a9069', 'nikolina@gmail.com', 3),
(14, 'Jovana', 'Kljajic', '061621666', 'jovana.kljajic', 'd1940b85617e430c9983c7672467d39cf36e2a9c', 'jovana@gmail.com', 3),
(15, 'Ivana', 'Jovic', '0656528921', 'ivana.jovicic', '0601fab640f0c83621278e24a1d0d73ff976d5cb', 'ivana@gmail.com', 3),
(16, 'Sanja', 'Mihajlovic', '0696251283', 'sanja.mihajlovic', '3bdf07a0834669d09425809636105af1d5909d80', 'sanja@gmail.com', 3),
(17, 'Suzana', 'Ostojic', '0614267282', 'suzana.ostojic', '403a660c1d841770092fd6723e1f553f387f9f31', 'suzana@gmail.com', 3);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
