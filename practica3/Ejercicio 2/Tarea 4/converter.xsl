<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="rutas">
	<xsl:variable name="inicio"	select="position()"/>
		<xsl:for-each select="ruta">
			<svg height="500" width="800" xmlns="http://www.w3.org/2000/svg">
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
			</svg>
		</xsl:for-each>
	</xsl:template>
</xsl:stylesheet>