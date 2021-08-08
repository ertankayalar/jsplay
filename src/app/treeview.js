import { _makeTree } from "./lib/arr-helpers";

const categoryArr = [
  {
    name: "Ana kategori",
    id: "60b355d30fbc0a69a3d4ac7b",
    parentid: "0",
  },
  {
    name: "Ana Kategori 2",
    id: "60d08171f7f1e2b60649f5a3",
    parentid: "0",
  },
  {
    name: "Ana Kategori 3",
    id: "60c882f284250d93062e4b26",
    parentid: "0",
  },

  {
    name: "alt kategori seviye 2",
    id: "60b355e40fbc0a69a3d4ac7c",
    parentid: "60b355d30fbc0a69a3d4ac7b",
  },
  {
    name: "Z alt kategori 3",
    id: "60d2e63ef7da891644269cff",
    parentid: "60b355d30fbc0a69a3d4ac7b",
  },
  {
    name: "Alt Kategori 2",
    id: "60d2e5d4f7da891644269cfe",
    parentid: "60b355d30fbc0a69a3d4ac7b",
  },

  {
    name: "alt kategori seviye 3",
    id: "610bdf3311e00d35a436848e",
    parentid: "60b355e40fbc0a69a3d4ac7c",
  },
  {
    name: "alt kategori seviye 4",
    id: "610bdf5311e00d35a436848f",
    parentid: "610bdf3311e00d35a436848e",
  },
];

const result = _makeTree({ q: categoryArr });

console.log(result);
