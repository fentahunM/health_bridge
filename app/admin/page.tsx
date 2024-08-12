import StatCard from "@/components/StatCard";
import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Admin = async () => {
  const appointments = await getRecentAppointmentList();
  return (
    <div className="mx-auto max-w-7xl flex flex-col space-y-4">
      <header className="admin-header">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/assets/icons/logo.svg"
            height={32}
            width={162}
            alt="logo"
            className="h-8 w-fit"
          />
        </Link>
        <p className="text-16-semibold">Admin Dashbaord</p>
      </header>
      <section className="admin-main">
        <div className="w-full space-y-4">
          <h1 className="header">Welcome 👏</h1>
          <p className="text-dark-700">
            Start the day with managing new appointments
          </p>
        </div>
      </section>
      <section className="admin-stat">
        <StatCard
          type="appointments"
          count={appointments.scheduledCount}
          label="Scheduled appointments"
          icon="/assets/icons/appointments.svg"
        />
        <StatCard
          type="pending"
          count={appointments.pendingCount}
          label="Pending appointments"
          icon="/assets/icons/pending.svg"
        />
        <StatCard
          type="cancelled"
          count={appointments.cancelledCount}
          label="Cancelled appointments"
          icon="/assets/icons/cancelled.svg"
        />
      </section>
    </div>
  );
};

export default Admin;
