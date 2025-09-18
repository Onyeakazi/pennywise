import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import SummaryCard from "./SummaryCard"
import SummaryChart from "./SummaryChart"

export default function DashboardTabs() {
  return (
    <Tabs defaultValue="today" className="w-full mt-4 ">
      <TabsList className="flex justify-center gap-4 data-[state=active]:bg-white data-[state=active]:text-black dark:data-[state=active]:bg-gray-700 dark:data-[state=active]:text-white rounded-md px-1 py-2">
         <TabsTrigger
          value="today"
          className="rounded-md px-2 py-3
            data-[state=active]:bg-white 
            data-[state=active]:text-gray-900 
            dark:data-[state=active]:bg-gray-700 
            dark:data-[state=active]:text-white"
        >
          Today
        </TabsTrigger>

        <TabsTrigger
          value="week"
          className="rounded-md px-2 py-3
            data-[state=active]:bg-white 
            data-[state=active]:text-gray-900 
            dark:data-[state=active]:bg-gray-700 
            dark:data-[state=active]:text-white"
        >
          This Week
        </TabsTrigger>

        <TabsTrigger
          value="month"
          className="rounded-md px-2 py-3
            data-[state=active]:bg-white 
            data-[state=active]:text-gray-900 
            dark:data-[state=active]:bg-gray-700 
            dark:data-[state=active]:text-white"
        >
          This Month
        </TabsTrigger>
      </TabsList>

      <TabsContent value="today">
        <SummaryCard period="today" />
        <SummaryChart period="today" />
      </TabsContent>

      <TabsContent value="week">
        <SummaryCard period="week" />
        <SummaryChart period="week" />
      </TabsContent>

      <TabsContent value="month">
        <SummaryCard period="month" />
        <SummaryChart period="month" />
      </TabsContent>
    </Tabs>
  )
}
