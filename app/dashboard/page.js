"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect } from "react";

import Sidebar from "@/components/Sidebar";

const Dashboard = () => {
  const session = useSession();

  useEffect(() => {
    if (session.status == "unauthenticated") {
      redirect("/");
    }
  }, [session.status]);

  return (
    <div
      id="dashboardContainer"
      className="flex p-[1%] bg-[#f5f5f5] min-h-screen box-border"
    >
      <div id="dashboardLeft" className="w-[300px]">
        <Sidebar />
      </div>
    </div>
  );
};

export default Dashboard;
