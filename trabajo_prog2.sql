-- MySQL dump 10.13  Distrib 8.0.21, for macos10.15 (x86_64)
--
-- Host: localhost    Database: trabajo_prog2
-- ------------------------------------------------------
-- Server version	5.7.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Comentarios`
--

DROP TABLE IF EXISTS `Comentarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Comentarios` (
  `IdComentario` int(11) NOT NULL AUTO_INCREMENT,
  `Id_Post` int(11) NOT NULL,
  `Id_Usuario` int(11) NOT NULL,
  `Texto` varchar(300) DEFAULT NULL,
  `Creacion` date NOT NULL,
  PRIMARY KEY (`IdComentario`),
  KEY `Id_Post` (`Id_Post`),
  KEY `Id_Usuario` (`Id_Usuario`),
  CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`Id_Post`) REFERENCES `Post` (`IdPost`),
  CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`Id_Usuario`) REFERENCES `Usuarios` (`IdUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=201 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Comentarios`
--

LOCK TABLES `Comentarios` WRITE;
/*!40000 ALTER TABLE `Comentarios` DISABLE KEYS */;
INSERT INTO `Comentarios` VALUES (1,1,1,'Ok','2019-10-27'),(2,1,1,'Si','2020-07-19'),(3,1,1,'Lo','2020-09-12'),(4,1,1,'Ko','2020-09-10'),(5,2,1,'Er','2020-09-13'),(6,2,1,'$e','2020-09-09'),(7,2,1,'Re','2020-09-08'),(8,2,1,'Te','2020-09-07'),(9,3,1,'Ye','2020-09-06'),(10,3,1,'Yu','2020-09-05'),(11,3,1,'Sq','2020-09-04'),(12,3,1,'Zw','2020-09-03'),(13,4,1,'Hu','2020-09-02'),(14,4,1,'Nf','2020-09-01'),(15,4,1,'No','2020-09-14'),(16,4,1,'Fg','2020-09-15'),(17,5,1,'Sw','2020-09-16'),(18,5,1,'Aq','2020-09-17'),(19,5,1,'Er','2020-09-18'),(20,5,1,'Sc','2020-09-19'),(21,6,1,'We','2020-09-20'),(22,6,1,'Wr','2020-09-21'),(23,6,1,'Ws','2020-09-22'),(24,6,1,'Wa','2020-09-23'),(25,7,1,'Wd','2020-09-24'),(26,7,1,'Wf','2020-09-25'),(27,7,1,'Wt','2020-09-26'),(28,7,1,'Wa','2020-09-27'),(29,8,1,'Wg','2020-09-28'),(30,8,1,'Wi','2020-09-29'),(31,8,1,'Wl','2020-09-30'),(32,8,1,'Qe','2020-10-01'),(33,9,1,'Lo','2020-10-02'),(34,9,1,'fd','2020-10-03'),(35,9,1,'fx','2020-10-04'),(36,9,1,'ew','2020-10-05'),(37,10,1,'er','2020-10-06'),(38,10,1,'ef','2020-10-08'),(39,10,1,'eg','2020-10-09'),(40,10,1,'ec','2020-10-10'),(41,11,2,'gh','2020-10-11'),(42,11,2,'ev','2020-10-12'),(43,11,2,'gj','2020-10-13'),(44,11,2,'gn','2020-10-14'),(45,12,2,'gk','2020-10-15'),(46,12,2,'gb','2020-10-17'),(47,12,2,'vg','2020-10-18'),(48,12,2,'vd','2020-10-19'),(49,13,2,'zs','2020-10-20'),(50,13,2,'zc','2020-10-21'),(51,13,2,'lp','2020-10-22'),(52,13,2,'lo','2020-10-23'),(53,14,2,'li','2020-10-24'),(54,14,2,'lu','2020-10-25'),(55,14,2,'ly','2020-10-25'),(56,14,2,'lk','2020-10-26'),(57,15,2,'lj','2020-10-26'),(58,15,2,'lh','2020-10-27'),(59,15,2,'lg','2020-10-27'),(60,15,2,'lm','2020-10-28'),(61,16,2,'ln','2020-10-28'),(62,16,2,'nm','2020-10-29'),(63,16,2,'nn','2020-10-29'),(64,16,2,'nb','2020-10-30'),(65,17,2,'vb','2020-10-30'),(66,17,2,'op','2020-10-30'),(67,17,2,'po','2020-11-01'),(68,17,2,'ol','2020-11-01'),(69,18,2,'oi','2020-11-01'),(70,18,2,'lo','2020-11-01'),(71,18,2,'uy','2020-11-02'),(72,18,2,'ut','2020-11-02'),(73,19,2,'re','2020-11-02'),(74,19,2,'wrt','2020-11-02'),(75,19,2,'gdf','2020-11-03'),(76,19,2,'hg','2020-11-03'),(77,20,2,'jhg','2020-11-04'),(78,20,2,'ku','2020-11-04'),(79,20,2,'yr','2020-11-05'),(80,20,2,'wr','2020-11-05'),(81,21,3,'se','2020-11-06'),(82,21,3,'es','2020-11-06'),(83,21,3,'fcx','2020-11-07'),(84,21,3,'ytr','2020-11-07'),(85,22,3,'utr','2020-11-07'),(86,22,3,'rew','2020-11-08'),(87,22,3,'yre','2020-11-08'),(88,22,3,'yre','2020-11-08'),(89,23,3,'eq','2020-11-09'),(90,23,3,'ytjf','2020-11-09'),(91,23,3,'utr','2020-11-09'),(92,23,3,'wers','2020-11-10'),(93,24,3,'htr','2020-11-10'),(94,24,3,'dgdf','2020-11-11'),(95,24,3,'dgrhg','2020-11-11'),(96,24,3,'jyt','2020-11-11'),(97,25,3,'kyu','2020-11-12'),(98,25,3,'kty','2020-11-12'),(99,25,3,'ewr','2020-11-12'),(100,25,3,'sed','2020-11-12'),(101,26,3,'gre','2020-11-13'),(102,26,3,'wtr','2020-11-13'),(103,26,3,'tee','2020-11-13'),(104,26,3,'dfg','2020-11-14'),(105,27,3,'gre','2020-11-14'),(106,27,3,'qer','2020-11-15'),(107,27,3,'gres','2020-11-15'),(108,27,3,'hfg','2020-11-16'),(109,28,3,'chcv','2020-11-16'),(110,28,3,'cvhhe','2020-11-16'),(111,28,3,'eyr','2020-11-17'),(112,28,3,'htr','2020-11-17'),(113,29,3,'wet','2020-11-17'),(114,29,3,'sd','2020-11-18'),(115,29,3,'xg','2020-11-18'),(116,29,3,'ge','2020-11-19'),(117,30,3,'yer','2020-11-19'),(118,30,3,'rye','2020-11-19'),(119,30,3,'yery','2020-11-19'),(120,30,3,'iuk','2020-11-20'),(121,31,4,'kui','2020-11-20'),(122,31,4,'kiy','2020-11-21'),(123,31,4,'ut','2020-11-21'),(124,31,4,'ytu','2020-11-21'),(125,32,4,'uty','2020-11-22'),(126,32,4,'jbn','2020-11-22'),(127,32,4,'yu','2020-11-22'),(128,32,4,'uyt','2020-11-22'),(129,33,4,'jgh','2020-11-23'),(130,33,4,'kuy','2020-11-23'),(131,33,4,'iuy','2020-11-23'),(132,33,4,'ti','2020-11-23'),(133,34,4,'itu','2020-11-24'),(134,34,4,'trg','2020-11-24'),(135,34,4,'hrt','2020-11-24'),(136,34,4,'hr','2020-11-25'),(137,35,4,'rtygf','2020-11-25'),(138,35,4,'hgc','2020-11-25'),(139,35,4,'hry','2020-11-25'),(140,35,4,'hrtd','2020-11-25'),(141,36,4,'gde','2020-11-25'),(142,36,4,'hyr','2020-11-26'),(143,36,4,'jyr','2020-11-26'),(144,36,4,'rye','2020-11-26'),(145,37,4,'utr','2020-11-26'),(146,37,4,'iut','2020-11-27'),(147,37,4,'rtu','2020-11-27'),(148,37,4,'iuyt','2020-11-27'),(149,38,4,'iyt','2020-11-27'),(150,38,4,'iyt','2020-11-28'),(151,38,4,'fg','2020-11-28'),(152,38,4,'ity','2020-11-28'),(153,39,4,'iui','2020-11-28'),(154,39,4,'ouo','2020-11-29'),(155,39,4,'yui','2020-11-29'),(156,39,4,'sdfg','2020-11-29'),(157,40,4,'gfdh','2020-11-29'),(158,40,4,'htr','2020-11-30'),(159,40,4,'set','2020-11-30'),(160,40,4,'gre','2020-11-30'),(161,41,5,'ter','2020-11-30'),(162,41,5,'hgd','2020-12-01'),(163,41,5,'sgfd','2020-12-01'),(164,41,5,'hdf','2020-12-01'),(165,42,5,'hgf','2020-12-01'),(166,42,5,'dhf','2020-12-02'),(167,42,5,'yrh','2020-12-02'),(168,42,5,'yrt','2020-12-02'),(169,43,5,'hrry','2020-12-02'),(170,43,5,'hyr','2020-12-02'),(171,43,5,'ewr','2020-12-03'),(172,43,5,'st','2020-12-03'),(173,44,5,'rwe','2020-12-03'),(174,44,5,'trw','2020-12-04'),(175,44,5,'q','2020-12-04'),(176,44,5,'xvc','2020-12-04'),(177,45,5,'bvc','2020-12-04'),(178,45,5,'dx','2020-12-05'),(179,45,5,'fdg','2020-12-05'),(180,45,5,'gfd','2020-12-05'),(181,46,5,'kjh','2020-12-05'),(182,46,5,'yt','2020-12-06'),(183,46,5,'rty','2020-12-06'),(184,46,5,'kjvhb','2020-12-06'),(185,47,5,'hgj','2020-12-06'),(186,47,5,'jf','2020-12-07'),(187,47,5,'vgj','2020-12-07'),(188,47,5,'jvh','2020-12-07'),(189,48,5,'jut','2020-12-08'),(190,48,5,'ktu','2020-12-08'),(191,48,5,'ret','2020-12-08'),(192,48,5,'est','2020-12-08'),(193,49,5,'trsxd','2020-12-08'),(194,49,5,'rtwe','2020-12-09'),(195,49,5,'ster','2020-12-09'),(196,49,5,'tse','2020-12-09'),(197,50,5,'hdfh','2020-12-09'),(198,50,5,'gfd','2020-12-10'),(199,50,5,'bvn','2020-12-10'),(200,50,5,'yut','2020-12-10');
/*!40000 ALTER TABLE `Comentarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Post`
--

DROP TABLE IF EXISTS `Post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Post` (
  `IdPost` int(11) NOT NULL AUTO_INCREMENT,
  `Id_Usuario` int(11) NOT NULL,
  `Url` varchar(200) NOT NULL,
  `Texto` varchar(300) NOT NULL,
  `Creacion` date NOT NULL,
  PRIMARY KEY (`IdPost`),
  KEY `Id_Usuario` (`Id_Usuario`),
  CONSTRAINT `post_ibfk_1` FOREIGN KEY (`Id_Usuario`) REFERENCES `Usuarios` (`IdUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Post`
--

LOCK TABLES `Post` WRITE;
/*!40000 ALTER TABLE `Post` DISABLE KEYS */;
INSERT INTO `Post` VALUES (1,1,'images/posts/1.jpeg','Bueno','2000-01-01'),(2,1,'images/posts/2.jpeg','Good','2000-02-01'),(3,1,'images/posts/3.jpeg','X','2000-03-02'),(4,1,'images/posts/4.jpeg','Ok','2000-04-10'),(5,1,'images/posts/5.jpeg','F','2001-03-12'),(6,1,'images/posts/6.jpeg','Si','2001-02-11'),(7,1,'images/posts/7.jpeg','Ok','2009-04-11'),(8,1,'images/posts/8.jpeg','M','2001-10-10'),(9,1,'images/posts/9.jpeg','No','2005-08-31'),(10,1,'images/posts/10.jpeg','13','2007-05-12'),(11,2,'images/posts/11.jpeg','V','2012-01-21'),(12,2,'images/posts/12.jpeg','Ok','1997-11-12'),(13,2,'images/posts/13.jpeg','M','2001-06-12'),(14,2,'images/posts/14.jpeg','Az','2019-12-21'),(15,2,'images/posts/15.jpeg','Si','2000-09-21'),(16,2,'images/posts/16.jpeg','E','1996-10-09'),(17,2,'images/posts/17.jpeg','Me','1994-11-30'),(18,2,'images/posts/18.jpeg','Z','2019-10-21'),(19,2,'images/posts/19.jpeg','A','2020-02-12'),(20,2,'images/posts/20.jpeg','Viv','2010-05-13'),(21,3,'images/posts/21.jpeg','Qe','2010-02-13'),(22,3,'images/posts/22.jpeg','Los','2009-03-17'),(23,3,'images/posts/23.jpeg','Asi','2005-07-23'),(24,3,'images/posts/24.jpeg','Bien','1999-03-15'),(25,3,'images/posts/25.jpeg','Ze','2004-10-23'),(26,3,'images/posts/26.jpeg','cd','2020-04-12'),(27,3,'images/posts/27.jpeg','df','2020-04-12'),(28,3,'images/posts/28.jpeg','gf','2020-04-12'),(29,3,'images/posts/29.jpeg','jh','2020-04-12'),(30,3,'images/posts/30.jpeg','jj','2020-04-12'),(31,4,'images/posts/31.jpeg','lk','2020-04-12'),(32,4,'images/posts/32.jpeg','kj','2020-04-12'),(33,4,'images/posts/33.jpeg','kj','2020-04-12'),(34,4,'images/posts/34.jpeg','li','2020-04-12'),(35,4,'images/posts/35.jpeg','ut','2020-04-12'),(36,4,'images/posts/36.jpeg','yrd','2020-04-12'),(37,4,'images/posts/37.jpeg','hfg','2020-04-12'),(38,4,'images/posts/38.jpeg','etr','2020-04-18'),(39,4,'images/posts/39.jpeg','ere','2020-04-26'),(40,4,'images/posts/40.jpeg','ter','2020-04-30'),(41,5,'images/posts/41.jpeg','uy','2020-04-12'),(42,5,'images/posts/42.jpeg','iu','2020-04-06'),(43,5,'images/posts/43.jpeg','uo','2020-04-12'),(44,5,'images/posts/44.jpeg','ou','2020-04-09'),(45,5,'images/posts/45.jpeg','li','2020-04-12'),(46,5,'images/posts/46.jpeg','li','2020-04-16'),(47,5,'images/posts/47.jpeg','kjh','2020-04-15'),(48,5,'images/posts/48.jpeg','uyu','2020-04-14'),(49,5,'images/posts/49.jpeg','iu','2020-04-13'),(50,5,'images/posts/50.jpeg','oi','2020-04-12');
/*!40000 ALTER TABLE `Post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Usuarios`
--

DROP TABLE IF EXISTS `Usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Usuarios` (
  `IdUsuario` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre_Completo` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Contraseña` varchar(50) NOT NULL,
  `Edad` decimal(4,1) NOT NULL,
  `Nacimiento` date NOT NULL,
  PRIMARY KEY (`IdUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Usuarios`
--

LOCK TABLES `Usuarios` WRITE;
/*!40000 ALTER TABLE `Usuarios` DISABLE KEYS */;
INSERT INTO `Usuarios` VALUES (1,'Joaquin A','j@gmail.com','123',20.0,'2000-09-18'),(2,'Santiago M','s@gmail.com','1234',24.0,'1996-03-23'),(3,'Sofia E','so@gmail.com','12345',38.0,'1982-06-15'),(4,'Pedro V','p@gmail.com','123456',11.0,'2009-04-29'),(5,' Luciano C','l@gmail.com','12',53.0,'1967-08-20');
/*!40000 ALTER TABLE `Usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-03 12:30:12
