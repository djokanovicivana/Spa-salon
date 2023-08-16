-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 13, 2023 at 11:38 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

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


CREATE Database beautysalon;

CREATE TABLE `user`(
  `roleID` int(10) NOT NULL,
  `roleName` varchar(50) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `admin`(
  `AdminID` int(10) NOT NULL,
  `Username` varchar(20) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `roleID` int(10) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `CustomerID` int(10) NOT NULL,
  `FirstName` int(20) NOT NULL,
  `LastName` int(30) NOT NULL,
  `PhoneNumber` int(15) NOT NULL,
  `Username` varchar(20) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `roleID` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------
--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `EmployeeID` int(10) NOT NULL,
  `FirstName` varchar(20) NOT NULL,
  `LastName` varchar(30) NOT NULL,
  `JobTitle` varchar(30) NOT NULL,
  `Age` int(5) NOT NULL,
  `Username` varchar(20) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `roleID` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------
--
-- Table structure for table `appointment`
--
CREATE TABLE `appointment` (
  `AppointmentID` int(10) NOT NULL,
  `AppointmentDateTime` datetime NOT NULL,
  `CustomerID` int(10) NOT NULL,
  `ServiceID` int(10) NOT NULL,
  `EmployeeID` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Table structure for table `salonservice`
--
CREATE TABLE `salonservice` (
  `ServiceID` int(10) NOT NULL,
  `ServiceName` varchar(30) NOT NULL,
  `ServiceDuration` int(11) NOT NULL,
  `ServicePrice` int(11) NOT NULL,
  `ServiceMaterials` varchar(300) NOT NULL,
  `ServiceDescription` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Table structure for table `serviceAssignment`
--
CREATE TABLE `serviceAssignment`(
  `serviceID` int(10) NOT NULL,
  `employeeID` int(10) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
--
-- Indexes for dumped tables
--

ALTER TABLE `user`
  ADD PRIMARY KEY (`roleID`);


ALTER TABLE `admin`
  ADD PRIMARY KEY (`adminID`);

  ALTER TABLE `admin`
  ADD FOREIGN KEY (`roleID`) REFERENCES user(`roleID`);
--
-- Indexes for table `appointment`
--
ALTER TABLE `appointment`
  ADD PRIMARY KEY (`AppointmentID`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`CustomerID`);

ALTER TABLE `customer`
  ADD FOREIGN KEY (`roleID`) REFERENCES user(`roleID`);
--
-- Indexes for table `emloyee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`EmployeeID`);

ALTER TABLE `employee`
  ADD FOREIGN KEY (`ServiceID`) REFERENCES salonservice(`ServiceID`);

ALTER TABLE `employee`
  ADD FOREIGN KEY (`roleID`) REFERENCES user(`roleID`);
--
-- Indexes for table `salonservice`
--
ALTER TABLE `salonservice`
  ADD PRIMARY KEY (`ServiceID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appointment`
--
ALTER TABLE `appointment`
  MODIFY `AppointmentID` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `CustomerID` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `emloyee`
--
ALTER TABLE `employee`
  MODIFY `EmployeeID` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `salonservice`
--
ALTER TABLE `salonservice`
  MODIFY `ServiceID` int(10) NOT NULL AUTO_INCREMENT;
COMMIT;

SELECT `serviceID` INTO `salonAssignment` FROM `salonservice`;
SELECT `employeeID` INTO `salonAssignment` FROM `employee`;


/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

/*User tabela*/
INSERT INTO `user`VALUES (1,'admin');
INSERT INTO `user`VALUES (2,'employee');
INSERT INTO `user`VALUES (3,'customer');

/*Administratori*/
INSERT INTO `admin` VALUES ('1','kristina.mojsic','kristina123',1);
INSERT INTO `admin` VALUES ('2','andjela.stanojevic','andjela123',1);
INSERT INTO `admin` VALUES ('3','ivana.djokanovic','ivana123',1);
INSERT INTO `admin` VALUES ('4','ana.cvijovic','ana123',1);
INSERT INTO `admin` VALUES ('5','veljko.kizic','kiza123',1);


/* Ubaceni korisnici */
INSERT INTO `customer` VALUES ('1', 'Nevena', 'Stankovic','0621166523', 'nevena.stanovic','nevena123','nevena@gmail.com',3);
INSERT INTO `customer` VALUES ('2', 'Natalija', 'Nesic',  '0621667890', 'natalija.nesic','natalija123','natalija@gmail.com',3);
INSERT INTO `customer` VALUES ('3', 'Aleksandra', 'Jovicic',  '066272615', 'aleksandra.jovicic','aleksandra123','aleksandra@gmail.com',3);
INSERT INTO `customer` VALUES ('4', 'Nikolina', 'Petrovic', '0642516117', 'nikolina.petrovic','nikolina123','nikolina@gmail.com',3);
INSERT INTO `customer` VALUES ('5', 'Jovana', 'Kljajic', '061621666', 'jovana.kljajic','jovana123','jovana@gmail.com',3);
INSERT INTO `customer` VALUES ('6', 'Ivana', 'Jovic',  '0656528921', 'ivana.jovicic','ivana123','ivana@gmail.com',3);
INSERT INTO `customer` VALUES ('7', 'Sanja', 'Mihajlovic',  '0696251283', 'sanja.mihajlovic','sanja123','sanja@gmail.com',3);
INSERT INTO `customer` VALUES ('8', 'Suzana', 'Ostojic','0614267282', 'suzana.ostojic','suzana123','suzana@gmail.com',3);



/*Usluge za manikir i pedikir koje obavlja employeeID=1*/
INSERT INTO `salonservice` VALUES ('1', 'Manikir', 30, 1000, 'Manikir makaze/cangle, nastavci za aparatni manikir, turpija', 'skracivanje i oblikovanje noktiju uz sredjivanje zanoktica');
INSERT INTO `salonservice` VALUES ('2', 'Manikir sa gellakom', 90, 2000, 'Manikir makaze/cangle, nastavci za aparatni manikir, turpija, gellak + boja','ojacavanje prirodnih noktiju gellakom');
INSERT INTO `salonservice` VALUES ('3', 'Pedikir', 45, 3000, 'Cangle, nastavci za aparatni pedikir, turpija','Ruski pedikir profidiskom bez gellaka');
INSERT INTO `salonservice` VALUES ('4', 'Pedikir sa gellakom', 90, 4000, 'Ruski pedikir profidiskom sa gellakom');


/*Usluge masaze koje obavlja employeeID=2*/
INSERT INTO `salonservice` VALUES ('21', 'Relax masaza', 30, 1500 , 'Ulje za masazu', 'Masaza za opustanje sa sertifikovanim fizioterapeutom');
INSERT INTO `salonservice` VALUES ('22', 'Relax masaza', 45, 2000 , 'Ulje za masazu', 'Masaza za opustanje sa sertifikovanim fizioterapeutom');
INSERT INTO `salonservice` VALUES ('23', 'Relax masaza', 60, 3000 , 'Ulje za masazu', 'Masaza za opustanje sa sertifikovanim fizioterapeutom');
INSERT INTO `salonservice` VALUES ('24', 'Sportska masaza', 30, 2000 , 'Ulje za masazu, sportska krema, aparatura ', 'Masaza namenjena lecnenju sportskih povreda sa sertifikovanim fizioterapeutom');
INSERT INTO `salonservice` VALUES ('25', 'Sportska masaza', 45, 3000 , 'Ulje za masazu, sportska krema, aparatura ', 'Masaza namenjena lecnenju sportskih povreda sa sertifikovanim fizioterapeutom');
INSERT INTO `salonservice` VALUES ('26', 'Sportska masaza', 60, 4000 , 'Ulje za masazu, sportska krema, aparatura ', 'Masaza namenjena lecnenju sportskih povreda sa sertifikovanim fizioterapeutom');

/*Usluge sminkanja koje obavlja employeeID=3*/
INSERT INTO `salonservice` VALUES ('31', 'Sminkanje', 60, 4000 , 'Puder, senke, maskara, trepavice, karmini, rumenila, bronzeri', 'Sminka za sve prilike');

/*Usluge frizera obavlja employeeID=4*/
INSERT INTO `salonservice` VALUES ('41', 'Feniranje', 30, 1000 , 'Cetka, Fen, Sampon, Regenerator', 'Feniranje i pranje kose');
INSERT INTO `salonservice` VALUES ('42', 'Sisanje + Feniranje', 60, 3000 , 'Cetka, Fen, Sampon, Regenerator, Makaze', 'Sisanje,feniranje i pranje kose');
INSERT INTO `salonservice` VALUES ('43', 'Frizura', 30, 2000 , 'Cetka, Fen, Sampon, Regenerator, Snalice', 'Pravljenje frizure po izboru (30 min)');
INSERT INTO `salonservice` VALUES ('44', 'Frizura', 60, 2000 , 'Cetka, Fen, Sampon, Regenerator', 'Pravljenje frizure po izboru (60min)');



INSERT INTO `employee` VALUES ('1', 'Jelena', 'Jevtic', 'Profesionalni manikir i pedikir majstor', 25, 'jelena.jevtic','jelena11',2);
INSERT INTO `employee` VALUES ('2', 'Snezana', 'Stanisavljevic', 'Strukovni fizioterapeut', 33, 'snezana.stanisavljevic', 'snezana11',2);
INSERT INTO `employee` VALUES ('3', 'Mia', 'Loncar', 'Profesionalni sminker', 28, 'mia.loncar','mia11',2);
INSERT INTO `employee` VALUES ('4', 'Sofija', 'Jovanovic', 'Profesionalni zenski frizer', 30, 'sofija.jovanovic','sofija11',2);

INSERT INTO `serviceAssignment` VALUES(1,1);
INSERT INTO `serviceAssignment` VALUES(2,1);
INSERT INTO `serviceAssignment` VALUES(3,1);
INSERT INTO `serviceAssignment` VALUES(4,1);
INSERT INTO `serviceAssignment` VALUES(21,2);
INSERT INTO `serviceAssignment` VALUES(22,2);
INSERT INTO `serviceAssignment` VALUES(23,2);
INSERT INTO `serviceAssignment` VALUES(24,2);
INSERT INTO `serviceAssignment` VALUES(25,2);
INSERT INTO `serviceAssignment` VALUES(26,2);
INSERT INTO `serviceAssignment` VALUES(31,3);
INSERT INTO `serviceAssignment` VALUES(41,4);
INSERT INTO `serviceAssignment` VALUES(42,4);
INSERT INTO `serviceAssignment` VALUES(43,4);
INSERT INTO `serviceAssignment` VALUES(44,4);


INSERT INTO `appointment` VALUES ('A1', '10/22/2023 11:00:00 AM', 1, 1,1);
INSERT INTO `appointment` VALUES ('A2', '11/06/2023 12:00:00 PM', 2,3,1);
INSERT INTO `appointment` VALUES ('A3', '12/07/2023 02:00:00 PM', 3, 21,21);
INSERT INTO `appointment` VALUES ('A4', '12/18/2023 03:30:00 PM', 4,11,11);
INSERT INTO `appointment` VALUES ('A5', '12/21/2023 11:30:00 AM', 5, 14, 11);
INSERT INTO `appointment` VALUES ('A6', '12/31/2023 10:00:00 AM', 6, 32,31);
INSERT INTO `appointment` VALUES ('A7', '01/11/2023 03:00:00 PM', 7, 31, 31);
INSERT INTO `appointment` VALUES ('A8', '01/12/2023 02:30:00 PM', 8, 13, 11);
INSERT INTO `appointment` VALUES ('A9', '01/22/2023 04:00:00 PM', 1, 4, 1);
