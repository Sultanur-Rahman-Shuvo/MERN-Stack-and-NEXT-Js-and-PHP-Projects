-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 19, 2024 at 10:52 AM
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
-- Database: `idiscuss`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `category_id` int(8) NOT NULL,
  `category_name` varchar(255) NOT NULL,
  `category_description` varchar(255) NOT NULL,
  `created` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`category_id`, `category_name`, `category_description`, `created`) VALUES
(1, 'Python', 'Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, includi', '2024-06-21 20:02:22'),
(2, 'JavaScript', 'JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior. Web browsers have a dedicated JavaScript engine that executes th', '2024-06-21 20:03:34'),
(3, 'React', 'React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-ren', '2024-06-24 00:26:56');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `comment_id` int(8) NOT NULL,
  `comment_content` text NOT NULL,
  `thread_id` int(8) NOT NULL,
  `comment_by` int(11) NOT NULL,
  `comment_time` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`comment_id`, `comment_content`, `thread_id`, `comment_by`, `comment_time`) VALUES
(1, 'This is a comment.', 1, 1, '2024-07-04 14:09:26'),
(2, 'hello', 1, 2, '2024-07-04 18:00:19'),
(3, 'console.log(hello world);', 7, 3, '2024-07-04 18:12:14'),
(5, 'rifat is a good student', 11, 3, '2024-07-05 22:05:46'),
(6, 'shuvo is a bad student', 11, 1, '2024-07-05 22:08:18'),
(7, 'this is a comment', 2, 1, '2024-07-16 20:10:13'),
(8, 'this is a comment', 2, 1, '2024-07-16 20:10:50'),
(9, 'this is a comment', 2, 3, '2024-07-16 20:14:42'),
(10, 'this is a comment', 2, 2, '2024-07-16 20:15:15'),
(11, 'this is a comment', 2, 1, '2024-07-16 20:15:24'),
(13, 'hello', 12, 4, '2024-07-16 20:28:33'),
(14, 'hello', 12, 4, '2024-07-16 20:34:13'),
(15, 'why man why?', 14, 4, '2024-07-16 20:37:45'),
(16, '&lt;script&gt;console.log(\"hello\");&lt;/script&gt;', 1, 4, '2024-07-17 14:08:02'),
(17, 'hello', 16, 4, '2024-07-20 17:41:37'),
(18, 'yes, it is real', 17, 4, '2024-07-20 17:43:24');

-- --------------------------------------------------------

--
-- Table structure for table `threads`
--

CREATE TABLE `threads` (
  `thread_id` int(7) NOT NULL,
  `thread_title` varchar(255) NOT NULL,
  `thread_desc` text NOT NULL,
  `thread_cat_id` int(7) NOT NULL,
  `thread_user_id` int(7) NOT NULL,
  `timestamp` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `threads`
--

INSERT INTO `threads` (`thread_id`, `thread_title`, `thread_desc`, `thread_cat_id`, `thread_user_id`, `timestamp`) VALUES
(1, 'Unable to install pycharm', 'I love Python.', 1, 2, '2024-06-30 22:35:18'),
(2, 'Not able to install react router dom', 'can\'t install react router dom', 1, 3, '2024-06-30 22:48:24'),
(3, 'PHP is easy language', 'I love php.', 1, 3, '2024-07-04 12:14:12'),
(4, 'I use bootstrap everyday', 'Learn bootstrap to be successful.', 1, 1, '2024-07-04 12:18:23'),
(7, 'My jQuary is not working', 'My jQuary is not working on the vs code editor for some reason.', 2, 1, '2024-07-04 12:27:06'),
(14, 'why do we learn js?', 'i want to know more', 1, 4, '2024-07-16 20:37:28'),
(15, 'hello world', 'hello', 1, 4, '2024-07-16 20:38:32'),
(16, 'i love bangladesh', '&lt;script&gt;console.log(\"love bd\");&lt;/script&gt;', 1, 4, '2024-07-17 14:12:28'),
(17, 'quota movement is real?', 'Is quota movement in bangladesh real?', 1, 4, '2024-07-20 17:43:08');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `sno` int(11) NOT NULL,
  `user_email` varchar(30) NOT NULL,
  `user_pass` varchar(255) NOT NULL,
  `timestamp` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`sno`, `user_email`, `user_pass`, `timestamp`) VALUES
(1, 'user@gmail.com', '123', 0),
(2, 'shuvo@gmail.com', '$2y$10$Qyydwvn3VXALGIC/aE4Xk.6xtuSyApxDvCXHW4mGQ44hR5hQQ7Sr.', 2147483647),
(3, 'rafid@gmail.com', '$2y$10$YlTPZ/agwO46shWAuwm3GeLo1DByJuQS/MWWh1NrEdTmSl4cfqxn.', 2147483647),
(4, 'apu@gmail.com', '$2y$10$pcK5aDjSdjsiGtxXShs6M.5zcvGGzJwtz/hEO1zW6zYS7SzU1j3lm', 2147483647);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`comment_id`);

--
-- Indexes for table `threads`
--
ALTER TABLE `threads`
  ADD PRIMARY KEY (`thread_id`);
ALTER TABLE `threads` ADD FULLTEXT KEY `thread_title` (`thread_title`,`thread_desc`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`sno`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `category_id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `comment_id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `threads`
--
ALTER TABLE `threads`
  MODIFY `thread_id` int(7) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `sno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
