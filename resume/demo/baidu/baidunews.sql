-- phpMyAdmin SQL Dump
-- version 4.4.15.5
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1:8889
-- Generation Time: May 19, 2017 at 10:42 AM
-- Server version: 5.6.34-log
-- PHP Version: 7.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `baidunews`
--

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE IF NOT EXISTS `news` (
  `id` int(11) NOT NULL,
  `newsType` char(200) NOT NULL,
  `newsTitle` varchar(200) NOT NULL,
  `newsImg` varchar(200) NOT NULL,
  `newsTime` datetime NOT NULL,
  `newsSrc` char(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `newsType`, `newsTitle`, `newsImg`, `newsTime`, `newsSrc`) VALUES
(5, '精选', '阿里爸爸', 'images/news5.JPEG', '2017-05-19 00:00:00', '腾讯'),
(6, '本地', '股市跌跌几时休', 'images/news2.JPEG', '2017-05-19 00:00:00', '金融'),
(9, '精选', '中美的交流', 'images/news1.PNG', '2017-05-19 00:00:00', '中华网'),
(10, '精选', '习大大与”一带一路“', 'images/news3.jpg', '2017-05-19 00:00:00', '人民日报'),
(11, '精选', '近视在中国普遍', 'images/news9.JPEG', '2017-05-19 00:00:00', '调查网'),
(12, '精选', '王叔叔一无所有', 'images/news6.PNG', '2017-05-19 00:00:00', '低调网'),
(13, '百家', '张小龙能否帮助李彦宏遏制张一鸣的梦想', 'images/news8.JPEG', '2017-05-19 00:00:00', '财经网'),
(14, '百家', '首富又换人，是他，就是他！', 'images/news7.PNG', '2017-05-19 00:00:00', '福布斯'),
(15, '百家', '蓦然回首时，弹指一挥间', 'images/news4.jpg', '2017-05-19 00:00:00', '情感专线');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=16;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
