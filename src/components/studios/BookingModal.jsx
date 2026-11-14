"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { apiRequest } from "@/lib/api";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function BookingModal({ studio }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleBooking = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const startAt = new Date(formData.get("startAt"));
    const endAt = new Date(formData.get("endAt"));

    if (startAt >= endAt || startAt <= new Date()) {
      toast.error("Please select valid future booking times.");
      setLoading(false);
      return;
    }

    const hours = (endAt - startAt) / (1000 * 60 * 60);

    try {
      const availabilityResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/bookings/check-availability`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            studioId: studio._id,
            startAt,
            endAt,
          }),
        }
      );

      const availability = await availabilityResponse.json();

      if (!availabilityResponse.ok || !availability.available) {
        throw new Error("This studio is unavailable for the selected time.");
      }

      await apiRequest("/api/bookings", {
        method: "POST",
        body: JSON.stringify({
          studioId: studio._id,
          startAt,
          endAt,
          totalAmount: hours * Number(studio.hourlyRate),
        }),
      });

      toast.success("Booking request submitted!");
      setOpen(false);
      router.push("/my-bookings");
      router.refresh();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={<Button className="bg-[#a65a3c] hover:bg-[#87472f]" />}>
        Book Workspace Now
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Book {studio.title}</DialogTitle>
          <DialogDescription>
            Choose your preferred studio hours.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleBooking} className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium">Start Time</label>
            <input
              type="datetime-local"
              name="startAt"
              min={new Date().toISOString().slice(0, 16)}
              required
              className="h-10 w-full rounded-lg border px-3 text-sm"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">End Time</label>
            <input
              type="datetime-local"
              name="endAt"
              required
              className="h-10 w-full rounded-lg border px-3 text-sm"
            />
          </div>

          <p className="text-sm text-muted-foreground">
            Hourly rate: ${studio.hourlyRate}
          </p>

          <Button disabled={loading} className="w-full bg-[#a65a3c] hover:bg-[#87472f]">
            {loading ? "Submitting..." : "Confirm Booking Request"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}