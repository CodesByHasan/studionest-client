"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { apiRequest } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { MapPin, CalendarDays } from "lucide-react";

export default function MyBookingCard({ booking }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const cancelBooking = async () => {
    setLoading(true);

    try {
      await apiRequest(`/api/bookings/${booking._id}/cancel`, {
        method: "PATCH",
      });

      toast.success("Booking cancelled successfully.");
      router.refresh();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const statusStyles = {
    Pending: "bg-amber-100 text-amber-700",
    Confirmed: "bg-green-100 text-green-700",
    Completed: "bg-blue-100 text-blue-700",
    Cancelled: "bg-red-100 text-red-700",
  };

  return (
    <article className="rounded-xl border bg-white p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-lg font-semibold text-[#252d42]">
          {booking.studioTitle}
        </h2>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            statusStyles[booking.status] || "bg-gray-100 text-gray-700"
          }`}
        >
          {booking.status}
        </span>
      </div>

      <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
        <MapPin className="size-4" />
        {booking.location}
      </p>

      <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
        <CalendarDays className="size-4" />
        {new Date(booking.startAt).toLocaleString()} —{" "}
        {new Date(booking.endAt).toLocaleString()}
      </p>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t pt-4">
        <p className="font-semibold text-[#a65a3c]">
          Total: ${booking.totalAmount}
        </p>

        {booking.status === "Pending" && (
          <Button
            variant="destructive"
            size="sm"
            onClick={cancelBooking}
            disabled={loading}
          >
            {loading ? "Cancelling..." : "Cancel Booking"}
          </Button>
        )}
      </div>
    </article>
  );
}