using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;

namespace Json2xml
{
    class Program
    {
        static public void Main()
        {
            Console.WriteLine("Escriba un archivo de entrada de tipo JSON:");
            string input = Console.ReadLine();

            if (input.Length < 1)
            {
                throw new ArgumentNullException();
            }

            String[] division;

            try
            {
                division = input.Split('.');
                if (!(division[division.Length - 1]).Equals("json"))
                {
                    throw new ArgumentException("La extensión del archivo no es la correcta.");
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }



            string json = "";

            try
            {
                json = File.ReadAllText(input);
            }
            catch (FileNotFoundException)
            {
                Console.WriteLine("Archivo no encontrado");

            }

            var xml = JsonConvert.DeserializeXmlNode(json).OuterXml;

            File.WriteAllText(input.Replace(".json", ".xml"), xml);
        }
    }
}
