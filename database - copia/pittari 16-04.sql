-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 16, 2024 at 05:18 PM
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
-- Table structure for table `examples`
--

CREATE TABLE `examples` (
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
-- Dumping data for table `examples`
--

INSERT INTO `examples` (`id`, `japanese_name`, `furigana`, `audio`, `image`, `italian_translation`, `created_at`, `updated_at`) VALUES
(1, '手紙を書いて送ります', 'てがみをかいておくります', '/audio/examples/手紙を書いて送ります.mp3', NULL, 'Scriverò una lettera e la spedirò', '2024-04-16 14:51:28', NULL),
(2, '朝は7時に起きて、顔を洗って歯を磨く', 'あさはしちじにおきて、かおをあらってはをみがく', '/audio/examples/朝は7時に起きて、顔を洗って歯を磨く.mp3', NULL, 'La mattina mi sveglio alle 7, mi lavo la faccia e i denti', '2024-04-16 14:59:04', NULL),
(3, '友達に会って、買い物して、帰った', 'ともだちにあって、かいものして、かえった', '/audio/examples/友達に会って、買い物して、帰った.mp3', '', 'Ho incontrato un\'amica, ho fatto la spesa, sono tornata a casa.', '2024-04-16 15:04:34', NULL),
(4, 'テストは３時始まって、4時に終わります', 'テストはさんじはじまって、よじにおわります', '/audio/テストは３時始まって、4時に終わります.mp3', NULL, 'Il test inizia alle 3 e finisce alle 4', '2024-04-16 15:08:01', NULL);

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
  `language` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `games`
--

INSERT INTO `games` (`id`, `name`, `image`, `typology`, `language`, `created_at`, `updated_at`) VALUES
(1, 'ワードゲーム', '/imgGames/wordgame.jpg', 'Word Game', 'Italian', '2024-04-05 08:21:28', NULL),
(2, '単語カード', '/imgGames/tangokaado.jpg', 'Flash Cards', 'Italian', '2024-04-05 08:31:18', NULL),
(3, 'クイズゲーム', '/imgGames/quizgame.jpg', 'Quiz Game', 'Italian', '2024-04-08 10:10:49', NULL),
(5, '補完ゲーム', '/imgGames/hokangeemu.jpg', 'Completamento', 'Italian', '2024-04-16 08:00:06', NULL);

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
(23, '2024_04_08_123958_pronouns', 4),
(24, '2024_04_15_071652_games_update2', 5),
(25, '2024_04_16_144957_examples', 6);

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
(87, 'App\\Models\\User', 3, 'auth_token', '50eb0da63a9ae4d1de2621d89736752cb3a2135c06f16a37ca3cf7a4f58e9f44', '[\"*\"]', NULL, NULL, '2024-04-11 13:10:06', '2024-04-11 13:10:06'),
(88, 'App\\Models\\User', 3, 'auth_token', '977e4e46508ed9b0c93bec37e5e26d1fba37b251c7b76b2e3a19b46a3fd54874', '[\"*\"]', NULL, NULL, '2024-04-12 05:09:52', '2024-04-12 05:09:52'),
(89, 'App\\Models\\User', 3, 'auth_token', '17630fd860ebd1bc10c4149d4a64b7869374771ac538f822a1a4321d34cfa03e', '[\"*\"]', NULL, NULL, '2024-04-12 05:11:51', '2024-04-12 05:11:51'),
(90, 'App\\Models\\User', 3, 'auth_token', '1661a087580d15dfaae0cbe79c20669c6096f03486521f0e21fb9414223a37a0', '[\"*\"]', NULL, NULL, '2024-04-12 07:15:43', '2024-04-12 07:15:43'),
(91, 'App\\Models\\User', 3, 'auth_token', '2b564a8f8231cfdeeab69684236a52ffd51945cfcbf7bf4b7d582f2284b2aad1', '[\"*\"]', NULL, NULL, '2024-04-12 08:24:45', '2024-04-12 08:24:45'),
(92, 'App\\Models\\User', 3, 'auth_token', '1e3e22989949f77df310d66332bc38c49a934706e0c4d760b1e09ea57d4e4d25', '[\"*\"]', NULL, NULL, '2024-04-12 12:56:21', '2024-04-12 12:56:21'),
(93, 'App\\Models\\User', 8, 'auth_token', '488f3472fc100a589d965084264f20b93884a7da1ef4b344ffaa1f37b9c6e1ca', '[\"*\"]', NULL, NULL, '2024-04-12 13:03:18', '2024-04-12 13:03:18'),
(94, 'App\\Models\\User', 3, 'auth_token', '9bf4d05c1289a2f2861fdea8865d74f178c8f758056ff7db0bab7be376d274f4', '[\"*\"]', NULL, NULL, '2024-04-12 13:03:36', '2024-04-12 13:03:36'),
(95, 'App\\Models\\User', 3, 'auth_token', '718e7861591a180b7b1bc8765e5a164658dbc232db6fdd1b8c70bbdbe07d9aeb', '[\"*\"]', NULL, NULL, '2024-04-14 12:57:04', '2024-04-14 12:57:04'),
(96, 'App\\Models\\User', 3, 'auth_token', '22ba7082f5d89f261847b0a2be67892a66e8de6c9dfde0620b91beab0cc721b2', '[\"*\"]', NULL, NULL, '2024-04-14 12:57:07', '2024-04-14 12:57:07'),
(97, 'App\\Models\\User', 3, 'auth_token', 'b1165dcc993e133c6b70f5d7db3fee86123b70fbbbdc17a9c2a3b96cf5dc0b1b', '[\"*\"]', NULL, NULL, '2024-04-14 13:02:01', '2024-04-14 13:02:01'),
(98, 'App\\Models\\User', 3, 'auth_token', '058566c80f3e747ee65f8a31d8a0e059ca1962ef43694b5fc97ee1349b9c6473', '[\"*\"]', NULL, NULL, '2024-04-14 13:08:15', '2024-04-14 13:08:15'),
(99, 'App\\Models\\User', 3, 'auth_token', '2cc89a71860b2ca4a3743499089d06466f8763236faedd47a555f1442beb7327', '[\"*\"]', NULL, NULL, '2024-04-14 13:14:20', '2024-04-14 13:14:20'),
(100, 'App\\Models\\User', 3, 'auth_token', 'f194d56322523bd2365bfa40b1979377b0e4276d539cb6e8b84fb4ab96e6b9fa', '[\"*\"]', NULL, NULL, '2024-04-14 13:16:30', '2024-04-14 13:16:30'),
(101, 'App\\Models\\User', 3, 'auth_token', 'ef8b5f1411937e248b6198254303d9da537a77a57e959bcc9f3ddc8d9a9889f0', '[\"*\"]', NULL, NULL, '2024-04-14 13:36:37', '2024-04-14 13:36:37'),
(102, 'App\\Models\\User', 3, 'auth_token', 'a8ef7803db2a65516fb4882410c39db2b6e2a08c22fac086543c13c21f02c03a', '[\"*\"]', NULL, NULL, '2024-04-14 13:39:39', '2024-04-14 13:39:39'),
(103, 'App\\Models\\User', 3, 'auth_token', '05276d2eb915777e4340aa93daf2b15e9aba8d3b19c620cc17fa3c01085d04bf', '[\"*\"]', NULL, NULL, '2024-04-14 13:44:15', '2024-04-14 13:44:15'),
(104, 'App\\Models\\User', 3, 'auth_token', '537a470fd9c91ffc68caa238426c70b59cb13b7711ee2d2b51f5bf4a2dc8c83e', '[\"*\"]', NULL, NULL, '2024-04-14 13:46:41', '2024-04-14 13:46:41'),
(105, 'App\\Models\\User', 3, 'auth_token', 'e56bee461459bebe1530cd5ef246583cf0f3a1e6f3fd5f424dbcda6dfe4f4664', '[\"*\"]', NULL, NULL, '2024-04-14 13:48:33', '2024-04-14 13:48:33'),
(106, 'App\\Models\\User', 3, 'auth_token', 'b14f5d6997fb134ba21b5166a799809c7d4a50c9d5986a15278a789c9937ab87', '[\"*\"]', NULL, NULL, '2024-04-14 13:50:52', '2024-04-14 13:50:52'),
(107, 'App\\Models\\User', 3, 'auth_token', '651eea108abaa88ff9cc17ea047a78e9b2579e00c41e0b5a79aef24b60f1c703', '[\"*\"]', NULL, NULL, '2024-04-15 05:05:21', '2024-04-15 05:05:21'),
(108, 'App\\Models\\User', 3, 'auth_token', '4173f1625062f703035a7544e9ed26ca517c8dabbeaca8e9a1b6d29fa24a8543', '[\"*\"]', NULL, NULL, '2024-04-15 12:12:00', '2024-04-15 12:12:00'),
(109, 'App\\Models\\User', 3, 'auth_token', 'b0fc15f7c4d201ec3a4589d9847669cf00b8794c8187ae71c047a796bf1032ac', '[\"*\"]', NULL, NULL, '2024-04-15 12:16:08', '2024-04-15 12:16:08'),
(110, 'App\\Models\\User', 3, 'auth_token', 'e4e6fc3322bdd00f90973291208c84b6af7959a1e62f8a505c130e63c82fd325', '[\"*\"]', NULL, NULL, '2024-04-15 12:23:23', '2024-04-15 12:23:23'),
(111, 'App\\Models\\User', 3, 'auth_token', 'df825c447d8c7cd811cc4231d2a92b2025d526544b448c8a2641492d1ba57938', '[\"*\"]', NULL, NULL, '2024-04-15 12:24:57', '2024-04-15 12:24:57'),
(112, 'App\\Models\\User', 3, 'auth_token', 'a38c9e97d017c21b9a214c1d128cb25ed830b88537a667042a1441f080aea3d7', '[\"*\"]', NULL, NULL, '2024-04-15 12:29:24', '2024-04-15 12:29:24'),
(113, 'App\\Models\\User', 3, 'auth_token', 'd331b3e9349728537eddec43cb8b9b53d48ec258b0e57a41db2f3ddbb19ebf94', '[\"*\"]', NULL, NULL, '2024-04-15 12:29:58', '2024-04-15 12:29:58'),
(114, 'App\\Models\\User', 3, 'auth_token', '4d533916b2a6817119ea865c936732296188f9c02130e8b21189971ab53466e7', '[\"*\"]', NULL, NULL, '2024-04-15 12:30:22', '2024-04-15 12:30:22'),
(115, 'App\\Models\\User', 3, 'auth_token', '84281f95cb57c97ef0b81b18adc28e43450418d5831156498e3dc443c5832a11', '[\"*\"]', NULL, NULL, '2024-04-15 12:30:42', '2024-04-15 12:30:42'),
(116, 'App\\Models\\User', 3, 'auth_token', 'f0c37c8248aa80e4e80586d0848d7257fc91ae9362653f89156cbdd156b2e513', '[\"*\"]', NULL, NULL, '2024-04-15 12:31:24', '2024-04-15 12:31:24'),
(117, 'App\\Models\\User', 3, 'auth_token', '2b5be64ad98b84a7b51265bdbf9bcf20a2fd9b974d6396fffd7aaa8925cba222', '[\"*\"]', NULL, NULL, '2024-04-15 12:31:44', '2024-04-15 12:31:44'),
(118, 'App\\Models\\User', 3, 'auth_token', '2653ee1aeab49e7e424eca165f616cdba58466af3e9a73d44f967b07b0c6aa0f', '[\"*\"]', NULL, NULL, '2024-04-15 12:32:06', '2024-04-15 12:32:06'),
(119, 'App\\Models\\User', 3, 'auth_token', 'a2b9dd39f5a913808a2b95754a29abfeae6668ad2517c6d06219814b164f658a', '[\"*\"]', NULL, NULL, '2024-04-15 12:32:28', '2024-04-15 12:32:28'),
(120, 'App\\Models\\User', 3, 'auth_token', 'fe2de9af80fc8508a9fc9537e91352b41a9b86627a6567b52c4efecab018da84', '[\"*\"]', NULL, NULL, '2024-04-15 12:33:04', '2024-04-15 12:33:04'),
(121, 'App\\Models\\User', 3, 'auth_token', '6a7b3ae7a9cefbedbb801167b21efe6fa00b8a8040a135f56be207c9f0bb8bf8', '[\"*\"]', NULL, NULL, '2024-04-15 12:37:57', '2024-04-15 12:37:57'),
(122, 'App\\Models\\User', 3, 'auth_token', 'e61a61ec5573308c4ad7f90a10e70da62ba7042b03193bced037bc99b923dabf', '[\"*\"]', NULL, NULL, '2024-04-15 12:59:33', '2024-04-15 12:59:33'),
(123, 'App\\Models\\User', 3, 'auth_token', '9bd200d418121fcd170329c3fa4d9170c674b2460524f9f466bdc49c5ccdc4d0', '[\"*\"]', NULL, NULL, '2024-04-16 05:23:03', '2024-04-16 05:23:03'),
(124, 'App\\Models\\User', 3, 'auth_token', '6e99c8763f25f5ee5f3f507b3919ff7d7c657af567e4a82b45e816c6b673a928', '[\"*\"]', NULL, NULL, '2024-04-16 08:20:59', '2024-04-16 08:20:59'),
(125, 'App\\Models\\User', 3, 'auth_token', '4a3beb6ac95f6e4222894a2d4ca5f7c7a08caee4a4503ff3ffddab4b32f0878d', '[\"*\"]', NULL, NULL, '2024-04-16 09:00:47', '2024-04-16 09:00:47'),
(126, 'App\\Models\\User', 3, 'auth_token', 'e08151d9f59c84fa7d28d96ae63c1ed4e2f5cda3ae7d10514cd67e3ad6ad0157', '[\"*\"]', NULL, NULL, '2024-04-16 10:52:21', '2024-04-16 10:52:21'),
(127, 'App\\Models\\User', 3, 'auth_token', '131e8eb0adc371190f890b7e55e99b24516a7d144d96bf25161552cad48af617', '[\"*\"]', NULL, NULL, '2024-04-16 10:57:16', '2024-04-16 10:57:16'),
(128, 'App\\Models\\User', 8, 'auth_token', 'c6a721f60b466c2b130c4371959157d2802ff27c5c53a0a79f560fe8b39821e9', '[\"*\"]', NULL, NULL, '2024-04-16 11:36:15', '2024-04-16 11:36:15'),
(129, 'App\\Models\\User', 3, 'auth_token', 'aa050cc9ed90c3c183622eb7e40f8f6c4794f0ebf91e0ef59472462fd7b23d89', '[\"*\"]', NULL, NULL, '2024-04-16 11:39:26', '2024-04-16 11:39:26');

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
(11, 'In questo modo mi compaiono i post più recente', 'WWWW', 3, 2, '2024-04-03 11:14:32', '2024-04-03 11:14:32'),
(12, 'Sono sandra', 'sapete come si dice mangiare', 3, 2, '2024-04-03 13:15:00', '2024-04-03 13:15:00'),
(13, '日本に行きたい！！！', '皆さんこんにちは！\n今朝は目が覚めたら日本に行きたかった、、、', 3, 3, '2024-04-04 06:29:01', '2024-04-04 06:29:01'),
(14, 'マーシュル', '知りませんか', 3, 1, '2024-04-07 06:23:44', '2024-04-07 06:23:44'),
(15, '君に届かない', '皆さんこんにちは、「君に届かない」はドラマとアニメですけど、アニメよりドラマのほうが好きです。\n面白いと思います。\n二人の主人公がいます。\nあなた達は二人の男の人ですよ！', 3, 1, '2024-04-12 10:54:30', '2024-04-12 10:54:30'),
(29, '日本語でペラペラをなりたい', 'おはようございます。\n今日は悲しい、、、\nペラペラじゃないけど、難しいです', 3, 6, '2024-04-12 12:05:21', '2024-04-12 12:05:21'),
(30, 'わたし夢はスペースシャトルで旅することです', 'この文は英語で \"My dream is to travel in a space shuttle\"', 8, 2, '2024-04-16 11:38:50', '2024-04-16 11:38:50');

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
(29, 'うん、大好き', 3, 14, '2024-04-07 06:24:03', '2024-04-07 06:24:03'),
(30, '僕も、、、', 3, 29, '2024-04-12 12:22:11', '2024-04-12 12:22:11'),
(31, 'おい！日本人です。\n知っていますが、ノーマルです！', 3, 29, '2024-04-12 12:32:04', '2024-04-12 12:32:04'),
(32, '知っています', 3, 29, '2024-04-12 12:34:48', '2024-04-12 12:34:48'),
(42, '君には届かない', 3, 15, '2024-04-14 13:52:17', '2024-04-14 13:52:17'),
(43, '大好き', 3, 14, '2024-04-14 13:52:53', '2024-04-14 13:52:53'),
(44, 'はい！日本人です\n日本語は私の母語です。\n正しい！', 3, 9, '2024-04-16 11:05:02', '2024-04-16 11:05:02'),
(45, 'そうだよ！', 3, 9, '2024-04-16 11:08:22', '2024-04-16 11:08:22'),
(46, 'うん', 3, 9, '2024-04-16 11:09:19', '2024-04-16 11:09:19'),
(47, '正しい', 3, 9, '2024-04-16 11:10:24', '2024-04-16 11:10:24'),
(59, '素晴らしい！', 3, 30, '2024-04-16 11:39:51', '2024-04-16 11:39:51');

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
-- Indexes for table `examples`
--
ALTER TABLE `examples`
  ADD PRIMARY KEY (`id`);

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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `examples`
--
ALTER TABLE `examples`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `game_scores`
--
ALTER TABLE `game_scores`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=130;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `post_replies`
--
ALTER TABLE `post_replies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

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
