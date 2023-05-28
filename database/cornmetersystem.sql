-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 28, 2023 at 05:26 PM
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
-- Database: `cornmetersystem`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `UserID` int(10) NOT NULL,
  `username` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`UserID`, `username`, `password`) VALUES
(2, '6409682777', '1909802697311'),
(3, '123456789', '051145'),
(4, '6409610570', '666666m'),
(5, 'test01', '123456789'),
(6, 'test02', '123456789'),
(7, 'test03', '123456789'),
(8, 'test04', '123456789'),
(9, 'Zo om', '111111'),
(10, 'test05', '123456789'),
(11, 'test007lnw', 'sss123456');

-- --------------------------------------------------------

--
-- Table structure for table `actor`
--

CREATE TABLE `actor` (
  `ActorID` int(100) NOT NULL,
  `ActorName` varchar(255) NOT NULL,
  `ActorImageLink` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `actor`
--

INSERT INTO `actor` (`ActorID`, `ActorName`, `ActorImageLink`) VALUES
(1, 'Xochitl Gomez', 'https://www.thewikifeed.com/wp-content/uploads/2021/05/xochitl-gomez-1.jpg'),
(2, 'Benedict Cumberbatch', 'https://th.bing.com/th/id/R.5872858638ca8afd1b73114df12b7d22?rik=TJ%2bdhJkNA1s7Hg&pid=ImgRaw&r=0'),
(3, 'Elizabeth Chase Olsen', 'https://th.bing.com/th/id/OIP.KChD7Arp5mlqo5QUb1AGywHaH-?pid=ImgDet&rs=1'),
(4, 'Tim Robbins', 'https://th.bing.com/th/id/R.8d35060b13b499d14f6a11e4650448e0?rik=7%2fqzIZvpKrJbpA&pid=ImgRaw&r=0'),
(5, 'Morgan Freeman', 'https://th.bing.com/th/id/R.a44c63d6b410df766cfab68ca291a092?rik=IRtR%2befKUn3xlg&pid=ImgRaw&r=0'),
(6, 'Bob Gunton', 'https://th.bing.com/th/id/OIP.OV6JPw8DMGDy0m4CDh1ghAHaIQ?pid=ImgDet&rs=1'),
(7, 'Marlon Brando', 'https://th.bing.com/th/id/OIP.EIPQiVafDEf_sai0M_gVlQHaJV?pid=ImgDet&rs=1'),
(8, 'Al Pacino', 'https://i.pinimg.com/originals/26/d1/47/26d1471774e2eaa390ea3940a4913bc7.jpg'),
(9, 'James Caan', 'https://th.bing.com/th/id/R.8362f197cb1ae9d55b017bb01c76cb91?rik=2ml7BnpPjm5GSw&riu=http%3a%2f%2fesq.h-cdn.co%2fassets%2f15%2f17%2f1429828610-james-caan.jpg&ehk=JoWzUjdqQxrjUgwzXgILZIvgWJxdrgbhO5RO6XPMbmA%3d&risl=&pid=ImgRaw&r=0'),
(10, 'Christian Bale', 'https://th.bing.com/th/id/R.4fae2448c31d153b76adb052cbc8f066?rik=KHiMYPz7pel%2bVA&riu=http%3a%2f%2fstatic.cinemagia.ro%2fimg%2fdb%2factor%2f00%2f03%2f57%2fchristian-bale-266301l.jpg&ehk=diwCeYOpLzjbXSeTmU4VSdobudOFF6jZfN2naO%2f1VtY%3d&risl=&pid=ImgRaw&r=0'),
(11, 'Heath Ledger', 'https://th.bing.com/th/id/R.f97edc02973347c8dbb3d2adf67edef8?rik=skEerrg1eRImAw&pid=ImgRaw&r=0'),
(12, 'Aaron Eckhart', 'https://th.bing.com/th/id/OIP.ZJ5FScRZx7CaTR8iQLu_IAHaIw?pid=ImgDet&rs=1'),
(13, 'Robert De Niro', 'https://th.bing.com/th/id/OIP.oVQ-t4MwBBzVpdDR8QoJ2QHaJ0?pid=ImgDet&rs=1'),
(14, 'Robert Duvall', 'https://th.bing.com/th/id/OIP.RxYV6zNOayfFzQ7BG6rb4QHaJJ?pid=ImgDet&rs=1'),
(15, 'Henry Fonda', 'https://www.jericholibrary.org/sites/default/files/2018-04/henryfonda.jpg'),
(16, 'Lee J. Cobb', 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Lee_J._Cobb_1960s.JPG'),
(17, 'Martin Balsam', 'https://th.bing.com/th/id/OIP.13v8CsbiQoQw4IuKV3EGqQHaIy?pid=ImgDet&rs=1'),
(18, 'Liam Neeson', 'https://th.bing.com/th/id/OIP.yUiSgD7TizIq9cGXk_hGuAHaJ4?pid=ImgDet&rs=1'),
(19, 'Ralph Fiennes', 'https://cdn.britannica.com/63/212163-050-A266B2D0/Ralph-Fiennes-English-actor-2016.jpg'),
(20, 'Ben Kingsley', 'https://pagesix.com/wp-content/uploads/sites/3/2018/08/sir-ben-kingsley.jpg?quality=90&strip=all&w=1200'),
(21, 'Elijah Wood', 'https://th.bing.com/th/id/R.a3f651d78eea33709f3cb04576f4573a?rik=fJ3jwW%2by7EVj9w&pid=ImgRaw&r=0'),
(22, 'Viggo Mortensen', 'https://th.bing.com/th/id/OIP.prkpJFeYqvb5D-0eUSnWygHaGp?pid=ImgDet&rs=1'),
(23, 'Ian McKellen', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/SDCC13_-_Ian_McKellen.jpg/1200px-SDCC13_-_Ian_McKellen.jpg'),
(24, 'John Travolta', 'https://content4.promiflash.de/article-images/video_1080/john-travolta-laechelt-2.jpg'),
(25, 'Uma Thurman', 'https://th.bing.com/th/id/R.07939ddfb4326f6c82f79c8a1951cd1b?rik=cTs9QII5NFSN2Q&riu=http%3a%2f%2fimg2.timeinc.net%2finstyle%2fimages%2f2014%2fWRN%2f042814-uma-thurman-lead-640.jpg&ehk=47pd0NQWiNVqBdLdpzd2mB5iZ1nI%2fbVzARbd%2b%2f13pe8%3d&risl=&pid=ImgRaw&r'),
(26, 'Samuel L. Jackson', 'https://th.bing.com/th/id/R.b5251c814ae17db3982732a24e318493?rik=c881kuKud5diFw&riu=http%3a%2f%2fimage.tmdb.org%2ft%2fp%2foriginal%2fioAvaWLQJb4j5VyGmTdb2EOkP4r.jpg&ehk=BHRtpYxITYtbUIkXgO3AFErMuSYbU%2ffdUNCMx7TyhG0%3d&risl=&pid=ImgRaw&r=0'),
(27, 'Orlando Bloom', 'https://th.bing.com/th/id/OIP.RmSmG8XYyDIsClEt8lLw_QHaKQ?pid=ImgDet&rs=1'),
(28, 'Clint Eastwood', 'https://th.bing.com/th/id/OIP.FtqxjKK8vITV_gC0UrUXJgHaFI?pid=ImgDet&rs=1'),
(29, 'Eli Wallach', 'https://th.bing.com/th/id/R.d121e00b639a0de0526d1d5fb3028704?rik=4DgLrRucpCqAvg&pid=ImgRaw&r=0'),
(30, 'Lee Van Cleef', 'https://th.bing.com/th/id/R.0454adb5db1f37f46d997f4267a6781f?rik=SCgIXaZMDbDU0A&pid=ImgRaw&r=0'),
(31, 'Tom Hanks', 'https://th.bing.com/th/id/R.123265a378c24451b8f5990306269b62?rik=cz6EP6rRjAaFAA&riu=http%3a%2f%2fwww.toledoblade.com%2fimage%2f2012%2f03%2f02%2f800x_b1_cCM_z_ca493%2c0%2c1944%2c1636%2fTom-Hanks.jpg&ehk=cacCAI7VFKCyoYROv3Z%2f%2bcxDypKMtUdq11Vm1y8MFgc%3d&ri'),
(32, 'Robin Wright', 'https://upload.wikimedia.org/wikipedia/commons/5/51/Robin_Wright_2009.jpg'),
(33, 'Gary Sinise', 'https://www.thefamouspeople.com/profiles/images/gary-sinise-2.jpg'),
(34, 'Brad Pitt', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Brad_Pitt_2019_by_Glenn_Francis.jpg/1200px-Brad_Pitt_2019_by_Glenn_Francis.jpg'),
(35, 'Edward Norton', 'https://www.indiewire.com/wp-content/uploads/2016/10/edward-norton.jpg'),
(36, 'Meat Loaf', 'https://th.bing.com/th/id/OIP.jPoZsUJ4meDTcT8uCq0lAgHaFP?pid=ImgDet&rs=1'),
(37, 'Leonardo DiCaprio', 'https://th.bing.com/th/id/OIP.CXSYHaDjB6HwhQ9M6KCxXAHaIH?pid=ImgDet&rs=1'),
(38, 'Joseph Gordon Levitt', 'https://s3-eu-west-1.amazonaws.com/static.screenweek.it/artist/1857.jpg?1484063328'),
(39, 'Elliot Page', 'https://th.bing.com/th/id/OIP.w6x_MMHdNehwELQRP6GzIwHaHa?pid=ImgDet&rs=1'),
(40, 'Mark Hamill', 'https://th.bing.com/th/id/R.2007041e9041459fa819d7aafa2e02a0?rik=1V1YTaLzo%2fmcdA&pid=ImgRaw&r=0'),
(41, 'Harrison Ford', 'https://th.bing.com/th/id/OIP.X3vXOmPXq5wU3gvChCJeZwHaFt?pid=ImgDet&rs=1'),
(42, 'Carrie Fisher', 'https://th.bing.com/th/id/R.fcff27c7d751258dd09e62b714fadf46?rik=7h74U9q9fyLuGQ&riu=http%3a%2f%2fwww.aceshowbiz.com%2fimages%2fwennpic%2fcarrie-fisher-premiere-sorority-row-01.jpg&ehk=j2OqQF22KwG01Kn8C%2biKuUsx5xEVED17CPA4NV%2bZu4Y%3d&risl=&pid=ImgRaw&r=0'),
(43, 'Keanu Reeves', 'https://static4.businessinsider.com/image/5cc9c5c2e9f08a13fb2b5abc-1753/keanu%20reeves.jpg'),
(44, 'Laurence Fishburne', 'https://th.bing.com/th/id/OIP.hQ6wQLy-Z7QhTeq_6gjMBwHaFH?pid=ImgDet&rs=1'),
(45, 'Carrie-Anne Moss', 'https://th.bing.com/th/id/R.7e85683d36229416c626c4901951381c?rik=pyoQaLL8maSJkA&pid=ImgRaw&r=0'),
(46, 'Ray Liotta', 'https://th.bing.com/th/id/OIP.xV7tGdx7GGMYY2uMwoTEhwHaHa?pid=ImgDet&rs=1'),
(47, 'Joe Pesci', 'https://th.bing.com/th/id/OIP.yv2dqxnOV6RHWTDOAPRwlQHaHZ?pid=ImgDet&rs=1'),
(48, 'Jack Nicholson', 'https://th.bing.com/th/id/R.4ece87031ddcac28628dfca53d5bfafe?rik=WcmYxcFezMsoGg&pid=ImgRaw&r=0'),
(49, 'Louise Fletcher', 'https://th.bing.com/th/id/OIP._sI7RvTV5dvx1Qk-UWwLOgHaJ4?pid=ImgDet&rs=1'),
(50, 'Michael Berryman', 'https://th.bing.com/th/id/OIP.z6_JTBB0YHJ3DdsIjS3XOgHaGL?pid=ImgDet&rs=1'),
(51, 'Kevin Spacey', 'https://th.bing.com/th/id/OIP.AiOiyWKnfPEY8APmXRfYuQHaFs?pid=ImgDet&rs=1'),
(52, 'Toshirô Mifune', 'https://www.mubis.es/media/users/18186/231157/recordando-a-toshir-mifune-original.jpg'),
(53, 'Takashi Shimura', 'https://th.bing.com/th/id/R.fcea573ae485292fa3d606c7aee80c82?rik=0LemC3H6gzQTuA&pid=ImgRaw&r=0'),
(54, 'Keiko Tsushima', 'https://th.bing.com/th/id/R.7442238813cc69da3dd04576d18bcb3c?rik=fjj3Ve6eIMPXhA&pid=ImgRaw&r=0'),
(55, 'James Stewart', 'https://th.bing.com/th/id/OIP.GFdELierCXXsiAnZHvdY0QHaIk?pid=ImgDet&rs=1'),
(56, 'Donna Reed', 'https://th.bing.com/th/id/OIP.wcvC0skUK41Km1gNdTkg6wHaJY?pid=ImgDet&w=620&h=786&rs=1'),
(57, 'Lionel Barrymore', 'https://images.fineartamerica.com/images-medium-large/lionel-barrymore-1878-1954-granger.jpg'),
(58, 'Jodie Foster', 'https://th.bing.com/th/id/OIP.yuPEK8miKQ-0mOxWJTfiRQHaJF?pid=ImgDet&rs=1'),
(59, 'Anthony Hopkins', 'https://th.bing.com/th/id/OIP.vXnWm3_wctT8pQaolK0ybAHaJb?pid=ImgDet&rs=1'),
(60, 'Lawrence A. Bonney', 'https://th.bing.com/th/id/R.5ff9479793c7680a0ec24f08ff45f451?rik=OvM%2bFAfvmgC0lw&riu=http%3a%2f%2fwww.aveleyman.com%2fGallery%2f2017%2fB%2f38685.jpg&ehk=XAo5tdUXELAWUoSQS6mItLsgHDXykH96BkesjKLz2a0%3d&risl=&pid=ImgRaw&r=0'),
(61, 'Matt Damon', 'https://th.bing.com/th/id/OIP.KZjOa9BmMBgOAPi27hzhCQHaKm?pid=ImgDet&rs=1'),
(62, 'Tom Sizemore', 'https://th.bing.com/th/id/R.6e331cb800449392b3bcbd1e2912a807?rik=SoWaQcRobO8%2fmw&pid=ImgRaw&r=0'),
(63, 'Alexandre Rodrigues', 'https://th.bing.com/th/id/OIP.AgkxpIMaML5-eFPXTzFGXgHaHa?pid=ImgDet&rs=1'),
(64, 'Leandro Firmino', 'https://images.mubicdn.net/images/cast_member/2446/cache-134026-1596273313/image-w856.jpg?size=800x'),
(65, 'Matheus Nachtergaele', 'https://th.bing.com/th/id/OIP.rb1-HsufPPG6Fade9meNKgHaGl?pid=ImgDet&rs=1'),
(66, 'Matthew McConaughey', 'https://th.bing.com/th/id/OIP.Llp4HkDnsla-TY8yEE_69wHaE8?pid=ImgDet&rs=1'),
(67, 'Anne Hathaway', 'https://th.bing.com/th/id/R.0529f2e81161fc5fc5c1b36959451388?rik=x1QNFYh6SNSMqQ&pid=ImgRaw&r=0'),
(68, 'Jessica Chastain', 'https://th.bing.com/th/id/R.b0b5d6d54e0dc01357dfd91a4320fdb3?rik=Qa0BNF1KuSjOhg&pid=ImgRaw&r=0'),
(69, 'Jennifer Lawrence', 'https://th.bing.com/th/id/OIP.fHmPD9HwDI6w4_jBTfcrzgHaI3?pid=ImgDet&rs=1'),
(70, 'Josh Hutcherson', 'https://th.bing.com/th/id/OIP.ZakyFMIhn88-FUplhxvvDQHaI-?pid=ImgDet&rs=1'),
(71, 'Liam Hemsworth', 'https://th.bing.com/th/id/R.f2cbfd698a387b9132c2fa6f2e4412c7?rik=r7RnzguxGm00RQ&pid=ImgRaw&r=0'),
(72, 'Dylan O\'Brien', 'https://th.bing.com/th/id/R.e90623465095f11e748f41f1e5c0f6be?rik=FzCzigTxajkEQQ&pid=ImgRaw&r=0'),
(73, 'Kaya Scodelario', 'https://th.bing.com/th/id/R.7a44ef4c8d6c77347a47d2c6a05a292e?rik=ZA2Ch7Xznfze7g&pid=ImgRaw&r=0'),
(74, 'Will Poulter', 'https://th.bing.com/th/id/R.a08091e88c0034b0d3ab1960a8a2773e?rik=X30TvyFagRMLjg&pid=ImgRaw&r=0'),
(75, 'Kaya Kiyohara', 'https://i.mydramalist.com/2BDrO_5_c.jpg'),
(76, 'Taishi Nakagawa', 'https://th.bing.com/th/id/OIP.qk_k3nbZ1UUYodiuResqYgAAAA?pid=ImgDet&rs=1'),
(77, '', '');

-- --------------------------------------------------------

--
-- Table structure for table `cast`
--

CREATE TABLE `cast` (
  `MovieID` int(100) NOT NULL,
  `ActorID` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cast`
--

INSERT INTO `cast` (`MovieID`, `ActorID`) VALUES
(1, 66),
(1, 67),
(1, 68),
(2, 1),
(2, 2),
(2, 3),
(3, 69),
(3, 70),
(3, 71),
(4, 4),
(4, 5),
(4, 6),
(5, 7),
(5, 8),
(5, 9),
(6, 10),
(6, 11),
(6, 12),
(7, 8),
(7, 13),
(7, 14),
(8, 15),
(8, 16),
(8, 17),
(9, 18),
(9, 19),
(9, 20),
(10, 21),
(10, 22),
(10, 23),
(11, 21),
(11, 23),
(11, 27),
(12, 24),
(12, 25),
(12, 26),
(13, 28),
(13, 29),
(13, 30),
(14, 31),
(14, 32),
(14, 33),
(15, 34),
(15, 35),
(15, 36),
(16, 21),
(16, 22),
(16, 23),
(17, 37),
(17, 38),
(17, 39),
(18, 40),
(18, 41),
(18, 42),
(19, 43),
(19, 44),
(19, 45),
(20, 13),
(20, 46),
(20, 47),
(21, 48),
(21, 49),
(21, 50),
(22, 5),
(22, 34),
(22, 51),
(23, 52),
(23, 53),
(23, 54),
(24, 55),
(24, 56),
(24, 57),
(25, 58),
(25, 59),
(25, 60),
(26, 31),
(26, 61),
(26, 62),
(27, 63),
(27, 64),
(27, 65),
(28, 72),
(28, 73),
(28, 74),
(29, 75),
(29, 76);

-- --------------------------------------------------------

--
-- Table structure for table `classify`
--

CREATE TABLE `classify` (
  `MovieID` int(100) NOT NULL,
  `GenreID` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `classify`
--

INSERT INTO `classify` (`MovieID`, `GenreID`) VALUES
(1, 1),
(1, 6),
(1, 10),
(2, 3),
(2, 6),
(2, 9),
(3, 3),
(3, 6),
(3, 10),
(4, 1),
(5, 1),
(5, 2),
(6, 1),
(6, 2),
(6, 3),
(7, 1),
(7, 2),
(8, 1),
(8, 2),
(9, 1),
(9, 4),
(9, 5),
(10, 1),
(10, 3),
(10, 6),
(11, 1),
(11, 3),
(11, 6),
(12, 1),
(12, 2),
(13, 3),
(13, 7),
(14, 1),
(14, 8),
(15, 1),
(16, 1),
(16, 3),
(16, 6),
(17, 3),
(17, 6),
(18, 3),
(18, 6),
(18, 9),
(19, 6),
(19, 10),
(20, 4),
(21, 1),
(22, 1),
(22, 2),
(22, 12),
(23, 1),
(23, 6),
(24, 1),
(24, 9),
(24, 11),
(25, 1),
(25, 2),
(25, 13),
(26, 1),
(26, 14),
(27, 1),
(27, 2),
(28, 3),
(28, 10),
(28, 12),
(29, 1),
(29, 8),
(29, 15);

-- --------------------------------------------------------

--
-- Table structure for table `directed`
--

CREATE TABLE `directed` (
  `MovieID` int(100) NOT NULL,
  `DirectorID` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `directed`
--

INSERT INTO `directed` (`MovieID`, `DirectorID`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 1),
(7, 5),
(8, 6),
(9, 7),
(10, 8),
(11, 8),
(12, 9),
(13, 10),
(14, 11),
(15, 12),
(16, 8),
(17, 1),
(18, 13),
(19, 14),
(19, 16),
(20, 15),
(21, 17),
(22, 12),
(23, 18),
(24, 19),
(25, 20),
(26, 7),
(27, 21),
(27, 22),
(29, 23);

-- --------------------------------------------------------

--
-- Table structure for table `director`
--

CREATE TABLE `director` (
  `DirectorID` int(100) NOT NULL,
  `DirectorName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `director`
--

INSERT INTO `director` (`DirectorID`, `DirectorName`) VALUES
(1, 'Christopher Nolan'),
(2, 'Sam Raimi'),
(3, 'Gary Rossi'),
(4, 'Frank Darabont'),
(5, 'Francis Ford Coppola'),
(6, 'Sidney Lumet'),
(7, 'Steven Spielberg'),
(8, 'Peter Jackson'),
(9, 'Quentin Tarantino'),
(10, 'Sergio Leone'),
(11, 'Robert Zemeckis'),
(12, 'David Fincher'),
(13, 'Irvin Kershner'),
(14, 'Lana Wachowski'),
(15, 'Martin Scorsese'),
(16, 'Lilly Wachowski'),
(17, 'Milos Forman'),
(18, 'Akira Kurosawa'),
(19, 'Frank Capra'),
(20, 'Jonathan Demme'),
(21, 'Fernando Meirelles'),
(22, 'Kátia Lund'),
(23, 'Kôtarô Tamura');

-- --------------------------------------------------------

--
-- Table structure for table `genres`
--

CREATE TABLE `genres` (
  `GenreID` int(10) NOT NULL,
  `Genre` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `genres`
--

INSERT INTO `genres` (`GenreID`, `Genre`) VALUES
(1, 'Drama'),
(2, 'Crime'),
(3, 'Action'),
(4, 'Biography'),
(5, 'History'),
(6, 'Adventure'),
(7, 'Western'),
(8, 'Romance'),
(9, 'Fantasy'),
(10, 'Sci-Fi'),
(11, 'Family'),
(12, 'Mystery'),
(13, 'thriller'),
(14, 'War'),
(15, 'Animation');

-- --------------------------------------------------------

--
-- Table structure for table `movie`
--

CREATE TABLE `movie` (
  `MovieID` int(100) NOT NULL,
  `Year` int(100) NOT NULL,
  `Title` text NOT NULL,
  `Description` text NOT NULL,
  `ImageLink` text NOT NULL,
  `VideoLink` text NOT NULL,
  `Rate` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `movie`
--

INSERT INTO `movie` (`MovieID`, `Year`, `Title`, `Description`, `ImageLink`, `VideoLink`, `Rate`) VALUES
(1, 2014, 'Interstellar', 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.', 'https://th.bing.com/th/id/R.0e3abc76038b2489b794b60318879783?rik=tPU5ztPP31oDrg&pid=ImgRaw&r=0', 'https://www.youtube.com/embed/zSWdZVtXT7E?controls=0&autoplay=1&mute=1&loop=1&playlist=zSWdZVtXT7E&modestbranding=1', 'PG13'),
(2, 2022, 'Doctor Strange in the Multiverse of Madness', 'Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across multiverses, to battle multiple threats, including other-universe versions of himself, which threaten to wipe out millions across the multiverse. They seek help from Wanda the Scarlet Witch, Wong and others.', 'https://sportshub.cbsistatic.com/i/2022/02/13/1b917e47-3a41-415a-b3f5-4f855dc0caad/doctor-strange-in-the-multiverse-of-madness-trailer-poster.jpg?auto=webp&width=810&height=1200&crop=0.675:1,smart', 'https://www.youtube.com/embed/aWzlQ2N6qqg?controls=0&autoplay=1&mute=1&loop=1&playlist=aWzlQ2N6qqg&modestbranding=1', 'PG-13'),
(3, 2012, 'The Hunger Games', 'Katniss Everdeen voluntarily takes her younger sister\'s place in the Hunger Games: a televised competition in which two teenagers from each of the twelve Districts of Panem are chosen at random to fight to the death.', 'https://th.bing.com/th/id/R.b2d400c3416c67e91c5da2cc9518084b?rik=KR8qxejDuh9VwQ&riu=http%3a%2f%2fcdn.collider.com%2fwp-content%2fuploads%2fthe-hunger-games-mockingjay-part-1-final-poster.jpg&ehk=zmdOGXD58qe3jXoTbm3hQUwdAt4ll4HkjKV3dXlU4gs%3d&risl=&pid=Img', 'https://www.youtube.com/embed/mfmrPu43DF8?controls=0&autoplay=1&mute=1&loop=1&playlist=mfmrPu43DF8&modestbranding=1', 'PG13'),
(4, 1994, 'The Shawshank Redemption', 'Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.', 'https://th.bing.com/th/id/R.852d2f6a2c873493d13fee5843fab817?rik=RrTJMPCkAOt6tQ&riu=http%3a%2f%2fwww.reelworldtheology.com%2fwp-content%2fuploads%2f2018%2f08%2fthe-shawshank-redemption-movie-poster-29x41-in-r2000-franck-darabont-tim-robbins.jpg&ehk=NgeHxlYon0p8Yeqwf9xQ7W3FWlEVZn4vT7FR6v1V0us%3d&risl=&pid=ImgRaw&r=0', 'https://www.youtube.com/embed/PLl99DlL6b4?controls=0&autoplay=1&mute=1&loop=1&playlist=PLl99DlL6b4&modestbranding=1', 'R'),
(5, 1972, 'The Godfather', 'The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.', 'https://th.bing.com/th/id/OIP.EZncYnNoDxdf2bBsnDbQigAAAA?pid=ImgDet&rs=1', 'https://www.youtube.com/embed/sY1S34973zA?controls=0&autoplay=1&mute=1&loop=1&playlist=sY1S34973zA&modestbranding=1', 'R'),
(6, 2008, 'The Dark Knight', 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.', 'https://image.tmdb.org/t/p/original/pKKvCaL1TPTVtbI6EeliyND3api.jpg', 'https://www.youtube.com/embed/LDG9bisJEaI?controls=0&autoplay=1&mute=1&loop=1&playlist=LDG9bisJEaI&modestbranding=1', 'PG13'),
(7, 1974, 'The Godfather Part II', 'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.', 'https://th.bing.com/th/id/OIP.UdW59NeOKjMFUlsD5F9xUQHaJ9?pid=ImgDet&rs=1', 'https://www.youtube.com/embed/OA1ij0alE0w?controls=0&autoplay=1&mute=1&loop=1&playlist=OA1ij0alE0w&modestbranding=1', 'R'),
(8, 1957, '12 Angry Men', 'The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.', 'https://th.bing.com/th/id/OIP.AIFNSFETGeQgAeWbKN0jiwHaLH?pid=ImgDet&rs=1', 'https://www.youtube.com/embed/TEN-2uTi2c0?controls=0&autoplay=1&mute=1&loop=1&playlist=TEN-2uTi2c0&modestbranding=1', 'Approved'),
(9, 1993, 'Schindler\'s List', 'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.', 'https://th.bing.com/th/id/R.5b0fef44796aa575f3a2be5f49a7dded?rik=1iVVhmppopopbg&pid=ImgRaw&r=0', 'https://www.youtube.com/embed/mxphAlJID9U?controls=0&autoplay=1&mute=1&loop=1&playlist=mxphAlJID9U&modestbranding=1', 'R'),
(10, 2003, 'The Lord of the Rings: The Return of the King', 'Gandalf and Aragorn lead the World of Men against Sauron\'s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.\r\n', 'https://th.bing.com/th/id/R.ce810d8caedf8b2944874bc68794891c?rik=ANfI3u0RxHoenQ&pid=ImgRaw&r=0', 'https://www.youtube.com/embed/r5X-hFf6Bwo?controls=0&autoplay=1&mute=1&loop=1&playlist=r5X-hFf6Bwo&modestbranding=1', 'PG13'),
(11, 2001, 'The Lord of the Rings: The Fellowship of the Ring', 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.\r\n', 'https://th.bing.com/th/id/R.15efb377ba5dee52a7c1d05ab80dbc51?rik=6A0yhxCGb86f3A&pid=ImgRaw&r=0', 'https://www.youtube.com/embed/V75dMMIW2B4?controls=0&autoplay=1&mute=1&loop=1&playlist=V75dMMIW2B4&modestbranding=1', 'PG13'),
(12, 1994, 'Pulp Fiction', 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.\r\n', 'https://www.themoviedb.org/t/p/original/pbWgQPC6l9pkpEpi3WNRSfWYNP6.jpg', 'https://www.youtube.com/embed/s7EdQ4FqbhY?controls=0&autoplay=1&mute=1&loop=1&playlist=s7EdQ4FqbhY&modestbranding=1', 'R'),
(13, 1966, 'The Good, the Bad and the Ugly', 'A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.\r\n', 'https://th.bing.com/th/id/OIP.4UJ6Gc3S4iBSTJPdmxQjFAHaKc?pid=ImgDet&rs=1', 'https://www.youtube.com/embed/IFNUGzCOQoI?controls=0&autoplay=1&mute=1&loop=1&playlist=IFNUGzCOQoI&modestbranding=1', 'Approved'),
(14, 1994, 'Forrest Gump', 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.', 'https://th.bing.com/th/id/R.806cb233722d9687fdf4b57b1e0b18a6?rik=U8vUGoUF1SGmWA&pid=ImgRaw&r=0', 'https://www.youtube.com/embed/bLvqoHBptjg?controls=0&autoplay=1&mute=1&loop=1&playlist=bLvqoHBptjg&modestbranding=1', 'PG13'),
(15, 1999, 'Fight Club', 'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.', 'https://th.bing.com/th/id/R.8f9c63a79386e42a75c4e8044a8b787c?rik=JQlP%2bW4JsVqljQ&pid=ImgRaw&r=0', 'https://www.youtube.com/embed/BdJKm16Co6M?controls=0&autoplay=1&mute=1&loop=1&playlist=BdJKm16Co6M&modestbranding=1', 'R'),
(16, 2002, 'The Lord of the Rings: The Two Towers', 'While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron\'s new ally, Saruman, and his hordes of Isengard.', 'https://th.bing.com/th/id/R.b545190f5ee9a7e319ae24527b2bb6e1?rik=72ExtGDL5qRlUA&pid=ImgRaw&r=0', 'https://www.youtube.com/embed/r5X-hFf6Bwo&t=22s?controls=0&autoplay=1&mute=1&loop=1&playlist=r5X-hFf6Bwo&t=22s&modestbranding=1', 'PG13'),
(17, 2010, 'Inception', 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.\r\n', 'https://th.bing.com/th/id/R.b1a2c53f7f3cfc84e7cdf870d26deb70?rik=eW5Mb4YdBp6ZCQ&pid=ImgRaw&r=0', 'https://www.youtube.com/embed/Qwe6qXFTdgc?controls=0&autoplay=1&mute=1&loop=1&playlist=Qwe6qXFTdgc&modestbranding=1', 'PG13'),
(18, 1980, 'Star Wars: Episode V - The Empire Strikes Back', 'After the Rebels are overpowered by the Empire, Luke Skywalker begins his Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.\r\n', 'https://starwarslatinamerica.com/wp-content/gallery/star-wars-episode-v-the-empire-strikes-back-remastered-2015-digital/000.jpg', 'https://www.youtube.com/embed/JNwNXF9Y6kY?controls=0&autoplay=1&mute=1&loop=1&playlist=JNwNXF9Y6kY&modestbranding=1', 'PG'),
(19, 1999, 'The Matrix', 'When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.\r\n', 'https://www.themoviedb.org/t/p/original/aOIuZAjPaRIE6CMzbazvcHuHXDc.jpg', 'https://www.youtube.com/embed/m8e-FF8MsqU?controls=0&autoplay=1&mute=1&loop=1&playlist=m8e-FF8MsqU&modestbranding=1', 'R'),
(20, 1990, 'Goodfellas', 'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.\r\n', 'https://www.themoviedb.org/t/p/original/nJjqs7emf9bR2I5H6rBSBJHxDGx.jpg', 'https://www.youtube.com/embed/qo5jJpHtI1Y?controls=0&autoplay=1&mute=1&loop=1&playlist=qo5jJpHtI1Y&modestbranding=1', 'R'),
(21, 1975, 'One Flew Over the Cuckoo\'s Nest', 'In the Fall of 1963, a Korean War veteran and criminal pleads insanity and is admitted to a mental institution, where he rallies up the scared patients against the tyrannical nurse.\r\n', 'https://th.bing.com/th/id/R.2d46fbb0d293776f039a2cfac14058bc?rik=REcH%2brQ5FMFDJw&pid=ImgRaw&r=0', 'https://www.youtube.com/embed/_A4bCifObI4?controls=0&autoplay=1&mute=1&loop=1&playlist=_A4bCifObI4&modestbranding=1', 'R'),
(22, 1995, 'Se7en', 'Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.', 'https://www.themoviedb.org/t/p/original/fEqMJXan5WrE5l7QlPeNIDfGX0W.jpg', 'https://www.youtube.com/embed/vr3UZ-axauU?controls=0&autoplay=1&mute=1&loop=1&playlist=vr3UZ-axauU&modestbranding=1', 'R'),
(23, 1954, 'Seven Samurai', 'Farmers from a village exploited by bandits hire a veteran samurai for protection, who gathers six other samurai to join him.\r\n', 'https://th.bing.com/th/id/R.9a5fcc71b6bdbb2a7965bdb4494d6a7c?rik=E32fUQSE6BmyhA&pid=ImgRaw&r=0', 'https://www.youtube.com/embed/Z1q_UjzM3cI?controls=0&autoplay=1&mute=1&loop=1&playlist=Z1q_UjzM3cI&modestbranding=1', 'Not Rated'),
(24, 1946, 'It\'s a Wonderful Life', 'An angel is sent from Heaven to help a desperately frustrated businessman by showing him what life would have been like if he had never existed.', 'https://th.bing.com/th/id/OIP.VneIABDkU0rkkW0u85Bc7wHaJ4?pid=ImgDet&rs=1', 'https://www.youtube.com/embed/ewe4lg8zTYA?controls=0&autoplay=1&mute=1&loop=1&playlist=ewe4lg8zTYA&modestbranding=1', 'PG'),
(25, 1991, 'The Silence of the Lambs', 'A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.\r\n', 'https://th.bing.com/th/id/R.c9c19d3f0fa5fe7f20a3da0009db6fb3?rik=6Ol5drorWjYtvw&pid=ImgRaw&r=0', 'https://www.youtube.com/embed/gSQciiKhqXc?controls=0&autoplay=1&mute=1&loop=1&playlist=gSQciiKhqXc&modestbranding=1', 'R'),
(26, 1998, 'Saving Private Ryan', 'Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.\r\n', 'https://th.bing.com/th/id/R.d5a046ac7fe62908f2db9d9424ab81d5?rik=0YktzrLNvlsdow&pid=ImgRaw&r=0', 'https://www.youtube.com/embed/9CiW_DgxCnQ?controls=0&autoplay=1&mute=1&loop=1&playlist=9CiW_DgxCnQ&modestbranding=1', 'R'),
(27, 2002, 'City of God', 'In the slums of Rio, two kids\' paths diverge as one struggles to become a photographer and the other a kingpin.\r\n', 'https://th.bing.com/th/id/R.5e6b40f50763e4febcea0c6346b2be50?rik=IDWXLnzl%2fQq6UQ&pid=ImgRaw&r=0', 'https://www.youtube.com/embed/dcUOO4Itgmw?controls=0&autoplay=1&mute=1&loop=1&playlist=dcUOO4Itgmw&modestbranding=1', 'R'),
(28, 2014, 'The Maze Runner', 'Thomas is deposited in a community of boys after his memory is erased, soon learning they\'re all trapped in a maze that will require him to join forces with fellow \"runners\" for a shot at escape.', 'https://th.bing.com/th/id/OIP.FO88GonevOnGKbBKteXb7wHaLH?pid=ImgDet&rs=1', 'https://www.youtube.com/embed/AwwbhhjQ9Xk?controls=0&autoplay=1&mute=1&loop=1&playlist=AwwbhhjQ9Xk&modestbranding=1', 'G'),
(29, 2020, 'Josee, the Tiger and the Fish', 'Tsuneo is a university student and Josee is a young girl who has rarely gone out of the house by herself due to her being unable to walk. The two meet when Tsuneo finds Josee\'s grandmother taking her out for a evening walk.', 'https://th.bing.com/th/id/R.f0984b28b6f35a224c469a685cd7fcf7?rik=pDKq4cykfxyO6w&pid=ImgRaw&r=0', 'https://www.youtube.com/embed/w6IsHL91aXo?controls=0&autoplay=1&mute=1&loop=1&playlist=w6IsHL91aXo&modestbranding=1', 'G');

-- --------------------------------------------------------

--
-- Table structure for table `profile`
--

CREATE TABLE `profile` (
  `UserID` int(10) NOT NULL,
  `Email` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Nickname` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Firstname` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Lastname` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `profile`
--

INSERT INTO `profile` (`UserID`, `Email`, `Nickname`, `Firstname`, `Lastname`) VALUES
(2, 'nitikorn.tha@dome.tu.ac.th', 'Heisneky', 'Nitikorn', 'Thanasutr'),
(4, 'boss88@gmail.com', 'Apostles', 'kittipat', 'suwan'),
(5, 'kentnitikorn@gmail.com', 'ILoveCS251', 'heineken', 'Heisneky'),
(6, 'Testsubject02@gmail.com', 'BigDaddy', 'testsubject', 'Delta'),
(7, 'testsubject03@gmail.com', 'Little sister', 'test02', 'Gramma'),
(8, 'test04@gmail.com', 'BigBoi', 'test04', 'sigma'),
(9, 'Chocomint_Sundea@gmail.com', 'Sundea', 'Zoom', 'ZAZA'),
(10, 'nitikorn.tha@dome.tu.ac.t', 'กางมุ้งรอ', 'สุดหล่อ', 'คิ้วดก'),
(11, 'knight@gmail.com', 'The Knight', 'nitikorn', 'thanasutr');

-- --------------------------------------------------------

--
-- Table structure for table `review`
--

CREATE TABLE `review` (
  `MovieID` int(100) NOT NULL,
  `UserID` int(10) NOT NULL,
  `Score` float NOT NULL,
  `review` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Date` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `review`
--

INSERT INTO `review` (`MovieID`, `UserID`, `Score`, `review`, `Date`) VALUES
(1, 2, 4, 'that pretty good', '2023-03-22'),
(26, 2, 5, 'Save that Ryan!!!!', '2023-04-10'),
(28, 2, 3.5, 'Run Boiiiiiiiii', '2023-04-10'),
(1, 4, 4, 'I love it', '2023-04-18'),
(11, 2, 5, 'KUY', '2023-04-20'),
(4, 8, 5, 'Ohhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh', '2023-04-21'),
(19, 8, 3.5, 'Red pill or Blue pill?', '2023-04-21'),
(6, 8, 2.5, 'I am\nBATMAN!!!', '2023-04-21'),
(22, 8, 3, 'what about eight', '2023-04-21'),
(29, 5, 4, 'ดูจบแล้ว อยากให้แฟนนั่งวิลแชร์เลยคับ', '2023-04-22'),
(2, 9, 0.5, 'ไม่เคยดู แต่ให้คะแนนไว้ก่อน', '2023-04-26'),
(4, 9, 5, 'คนดำในหนัง ให้เต็มเลย', '2023-04-26'),
(29, 9, 3, 'ชอบคนพิการ', '2023-04-26'),
(22, 9, 3, 'ขอความเป็นธรรมให้ฆาตกรด้วยครับ มีgoreด้วยให้+2', '2023-04-26'),
(2, 7, 5, 'หล่อค่ะ ชอบมาก', '2023-05-24'),
(2, 2, 4.5, 'CG ดรอปลงมาก', '2023-05-26');

-- --------------------------------------------------------

--
-- Table structure for table `writer`
--

CREATE TABLE `writer` (
  `WriterID` int(100) NOT NULL,
  `WriterName` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `written`
--

CREATE TABLE `written` (
  `MovieID` int(100) NOT NULL,
  `WriterID` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`UserID`);

--
-- Indexes for table `actor`
--
ALTER TABLE `actor`
  ADD PRIMARY KEY (`ActorID`);

--
-- Indexes for table `cast`
--
ALTER TABLE `cast`
  ADD KEY `MovieID` (`MovieID`,`ActorID`),
  ADD KEY `ActorID` (`ActorID`);

--
-- Indexes for table `classify`
--
ALTER TABLE `classify`
  ADD KEY `MovieID` (`MovieID`,`GenreID`),
  ADD KEY `GenreID` (`GenreID`);

--
-- Indexes for table `directed`
--
ALTER TABLE `directed`
  ADD KEY `MovieID` (`MovieID`,`DirectorID`),
  ADD KEY `DirectorID` (`DirectorID`);

--
-- Indexes for table `director`
--
ALTER TABLE `director`
  ADD PRIMARY KEY (`DirectorID`);

--
-- Indexes for table `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`GenreID`);

--
-- Indexes for table `movie`
--
ALTER TABLE `movie`
  ADD PRIMARY KEY (`MovieID`);

--
-- Indexes for table `profile`
--
ALTER TABLE `profile`
  ADD KEY `UserID` (`UserID`);

--
-- Indexes for table `review`
--
ALTER TABLE `review`
  ADD KEY `MovieID` (`MovieID`,`UserID`),
  ADD KEY `UserID` (`UserID`);

--
-- Indexes for table `writer`
--
ALTER TABLE `writer`
  ADD PRIMARY KEY (`WriterID`);

--
-- Indexes for table `written`
--
ALTER TABLE `written`
  ADD KEY `MovieID` (`MovieID`,`WriterID`),
  ADD KEY `WriterID` (`WriterID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `UserID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `actor`
--
ALTER TABLE `actor`
  MODIFY `ActorID` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;

--
-- AUTO_INCREMENT for table `director`
--
ALTER TABLE `director`
  MODIFY `DirectorID` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `genres`
--
ALTER TABLE `genres`
  MODIFY `GenreID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `movie`
--
ALTER TABLE `movie`
  MODIFY `MovieID` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `writer`
--
ALTER TABLE `writer`
  MODIFY `WriterID` int(100) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cast`
--
ALTER TABLE `cast`
  ADD CONSTRAINT `cast_ibfk_1` FOREIGN KEY (`ActorID`) REFERENCES `actor` (`ActorID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `cast_ibfk_2` FOREIGN KEY (`MovieID`) REFERENCES `movie` (`MovieID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `classify`
--
ALTER TABLE `classify`
  ADD CONSTRAINT `classify_ibfk_1` FOREIGN KEY (`GenreID`) REFERENCES `genres` (`GenreID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `classify_ibfk_2` FOREIGN KEY (`MovieID`) REFERENCES `movie` (`MovieID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `directed`
--
ALTER TABLE `directed`
  ADD CONSTRAINT `directed_ibfk_1` FOREIGN KEY (`DirectorID`) REFERENCES `director` (`DirectorID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `directed_ibfk_2` FOREIGN KEY (`MovieID`) REFERENCES `movie` (`MovieID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `profile`
--
ALTER TABLE `profile`
  ADD CONSTRAINT `profile_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `account` (`UserID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `review`
--
ALTER TABLE `review`
  ADD CONSTRAINT `review_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `account` (`UserID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `review_ibfk_2` FOREIGN KEY (`MovieID`) REFERENCES `movie` (`MovieID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `written`
--
ALTER TABLE `written`
  ADD CONSTRAINT `written_ibfk_1` FOREIGN KEY (`WriterID`) REFERENCES `writer` (`WriterID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `written_ibfk_2` FOREIGN KEY (`MovieID`) REFERENCES `movie` (`MovieID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
