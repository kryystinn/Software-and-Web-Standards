<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="rutas">
	<xsl:variable name="inicio"	select="position()"/>
		<xsl:for-each select="ruta">
			<svg height="1000" width="800" xmlns="http://www.w3.org/2000/svg">
				
				<polyline>
					<xsl:attribute name="style">
					<xsl:text>fill:none; stroke:red; stroke-width:3</xsl:text>
					</xsl:attribute>
					<xsl:attribute name="points">
						<xsl:value-of select="$inicio"/>
						<xsl:text>,</xsl:text>
						<xsl:value-of select="100-coordenadas/altitud"/>
						<xsl:text> </xsl:text>					
						<xsl:for-each select="hitos/hito">
							<xsl:value-of select="position()*50"/>
							<xsl:text>,</xsl:text>
							<xsl:value-of select="100-coordenadas/altitud"/>
							<xsl:text> </xsl:text>
						</xsl:for-each>
					</xsl:attribute>
				</polyline>

        <xsl:variable name="x" select="position()"/>
        <xsl:variable name="y" select="115-coordenadas/altitud"/>
        <text>
          <xsl:attribute name="x">
            <xsl:text>-100</xsl:text>
          </xsl:attribute>
          <xsl:attribute name="y">
            <xsl:text>210</xsl:text>
          </xsl:attribute>
          <xsl:attribute name="transform">
            <xsl:text>rotate(</xsl:text>
            <xsl:value-of select="-90"/>
            <xsl:text>,0,</xsl:text>
            <xsl:text>200</xsl:text>
            <xsl:text>)</xsl:text>
          </xsl:attribute>
          <xsl:text>Inicio</xsl:text>
        </text>

			<xsl:for-each select="hitos/hito">
				<text>
          <xsl:attribute name="x">
            <xsl:text>-200</xsl:text>
          </xsl:attribute>
					<xsl:attribute name="y">
            <xsl:value-of select="100+position()*50"/>
          </xsl:attribute>
					<xsl:attribute name="transform">
						<xsl:text>rotate(</xsl:text>
						<xsl:value-of select="-90"/>
						<xsl:text>,0,</xsl:text>
            <xsl:value-of select="$y"/>
            <xsl:text>)</xsl:text>
					</xsl:attribute>
						
					<xsl:value-of select="nombre"/>
				</text>
			</xsl:for-each>

			</svg>

		</xsl:for-each>
	</xsl:template>
</xsl:stylesheet>