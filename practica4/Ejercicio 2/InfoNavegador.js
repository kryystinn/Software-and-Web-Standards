var navegador = new Object();
navegador.nombre = navigator.appName;
navegador.version = navigator.appVersion;
navegador.idioma = navigator.language;
navegador.plataforma = navigator.platform;
navegador.java = navigator.javaEnabled();
navegador.cookies = navigator.cookieEnabled;
navegador.peticion = navigator.userAgent;