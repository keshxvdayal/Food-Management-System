import React from "react";
import { EditIcon, ThreeDotIcon } from "../assets/icons";

interface InventoryItem {
  id: number;
  itemName: string;
  expirationDate: string;
  quantity: number;
  totalValue: string;
}

const inventoryData: InventoryItem[] = [
  {
    id: 1,
    itemName: "Almond Drink",
    expirationDate: "3 May 2021",
    quantity: 35,
    totalValue: "135800 Rs",
  },
  {
    id: 2,
    itemName: "Almond Drink",
    expirationDate: "3 May 2021",
    quantity: 35,
    totalValue: "135800 Rs",
  },
  {
    id: 3,
    itemName: "Almond Drink",
    expirationDate: "3 May 2021",
    quantity: 35,
    totalValue: "135800 Rs",
  },
  {
    id: 4,
    itemName: "Almond Drink",
    expirationDate: "3 May 2021",
    quantity: 35,
    totalValue: "135800 Rs",
  },
  {
    id: 5,
    itemName: "Almond Drink",
    expirationDate: "3 May 2021",
    quantity: 35,
    totalValue: "135800 Rs",
  },
];

const InventoriesTable: React.FC = () => {
  return (
    <div>
      {/* Table Header */}
      <div className="flex justify-between text-sm border-b border-t border-purple-100 py-4 px-8 font-bold max-md:hidden">
        <span>ITEM NAME</span>
        <span>EXPIRATION DATE</span>
        <span>QUANTITY</span>
        <span>TOTAL VALUE</span>
        <span></span>
        <span></span>
      </div>

      {/* Table Body */}
      {inventoryData.map((item) => (
        <div
          key={item.id}
          className="flex justify-between p-8 border-b border-t text-sm"
        >
          <span className="max-md:text-center">
            <span className="hidden max-md:block font-bold text-gray-600">
              Item
            </span>{" "}
            {item.itemName}
          </span>
          <span className="max-md:text-center">
            <span className="hidden max-md:block font-bold text-gray-600">
              Exp Date
            </span>{" "}
            {item.expirationDate}
          </span>
          <span className="max-md:text-center">
            <span className="hidden max-md:block font-bold text-gray-600">
              Qty
            </span>{" "}
            {item.quantity}
          </span>
          <span className="max-md:text-center">
            <span className="hidden max-md:block font-bold text-gray-600">
              Value
            </span>{" "}
            {item.totalValue}
          </span>
          <div className="flex items-center gap-16 text-lg max-md:hidden">
            <span role="button">
              <EditIcon />
            </span>
            <span role="button">
              <ThreeDotIcon />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InventoriesTable;
