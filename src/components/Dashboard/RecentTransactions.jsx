import React from "react";
import { ArrowUpCircle, ArrowDownCircle } from "lucide-react";

const transactions = [
  {
    id: 1,
    type: "income",
    label: "Salary",
    amount: 1200,
    date: "2025-07-18",
  },
  {
    id: 2,
    type: "expense",
    label: "Groceries",
    amount: 250,
    date: "2025-07-17",
  },
  {
    id: 3,
    type: "income",
    label: "Freelance",
    amount: 800,
    date: "2025-07-16",
  },
  {
    id: 4,
    type: "expense",
    label: "Transport",
    amount: 100,
    date: "2025-07-15",
  },
];

export default function RecentTransactions() {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md h-full">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
        Recent Transactions
      </h2>
      <div className="space-y-4 overflow-y-auto max-h-96">
        {transactions.map((tx) => (
          <div
            key={tx.id}
            className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
            onClick={() => alert(`Clicked transaction ID: ${tx.id}`)}
          >
            <div className="flex items-center gap-3">
              <div
                className={`p-2 rounded-full ${
                  tx.type === "income"
                    ? "bg-green-100 dark:bg-green-900/30"
                    : "bg-red-100 dark:bg-red-900/30"
                }`}
              >
                {tx.type === "income" ? (
                  <ArrowUpCircle className="text-green-600" size={20} />
                ) : (
                  <ArrowDownCircle className="text-red-600" size={20} />
                )}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800 dark:text-white">
                  {tx.label}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {new Date(tx.date).toDateString()}
                </p>
              </div>
            </div>
            <p
              className={`text-sm font-semibold ${
                tx.type === "income"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {tx.type === "income" ? "+" : "-"}${tx.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
