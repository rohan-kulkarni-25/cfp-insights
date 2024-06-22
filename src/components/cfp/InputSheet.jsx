import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Table } from "../ui/table";
import { readSheet } from "@/helpers/readSheet";

const InputSheet = () => {
  const [data, setData] = useState([]);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const jsonData = await readSheet(file);
      setData(jsonData);
    }
  };
  return (
    <div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="picture">Picture</Label>
        <Input onChange={handleFileUpload} id="sheet" type="file" />
      </div>
      {data.length > 0 && (
        <Table>
          <thead>
            <tr>
              {Object.keys(data[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, i) => (
                  <td key={i}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default InputSheet;
