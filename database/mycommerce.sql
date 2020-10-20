-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 15, 2020 at 01:50 PM
-- Server version: 8.0.21-0ubuntu0.20.04.4
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mycommerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart_lines`
--

CREATE TABLE `cart_lines` (
  `id` int NOT NULL,
  `order_id` int NOT NULL,
  `product_id` int NOT NULL,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `category` varchar(50) NOT NULL,
  `description` varchar(300) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `quantity` int NOT NULL,

 
    FOREIGN KEY (order_id)
        REFERENCES orders(id)
        ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int NOT NULL,
  `name` varchar(75) NOT NULL,
  `address` varchar(100) NOT NULL,
  `city` varchar(75) NOT NULL,
  `state` varchar(75) NOT NULL,
  `zip` varchar(75) NOT NULL,
  `country` varchar(75) NOT NULL,
  `shipped` tinyint(1) NOT NULL,
  `itemCount` int NOT NULL,
  `cartPrice` decimal(10,2) NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int NOT NULL,
  `name` varchar(75) NOT NULL,
  `category` varchar(50) NOT NULL,
  `description` varchar(250) NOT NULL,
  `price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `category`, `description`, `price`) VALUES
(1, 'Ozone Enduro V3 Kite', 'Watersports', 'The Ozone Enduro V3 is an all time favorite around the globe, it’s recognized as one of the best go-to kites on the market. It’s incredibly versatile for any style and any conditions, with the Enduro V3 you will be ripping!', '25.00'),
(2, 'Reedin Super Model Kite', 'Watersports', 'The Reedin Super model is designed with the simple observation that whether you’re new to kiteboarding or aspire to ride as hard as Kevin Langeree, you need an intuitive and easy kite that lets you focus on your riding while taking you to the next le', '49.00'),
(3, 'Pro 8500 Smith Cage , Black', 'Bodybuilding', 'FIFA-approved size and weight', '20.00'),
(4, 'Ultimate ProGym , Black', 'Bodybuilding', 'Help Attain a Healthier You! Features 7 Levels of Resistance by Creating Different Combinations of Tube Strengths', '35.00'),
(5, 'ImmuneMode Concentrated Elderberry and Immune Support , 30 Veggie Capsules', 'Bodybuilding', 'Full Spectrum Immune System Support Capsules with Elderberry, Antioxidants, Vitamins, Minerals and Probiotic* Comprehensive immune system support with Eldermune Elderberry, the highest 65:1 concentration of natural Elderberry, Antioxidant Boosting Vi', '80.00'),
(6, 'Thinking Cap', 'Chess', 'Improve brain efficiency by 75%', '16.00'),
(7, 'Unsteady Chair', 'Chess', 'Secretly give your opponent a disadvantage', '30.00'),
(8, 'Human Chess Board', 'Chess', 'A fun game for the family', '75.00'),
(9, 'Bling King', 'Chess', 'Gold-plated, diamond-studded King', '1200.00'),
(10, 'Nike Air Max 2090', 'Shoes', 'Nike\'s Air Max 2090 features the best bits of the Air Max 90 and then some. The mudguard, Air bubble-encasing cassette and traditional heel logo remain untouched, while new features include a streamlined shape and an Air window that is a whopping 200', '130.00'),
(11, 'Nike Zoom Fly', 'Shoes', 'Inspired by the Vaporfly, which is one of the lightest and therefore fastest trainers in the Oregon-based giant\'s catalogue, the Nike Zoom Fly 3 is powered for speed for distance runners. Made from VaporWeave fabric, the shoe\'s transparent upper and ', '140.00'),
(12, 'Nike Air Max 270 React SE', 'Shoes', 'A 1993 classic, the ultra-streamlined Nike Pantheon went out of production and has since been “retroed” (the term for bringing back an OG pair of kicks in an ever-so-slightly updated way). Well, the Air Max 270 React SE takes inspiration from the Pan', '140.00'),
(13, 'Nike ISPA OverReact Flyknit', 'Shoes', 'One of the creations to come from Nike\'s ISPA range, which works to push the boundaries of footwear design further than ever. The cushioning platform of the Nike React are taken to the extreme by doubling down on the geometries that maximise the ISPA', '160.00'),
(14, 'Nike Blazer', 'Shoes', 'Favoured by the likes of retired basketball icon George Gervin, Nike’s Blazer is one of the oldest trainer designs still on rotation. First released in 1973, it was Nike’s best basketball trainer at the time, but has since gone on to find fame among ', '90.00'),
(15, 'Nike Air Max Plus III', 'Shoes', 'The Nike Air Max Plus III updates the original look of the Air Max Plus with TPU fused to the upper, while also paying homage to the iconic colour fade of the original. It also features the same Tuned Air technology that was originally released in 19', '160.00'),
(16, 'Nike Air Max Plus', 'Shoes', 'Nike’s Air Max Plus (AKA the “TN”) features Tuned Air tech, which essentially makes for having a better stride thanks to the inclusion of Nike’s hemisphere tech, which adds stability and reduces the possibility of your foot rolling inwards. £134.95. ', '135.00'),
(17, 'Nike React Element 55', 'Shoes', 'Designer Darryl Matthews introduced the React Element 55 to Nike, following the success of the React Element 87. While the silhouette is similar to its parent model, the React Element 55 utilises materials found on mainline Nike runners and removes t', '115.00'),
(18, 'Nike Air Force 1 Flyknit 2.0', 'Shoes', 'A take on the mighty shoe that’s been reigning the courts since 1982 (and further afield), the Nike Air Force 1 Flyknit 2.0 brings back the AF-1 in a featherweight design and utilises Nike’s Flynknit technology. £84.95. nike.com', '85.00'),
(19, 'Nike Air Max 97', 'Shoes', 'The Air Max 97 comes with the instantly recognisable water-ripple lines, reflective piping and full-length Max Air cushioning. The original model was designed by Nike employee Christian Tresser in 1997 and was dubbed the Silver Bullet due to its stre', '145.00'),
(20, 'Nike Air Max 90', 'Shoes', 'Introduced in 1990, the Air Max 90 features the iconic Waffle sole, stitched overlays and classic TPU details, as well as the air bubble. £114.95. nike.com', '115.00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart_lines`
--
ALTER TABLE `cart_lines`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart_lines`
--
ALTER TABLE `cart_lines`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
