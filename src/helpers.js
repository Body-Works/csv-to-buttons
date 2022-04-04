import blocks from "./blocks";
import htmlBtnBlock from "./htmlBlocks";
import { sprintf } from "sprintf-js";

export const findCatalogLink = (code) => {
  const regex = /https?:\/{2}[a-z\-.]+\.pl\/wp-content\/uploads\/\d{4}\/\d{2}\/.+\.[a-zA-Z]{3}/m;

  const link = code.match(regex);

  if (link[0]) {
    let fixedLink = link[0].replace("http://body-works.stronazen.pl/", "https://body-works.pl/");
    return fixedLink;
  }

  return null;
}

export const getCsvLinks = (code) => {
  const output = code.split("\t");

  if (output.length > 1) {
    return output.slice(1).filter(String);
  } else {
    return [];
  }
}

function* chunks(arr, n) {
  for (let i = 0; i < arr.length; i += n) {
    yield arr.slice(i, i + n);
  }
}

export const constructOutput = (links) => {
  let output = "";

  [...chunks(links, 3)].forEach(chunk => {
    output += blocks.rowStart;

    chunk.forEach(row => {
      output += blocks.colStart;
      output += sprintf(blocks.btn, row);
      output += blocks.colEnd;
    });

    output += blocks.rowEnd;
  });


  return output.replace(/(\r\n|\n|\r)/gm, "");
}

export const constructHtmlOutput = (links) => {
  let output = "";

  links.forEach(row => {
    output += sprintf(htmlBtnBlock, row);
  })

  return output.replace(/(\r\n|\n|\r)/gm, "");
}
