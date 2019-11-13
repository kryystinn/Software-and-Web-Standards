using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Xml;
using Newtonsoft.Json;

namespace Xml2json
{

    public class Program
    {

        static public void Main()
        {
            Console.WriteLine("Escriba un archivo de entrada de tipo XML:");
            string input = Console.ReadLine();

            if (input.Length < 1)
            {
                throw new ArgumentNullException();
            }

            String[] division;

            try
            {
                division = input.Split('.');
                if (!(division[division.Length - 1]).Equals("xml"))
                {
                    throw new ArgumentException("La extensión del archivo no es la correcta.");
                }
            } catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }

           

            string xml = "";

            try
            {
                xml = File.ReadAllText(input);
            }
            catch (FileNotFoundException)
            {
                Console.WriteLine("Archivo no encontrado");

            }

            XmlDocument doc = new XmlDocument();
            doc.LoadXml(xml);

            string json = JsonConvert.SerializeXmlNode(doc);

            File.WriteAllText(input.Replace(".xml", ".json"), json);
        }

    }

}
