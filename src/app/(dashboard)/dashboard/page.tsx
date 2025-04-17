import DashboardSkeleton from "@/components/dashboard/DashboardSkeleton";
import { Suspense } from "react";
import DashboardHome from "@/pages/Hacker/Dashboard";

export default async function Dashboard() {
    return (
        <Suspense fallback={<DashboardSkeleton/>}>
            <DashboardHome/>
        </Suspense>
    );
}