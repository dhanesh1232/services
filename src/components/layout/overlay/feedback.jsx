"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Send, Loader2, Star, X } from "lucide-react";
import { toast } from "sonner";
import { collectUserMetadata } from "@/lib/client/metadata";
import { Icons } from "@/components/icons";

export function FeedbackDialog() {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [isFormValid, setIsFormValid] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    description: "",
  });

  useEffect(() => {
    const isValid =
      rating > 0 &&
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.company.trim() !== "" &&
      formData.role.trim() !== "" &&
      formData.description.trim() !== "";
    setIsFormValid(isValid);
  }, [rating, formData]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleStarClick = (selectedRating) => {
    if (rating === selectedRating) {
      setRating(0);
    } else {
      setRating(selectedRating);
    }
  };

  const handleStarKeyPress = (e, selectedRating) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleStarClick(selectedRating);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!rating) {
      toast.error("Please provide a rating before submitting");
      return;
    }
    setIsSubmitting(true);
    try {
      const metadata = collectUserMetadata();
      const body = {
        rating: rating,
        ...formData,
        metadata,
      };
      // Simulated API call
      const res = await fetch("/api/feedback", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (!res.ok && res.status) {
        throw new Error(data.message);
      }
      toast.success(data.message || "Thank you for your feedback!");
      setOpen(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        role: "",
        description: "",
      });
      setRating(0);
    } catch (error) {
      toast.error(
        error.message || "Failed to submit feedback. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const getRatingLabel = () => {
    const labels = ["", "Poor", "Fair", "Good", "Very Good", "Excellent"];
    return hoveredRating || rating
      ? labels[hoveredRating || rating]
      : "Select Rating";
  };

  const getRatingColor = (currentRating) => {
    if (currentRating === 0) return "text-gray-600 dark:text-gray-400";
    if (currentRating <= 2) return "text-red-600 dark:text-red-400";
    if (currentRating === 3) return "text-yellow-600 dark:text-yellow-400";
    return "text-green-600 dark:text-green-400";
  };

  return (
    <Dialog open={open} onOpenChange={setOpen} className="bg-newBackground">
      <DialogTrigger asChild className="rounded-full">
        <Button
          variant="outline"
          className="hover:bg-indigo-50 rounded-full dark:hover:bg-indigo-950 group inline-flex cursor-pointer hover:text-indigo-500 transition-all duration-300"
          size="lg"
        >
          <span className="flex items-center gap-2">
            <span className="group-hover:underline underline-offset-4">
              Share Feedback
            </span>
            <ArrowRight className="group-hover:translate-x-2 ease-in-out duration-300 transform transition-all" />
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-inherit p-6" showClose>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Share Your Feedback
          </DialogTitle>
          <DialogDescription className="text-base mt-2">
            We value your input to improve our services. Your feedback helps us
            grow.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="mt-2">
          <div className="space-y-2">
            <div className="grid grid-cols-1 gap-2">
              <Label>Rating *</Label>
              <div className="flex flex-col gap-2">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-6 w-6 cursor-pointer outline-none ring-0 transition-all duration-200 ${
                        star <= (hoveredRating || rating)
                          ? "fill-yellow-400 text-yellow-400 scale-110"
                          : "text-gray-300 hover:text-gray-400"
                      }`}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      onClick={() => handleStarClick(star)}
                      onKeyDown={(e) => handleStarKeyPress(e, star)}
                      role="button"
                      tabIndex={0}
                      aria-label={`Rate ${star} stars`}
                    />
                  ))}
                </div>
                <span
                  className={`text-sm ${getRatingColor(
                    hoveredRating || rating
                  )}`}
                >
                  {getRatingLabel()}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Enter your name"
                className="focus:ring-2 text-sm focus:ring-indigo-500 bg-transparent"
                required
              />
            </div>
            <div className="grid grid-cols-1 gap-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="your@email.com"
                className="focus:ring-2 text-sm focus:ring-indigo-500 bg-transparent"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="grid gap-2">
                <Label htmlFor="company">Company *</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                  placeholder="Your company"
                  className="focus:ring-2 text-sm focus:ring-indigo-500 bg-transparent"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="role">Role *</Label>
                <Input
                  id="role"
                  value={formData.role}
                  className="focus:ring-2 text-sm focus:ring-indigo-500 bg-transparent"
                  placeholder="Enter role"
                  onChange={(e) => handleChange("role", e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Your Feedback *</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleChange("description", e.target.value)}
                placeholder="Please share your thoughts, suggestions, or concerns..."
                className="min-h-[120px] text-sm focus:ring-2 focus:ring-indigo-500 bg-transparent"
                required
              />
            </div>
          </div>
          <DialogFooter className="mt-3">
            <Button
              type="submit"
              className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white"
              disabled={isSubmitting || !isFormValid}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Submit Feedback
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
