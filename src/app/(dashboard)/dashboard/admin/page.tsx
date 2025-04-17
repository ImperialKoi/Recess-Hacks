import { Suspense } from "react";
import AdminStats from "@/pages/Admin/AdminStats";
import AdminStatsSkeleton from "@/pages/Admin/AdminStatsSkeleton";
import AdminGraphs from "@/pages/Admin/AdminGraphs";

export default async function AdminOverview() {
    return (
        <Suspense fallback={<AdminStatsSkeleton/>}>
            <AdminStats/>
            <AdminGraphs/>
        </Suspense>
    );
}