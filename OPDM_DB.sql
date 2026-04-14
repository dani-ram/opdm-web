DROP DATABASE OPDM_PODCAST;
CREATE DATABASE OPDM_PODCAST;
USE OPDM_PODCAST;

CREATE TABLE episodios(
	EPid INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    títuloEP VARCHAR(255) UNIQUE,
    descripcion TEXT,
    archivo_audio VARCHAR(255),
    fecha_publicacion DATETIME,
    duración INT
);


CREATE TABLE artistas(
	artistid INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255),
    canciones VARCHAR(255) UNIQUE,
    tituloEP VARCHAR(255),
    FOREIGN KEY (tituloEP) REFERENCES episodios(tituloEP)
    
);


CREATE TABLE canciones(
	cancionid INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    titulocancion VARCHAR (255),
    artista VARCHAR (255),
    FOREIGN KEY (artista) REFERENCES artistas(canciones)
);



