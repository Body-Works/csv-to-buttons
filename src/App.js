import React from "react";
import {
  findCatalogLink,
  getCsvLinks,
  constructOutput,
  constructHtmlOutput,
} from "./helpers";
import "./App.css";

const colors = {
  orange: "#f2861a",
  blue: "#3069a6",
  violet: "#d673c3",
  green: "#bac844",
  darkorange: "#d5752e",
};

function App() {
  const [originalCode, setOriginalCode] = React.useState("");
  const [catalogLink, setCatalogLink] = React.useState(null);

  const [csvLinks, setCsvLinks] = React.useState("");
  const [parsedCsvLinks, setParsedCsvLinks] = React.useState([]);

  const [output, setOutput] = React.useState("");
  const [copied, setCopied] = React.useState(false);

  // Options
  const [outputType, setOutputType] = React.useState("shortcode");
  const [color, setColor] = React.useState("orange");

  // Handle original code
  const handleOriginalCode = (event) => {
    const { value } = event.target;

    setCatalogLink(findCatalogLink(value));
    setOriginalCode(value);
  };

  // Handle CSV parsing
  const handleCsvLinks = (event) => {
    const { value } = event.target;

    setParsedCsvLinks(getCsvLinks(value));
    setCsvLinks(value);
  };

  const handleColor = (event) => {
    console.log(event.target.value);
    setColor(event.target.value);
  };

  const handleOutput = (event) => {
    console.log(event.target.value);
    setOutputType(event.target.value);
  };

  React.useEffect(() => {
    const currentColor = colors[color];

    if (parsedCsvLinks.length >= 4) {
      const links = [
        {
          text: "Karta katalogowa",
          url: parsedCsvLinks[3] ?? catalogLink,
          color: currentColor,
        },
        {
          text: "Rysunek .dwg",
          url: parsedCsvLinks[1],
          color: currentColor,
        },
        {
          text: "Rysunek .skp",
          url: parsedCsvLinks[4],
          color: currentColor,
        },
        {
          text: "Rysunek .max",
          url: parsedCsvLinks[2],
          color: currentColor,
        },
        {
          text: "Rysunek .3ds",
          url: parsedCsvLinks[0],
          color: currentColor,
        },
      ];

      if (outputType === "shortcode") {
        setOutput(constructOutput(links));
      } else {
        setOutput(constructHtmlOutput(links));
      }
    }
  }, [catalogLink, parsedCsvLinks, color, outputType]);

  React.useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), 500);
    }
  }, [copied]);

  const selectAllText = (e) => {
    e.target.select();
  };

  const copyText = (e) => {
    navigator.clipboard.writeText(e.target.value).then(() => {
      setCopied(true);
    });
  };

  return (
    <div className="App">
      <header>
        <label>
          Output:
          <select onChange={handleOutput} value={outputType}>
            <option value="shortcode">shortcode</option>
            <option value="html">html</option>
          </select>
        </label>
        <label>
          Color:
          <select onChange={handleColor} value={color}>
            {Object.keys(colors).map((color, i) => (
              <option value={color}>{color}</option>
            ))}
          </select>
        </label>
      </header>
      <div>
        <h1>Original button markup</h1>
        <textarea
          value={originalCode}
          onChange={handleOriginalCode}
          spellCheck="false"
          onClick={selectAllText}
        ></textarea>
        <div>
          <strong className={catalogLink === null ? "bad" : "ok"}>
            Found:
          </strong>{" "}
          {catalogLink}
        </div>
      </div>
      <div>
        <h1>CSV links</h1>
        <textarea
          value={csvLinks}
          onChange={handleCsvLinks}
          spellCheck="false"
          onClick={selectAllText}
        ></textarea>
        <strong className={parsedCsvLinks.length >= 4 ? "ok" : "bad"}>
          Found:
        </strong>
        <ol>
          {parsedCsvLinks.map((row, i) => (
            <li key={i}>{row}</li>
          ))}
        </ol>
      </div>
      <div>
        <h1>Output</h1>
        <textarea
          readOnly={true}
          value={output}
          onClick={(e) => {
            selectAllText(e);
            copyText(e);
          }}
        ></textarea>
        {copied && <strong className="ok">Copied!</strong>}
      </div>
    </div>
  );
}

export default App;
