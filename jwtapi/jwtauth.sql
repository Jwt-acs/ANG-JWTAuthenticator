-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 04, 2021 at 06:19 PM
-- Server version: 5.6.21
-- PHP Version: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `jwtauth`
--

-- --------------------------------------------------------

--
-- Table structure for table `userstab`
--

CREATE TABLE IF NOT EXISTS `userstab` (
`user_id` int(11) NOT NULL,
  `unique_id` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `encrypted_password` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `auth` enum('yes','no') NOT NULL DEFAULT 'no',
  `deviceuniqID` varchar(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `userstab`
--

INSERT INTO `userstab` (`user_id`, `unique_id`, `name`, `lastname`, `email`, `encrypted_password`, `created_at`, `updated_at`, `auth`, `deviceuniqID`) VALUES
(1, '5c3781b4ef9cb6.00155574', 'testuser', '', 'testuser@gmail.com', 'e99a18c428cb38d5f260853678922e03', '2021-11-03 17:49:32', '2021-11-03 17:49:32', 'yes', '6021619695ddc8.12168436'),
(2, '5c3781b4ef9cb6.00158874', 'testuser', '', 'testlogin@gmail.com', 'e99a18c428cb38d5f260853678922e03', '2021-11-03 17:50:12', '2021-11-03 17:50:12', 'no', ''),
(3, '6183ef9f7bc364.48187525', '', '', 'praveen.gollu@gmail.com', 'e99a18c428cb38d5f260853678922e03', '2021-11-04 10:35:11', '2021-11-04 10:35:11', 'no', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `userstab`
--
ALTER TABLE `userstab`
 ADD PRIMARY KEY (`user_id`), ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `userstab`
--
ALTER TABLE `userstab`
MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
