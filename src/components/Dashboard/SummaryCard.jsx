import { Card, CardContent } from "@/components/ui/card"
import { ArrowDown, ArrowUp, Wallet } from "lucide-react"

const data = [
  {
    label: "Income",
    amount: "₦120,000",
    icon: <ArrowUp className="text-green-500" />,
    bg: "bg-green-100",
  },
  {
    label: "Expenses",
    amount: "₦80,000",
    icon: <ArrowDown className="text-red-500" />,
    bg: "bg-red-100",
  },
  {
    label: "Balance",
    amount: "₦40,000",
    icon: <Wallet className="text-blue-500" />,
    bg: "bg-blue-100",
  },
]

export default function SummaryCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {data.map((item, index) => (
        <Card key={index} className="bg-white dark:bg-gray-800 shadow-md border-none">
          <CardContent className="p-4 flex items-center gap-4">
            <div className={`p-3 rounded-full ${item.bg}`}>{item.icon}</div>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground">
                {item.label}
              </h4>
              <p className="text-lg font-bold">{item.amount}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
