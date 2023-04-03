const PDFMerger = require("pdf-merger-js");

var merger = new PDFMerger();

(async () => {
  await merger.add("pdf2.pdf", "25-34"); // merge pages 25-34
  await merger.add("pdf1.pdf"); // merge all pages from pdf1. parameter is the path to file and filename.

  await merger.save("merged.pdf"); //save under given name and reset the internal document
})();
