"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Card from "@/components/Card";
import BarChart from "@/components/BarChart";

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
      <div id="dashboardRight" className="ml-13   flex-[3]">
        <Navbar />
        <Card />
        <BarChart />
      </div>
    </div>
  );
};

export default Dashboard;
