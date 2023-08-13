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

--
-- Table structure for table `appointment`
--
CREATE Database beautysalon;

CREATE TABLE `admin`(
  `AdminID` int(10) NOT NULL,
  `Username` varchar(20) NOT NULL,
  `Password` varchar(20) NOT NULL
)

CREATE TABLE `appointment` (
  `AppointmentID` int(10) NOT NULL,
  `AppointmentDateTime` datetime NOT NULL,
  `CustomerID` int(10) NOT NULL,
  `ServiceID` int(10) NOT NULL,
  `EmployeeID` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `CustomerID` int(10) NOT NULL,
  `FirstName` int(20) NOT NULL,
  `LastName` int(30) NOT NULL,
  `Town` varchar(30) NOT NULL,
  `Street` int(50) NOT NULL,
  `Age` int(5) NOT NULL,
  `PhoneNumber` int(15) NOT NULL,
  `Username` varchar(20) NOT NULL,
  `Password` varchar(20) NOT NULL
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
  `Password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

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
-- Indexes for dumped tables
--


ALTER TABLE `admin`
  ADD PRIMARY KEY (`adminID`);
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

--
-- Indexes for table `emloyee`
--
ALTER TABLE `emloyee`
  ADD PRIMARY KEY (`EmployeeID`);

ALTER TABLE `emloyee`
  ADD FOREIGN KEY (`ServiceID`) REFERENCES salonservice(`ServiceID`);

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
ALTER TABLE `emloyee`
  MODIFY `EmployeeID` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `salonservice`
--
ALTER TABLE `salonservice`
  MODIFY `ServiceID` int(10) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

/*Administratori*/
INSERT INTO admin VALUES ('1','kristina.mojsic','kristina123');
INSERT INTO admin VALUES ('2','andjela.stanojevic','andjela123');
INSERT INTO admin VALUES ('3','ivana.djokanovic','ivana123');
INSERT INTO admin VALUES ('4','ana.cvijovic','ana123');
INSERT INTO admin VALUES ('5','veljko.kizic','kiza123');


/* Ubaceni korisnici */
INSERT INTO customer VALUES ('1', 'Nevena', 'Stankovic', 'Kragujevac', 'Zorana Vasica 5', '23', '0621166523', 'nevena.stanovic','nevena123');
INSERT INTO customer VALUES ('2', 'Natalija', 'Nesic', 'Kragujevac', 'Laze Marinkovic 7', '38', '0621667890', 'natalija.nesic','natalija123');
INSERT INTO customer VALUES ('3', 'Aleksandra', 'Jovicic', 'Kraljevo', 'Cara Lazara 25', '41', '066272615', 'aleksandra.jovicic','aleksandra123');
INSERT INTO customer VALUES ('4', 'Nikolina', 'Petrovic', 'Kragujevac', 'Spasenije Cane Babovic 2', '26', '0642516117', 'nikolina.petrovic','nikolina123');
INSERT INTO customer VALUES ('5', 'Jovana', 'Kljajic', 'Jagodina', 'Brace Dirak 54', '29', '061621666', 'jovana.kljajic','jovana123');
INSERT INTO customer VALUES ('6', 'Ivana', 'Jovic', 'Kragujevac', 'Ilindenska 15', '32', '0656528921', 'ivana.jovicic','ivana123');
INSERT INTO customer VALUES ('7', 'Sanja', 'Mihajlovic', 'Kragujevac', 'Dimitrija Tucovica 6', '36', '0696251283', 'sanja.mihajlovic','sanja123');
INSERT INTO customer VALUES ('8', 'Suzana', 'Ostojic', 'Gornji Milanovac', 'Kneza Aleksandra 123', '20', '0614267282', 'suzana.ostojic','suzana123');



/*Usluge za manikir i pedikir koje obavlja employeeID=1*/
INSERT INTO salonservice VALUES ('1', 'Manikir', 30, 1000, 'Manikir makaze/cangle, nastavci za aparatni manikir, turpija', 'skracivanje i oblikovanje noktiju uz sredjivanje zanoktica');
INSERT INTO salonservice VALUES ('2', 'Manikir sa gellakom', 90, 2000, 'Manikir makaze/cangle, nastavci za aparatni manikir, turpija, gellak + boja','ojacavanje prirodnih noktiju gellakom');
INSERT INTO salonservice VALUES ('3', 'Pedikir', 45, 3000, 'Cangle, nastavci za aparatni pedikir, turpija','Ruski pedikir profidiskom bez gellaka');
INSERT INTO salonservice VALUES ('4', 'Pedikir sa gellakom', 90, 4000, 'Ruski pedikir profidiskom sa gellakom');


/*Usluge masaze koje obavlja employeeID=11*/
INSERT INTO salonservice VALUES ('11', 'Relax masaza', 30, 1500 , 'Ulje za masazu', 'Masaza za opustanje sa sertifikovanim fizioterapeutom');
INSERT INTO salonservice VALUES ('12', 'Relax masaza', 45, 2000 , 'Ulje za masazu', 'Masaza za opustanje sa sertifikovanim fizioterapeutom');
INSERT INTO salonservice VALUES ('13', 'Relax masaza', 60, 3000 , 'Ulje za masazu', 'Masaza za opustanje sa sertifikovanim fizioterapeutom');
INSERT INTO salonservice VALUES ('14', 'Sportska masaza', 30, 2000 , 'Ulje za masazu, sportska krema, aparatura ', 'Masaza namenjena lecnenju sportskih povreda sa sertifikovanim fizioterapeutom');
INSERT INTO salonservice VALUES ('15', 'Sportska masaza', 45, 3000 , 'Ulje za masazu, sportska krema, aparatura ', 'Masaza namenjena lecnenju sportskih povreda sa sertifikovanim fizioterapeutom');
INSERT INTO salonservice VALUES ('16', 'Sportska masaza', 60, 4000 , 'Ulje za masazu, sportska krema, aparatura ', 'Masaza namenjena lecnenju sportskih povreda sa sertifikovanim fizioterapeutom');

/*Usluge sminkanja koje obavlja employeeID=21*/
INSERT INTO salonservice VALUES ('21', 'Sminkanje', 60, 4000 , 'Puder, senke, maskara, trepavice, karmini, rumenila, bronzeri', 'Sminka za sve prilike');

/*Usluge frizera obavlja employeeID=31*/
INSERT INTO salonservice VALUES ('31', 'Feniranje', 30, 1000 , 'Cetka, Fen, Sampon, Regenerator', 'Feniranje i pranje kose');
INSERT INTO salonservice VALUES ('32', 'Sisanje + Feniranje', 60, 3000 , 'Cetka, Fen, Sampon, Regenerator, Makaze', 'Sisanje,feniranje i pranje kose');
INSERT INTO salonservice VALUES ('33', 'Frizura', 30, 2000 , 'Cetka, Fen, Sampon, Regenerator, Snalice', 'Pravljenje frizure po izboru (30 min)');
INSERT INTO salonservice VALUES ('34', 'Frizura', 60, 2000 , 'Cetka, Fen, Sampon, Regenerator', 'Pravljenje frizure po izboru (60min)');




INSERT INTO employee VALUES ('1', 'Jelena', 'Jevtic', 'Profesionalni manikir i pedikir majstor', 25, 'jelena.jevtic','jelena11');
INSERT INTO employee VALUES ('11', 'Snezana', 'Stanisavljevic', 'Strukovni fizioterapeut', 33, 'snezana.stanisavljevic', 'snezana11');
INSERT INTO employee VALUES ('21', 'Mia', 'Loncar', 'Profesionalni sminker', 28, 'mia.loncar','mia11');
INSERT INTO employee VALUES ('31', 'Sofija', 'Jovanovic', 'Profesionalni zenski frizer', 30, 'sofija.jovanovic','sofija11');


INSERT INTO appointment VALUES ('A1', '10/22/2023 11:00:00 AM', 1, 1,1);
INSERT INTO appointment VALUES ('A2', '11/06/2023 12:00:00 PM', 2,3,1);
INSERT INTO appointment VALUES ('A3', '12/07/2023 02:00:00 PM', 3, 21,21);
INSERT INTO appointment VALUES ('A4', '12/18/2023 03:30:00 PM', 4,11,11);
INSERT INTO appointment VALUES ('A5', '12/21/2023 11:30:00 AM', 5, 14, 11);
INSERT INTO appointment VALUES ('A6', '12/31/2023 10:00:00 AM', 6, 32,31);
INSERT INTO appointment VALUES ('A7', '01/11/2023 03:00:00 PM', 7, 31, 31);
INSERT INTO appointment VALUES ('A8', '01/12/2023 02:30:00 PM', 8, 13, 11);
INSERT INTO appointment VALUES ('A9', '01/22/2023 04:00:00 PM', 1, 4, 1);
