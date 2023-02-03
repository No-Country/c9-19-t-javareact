CREATE DATABASE `good_learner` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

CREATE TABLE `person` (
  `id_person` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `document` varchar(45) NOT NULL,
  `birth_date` datetime NOT NULL,
  `email` varchar(45) DEFAULT NULL,
  `time_stamp` varchar(45) NOT NULL,
  `phone` varchar(45) NOT NULL,
  `tutor_id` int DEFAULT NULL,
  PRIMARY KEY (`id_person`),
  KEY `tutor_id_idx` (`tutor_id`),
  CONSTRAINT `tutor_id` FOREIGN KEY (`tutor_id`) REFERENCES `person` (`id_person`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `role` (
  `id_role` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id_role`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `good_learner`.`user` (
  `id_user` INT NOT NULL AUTO_INCREMENT,
  `usermane` VARCHAR(50) NOT NULL,
  `password` VARCHAR(50) NOT NULL,
  `active` TINYINT NOT NULL,
  `person_id` INT NOT NULL,
  `rol_id` INT NOT NULL,
  PRIMARY KEY (`id_user`),
  INDEX `rol_id_idx` (`rol_id` ASC) VISIBLE,
  CONSTRAINT `person_id`
    FOREIGN KEY (`person_id`)
    REFERENCES `good_learner`.`person` (`id_person`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `rol_id`
    FOREIGN KEY (`rol_id`)
    REFERENCES `good_learner`.`role` (`id_role`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE `good_learner`.`session` (
  `id_session` INT NOT NULL AUTO_INCREMENT,
  `token` VARCHAR(500) NOT NULL,
  `time_release` DATETIME NOT NULL,
  `expiration_date` DATETIME NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id_session`),
  INDEX `user_id_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `good_learner`.`user` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


CREATE TABLE `good_learner`.`permission` (
  `id_permission` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `role_id` INT NOT NULL,
  PRIMARY KEY (`id_permission`),
  INDEX `role_id_idx` (`role_id` ASC) VISIBLE,
  CONSTRAINT `role_id`
    FOREIGN KEY (`role_id`)
    REFERENCES `good_learner`.`role` (`id_role`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE `asignatura` (
  `id_asignatura` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id_asignatura`)
)

CREATE TABLE `good_learner`.`shift` (
  `id_shift` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id_shift`));

CREATE TABLE `good_learner`.`commission` (
  `id_commission` INT NOT NULL AUTO_INCREMENT,
  `shift_id` INT NOT NULL,
  `curse` VARCHAR(50) NOT NULL,
  `division` VARCHAR(50) NOT NULL,
  `school_year` INT NOT NULL,
  PRIMARY KEY (`id_commission`),
  INDEX `shift_id_idx` (`shift_id` ASC) VISIBLE,
  CONSTRAINT `shift_id`
    FOREIGN KEY (`shift_id`)
    REFERENCES `good_learner`.`shift` (`id_shift`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE `good_learner`.`day` (
  `id_day` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(32) NOT NULL,
  PRIMARY KEY (`id_day`));

CREATE TABLE `good_learner`.`asignatura_commission` (
  `id_asignatura_commission` INT NOT NULL AUTO_INCREMENT,
  `asignatura_id` INT NOT NULL,
  `teacher_id` INT NOT NULL,
  `commission_id` INT NOT NULL,
  `day_id` INT NOT NULL,
  `start_time` TIME NOT NULL,
  `end_time` TIME NOT NULL,
  PRIMARY KEY (`id_asignatura_commission`),
  INDEX `commission_id_idx` (`commission_id` ASC) VISIBLE,
  INDEX `asignatura_id_idx` (`asignatura_id` ASC) VISIBLE,
  INDEX `teacher_id_idx` (`teacher_id` ASC) VISIBLE,
  INDEX `day_id_idx` (`day_id` ASC) VISIBLE,
  CONSTRAINT `commission_id`
    FOREIGN KEY (`commission_id`)
    REFERENCES `good_learner`.`commission` (`id_commission`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `asignatura_id`
    FOREIGN KEY (`asignatura_id`)
    REFERENCES `good_learner`.`asignatura` (`id_asignatura`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `teacher_id`
    FOREIGN KEY (`teacher_id`)
    REFERENCES `good_learner`.`person` (`id_person`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `day_id`
    FOREIGN KEY (`day_id`)
    REFERENCES `good_learner`.`day` (`id_day`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

ALTER TABLE `good_learner`.`commission`
ADD COLUMN `student_id` INT NOT NULL AFTER `school_year`,
ADD INDEX `student_id_idx` (`student_id` ASC) VISIBLE;
;
ALTER TABLE `good_learner`.`commission`
ADD CONSTRAINT `student_id`
  FOREIGN KEY (`student_id`)
  REFERENCES `good_learner`.`person` (`id_person`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;