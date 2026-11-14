
"use client";

import { useRef, useState } from "react";
import {
  PackageCheck,
  Upload,
  Loader2,
  X,
  Plus,
} from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Textarea } from "@/components/ui/textarea";

const categories = [
  "Photo Studio",
  "Film Stage",
  "Podcast Lounge",
  "Music Suite",
  "Workshop",
  "Event Space",
  "Creative Workspace",
  "Other",
];

const availableAmenities = [
  "Wi-Fi",
  "Air Conditioning",
  "Parking",
  "Lighting Equipment",
  "Soundproofing",
  "Professional Camera",
  "Microphone",
  "Green Screen",
  "Projector",
  "Makeup Room",
  "Changing Room",
  "Kitchen",
  "Restroom",
  "Backup Generator",
];

const initialForm = {
  title: "",
  category: "",
  hourlyRate: "",
  securityDeposit: "",
  maxCapacity: "",
  location: "",
  amenities: [],
  overview: "",
};

export default function AddStudioPage() {
  const [form, setForm] = useState(initialForm);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const fileInputRef = useRef(null);

  // Update form fields
  const update = (field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  // Handle amenities
  const handleAmenityChange = (amenity) => {
    setForm((current) => ({
      ...current,
      amenities: current.amenities.includes(amenity)
        ? current.amenities.filter((item) => item !== amenity)
        : [...current.amenities, amenity],
    }));
  };

  // Local image preview (no external API required)
  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Please select a valid image.");
      event.target.value = "";
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image must be smaller than 5 MB.");
      event.target.value = "";
      return;
    }

    if (imagePreview) {
      URL.revokeObjectURL(imagePreview);
    }

    const previewUrl = URL.createObjectURL(file);

    setImageFile(file);
    setImagePreview(previewUrl);

    toast.success("Image selected successfully!");
  };

  // Remove selected image
  const removeImage = () => {
    if (imagePreview) {
      URL.revokeObjectURL(imagePreview);
    }

    setImageFile(null);
    setImagePreview("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Reset form
  const resetForm = () => {
    if (imagePreview) {
      URL.revokeObjectURL(imagePreview);
    }

    setForm(initialForm);
    setImageFile(null);
    setImagePreview("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Form submission (frontend demo only)
  const handleSubmit = async (event) => {
    event.preventDefault();
  const res = await fetch("http://localhost:8000/add-studio", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });
  
  const data = await res.json();
  console.log(data);

    if (!form.category) {
      toast.error("Please select a studio category.");
      return;
    }

    if (!imageFile) {
      toast.error("Please upload a studio image.");
      return;
    }

    if (form.amenities.length === 0) {
      toast.error("Please select at least one amenity.");
      return;
    }

    setSubmitting(true);

    const studioData = {
      ...form,
      hourlyRate: Number(form.hourlyRate),
      securityDeposit: Number(form.securityDeposit),
      maxCapacity: Number(form.maxCapacity),
      image: imageFile,
    };

    // Temporary: no backend or database connected yet.
    console.log("Studio form data:", studioData);

    toast.info(
      "Form validated! Database integration is not available yet."
    );

    setSubmitting(false);
  };

  return (
    <main className="min-h-screen bg-background px-4 py-12 md:px-6">
      <div className="mx-auto max-w-3xl">

        {/* Page Heading */}
        <div className="mb-10">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Studio Management
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-5xl">
            Add New Studio
          </h1>

          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            List your creative space and connect with creators.
          </p>
        </div>

        {/* Studio Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-8 rounded-xl border bg-card p-5 shadow-sm md:p-8"
        >
          {/* Basic Information */}
          <section className="space-y-5">
            <div>
              <h2 className="text-lg font-semibold">
                Basic Information
              </h2>
              <p className="text-sm text-muted-foreground">
                Tell us about your creative space.
              </p>
            </div>

            {/* Studio Title */}
            <div className="grid gap-2">
              <Label htmlFor="title">Studio Title</Label>

              <Input
                id="title"
                placeholder="e.g. Premium Photography Studio"
                value={form.title}
                onChange={(e) => update("title", e.target.value)}
                required
              />
            </div>

            {/* Category */}
            <div className="grid gap-2">
              <Label>Studio Category</Label>

              <Select
                value={form.category}
                onValueChange={(value) => update("category", value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select studio category" />
                </SelectTrigger>

                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Location */}
            <div className="grid gap-2">
              <Label htmlFor="location">Location / Address</Label>

              <Input
                id="location"
                placeholder="e.g. Banani, Dhaka, Bangladesh"
                value={form.location}
                onChange={(e) => update("location", e.target.value)}
                required
              />
            </div>
          </section>

          <div className="border-t" />

          {/* Pricing & Capacity */}
          <section className="space-y-5">
            <div>
              <h2 className="text-lg font-semibold">
                Pricing & Capacity
              </h2>
              <p className="text-sm text-muted-foreground">
                Set your rental price and studio capacity.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="hourlyRate">
                  Hourly Rate ($)
                </Label>

                <Input
                  id="hourlyRate"
                  type="number"
                  min="1"
                  placeholder="e.g. 50"
                  value={form.hourlyRate}
                  onChange={(e) => update("hourlyRate", e.target.value)}
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="securityDeposit">
                  Security Deposit ($)
                </Label>

                <Input
                  id="securityDeposit"
                  type="number"
                  min="0"
                  placeholder="e.g. 100"
                  value={form.securityDeposit}
                  onChange={(e) =>
                    update("securityDeposit", e.target.value)
                  }
                  required
                />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="maxCapacity">
                Maximum Capacity (People)
              </Label>

              <Input
                id="maxCapacity"
                type="number"
                min="1"
                placeholder="e.g. 20"
                value={form.maxCapacity}
                onChange={(e) =>
                  update("maxCapacity", e.target.value)
                }
                required
              />
            </div>
          </section>

          <div className="border-t" />

          {/* Studio Image */}
          <section className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold">
                Studio Image
              </h2>
              <p className="text-sm text-muted-foreground">
                Upload a photo of your creative space.
              </p>
            </div>

            <input
              ref={fileInputRef}
              id="studioImage"
              type="file"
              accept="image/png,image/jpeg,image/webp"
              className="hidden"
              onChange={handleImageUpload}
            />

            {!imagePreview ? (
              <label
                htmlFor="studioImage"
                className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed p-10 text-center transition hover:border-primary hover:bg-muted/30"
              >
                <div className="rounded-full bg-muted p-4">
                  <Upload className="h-7 w-7 text-muted-foreground" />
                </div>

                <div>
                  <p className="font-medium">
                    Click to upload an image
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    PNG, JPG or WEBP (Maximum 5 MB)
                  </p>
                </div>
              </label>
            ) : (
              <div className="relative overflow-hidden rounded-xl border">
                <img
                  src={imagePreview}
                  alt="Studio preview"
                  className="h-64 w-full object-cover"
                />

                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  className="absolute right-3 top-3"
                  onClick={removeImage}
                  aria-label="Remove image"
                >
                  <X className="h-4 w-4" />
                </Button>

                <div className="bg-muted/80 px-4 py-2 text-sm">
                  {imageFile?.name}
                </div>
              </div>
            )}
          </section>

          <div className="border-t" />

          {/* Amenities */}
          <section className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold">
                Amenities & Facilities
              </h2>
              <p className="text-sm text-muted-foreground">
                Select everything available in your studio.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 rounded-xl border p-4 sm:grid-cols-3">
              {availableAmenities.map((amenity) => (
                <label
                  key={amenity}
                  className="flex cursor-pointer items-center gap-2 text-sm"
                >
                  <input
                    type="checkbox"
                    checked={form.amenities.includes(amenity)}
                    onChange={() => handleAmenityChange(amenity)}
                    className="h-4 w-4 accent-primary"
                  />

                  <span>{amenity}</span>
                </label>
              ))}
            </div>

            <p className="text-xs text-muted-foreground">
              {form.amenities.length} amenities selected
            </p>
          </section>

          <div className="border-t" />

          {/* Overview */}
          <section className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold">
                Studio Overview
              </h2>
              <p className="text-sm text-muted-foreground">
                Describe your studio and its facilities.
              </p>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="overview">
                Detailed Description
              </Label>

              <Textarea
                id="overview"
                placeholder="Describe your studio, facilities, equipment and what makes it special..."
                className="min-h-36 resize-y"
                value={form.overview}
                onChange={(e) => update("overview", e.target.value)}
                required
              />
            </div>
          </section>

          {/* Actions */}
          <div className="flex flex-col-reverse gap-3 border-t pt-6 sm:flex-row sm:justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={resetForm}
              disabled={submitting}
            >
              Reset Form
            </Button>

            <Button
              type="submit"
              disabled={submitting}
              className="bg-[#00A8E8] text-white hover:bg-[#0095d1]"
            >
              {submitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Plus className="mr-2 h-4 w-4" />
                  Add New Studio
                </>
              )}
            </Button>
          </div>
        </form>

        <p className="mt-5 text-center text-xs text-muted-foreground">
          Your studio information will be saved once database integration
          is implemented.
        </p>
      </div>
    </main>
  );
}
