<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:output method="html" version="5.0" encoding="UTF-8" indent="yes"/>

    <xsl:template match="rutas">
        <xsl:text disable-output-escaping='yes'>&lt;!DOCTYPE html></xsl:text>
        <html lang="es">

            <head>
                <meta name="author" content="Cristina Ruiz de Bucesta"/>
                <meta name="description" content="Información sobre rutas" />
                <meta name="keywords" content="ruta, pravia, ribadeo, sanxenxo, llanes, bergen, asturias, galicia, noruega, españa" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="stylesheet" type="text/css" href="style.css"/>
                <title>Rutas turísticas</title>
            </head>
            <body>
                <header>
                    <h1>Rutas turísticas</h1>
                </header>
                <main>
                    <xsl:for-each select="ruta">
                        <section class="ruta">
                            <h2>
                                <xsl:value-of select="@nombre" />
                            </h2>
                            <p>
                                <xsl:value-of select="@descripcion" />
                            </p>
                            <p>
                                Recomendación: <xsl:value-of select="@recomendacion" />
                            </p>
                            <h3>
                                Información sobre la ruta
                            </h3>
                            <p>
                                Tipo de ruta: <xsl:value-of select="tipo" />
                            </p>
                            <p>
                                Medio de transporte: <xsl:value-of select="medio_transporte" />
                            </p>
                            <xsl:if test="fecha_inicio">
                                <p>
                                    Fecha: <xsl:value-of select="fecha_inicio" />
                                </p>
                            </xsl:if>
                            <xsl:if test="fecha_inicio">
                                <p>
                                    Hora: <xsl:value-of select="hora_inicio" />
                                </p>
                            </xsl:if>
                            <p>
                                Duración: <xsl:value-of select="concat(days-from-duration($d), ' h ', minutes-from-duration($d), ' m')"/>
                            </p>
                            <p>
                                Agencia: <xsl:value-of select="agencia" />
                            </p>
                            <p>
                                Personas adecuadas para la ruta: <xsl:value-of select="personas_adecuadas" />
                            </p>
                            <p>
                                Lugar de inicio: <xsl:value-of select="lugar" />
                            </p>
                            <p>
                                Dirección: <xsl:value-of select="direccion" />
                            </p>
                            <h4>
                                Coordenadas geográficas del inicio de la ruta
                            </h4>
                            <ul>
                                <li>
                                    Longitud: <xsl:value-of select="coordenadas/longitud"/>
                                </li>
                                
                                <li>
                                    Latitud: <xsl:value-of select="coordenadas/latitud"/>
                                </li>
                                
                                <li>
                                    Altitud: <xsl:value-of select="coordenadas/altitud"/> metros
                                </li>
                            </ul>
                            <h4>
                                Hitos
                            </h4>
                            <xsl:for-each select="hitos/hito">
                                <p class="nombreHito">
                                    <xsl:value-of select="@nombre"/>
                                </p>
                                <p>
                                    Descripción del hito: <xsl:value-of select="descripcion" />
                                </p>
                                <p class="coordenadasHito">
                                    Coordenadas geográficas del hito:
                                </p>
                                <ul>
                                    <li>
                                        Longitud: <xsl:value-of select="coordenadas/longitud"/>
                                    </li>
                                    
                                    <li>
                                        Latitud: <xsl:value-of select="coordenadas/latitud"/>
                                    </li>
                                    
                                    <li>
                                        Altitud: <xsl:value-of select="coordenadas/altitud"/> metros
                                    </li>
                                </ul>
                                <p>
                                    Distancia desde hito anterior: <xsl:value-of select="distancia_hito_anterior" />
                                    
                                    <xsl:value-of select="distancia_hito_anterior/@unidad"/>
                                </p>
                                <p class="fotos">
                                    Fotografías
                                </p>
                                <xsl:for-each select="fotos/foto">
                                <ul>
                                    <li>
                                       <xsl:variable name="ref" select="."/>
                                        <a href="{$ref}"><xsl:value-of select="."/> </a>
                                    </li>
                                 </ul>
                                                              
                               </xsl:for-each>
                               <xsl:if test="videos/video">  
                                   <p class="videos">
                                        Vídeos
                                   </p>
                                   <xsl:for-each select="videos/video">
                                    <ul>
                                        <li>
                                            <xsl:variable name="ref" select="."/>
                                            <a href="{$ref}"><xsl:value-of select="."/> </a>
                                        </li>
                                    </ul>
                                   </xsl:for-each>
                               </xsl:if>
                            </xsl:for-each>   
                            <h4>
                                Referencias
                            </h4>
                            <ul>
                                <li>
                                    <xsl:variable name="ref" select="."/>
                                    <a href="{$ref}"><xsl:value-of select="."/> </a>
                                </li>
                            </ul>
                        </section>
                </xsl:for-each>
            </main>
            <footer>
                <a href="https://validator.w3.org/check?uri=referer">
                    <img class="img1"
                        src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" alt="HTML5 Válido" /></a>
                <a href="http://jigsaw.w3.org/css-validator/check/referer">
                    <img class="img2" src="http://jigsaw.w3.org/css-validator/images/vcss" alt="Valid CSS!" /></a>
            </footer>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>