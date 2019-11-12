using System;

public class Xml2json{

    static void main(string[] args)
    {
        if (args.Length < 1)
            throw new ArgumentNullException();

        String file = args[0];

        XmlDocument file = new XmlDocument();
        file.LoadXml(xml);

        string jsonDoc = JsonConvert.SerializeXmlNode(file);

        Console.WriteLine(jsonDoc);
    }

}
