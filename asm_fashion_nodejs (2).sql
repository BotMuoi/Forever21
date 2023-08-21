-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 10, 2023 at 07:45 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `asm_fashion_nodejs`
--

-- --------------------------------------------------------

--
-- Table structure for table `color`
--

CREATE TABLE `color` (
  `id` int(11) NOT NULL,
  `idProduct` int(11) NOT NULL,
  `urlColor` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `color`
--

INSERT INTO `color` (`id`, `idProduct`, `urlColor`) VALUES
(1, 1, 'images/ccolor.webp'),
(2, 2, 'images/c1color.webp'),
(3, 2, 'images/c1color1.webp');

-- --------------------------------------------------------

--
-- Table structure for table `fashion`
--

CREATE TABLE `fashion` (
  `id` int(11) NOT NULL,
  `tenThoiTrang` varchar(200) NOT NULL,
  `moTa` varchar(2000) NOT NULL,
  `urlHinhHome` varchar(500) NOT NULL,
  `capNhat` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `status` varchar(200) NOT NULL,
  `discountEventInformation` varchar(200) NOT NULL,
  `comment` varchar(200) NOT NULL,
  `rating` float NOT NULL,
  `soLanXem` int(11) NOT NULL,
  `hot` tinyint(11) NOT NULL DEFAULT 0,
  `gia` double(11,2) NOT NULL,
  `idLoai` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fashion`
--

INSERT INTO `fashion` (`id`, `tenThoiTrang`, `moTa`, `urlHinhHome`, `capNhat`, `status`, `discountEventInformation`, `comment`, `rating`, `soLanXem`, `hot`, `gia`, `idLoai`) VALUES
(1, 'Plunging Bow Babydoll Dress', '', '/images/c.webp', '2023-04-06 14:22:05', 'Web Exclusive', 'Take 17% Off! Use code: Lucky17.', '167', 4.5, 1000, 1, 934300.00, 2),
(2, 'Satin Lace-Trim Lingerie Slip', '', '/images/c1.jpg', '2023-04-06 14:22:09', 'Matching Item Available', 'Take 17% Off! Use code: Lucky17.', '23', 5, 45, 1, 533800.00, 2),
(3, 'Sheer Mesh Sequin Maxi Dress', '', '/images/c2.webp', '2023-03-19 06:37:57', 'Matching Item Available', 'Take 30% Off! Use code: Lucky30.', '12', 4, 78, 0, 800800.00, 2),
(4, 'Plunging Tiered Babydoll Dress', '', '/images/c3.jpg', '2023-04-06 14:22:18', 'Web Exclusive', 'Take 70% Off! Use code: Lucky70.', '45', 3.5, 600, 1, 800800.00, 2),
(5, 'Organza Floral Print Babydoll Dress', '', '/images/c4.webp', '2023-04-06 14:22:20', 'Web Exclusive', 'Take 21% Off! Use code: Lucky21.', '789', 5, 12000, 1, 1067800.00, 2),
(6, 'Puff-Sleeve Tiered Midi Dress', '', '/images/c5.jpg', '2023-03-19 06:39:28', 'Web Exclusive', 'Take 30% Off! Use code: Lucky30.', '33', 5, 789, 0, 1468200.00, 2),
(7, 'Satin Layered-Hem Slip Dress', '', '/images/c5_1.jpg', '2023-04-06 14:22:22', 'Matching Item Available', 'Take 30% Off! Use code: Lucky30.', '672', 5, 45000, 1, 667300.00, 2),
(8, 'Denim Lace-Up Cami Mini Dress', '', '/images/c6.jpg', '2023-03-19 16:42:00', 'Web Exclusive', 'Matching Item Available', '88', 5, 924, 0, 800800.00, 2),
(9, 'Tiered Fit & Flare Dress', '', '/images/c8.webp', '2023-04-06 14:22:26', 'Web Exclusive', 'Take 80% Off! Use code: Lucky80.', '3000', 5, 90243, 1, 613900.00, 2),
(10, 'Floral Print Tie-Back Midi Dress', '', '/images/c9.webp', '2023-03-19 16:42:11', 'Web Exclusive', 'Take 21% Off! Use code: Lucky21.', '234', 5, 54386, 0, 747400.00, 2),
(11, 'Crochet Halter Midi Dress\r\n', '', '/images/c11.jpg', '2023-03-19 16:42:14', 'Web Exclusive', 'Take 12% Off! Use code: Lucky12.', '78079', 5, 4574300, 0, 1067800.00, 2),
(12, 'Drawstring Cargo Shorts', '', '/images/c12.webp', '2023-03-19 16:42:17', 'Web Exclusive', 'Take 17% Off! Use code: Lucky17.', '1414', 5, 2574, 0, 800800.00, 2),
(13, 'Tortoiseshell-Buttoned Blazer', '', '/images/kt15.jpg', '2023-03-19 17:22:25', 'Web Exclusive', 'Take 17% Off! Use code: Lucky17', '356', 4.5, 2414, 0, 1202200.00, 2),
(14, 'Cutout Peak-Lapel Blazer', '', '/images/kt16.jpg', '2023-03-19 16:42:23', 'Web Exclusive', 'Take 17% Off! Use code: Lucky17', '44', 5, 127, 0, 1335800.00, 2),
(15, 'Raw-Cut Cropped Pullover', '', '/images/kt17.webp', '2023-03-19 17:21:37', 'Web Exclusive', 'Take 39% Off! Use code: Lucky39', '63', 4.9, 103102, 0, 614300.00, 2),
(16, 'Textured Abstract Button-Front Shirt', '', '/images/kt18.jpg', '2023-03-20 04:28:17', 'Matching Item Available', 'Take 17% Off! Use code: Lucky17', '923', 4.8, 5612, 0, 667800.00, 5),
(17, 'Textured Abstract Print Shorts', '', '/images/kt19.jpg', '2023-03-20 04:28:35', 'Web Exclusive', 'Take 17% Off! Use code: Lucky17', '2844', 3.5, 129481, 0, 667800.00, 5),
(18, 'Zip-Pocket Denim Shorts', '', '/images/kt20.jpg', '2023-04-09 15:19:23', 'Web Exclusive', 'Take 20% Off! Use code: Lucky20', '244', 5, 823592, 1, 801400.00, 5),
(19, 'Tie-Dye Striped Sweater', '', 'images/kt25.jpg', '2023-04-10 02:16:09', 'Extended Sizes Available! Shop XS - XXL', 'Take 21% Off! Use Code: Easter21', '346346', 4.8, 4644745, 0, 929100.00, 5),
(20, 'Lattice Grid Cardigan Sweater', '', 'images/kt26.webp', '2023-04-10 02:16:09', 'Extended Sizes Available! Shop XS - XXL', 'Take 47% Off! Use Code: Easter47', '6', 5, 346, 0, 1061900.00, 5),
(21, 'Plush Zebra Print Cardigan Sweater', '', 'images/kt28.webp', '2023-04-10 02:27:29', 'Watching the item', 'Take 73% Off! Use Code: Easter73', '48446', 4.8, 999436, 1, 849700.00, 5),
(22, 'Collared Drop-Sleeve Sweater', '', 'images/kt29.webp', '2023-04-10 02:27:29', 'Exclusion ', 'Take 21% Off! Use Code: Easter21', '35', 4, 6679, 1, 610700.00, 5),
(23, 'Fleece Crew Pullover', '', 'images/kt30.webp', '2023-04-10 02:27:29', 'Extended Sizes Available! Shop XS - XXL', 'Take 21% Off! Use Code: Easter21', '777', 5, 967948, 1, 530800.00, 5),
(24, 'Denim Faux Shearling Jacket', '', 'images/kt32.webp', '2023-04-10 02:33:35', 'Extended Sizes Available! Shop XS - XXL', 'Take 21% Off! Use Code: Easter21', '183', 5, 125698, 1, 1194600.00, 5),
(25, 'Galleria Quarta Graphic Trucker Jacket', '1,194,600', 'images/kt33.webp', '2023-04-10 02:33:35', '', 'Take 21% Off! Use Code: Easter21', '764', 5, 96753, 1, 1194600.00, 5);

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `idProduct` int(11) NOT NULL,
  `urlHinh` varchar(200) NOT NULL,
  `urlHinhSlide` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `idProduct`, `urlHinh`, `urlHinhSlide`) VALUES
(1, 1, 'images/kt-1.jpg', 'images/1.1.jpg'),
(2, 1, 'images/kt.jpg', 'images/1.2.jpg'),
(3, 1, 'images/kt1.jpg', 'images/1.3.jpg'),
(4, 1, 'images/kt2.jpg', 'images/1.4.jpg'),
(5, 2, 'images/kt3.webp', 'images/1.webp'),
(6, 2, 'images/kt4.webp', 'images/2.webp'),
(7, 2, 'images/kt5.webp', 'images/3.webp'),
(8, 2, 'images/kt6.webp', 'images/6.jpg'),
(9, 3, 'images/kt7.webp', 'images/2.1.webp'),
(10, 3, 'images/kt8.webp', 'images/2.2.webp'),
(11, 3, 'images/kt9.webp', 'images/2.3.webp'),
(12, 3, 'images/kt10.webp', 'images/2.4.webp'),
(13, 4, 'images/kt11.jpg', 'images/kt11Slide.jpg'),
(14, 4, 'images/kt12.jpg', 'images/kt12Slide.jpg'),
(15, 4, 'images/kt13.jpg', 'images/kt13Slide.jpg'),
(16, 4, 'images/kt14.jpg', 'images/kt14Slide.jpg'),
(17, 6, 'images/kt6small.jpg', 'images/kt6big.webp'),
(18, 6, 'images/kt6small1.jpg', 'images/kt6big2.webp'),
(19, 6, 'images/kt6small2.jpg', 'images/kt6big3.webp'),
(20, 6, 'images/kt6small3.jpg', 'images/kt6big4.webp\r\n');

-- --------------------------------------------------------

--
-- Table structure for table `loai`
--

CREATE TABLE `loai` (
  `id` int(11) NOT NULL,
  `tenLoai` varchar(200) NOT NULL,
  `thuTu` int(11) NOT NULL,
  `anHien` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `loai`
--

INSERT INTO `loai` (`id`, `tenLoai`, `thuTu`, `anHien`) VALUES
(1, 'Now Trending', 1, 1),
(2, 'Women', 2, 1),
(3, 'Shoes+Accessories', 3, 1),
(4, 'Plus+Curve', 4, 1),
(5, 'Men', 5, 1),
(6, 'Girls+Boys', 6, 1),
(7, 'Sale', 7, 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fullName` varchar(200) NOT NULL,
  `userName` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `phone` int(11) NOT NULL,
  `email` varchar(200) NOT NULL,
  `birthday` varchar(25) NOT NULL,
  `role` tinyint(1) NOT NULL DEFAULT 0,
  `tinh` varchar(200) NOT NULL,
  `sothich` varchar(200) NOT NULL,
  `locked` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fullName`, `userName`, `password`, `phone`, `email`, `birthday`, `role`, `tinh`, `sothich`, `locked`) VALUES
(1, 'Lê Minh Chiến', 'Chiến mập', '123', 0, '', '', 1, '', '', 1),
(2, 'đan đan', 'đan đú đởn', '123', 0, '', '', 0, '', '', 1),
(3, 'nguyễn thành nhân', 'Nhân ', '123', 0, '', '', 0, '', '', 1),
(4, 'Phan Võ Trọng Phong', 'Phong tử tế', '123', 0, '', '', 0, '', '', 1),
(5, 'Nguyễn Duy Hiệp', 'Hiệp gà', '123', 0, '', '', 0, '', '', 1),
(6, 'Nguyễn Thanh Tài', 'Tài năng', '123', 0, '', '', 0, '', '', 1),
(7, 'Phạm Nguyễn Nhật Tân', 'Tân cà phê', '123', 0, '', '', 0, '', '', 1),
(8, 'lê minh chiến', 'abc', '$2b$10$NAiDoYXzOa3N09OjSP27d.KjCDRrFDRffGOEsLUiItAW76rW5tEJS', 0, 'leminhchien2611@gmail.com', '', 0, '', '', 1),
(9, 'chien', 'mappp', '$2b$10$KUpT8einZyKw4TwU.T7xPus20QIJsX4d7HVCeEgu5poeVcQzd.5sK', 0, 'leminhchien2611@gmail.com', '', 0, '', '', 1),
(10, 'chien', 'mumm', '$2b$10$q0iDYVFI1A2FbHHZtPylReaU6fObKG4ZYys7c6MUzvltfeBaTlAay', 0, 'leminhchien2611@gmail.com', '', 0, '', '', 1),
(11, 'nguyen thanh phuong', 'phuong', '$2b$10$SM7UqhWiih5XhtHdGpILIejJX/dPHq74gY9QRrFD4oLLF98LKtY/K', 0, 'seagasdg@gmail', '', 0, '', '', 1),
(12, 'nguyen thanh phuong', 'abc', '$2b$10$4UnXojZR.DbavybQAnkJ6OU4HKaHKrEAlD6FyX4DhMzVxJvQCQEn.', 0, 'leminhchien2611@gmail.com', '', 0, '', '', 1),
(18, 'SDVDV', 'SDBS', '$2b$10$YvQb63NZvhG/C8l/V5Hvsu0/kIQMuCDZYWB7wvYtDiXwX58ViUxzC', 0, 'leminhchien2611@gmail.com', '', 0, '', '', 1),
(19, 'nguyen', 'nguyendiuda', '$2b$10$dsXEMshqbsbsFq2RNKQg7O1B4S0i/TfLKVhXIGudYSPjL3rhs5sue', 0, 'leminhchien2611@gmail.com', '', 0, '', '', 1),
(20, 'nguyen', 'nguyen', '$2b$10$hcUxdRaOR3pPBdLFbm8Zm.gUcFaSe1l6vJNMD15Yfd2LOH4ao9XCy', 0, 'leminhchien2611@gmail.copm', '', 0, '', '', 1),
(21, 'lê minh chiến', '123', '$2b$10$Hk2HNI/7LZZwj1mNT8o4OOzKeIIFICECo3ZXJV4BHlqTFo.S9Q5wu', 0, 'leminhchien2611@gmail.copm', '', 0, '', '', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `color`
--
ALTER TABLE `color`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idProduct` (`idProduct`);

--
-- Indexes for table `fashion`
--
ALTER TABLE `fashion`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idProduct` (`idProduct`);

--
-- Indexes for table `loai`
--
ALTER TABLE `loai`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `color`
--
ALTER TABLE `color`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `fashion`
--
ALTER TABLE `fashion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `loai`
--
ALTER TABLE `loai`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `color`
--
ALTER TABLE `color`
  ADD CONSTRAINT `color_ibfk_1` FOREIGN KEY (`idProduct`) REFERENCES `fashion` (`id`);

--
-- Constraints for table `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `images_ibfk_1` FOREIGN KEY (`idProduct`) REFERENCES `fashion` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
