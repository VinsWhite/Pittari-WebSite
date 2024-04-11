-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 11, 2024 at 05:33 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pittari`
--

-- --------------------------------------------------------

--
-- Table structure for table `articles`
--

CREATE TABLE `articles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `topic` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `articles`
--

INSERT INTO `articles` (`id`, `title`, `description`, `topic`, `image`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'Esplorando la Bellezza e la Complessità della Lingua Giapponese', 'La lingua giapponese è un universo linguistico ricco di storia, cultura e sfumature che affascinano e intrigano gli appassionati di linguistica di tutto il mondo. Questo titolo si propone di esplorare in profondità gli aspetti unici della lingua giapponese, dalle sue complesse forme di scrittura, come i caratteri kanji, alle strutture grammaticali che riflettono le sfumature culturali del Giappone. Attraverso un viaggio attraverso la lingua, ci immergeremo nella sua bellezza intrinseca e nell\'arte della comunicazione giapponese, offrendo uno sguardo appassionante su questo tesoro linguistico.', 'La lingua', '/storage/images/Japan1.jpg', 1, NULL, NULL),
(2, ' Una Ricerca di Tradizione e Modernità', 'I festival giapponesi sono un\'esperienza sensoriale straordinaria, che coinvolge la vista, l\'udito e il gusto. Dai fuochi d\'artificio scintillanti che illuminano il cielo notturno ai ritmi frenetici dei tamburi taiko, ogni festival offre un\'esperienza unica e indimenticabile. Tra i più celebri c\'è il Gion Matsuri a Kyoto, un evento che risale a più di 1.000 anni fa e che continua a attirare visitatori da tutto il mondo con le sue spettacolari parate di carri allegorici.\r\n\r\nTuttavia, mentre i festival mantengono salda la loro connessione con la tradizione, non sono immuni alla modernizzazione. Negli ultimi anni, molti matsuri hanno integrato elementi contemporanei, come concerti di musica pop e stand di cibo internazionale, per attrarre una gamma più ampia di partecipanti e adattarsi ai gusti cambianti della società giapponese.\r\n\r\nUna delle caratteristiche più affascinanti dei festival giapponesi è la loro varietà. Ogni regione del Giappone ha i propri matsuri distintivi, riflettendo le peculiarità culturali e storiche della zona. Ad esempio, il Nebuta Matsuri nella prefettura di Aomori presenta spettacolari carri luminosi che rappresentano figure mitiche e storiche, mentre il Danjiri Matsuri nella prefettura di Osaka vede enormi carri trainati da centinaia di persone attraversare le strade della città con incredibile energia e coordinazione.', 'Cultura', NULL, 1, NULL, NULL),
(3, 'Sakura: La Bellezza Effimera dei Fiori di Ciliegio in Giappone', 'La fioritura dei sakura è un evento di grande importanza culturale e sociale in Giappone. Oltre a segnare l\'arrivo della primavera, i fiori di ciliegio sono profondamente radicati nella psiche collettiva del popolo giapponese come simbolo di bellezza, rinascita e impermanenza. La breve durata della fioritura, che dura solitamente solo una o due settimane, sottolinea l\'idea giapponese di \"mono no aware\", un profondo apprezzamento per la transitorietà della vita e la bellezza delle cose che sono destinate a svanire.\r\n\r\nOgni anno, le previsioni della fioritura dei sakura attirano l\'attenzione di media e appassionati di tutto il mondo. Le autorità locali e i media seguono con attenzione l\'avanzamento dei fiori di ciliegio da sud a nord attraverso il Giappone, fornendo previsioni e aggiornamenti regolari per consentire ai visitatori di pianificare il loro viaggio per godere appieno dello spettacolo.\r\n\r\nI giapponesi celebrano la fioritura dei sakura con pic-nic sotto gli alberi, noti come \"hanami\", dove amici, famiglie e colleghi si riuniscono per condividere cibo, bevande e conversazioni sotto i fiori rosa e bianchi. Le luci notturne aggiungono un ulteriore fascino alla vista, trasformando i parchi in magici scenari di luce e colore.', 'Paesaggi', NULL, 1, NULL, NULL),
(14, 'Il Significato Profondo del Kanji 夢', 'Benvenuti in un viaggio attraverso il significato profondo del kanji 夢 (ゆめ), che rappresenta il concetto di \"sogno\" nella lingua giapponese. Questo articolo si propone di approfondire la comprensione di questo carattere, esaminando la sua struttura, la sua etimologia e il suo impatto culturale nella società giapponese. Attraverso un\'analisi approfondita, scopriremo come il concetto di \"sogno\" sia intrinsecamente intrecciato con la psiche e la spiritualità giapponese, riflettendo su come la percezione dei sogni abbia influenzato l\'arte, la letteratura e la filosofia del paese nel corso dei secoli.', 'Kanji', '/storage/images/vTo7HRftba3fedjLsF2dSkdojM0jDoOLDPPql2eZ.jpg', 3, '2024-04-11 12:11:13', '2024-04-11 12:11:13');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `fruits`
--

CREATE TABLE `fruits` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `japanese_name` varchar(255) NOT NULL,
  `furigana` varchar(255) DEFAULT NULL,
  `audio` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `italian_translation` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `fruits`
--

INSERT INTO `fruits` (`id`, `japanese_name`, `furigana`, `audio`, `image`, `italian_translation`, `created_at`, `updated_at`) VALUES
(1, '果物', 'くだもの', '/audio/果物.mp3', '/images/果物.jpg', 'Frutta', '2024-04-05 12:17:53', NULL),
(2, 'りんご', NULL, '/audio/りんご.mp3', '/images/りんご.jpg', 'Mela', '2024-04-05 13:06:17', NULL),
(3, 'モモ', NULL, '/audio/モモ.mp3', '/images/モモ.jpg', 'Pesca', '2024-04-05 13:07:59', NULL),
(4, 'ラズベリー', NULL, '/audio/ラズベリー.mp3', '/images/ラズベリー.jpg', 'Lampone', '2024-04-05 13:17:44', NULL),
(5, 'レモン', NULL, '/audio/レモン.mp3', '/images/レモン.jpg', 'Limone', '2024-04-05 13:24:08', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `games`
--

CREATE TABLE `games` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `typology` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `games`
--

INSERT INTO `games` (`id`, `name`, `image`, `typology`, `created_at`, `updated_at`) VALUES
(1, 'ワードゲーム', '/imgGames/wordgame.jpg', 'Word Game', '2024-04-05 08:21:28', NULL),
(2, '単語カード', '/imgGames/tangokaado.jpg', 'Flash Cards', '2024-04-05 08:31:18', NULL),
(3, 'クイズゲーム', '/imgGames/quizgame.jpg', 'Quiz Game', '2024-04-08 10:10:49', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `game_scores`
--

CREATE TABLE `game_scores` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `scores` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `game_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(11, '2014_10_12_000000_create_users_table', 1),
(12, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(13, '2019_08_19_000000_create_failed_jobs_table', 1),
(14, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(15, '2024_03_27_100031_create_articles_table', 1),
(16, '2024_03_27_100250_create_topics_table', 1),
(17, '2024_03_27_103030_create_posts_table', 1),
(18, '2024_03_27_103933_create_games_table', 1),
(19, '2024_03_27_104141_create_game_scores_table', 1),
(20, '2024_03_27_111605_create_post_replies_table', 1),
(21, '2024_04_05_081025_games_update1', 2),
(22, '2024_04_05_120926_fruits', 3),
(23, '2024_04_08_123958_pronouns', 4);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `password_reset_tokens`
--

INSERT INTO `password_reset_tokens` (`email`, `token`, `created_at`) VALUES
('prova2@prova2.com', '$2y$10$LztC5VwUQk3zMKPQFA0Pde0EpLCzAFvH3tV4nv.ckBZejJNs3AaVW', '2024-04-10 11:44:38');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 2, 'auth_token', 'ff456166d3751f8861505631fc9b1340a7f862ab26b78352c3a73af4f4d59ae5', '[\"*\"]', NULL, NULL, '2024-04-01 11:48:40', '2024-04-01 11:48:40'),
(2, 'App\\Models\\User', 3, 'auth_token', 'ed3e33ed5dbb78d17de1217e190d02203ce5cd68ab1d94a644f93ead1e71ecff', '[\"*\"]', NULL, NULL, '2024-04-01 13:15:53', '2024-04-01 13:15:53'),
(3, 'App\\Models\\User', 5, 'auth_token', '60dc616eb1a7b9a5d76ccba5d82e14dfc6311623a7e38ee7b691e45d65bae21a', '[\"*\"]', NULL, NULL, '2024-04-01 13:52:55', '2024-04-01 13:52:55'),
(4, 'App\\Models\\User', 6, 'auth_token', '66fef0de783d3209f5f2292b1ea5559cc384529edec827305c756452476f4458', '[\"*\"]', NULL, NULL, '2024-04-01 13:54:00', '2024-04-01 13:54:00'),
(5, 'App\\Models\\User', 3, 'auth_token', 'a51bdaf4c8f4d930ba12d6d926b49f734aceda608344230f4235536907612363', '[\"*\"]', NULL, NULL, '2024-04-02 05:14:36', '2024-04-02 05:14:36'),
(6, 'App\\Models\\User', 3, 'auth_token', '84afd1c27bb8853dd7723644574d25e4e7d64cc00dd762bf050c4b7c5813adca', '[\"*\"]', NULL, NULL, '2024-04-02 05:31:49', '2024-04-02 05:31:49'),
(7, 'App\\Models\\User', 3, 'auth_token', 'b65721b584514e63e1816f792c07b6c1ec5ef438021e6668b6a31b74572e9c1f', '[\"*\"]', NULL, NULL, '2024-04-02 05:36:18', '2024-04-02 05:36:18'),
(8, 'App\\Models\\User', 3, 'auth_token', '52a9b84cc45b552a687de37b3f11fbb1268b6953681d3ba5d1f6582b132c6b61', '[\"*\"]', NULL, NULL, '2024-04-02 05:42:11', '2024-04-02 05:42:11'),
(9, 'App\\Models\\User', 3, 'auth_token', 'd8b9010cd6685b62333e5973142b411e0c6c91b1aeb86d268f9f7616491db284', '[\"*\"]', NULL, NULL, '2024-04-02 05:43:06', '2024-04-02 05:43:06'),
(10, 'App\\Models\\User', 3, 'auth_token', '3c908260e0cf8a3175e8ff0be53fbe01eafdfb4cc3c5cff8c242fd95a141e73a', '[\"*\"]', NULL, NULL, '2024-04-02 07:46:35', '2024-04-02 07:46:35'),
(11, 'App\\Models\\User', 3, 'auth_token', '2dcb1c2f23ada55e23435695e11ff505594018189f8adcda4dcbdad92d2f9694', '[\"*\"]', NULL, NULL, '2024-04-02 10:12:46', '2024-04-02 10:12:46'),
(12, 'App\\Models\\User', 3, 'auth_token', '1d30d8eded8a7dce8da535f73402f128bd50a97caadabc12d9fa01085cf04959', '[\"*\"]', NULL, NULL, '2024-04-02 10:13:03', '2024-04-02 10:13:03'),
(13, 'App\\Models\\User', 3, 'auth_token', '7371b7f52807c6b48aaf9631cc0e8da2efa2dd586a0612c10b6b49f3cfd42721', '[\"*\"]', NULL, NULL, '2024-04-02 10:13:19', '2024-04-02 10:13:19'),
(14, 'App\\Models\\User', 3, 'auth_token', 'b9ca27649becd5aafe5c11e4d025bef1bae79c818fc65a7617fa99294b3c41cd', '[\"*\"]', NULL, NULL, '2024-04-02 10:19:41', '2024-04-02 10:19:41'),
(15, 'App\\Models\\User', 3, 'auth_token', 'e03500db96b6302c2ccf20edfdf8b7c35729f329c35a2f8692fd5b4f8c9b4a65', '[\"*\"]', NULL, NULL, '2024-04-02 10:22:34', '2024-04-02 10:22:34'),
(16, 'App\\Models\\User', 3, 'auth_token', 'bad587b56245d08b7e6c020404af5cdeeb406b30ebdbba3c3da7b37edd482fb9', '[\"*\"]', NULL, NULL, '2024-04-02 10:24:28', '2024-04-02 10:24:28'),
(17, 'App\\Models\\User', 3, 'auth_token', 'abcf86337fb137810af9d82dd3a61519c90408e5d99e060b032ee6cc21553a7b', '[\"*\"]', NULL, NULL, '2024-04-02 10:25:57', '2024-04-02 10:25:57'),
(18, 'App\\Models\\User', 3, 'auth_token', '38dc92f1caeb902de1b5d5f0484b652ef03eb2cc7fcc0c6560e9150a3368303a', '[\"*\"]', NULL, NULL, '2024-04-02 10:52:09', '2024-04-02 10:52:09'),
(19, 'App\\Models\\User', 3, 'auth_token', '59169448abbaa09dc12685b4557515bd2f65d08d417ad5efdc43fa0b49183bc5', '[\"*\"]', NULL, NULL, '2024-04-02 12:48:20', '2024-04-02 12:48:20'),
(20, 'App\\Models\\User', 3, 'auth_token', 'e1542de41d68c2f6e7abdd5900f358e384f699e02bdf37c77b7e938fbfe26769', '[\"*\"]', NULL, NULL, '2024-04-02 12:58:45', '2024-04-02 12:58:45'),
(21, 'App\\Models\\User', 3, 'auth_token', 'ded148a5937dcc32754e54e3508f1903a015d071f99fdb94c2761d4e3a1751f8', '[\"*\"]', NULL, NULL, '2024-04-03 05:07:36', '2024-04-03 05:07:36'),
(22, 'App\\Models\\User', 3, 'auth_token', '2ca21a6a92683e6498da1c97354ccd0dccaf028e68a2b536a82dcf477cd25acc', '[\"*\"]', NULL, NULL, '2024-04-03 05:30:32', '2024-04-03 05:30:32'),
(23, 'App\\Models\\User', 3, 'auth_token', '50162c6c2fbcfb8df84bc4f1d8a6fb57be5884785f0d4c6800d955126213c84b', '[\"*\"]', NULL, NULL, '2024-04-03 05:57:16', '2024-04-03 05:57:16'),
(24, 'App\\Models\\User', 2, 'auth_token', 'a454aeed56b073e3877394036168b368b2cdfba60a36343b0099214a335e22b0', '[\"*\"]', NULL, NULL, '2024-04-03 06:10:11', '2024-04-03 06:10:11'),
(25, 'App\\Models\\User', 3, 'auth_token', 'a43d483a1b830857464eb377c7babd4fb8c67ac5b865f4b9ba15b1fba2d764ea', '[\"*\"]', NULL, NULL, '2024-04-03 10:10:10', '2024-04-03 10:10:10'),
(26, 'App\\Models\\User', 2, 'auth_token', 'd6eb299243a606017629b1ccf1dd325ce210f6c97bd363534e0a6fcfef200814', '[\"*\"]', NULL, NULL, '2024-04-03 12:12:56', '2024-04-03 12:12:56'),
(27, 'App\\Models\\User', 3, 'auth_token', '45711182409cd7e4c4bd2da25ee7437fa3dbdb033f3e3dca6da52243324b174f', '[\"*\"]', NULL, NULL, '2024-04-03 12:56:12', '2024-04-03 12:56:12'),
(28, 'App\\Models\\User', 3, 'auth_token', 'bdc4d36ef3d116cf447411ba2e48b5a09aaf0382edecbae0109210f362e807e5', '[\"*\"]', NULL, NULL, '2024-04-03 13:02:06', '2024-04-03 13:02:06'),
(29, 'App\\Models\\User', 3, 'auth_token', '10bd9073583a5842b8520c185f62c949cd4aa88bb6363b1d0cb31bc9e3c12998', '[\"*\"]', NULL, NULL, '2024-04-03 13:02:33', '2024-04-03 13:02:33'),
(30, 'App\\Models\\User', 3, 'auth_token', '1b20522643d9c591c9c0da839f4263271faecb417062e537ffbf25b056d454f5', '[\"*\"]', NULL, NULL, '2024-04-03 13:08:41', '2024-04-03 13:08:41'),
(31, 'App\\Models\\User', 3, 'auth_token', 'fa9123863189acc1a8a7a76f9528ad0e228a1f3fd7107e0ae4753f2b3e68b16b', '[\"*\"]', NULL, NULL, '2024-04-04 05:26:00', '2024-04-04 05:26:00'),
(32, 'App\\Models\\User', 3, 'auth_token', '2d024d228cbef2edd816261105d57dd2d3967c2be789fe5ec155a53e322ea911', '[\"*\"]', NULL, NULL, '2024-04-04 06:32:19', '2024-04-04 06:32:19'),
(33, 'App\\Models\\User', 3, 'auth_token', '51f29f4edd2287661c1fa2db60b29f77d0801677f88c6e500b9dbb6d155a13c1', '[\"*\"]', NULL, NULL, '2024-04-04 07:22:22', '2024-04-04 07:22:22'),
(34, 'App\\Models\\User', 3, 'auth_token', 'e37d5861c52fe4af553e15e65df12f3b1912dc2e027ded34c3f320f0708947b1', '[\"*\"]', NULL, NULL, '2024-04-04 07:23:18', '2024-04-04 07:23:18'),
(35, 'App\\Models\\User', 3, 'auth_token', '9e7e57d41100500ba0efef61e98529f26c08e5e9ec6614f367476a72079a075c', '[\"*\"]', NULL, NULL, '2024-04-04 08:47:01', '2024-04-04 08:47:01'),
(36, 'App\\Models\\User', 3, 'auth_token', 'c41aa17bbaacb1343977269fcb2a519ae4d05280cb3f9f724fc2b97bf1928f8e', '[\"*\"]', NULL, NULL, '2024-04-04 13:01:01', '2024-04-04 13:01:01'),
(37, 'App\\Models\\User', 3, 'auth_token', 'a471035ced343a06b64aaa133612c60234cb4f86d43ed66b9c3f6be112a978bd', '[\"*\"]', NULL, NULL, '2024-04-04 13:07:34', '2024-04-04 13:07:34'),
(38, 'App\\Models\\User', 3, 'auth_token', '11da6c6d660b044d64ea6989883314d6125c6f5803c013a33ae037d6e8ecf836', '[\"*\"]', NULL, NULL, '2024-04-05 05:24:04', '2024-04-05 05:24:04'),
(39, 'App\\Models\\User', 3, 'auth_token', '6191d63da97f2db683f53fd3eaf086e909aee2f72df36d7ef50781c6238651b3', '[\"*\"]', NULL, NULL, '2024-04-05 07:50:05', '2024-04-05 07:50:05'),
(40, 'App\\Models\\User', 3, 'auth_token', 'cf4dd94e96c016d5e43449f7a1a79ab60581ab46a62dbbbefb66687bd56dc370', '[\"*\"]', NULL, NULL, '2024-04-05 07:52:10', '2024-04-05 07:52:10'),
(41, 'App\\Models\\User', 3, 'auth_token', 'b23d34d9ff6a5c56fa3b3f94bb603429a0eb3f09f3575dc5d840e7722536e245', '[\"*\"]', NULL, NULL, '2024-04-05 07:52:25', '2024-04-05 07:52:25'),
(42, 'App\\Models\\User', 3, 'auth_token', '2dd6ba9e94b3459e2272868c9f175a4fee43e9e7c6a70503734d2cbca3967c96', '[\"*\"]', NULL, NULL, '2024-04-05 07:52:52', '2024-04-05 07:52:52'),
(43, 'App\\Models\\User', 3, 'auth_token', '2b9cb9746973e297d60b2f146950ef099b47e9366695b84576c79d9aba5a788b', '[\"*\"]', NULL, NULL, '2024-04-05 18:08:37', '2024-04-05 18:08:37'),
(44, 'App\\Models\\User', 3, 'auth_token', '8ba445bd918c8f366b20298726317db05cf8dde4fb1bad362a1f6349a6e776dc', '[\"*\"]', NULL, NULL, '2024-04-06 12:25:55', '2024-04-06 12:25:55'),
(45, 'App\\Models\\User', 3, 'auth_token', '62bf49d24c97e261c90032d5aab59afed6b4f3c47f92b3b14eafb3c3b82d94eb', '[\"*\"]', NULL, NULL, '2024-04-06 12:58:02', '2024-04-06 12:58:02'),
(46, 'App\\Models\\User', 3, 'auth_token', '90f628baaf64b362dd2aff94e3e4166297c9c0b6a43eb96c0b0a3936e9e4fe3c', '[\"*\"]', NULL, NULL, '2024-04-07 06:21:41', '2024-04-07 06:21:41'),
(47, 'App\\Models\\User', 3, 'auth_token', '7bfead9d3c52da858e278a649ce715b5d144f3b8ef16ad4061a7c54dc57bf195', '[\"*\"]', NULL, NULL, '2024-04-07 06:50:36', '2024-04-07 06:50:36'),
(48, 'App\\Models\\User', 3, 'auth_token', '9812af1d182e1932252fea0c2c16e94c33545f7cb3f1c157ef050bcc0e7d2a9f', '[\"*\"]', NULL, NULL, '2024-04-08 05:03:12', '2024-04-08 05:03:12'),
(49, 'App\\Models\\User', 8, 'auth_token', '169969905320ef09c28ac2db2ac69ab13d340f4ed8ea439318508aebe3640f03', '[\"*\"]', NULL, NULL, '2024-04-08 05:24:06', '2024-04-08 05:24:06'),
(50, 'App\\Models\\User', 8, 'auth_token', 'd384a2944d7e63b20bbfdd7e389396d6c4c18aa69b31a383403d99e79e92f2e0', '[\"*\"]', NULL, NULL, '2024-04-08 07:56:22', '2024-04-08 07:56:22'),
(51, 'App\\Models\\User', 8, 'auth_token', '176944d763aa608eaa0891aa0c8c4fd3f287943997e1e599db5e854629d48b19', '[\"*\"]', NULL, NULL, '2024-04-08 13:02:44', '2024-04-08 13:02:44'),
(52, 'App\\Models\\User', 3, 'auth_token', 'cc34244bbd82a320c33f2abce253d2319e9131aa5ef34f314b02fb22d7a4daac', '[\"*\"]', NULL, NULL, '2024-04-08 13:23:39', '2024-04-08 13:23:39'),
(53, 'App\\Models\\User', 3, 'auth_token', '9f241706ad446da62a0c8be0c00dcb730bc8e691b9c49f70fab04505692fff9d', '[\"*\"]', NULL, NULL, '2024-04-09 05:16:27', '2024-04-09 05:16:27'),
(54, 'App\\Models\\User', 3, 'auth_token', 'a6f495e6ef0bdd056e81b8e851420be855b66f51318a93310631cc3fc0cd0ef4', '[\"*\"]', NULL, NULL, '2024-04-09 05:18:07', '2024-04-09 05:18:07'),
(55, 'App\\Models\\User', 3, 'auth_token', '8af47e0679f54f6fa002366073f4e72f897cbfa8faa6b65e0e5e6a8e5f5a9e89', '[\"*\"]', NULL, NULL, '2024-04-09 05:24:00', '2024-04-09 05:24:00'),
(56, 'App\\Models\\User', 3, 'auth_token', '9b0969e04f18662d214e58becffbede625c532d7860ec3873b30ccdbf9d1d9aa', '[\"*\"]', NULL, NULL, '2024-04-10 05:10:50', '2024-04-10 05:10:50'),
(57, 'App\\Models\\User', 8, 'auth_token', '85ec8f6a2ed14daeae844531852f99b3194311367faf8f53745a8fccc01ba229', '[\"*\"]', NULL, NULL, '2024-04-10 11:49:26', '2024-04-10 11:49:26'),
(58, 'App\\Models\\User', 8, 'auth_token', 'b6a3bab4d4ec7012402eb8c8c0f629a0c7fd51dbf27f0b271679eacf18d164d1', '[\"*\"]', NULL, NULL, '2024-04-10 13:05:36', '2024-04-10 13:05:36'),
(59, 'App\\Models\\User', 8, 'auth_token', 'd059c7e47d575388dca59beaf43575f9d60bc6811bc8c812a783de725746603d', '[\"*\"]', NULL, NULL, '2024-04-10 17:32:35', '2024-04-10 17:32:35'),
(60, 'App\\Models\\User', 8, 'auth_token', '369694468c23997b58c3c971a736e40b780d35bd71e48158b09b8e13bf0f68e1', '[\"*\"]', NULL, NULL, '2024-04-10 17:32:37', '2024-04-10 17:32:37'),
(61, 'App\\Models\\User', 8, 'auth_token', '6984b296ec9d2656357849ba8b84b14e96b8bcf0417a0fdec74882cebb72e5f0', '[\"*\"]', NULL, NULL, '2024-04-11 05:09:17', '2024-04-11 05:09:17'),
(62, 'App\\Models\\User', 8, 'auth_token', '4bbd4a0188945b35844af823a0ce8b65ea06dc6c92077ed9ec0e78c6ac51a922', '[\"*\"]', NULL, NULL, '2024-04-11 05:42:49', '2024-04-11 05:42:49'),
(63, 'App\\Models\\User', 8, 'auth_token', '4ff9b96331eeae7bb190fa2886ef4e334aec532522edcd7fa7d6f7f5da3088eb', '[\"*\"]', NULL, NULL, '2024-04-11 05:44:23', '2024-04-11 05:44:23'),
(64, 'App\\Models\\User', 8, 'auth_token', 'e098c36e181f4215d25485a670f9bc0bacc166b563882523b9f11ccb8c9d3c5e', '[\"*\"]', NULL, NULL, '2024-04-11 05:47:48', '2024-04-11 05:47:48'),
(65, 'App\\Models\\User', 8, 'auth_token', 'f1b7cd5d388afeb3da58e2e49698d4190eb5e6f7f5315073116445a241318577', '[\"*\"]', NULL, NULL, '2024-04-11 06:16:01', '2024-04-11 06:16:01'),
(66, 'App\\Models\\User', 3, 'auth_token', '26e9668736c490a6c889a664f5d4f8e43ba10924ac2be6d05f269ba2ff1d544b', '[\"*\"]', NULL, NULL, '2024-04-11 06:16:16', '2024-04-11 06:16:16'),
(67, 'App\\Models\\User', 3, 'auth_token', 'aa76867857a7747d543760eb09d8974df154d6165c33bcf1471c817983453b05', '[\"*\"]', NULL, NULL, '2024-04-11 06:17:05', '2024-04-11 06:17:05'),
(68, 'App\\Models\\User', 3, 'auth_token', '784e2494412a839196932a6e380357eb674fef7f596ba71303586cadb38d4fb9', '[\"*\"]', NULL, NULL, '2024-04-11 06:27:33', '2024-04-11 06:27:33'),
(69, 'App\\Models\\User', 8, 'auth_token', '19982f4a98dcb7f30b92004bf465c050c9dc84172baccf02f13e3a9d3378f866', '[\"*\"]', NULL, NULL, '2024-04-11 07:13:51', '2024-04-11 07:13:51'),
(70, 'App\\Models\\User', 3, 'auth_token', '3701ef6432781f36993815416aea7e8b3803b7b30712b54f700569df1cc85bac', '[\"*\"]', NULL, NULL, '2024-04-11 07:15:59', '2024-04-11 07:15:59'),
(71, 'App\\Models\\User', 8, 'auth_token', 'fce8683bb96d841e9cba5377160bef670f6990e1c470fc25e9429319f6a1db67', '[\"*\"]', NULL, NULL, '2024-04-11 07:23:06', '2024-04-11 07:23:06'),
(72, 'App\\Models\\User', 8, 'auth_token', '783a36a6d7506b3d8e725ff029fc309ff81c9cd8b77b946142835a084fbc970d', '[\"*\"]', NULL, NULL, '2024-04-11 07:24:55', '2024-04-11 07:24:55'),
(73, 'App\\Models\\User', 3, 'auth_token', '887bd37604ce131b094edde19486eca2cf61ff52350db8d772ed79b684cf66f7', '[\"*\"]', NULL, NULL, '2024-04-11 07:40:15', '2024-04-11 07:40:15'),
(74, 'App\\Models\\User', 3, 'auth_token', '76ea0130f1cc9ff4c8362c47a5909e1440c6155fdb1471c643cfebd54e44596a', '[\"*\"]', NULL, NULL, '2024-04-11 07:46:38', '2024-04-11 07:46:38'),
(75, 'App\\Models\\User', 3, 'auth_token', '4278217a327610e0aa6a02618acb67eebd2460088c806fa5d20cd8dba0542990', '[\"*\"]', NULL, NULL, '2024-04-11 07:56:14', '2024-04-11 07:56:14'),
(76, 'App\\Models\\User', 8, 'auth_token', '5fc3fd7f78542aa2e9ab9ceae20de4cba5f44230a6ec96236cfa113296046ca6', '[\"*\"]', NULL, NULL, '2024-04-11 07:57:36', '2024-04-11 07:57:36'),
(77, 'App\\Models\\User', 3, 'auth_token', '1f23518ea31a82ccb3934d117c5d35fed6bce278434fa8bcb4676deaba0724f9', '[\"*\"]', NULL, NULL, '2024-04-11 08:13:13', '2024-04-11 08:13:13'),
(78, 'App\\Models\\User', 3, 'auth_token', '6f84adf55cc6389b6a61b2cd6e058fb0b488ebe997f3eabf98d0f5b0fef9bdac', '[\"*\"]', NULL, NULL, '2024-04-11 08:48:14', '2024-04-11 08:48:14'),
(79, 'App\\Models\\User', 3, 'auth_token', 'd4698daf35b128fe4d0c92f83f90f1af8a6444341a9ab264cdf617990efc872e', '[\"*\"]', NULL, NULL, '2024-04-11 08:48:23', '2024-04-11 08:48:23'),
(80, 'App\\Models\\User', 3, 'auth_token', '038f6c8250be5078643641f3cff9d64b9f083118c71df5416bb5d631c4b864fc', '[\"*\"]', NULL, NULL, '2024-04-11 10:37:15', '2024-04-11 10:37:15'),
(81, 'App\\Models\\User', 3, 'auth_token', 'c6c06bd31b8c0ab967c6c35514e54e44a6b4fd8d749803262d6a43dfb8fc883f', '[\"*\"]', NULL, NULL, '2024-04-11 10:52:22', '2024-04-11 10:52:22'),
(82, 'App\\Models\\User', 8, 'auth_token', '27d426193f48bd1b87b75dbf720360d3e17731362083f62b407987cb06288254', '[\"*\"]', NULL, NULL, '2024-04-11 10:52:37', '2024-04-11 10:52:37'),
(83, 'App\\Models\\User', 3, 'auth_token', 'e5ac3d17d691c9bac8b5b8578cff3493714fe300a6dcab853154b8a995250d09', '[\"*\"]', NULL, NULL, '2024-04-11 10:52:59', '2024-04-11 10:52:59'),
(84, 'App\\Models\\User', 8, 'auth_token', 'a0ac36b3d31de53e34d67b6705fd9abe88a2c39b293d9592b12928317d0c33ad', '[\"*\"]', NULL, NULL, '2024-04-11 11:15:48', '2024-04-11 11:15:48'),
(85, 'App\\Models\\User', 3, 'auth_token', '5250713a48cea171706777857442bc85cc892f1726afff436d2c2bba95d50f57', '[\"*\"]', NULL, NULL, '2024-04-11 11:15:57', '2024-04-11 11:15:57'),
(86, 'App\\Models\\User', 8, 'auth_token', '08e078632f34e613cfd695e1f7407fdab38c89e5337c4fdd30851c62c37c5dbe', '[\"*\"]', NULL, NULL, '2024-04-11 13:08:31', '2024-04-11 13:08:31'),
(87, 'App\\Models\\User', 3, 'auth_token', '50eb0da63a9ae4d1de2621d89736752cb3a2135c06f16a37ca3cf7a4f58e9f44', '[\"*\"]', NULL, NULL, '2024-04-11 13:10:06', '2024-04-11 13:10:06');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `context` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `topic_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `context`, `user_id`, `topic_id`, `created_at`, `updated_at`) VALUES
(1, 'Come si pronuncia questo kanji? ', 'Ciao a tutti.\r\nHo una domanda per voi, quali sono le pronunce di questo kanji? \r\n浴びる　・　浴', 1, 2, '2024-03-27 08:35:19', NULL),
(2, 'Cosa significa questo kanji? 嬉しい', 'Mi chiedo cosa possa mai significare questo kanji qui davvero... sono molto curiosa.', 1, 2, '2024-03-29 09:27:46', NULL),
(3, '暑いと熱いの違いは何ですか？', '大切漢字ですね', 1, 2, '2024-03-29 09:28:10', NULL),
(4, 'provaa', 'provaa', 2, 2, '2024-04-03 05:50:48', '2024-04-03 05:50:48'),
(5, 'provaaa', 'provaaaa', 3, 2, '2024-04-03 06:03:26', '2024-04-03 06:03:26'),
(6, 'Attack On Titan', 'Sapete dove posso leggere il manga di attack on titan?', 2, 1, '2024-04-03 06:10:55', '2024-04-03 06:10:55'),
(7, 'Finalmente funziona', 'Finalmente funzionaaa', 2, 2, '2024-04-03 06:29:15', '2024-04-03 06:29:15'),
(8, 'Ultima prova', 'Forseee ultima prova', 2, 2, '2024-04-03 08:51:59', '2024-04-03 08:51:59'),
(9, 'Come si dice \"ho detto\"?', 'Ho visto questa forma su internet, ma non so se è corretta.\n母は素晴らしいと言った', 3, 2, '2024-04-03 10:58:06', '2024-04-03 10:58:06'),
(10, 'dddd', 'dddddd', 3, 2, '2024-04-03 11:07:12', '2024-04-03 11:07:12'),
(11, 'In questo modo mi compaiono i post più recente', 'WWWW', 3, 2, '2024-04-03 11:14:32', '2024-04-03 11:14:32'),
(12, 'Sono sandra', 'sapete come si dice mangiare', 3, 2, '2024-04-03 13:15:00', '2024-04-03 13:15:00'),
(13, '日本に行きたい！！！', '皆さんこんにちは！\n今朝は目が覚めたら日本に行きたかった、、、', 3, 3, '2024-04-04 06:29:01', '2024-04-04 06:29:01'),
(14, 'マーシュル', '知りませんか', 3, 1, '2024-04-07 06:23:44', '2024-04-07 06:23:44');

-- --------------------------------------------------------

--
-- Table structure for table `post_replies`
--

CREATE TABLE `post_replies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `context` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `post_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `post_replies`
--

INSERT INTO `post_replies` (`id`, `context`, `user_id`, `post_id`, `created_at`, `updated_at`) VALUES
(1, 'Si pronuncia あびる', 2, 1, '2024-04-03 09:40:21', NULL),
(2, 'Confermo ciò che ha detto example!\r\n頑張って❣', 5, 1, '2024-04-03 10:04:31', NULL),
(15, 'Compralo...', 3, 6, '2024-04-03 12:09:44', '2024-04-03 12:09:44'),
(16, 'Bravi tutti!', 2, 1, '2024-04-03 12:15:51', '2024-04-03 12:15:51'),
(21, '食べる', 3, 12, '2024-04-04 05:52:19', '2024-04-04 05:52:19'),
(26, '僕も、、、、:<<<', 3, 13, '2024-04-04 11:14:54', '2024-04-04 11:14:54'),
(27, 'wwww', 3, 11, '2024-04-04 12:16:30', '2024-04-04 12:16:30'),
(28, 'anche io', 3, 13, '2024-04-05 18:09:06', '2024-04-05 18:09:06'),
(29, 'うん、大好き', 3, 14, '2024-04-07 06:24:03', '2024-04-07 06:24:03');

-- --------------------------------------------------------

--
-- Table structure for table `pronouns`
--

CREATE TABLE `pronouns` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `japanese_name` varchar(255) NOT NULL,
  `furigana` text DEFAULT NULL,
  `audio` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `italian_translation` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pronouns`
--

INSERT INTO `pronouns` (`id`, `japanese_name`, `furigana`, `audio`, `image`, `italian_translation`, `created_at`, `updated_at`) VALUES
(1, '私', 'わたし、わたくし、あたし', '/audio/私.mp3', '/images/私.jpg', 'Io (usato da tutti in situazioni formali e soprattutto dalle donne in contesti meno formali)', '2024-04-08 12:44:34', NULL),
(2, '僕', 'ぼく', '/audio/僕.mp3', '/images/僕.jpg', 'Io (usato soprattutto dagli uomini in contesti informali)', '2024-04-08 12:54:38', NULL),
(3, '私たち', 'わたしたち', '/audio/私たち.mp3', '/images/私たち.jpg', 'Noi', '2024-04-08 13:51:08', NULL),
(4, 'あなた', '', '/audio/あなた.mp3', '/images/あなた.jpg', 'Tu', '2024-04-08 13:54:18', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `topics`
--

CREATE TABLE `topics` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `topics`
--

INSERT INTO `topics` (`id`, `title`, `description`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'Manga Mania (マンガ熱)', 'In questo spazio, gli utenti possono discutere dei loro manga preferiti, condividere consigli di lettura, recensioni, e partecipare a conversazioni sulla cultura e sull\'industria del manga.', 1, NULL, NULL),
(2, 'Kanji Corner (漢字のコーナー)', ' In questo spazio, gli utenti possono condividere informazioni, risorse e strategie per imparare i kanji, oltre a discutere delle loro esperienze e sfide nell\'utilizzo di questi caratteri nella lingua giapponese.', 1, NULL, NULL),
(3, 'Japan Journey (日本の旅)', 'In questo spazio gli utenti possono condividere racconti, consigli, suggerimenti e itinerari relativi ai loro viaggi nel Paese del Sol Levante.', 1, NULL, NULL),
(4, 'Word Wonder (言葉の不思議)', 'Il luogo ideale per risolvere i tuoi dubbi sulle parole giapponesi che ti lasciano perplesso. Se hai domande su significati, pronuncia, o utilizzo di qualsiasi parola giapponese, non esitare a chiedere qui!', 1, NULL, NULL),
(5, 'Grammar Guide (文法のガイド)', 'Qui puoi trovare spiegazioni dettagliate sulle strutture grammaticali, consigli pratici sull\'uso corretto delle particelle, dei verbi, degli aggettivi e altro ancora.', 1, NULL, NULL),
(6, 'Nihongo Nook (日本語のコーナー)', 'Lo spazio perfetto per discutere di tutto ciò che riguarda la lingua giapponese. Qui puoi porre domande, condividere risorse, raccontare le tue esperienze di apprendimento e connetterti con altri appassionati della lingua e della cultura giapponese. ', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `surname`, `email`, `email_verified_at`, `password`, `role`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'prova', 'prova', 'prova@prova.com', NULL, 'provaprova', 'admin', NULL, NULL, NULL),
(2, 'example', 'example', 'example@example.com', NULL, '$2y$10$c3Uz9JPrqW5pt/C3dumSwO5YtBXc6MP6EyqP5HhBFafOEt6ZVdzfi', 'user', NULL, '2024-03-30 15:14:24', '2024-03-30 15:14:24'),
(3, 'prova2', 'prova2', 'prova2@prova2.com', NULL, '$2y$10$Nt1KC.llZlPwdIJxrpdCVuvheI5.oDIxE1XXNNM04nlGBJh642Cha', 'admin', NULL, '2024-03-31 07:03:46', '2024-03-31 07:03:46'),
(4, 'cizzz', 'cizzz', 'cizzz@cizzz.com', NULL, '$2y$10$MczbE0BC4qLgzhj1DPi3z.KR6dmYS8jZKkOlWQFQQATQ3OyhBssrq', 'user', NULL, '2024-04-01 13:18:47', '2024-04-01 13:18:47'),
(5, 'chepalle', 'chepalle', 'chepalle@chepalle.com', NULL, '$2y$10$B0U32kwNoPK0fvir4.x0le7dMgPmoQBV4Hk1f0OOk3BsXbvRHPQgC', 'user', NULL, '2024-04-01 13:38:43', '2024-04-01 13:38:43'),
(6, 'nadia', 'nadia', 'nadia@nadia.com', NULL, '$2y$10$KHw2ODNKaHA/ivEdV.h6T.odZA/pTPJmXrZAdtZ7oVCdsiNY2QvJ2', 'user', NULL, '2024-04-01 13:53:36', '2024-04-01 13:53:36'),
(7, 'diciotto', 'diciotto', 'diciotto@diciotto.com', NULL, '$2y$10$f7KQhLQx66D.PEUMJG7cbuxHxRCHxYc5ZQEH9iUvlhpnwqhiFIx6a', 'user', NULL, '2024-04-02 05:17:52', '2024-04-02 05:17:52'),
(8, 'mario', 'mario', 'mario@mario.com', NULL, '$2y$10$rulyIyO3//4n6WQC.7EEjOLkTy57cKDnpC9JgZG8vfWFCfpYFjZVu', 'user', NULL, '2024-04-07 07:41:21', '2024-04-07 07:41:21'),
(9, 'Khao', 'Khao', 'Khao@Khao.com', NULL, '$2y$10$L4O5O3f5ctpYvkfroR3Wk.KqZDfKPZ78v0k85mo2bEqL2LsXwczqu', 'user', NULL, '2024-04-10 11:28:09', '2024-04-10 11:28:09');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `articles_user_id_foreign` (`user_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `fruits`
--
ALTER TABLE `fruits`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `game_scores`
--
ALTER TABLE `game_scores`
  ADD PRIMARY KEY (`id`),
  ADD KEY `game_scores_user_id_foreign` (`user_id`),
  ADD KEY `game_scores_game_id_foreign` (`game_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `posts_user_id_foreign` (`user_id`),
  ADD KEY `posts_topic_id_foreign` (`topic_id`);

--
-- Indexes for table `post_replies`
--
ALTER TABLE `post_replies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `post_replies_user_id_foreign` (`user_id`),
  ADD KEY `post_replies_post_id_foreign` (`post_id`);

--
-- Indexes for table `pronouns`
--
ALTER TABLE `pronouns`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `topics`
--
ALTER TABLE `topics`
  ADD PRIMARY KEY (`id`),
  ADD KEY `topics_user_id_foreign` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fruits`
--
ALTER TABLE `fruits`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `games`
--
ALTER TABLE `games`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `game_scores`
--
ALTER TABLE `game_scores`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=88;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `post_replies`
--
ALTER TABLE `post_replies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `pronouns`
--
ALTER TABLE `pronouns`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `topics`
--
ALTER TABLE `topics`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `articles`
--
ALTER TABLE `articles`
  ADD CONSTRAINT `articles_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `game_scores`
--
ALTER TABLE `game_scores`
  ADD CONSTRAINT `game_scores_game_id_foreign` FOREIGN KEY (`game_id`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `game_scores_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_topic_id_foreign` FOREIGN KEY (`topic_id`) REFERENCES `topics` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `posts_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `post_replies`
--
ALTER TABLE `post_replies`
  ADD CONSTRAINT `post_replies_post_id_foreign` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `post_replies_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `topics`
--
ALTER TABLE `topics`
  ADD CONSTRAINT `topics_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
