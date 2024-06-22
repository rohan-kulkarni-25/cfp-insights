// src/utils/readSheet.js

import * as XLSX from "xlsx";

export const readSheet = async (file) => {
  const data = await file.arrayBuffer();
  const workbook = XLSX.read(data);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const jsonData = XLSX.utils.sheet_to_json(sheet);
  return jsonData;
};
