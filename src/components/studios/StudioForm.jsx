"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { apiRequest } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const categories = [
  "Photo Studio",
  "Film Stage",
  "Podcast Lounge",
  "Music Suite",
  "Workshop",
];

const amenitiesList = [
  "Wi-Fi",
  "Lighting Equipment",
  "Air Conditioning",
  "Soundproofing",
  "Parking",
  "Green Screen",
  "Furniture",
  "Power Backup",
];

export default function StudioForm({ user, studio }) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [amenities, setAmenities] = useState(studio?.amenities || []);

  const handleAmenity = (amenity) => {
    setAmenities((previous) =>
      previous.includes(amenity)
        ? previous.filter((item) => item !== amenity)
        : [...previous, amenity]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const data = {
      title: formData.get("title"),
      category: formData.get("category"),
      hourlyRate: Number(formData.get("hourlyRate")),
      securityDeposit: Number(formData.get("securityDeposit")),
      capacity: Number(formData.get("capacity")),
      location: formData.get("location"),
      image: formData.get("image"),
      overview: formData.get("overview"),
      amenities,
      hostName: user.name,
      hostEmail: user.email,
    };

    try {
      if (studio) {
        await apiRequest(`/api/studios/${studio._id}`, {
          method: "PATCH",
          body: JSON.stringify(data),
        });

        toast.success("Studio updated successfully!");
      } else {
        await apiRequest("/api/studios", {
          method: "POST",
          body: JSON.stringify(data),
        });

        toast.success("Studio added successfully!");
      }

      router.push("/my-listings");
      router.refresh();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">Studio Title</label>
          <Input
            name="title"
            defaultValue={studio?.title || ""}
            placeholder="Professional photography studio"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Category</label>
          <select
            name="category"
            defaultValue={studio?.category || ""}
            required
            className="h-10 w-full rounded-lg border bg-white px-3 text-sm"
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Hourly Rate ($)</label>
          <Input
            name="hourlyRate"
            type="number"
            min="1"
            defaultValue={studio?.hourlyRate || ""}
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Security Deposit ($)</label>
          <Input
            name="securityDeposit"
            type="number"
            min="0"
            defaultValue={studio?.securityDeposit || ""}
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Maximum Capacity</label>
          <Input
            name="capacity"
            type="number"
            min="1"
            defaultValue={studio?.capacity || ""}
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Location / Address</label>
          <Input
            name="location"
            defaultValue={studio?.location || ""}
            placeholder="Dhaka, Bangladesh"
            required
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">Studio Image URL</label>
        <Input
          name="image"
          type="url"
          defaultValue={studio?.image || ""}
          placeholder="https://..."
          required
        />
      </div>

      <div>
        <p className="mb-3 text-sm font-medium">Amenities</p>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {amenitiesList.map((amenity) => (
            <label key={amenity} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={amenities.includes(amenity)}
                onChange={() => handleAmenity(amenity)}
                className="accent-[#a65a3c]"
              />
              {amenity}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">Detailed Overview</label>
        <Textarea
          name="overview"
          defaultValue={studio?.overview || ""}
          placeholder="Describe your studio, equipment and facilities..."
          rows={6}
          required
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">Host Name</label>
          <Input value={user.name || ""} readOnly />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Host Email</label>
          <Input value={user.email || ""} readOnly />
        </div>
      </div>

      <Button
        disabled={loading}
        className="h-11 w-full bg-[#a65a3c] hover:bg-[#87472f]"
      >
        {loading
          ? "Please wait..."
          : studio
            ? "Update Studio"
            : "Publish Studio"}
      </Button>
    </form>
  );
}