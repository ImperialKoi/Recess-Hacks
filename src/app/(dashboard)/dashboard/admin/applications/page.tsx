import ApplicationsTable from "@/components/application/ApplicationsTable";
import { Suspense } from "react";
import ApplicationTableSkeleton from "@/components/application/ApplicationTableSkeleton";

export const dynamic = "force-dynamic";

export default async function AdminApplicationView({ searchParams, }: {
    searchParams: Promise<{ [key: string]: string | undefined }>
}) {
    return (
        <div className="mt-12">
            <Suspense fallback={<ApplicationTableSkeleton/>} key={(await searchParams).page}>
                <ApplicationsTable searchParams={searchParams}/>
            </Suspense>
        </div>
    );
}