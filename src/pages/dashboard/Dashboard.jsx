import DashboardTabs from "../../components/Dashboard/DashboardTabs";
import GenerateReportButton from "../../components/Dashboard/GenerateReportButton";
import RecentTransaction from "../../components/Dashboard/RecentTransactions";
import SpiderChart from "../../components/Dashboard/SpiderChart";

const Dashboard = () => {
    return (

        <div className="relative min-h-screen  dark:bg-gray-950">

            {/* Main Content */}
            <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-6 px-4">
                {/* Left side: summary, tabs, chart */}
                <div className="space-y-5">
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
                        Dashboard
                    </h1>
                    <p className="hidden text-xl text-gray-600 dark:text-gray-300">
                        Welcome back, Chiemena 👋
                    </p>
                    <DashboardTabs/>
                </div>

                {/* Right side: like an aside */}
                <aside className="sticky top-56 h-fit">
                    {/* Download Report Btn */}
                    <GenerateReportButton />
                    <RecentTransaction />
                    <SpiderChart/>
                </aside>
            </div>

        </div>
    );
}

export default Dashboard;
