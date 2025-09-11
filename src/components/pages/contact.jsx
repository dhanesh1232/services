"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { collectUserMetadata } from "@/lib/client/metadata";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { StyledPhoneInput } from "@/components/ui/phoneInput";
import { cn } from "@/lib/utils";
import { Icons } from "../icons";
import Link from "next/link";
import { RandomStars, TopGlow } from "./home/stars";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { budgetRanges, serviceOptions, timeLine } from "@/lib/client/data";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .regex(/^\+?[\d\s-]{10,15}$/, "Invalid phone number")
    .optional()
    .or(z.literal("")), // Explicitly allow empty string
  message: z
    .string()
    .min(100, "Message must be at least 100 characters")
    .max(1000, "Message must be less than 1000 characters"),
  service: z.string().min(1, "Please select a service"), // Make service required
  budget: z.string().optional(),
  timeline: z.string().optional(),
});

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [serverError, setServerError] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid, isDirty },
  } = useForm({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      service: "",
      budget: "",
      timeline: "",
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setServerError("");

    const metadata = collectUserMetadata();
    try {
      const body = JSON.stringify({ ...data, metadata });
      const response = await fetch(`/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      });

      if (!response.ok) {
        // Try to get error message from response
        const errorData = await response.text();
        throw new Error(
          errorData.startsWith("{")
            ? JSON.parse(errorData).message
            : `Server error: ${response.status}`
        );
      }
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to send message");
      }

      setShowSuccessDialog(true);
      reset();
    } catch (error) {
      console.error("Submission error:", error);
      setServerError(error.message || "An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 relative sm:px-6 md:px-12 bg-inherit overflow-hidden"
    >
      <TopGlow />
      <RandomStars />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-500/10 px-4 py-2 rounded-full mb-6 border border-indigo-200 dark:border-indigo-500/20"
            >
              <Icons.sparkle className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
                Get in Touch
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            >
              {`Let's Work Together`}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8"
            >
              Have a project in mind? Get in touch to discuss how I can help
              bring your vision to life. I specialize in creating custom web
              solutions that drive results and exceed expectations.
            </motion.p>

            <div className="space-y-6">
              {[
                {
                  icon: Icons.mail,
                  title: "Email",
                  content: "contact@ecodrix.com",
                  description:
                    "Typically respond within 2-4 hours during business days",
                  link: "mailto:contact@ecodrix.com",
                },
                {
                  icon: Icons.phone,
                  title: "Phone",
                  content: "+91 8143963821",
                  description: "Mon-Fri: 9:00 AM - 6:00 PM IST",
                  link: "tel:+918143963821",
                },
                {
                  icon: Icons.mapPin,
                  title: "Location",
                  content: "Tirupati, Andhra Pradesh, India",
                  description: "Serving clients worldwide remotely",
                },
                {
                  icon: Icons.clock,
                  title: "Response Time",
                  content: "Within 24 hours for all inquiries",
                  description: "Quick consultations available upon request",
                },
                {
                  icon: Icons.calendar,
                  title: "Availability",
                  content: "Currently accepting new projects",
                  description: "Book a free 30-minute consultation",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start p-4 rounded-xl bg-white/50 dark:bg-slate-800/30 backdrop-blur-sm border border-gray-100 dark:border-slate-700/50 hover:border-indigo-200 dark:hover:border-indigo-500/30 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-lg mr-4">
                    <item.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">
                      {item.title}
                    </h3>
                    {item.link ? (
                      <Link
                        target="_blank"
                        rel="noopener noreferer"
                        href={item.link}
                        className="text-muted-foreground hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        {item.content}
                      </Link>
                    ) : (
                      <p className="text-muted-foreground">{item.content}</p>
                    )}
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-100 dark:border-indigo-800 backdrop-blur-sm"
            >
              <h3 className="font-medium text-foreground mb-3 flex items-center gap-2">
                <Icons.info className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                What to expect:
              </h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                {[
                  "Initial response within 24 hours",
                  "Detailed project discussion",
                  "Transparent pricing and timeline",
                  "Regular updates throughout the project",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Icons.check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-inherit backdrop-blur-md rounded-2xl p-8 border border-gray-200 dark:border-slate-700/50 shadow-lg z-20 relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Icons.messageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    Send a Message
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Fill out the form below and I'll get back to you soon.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="space-y-1.5">
                  <Label
                    htmlFor="name"
                    className="flex items-center gap-1 cursor-pointer text-foreground font-medium"
                  >
                    Name<span className="text-destructive">*</span>
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Your full name"
                    {...register("name")}
                    className={`bg-inherit ${
                      errors.name
                        ? "border-destructive"
                        : "border-gray-200 dark:border-slate-700"
                    } focus:ring-2 focus:ring-indigo-500 transition-colors duration-200`}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="email"
                    className="flex items-center gap-1 cursor-pointer text-foreground font-medium"
                  >
                    Email<span className="text-destructive">*</span>
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="your.email@example.com"
                    {...register("email")}
                    className={`bg-inherit ${
                      errors.email
                        ? "border-destructive"
                        : "border-gray-200 dark:border-slate-700"
                    } focus:ring-2 focus:ring-indigo-500 transition-colors duration-200`}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-1">
                    <Label
                      htmlFor="phone"
                      className="flex items-center gap-1 cursor-pointer text-foreground font-medium"
                    >
                      Phone (
                      <span className="inline-flex items-center justify-start gap-1 text-xs text-muted-foreground">
                        <Icons.whatsapp className="w-3 h-3" /> WhatsApp
                      </span>
                      )<span className="text-destructive">*</span>
                    </Label>
                    <Tooltip>
                      <TooltipTrigger>
                        <button
                          role="button"
                          type="button"
                          aria-label="About Whatsapp"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          <Icons.info
                            className="text-xs text-muted-foreground"
                            size={14}
                          />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent className="text-gray-400 max-w-xs text-sm p-3">
                        You'll receive project updates, notifications, and
                        communication through WhatsApp for seamless coordination
                        and faster responses
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                      <StyledPhoneInput
                        id="phone"
                        placeholder="+91 9876543210"
                        value={field.value}
                        onChange={field.onChange}
                        className={`bg-inherit ${
                          errors.phone
                            ? "border-destructive focus-within:ring-destructive"
                            : "border-gray-200 dark:border-slate-700"
                        } transition-colors duration-200`}
                      />
                    )}
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="service"
                    className="flex items-center gap-1 cursor-pointer text-foreground font-medium"
                  >
                    Service Needed<span className="text-destructive">*</span>
                  </Label>
                  <Controller
                    name="service"
                    control={control}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                        id="service"
                      >
                        <SelectTrigger className="w-full focus:ring-2 bg-inherit border-gray-200 dark:border-slate-700 focus:ring-indigo-500 transition-colors duration-200">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent className="bg-white dark:bg-slate-900 border-gray-200 dark:border-slate-700">
                          {serviceOptions.map((each) => (
                            <SelectItem key={each.value} value={each.value}>
                              {each.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.service && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.service.message}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="budget"
                      className="cursor-pointer text-foreground font-medium"
                    >
                      Project Budget (Optional)
                    </Label>
                    <Controller
                      name="budget"
                      control={control}
                      render={({ field }) => (
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger className="w-full focus:ring-2 bg-inherit border-gray-200 dark:border-slate-700 focus:ring-indigo-500 transition-colors duration-200">
                            <SelectValue placeholder="Select budget" />
                          </SelectTrigger>
                          <SelectContent className="bg-white dark:bg-slate-900 border-gray-200 dark:border-slate-700">
                            {budgetRanges.map((each) => (
                              <SelectItem value={each.value} key={each.value}>
                                {each.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="timeline"
                      className="cursor-pointer text-foreground font-medium"
                    >
                      Timeline (Optional)
                    </Label>
                    <Controller
                      name="timeline"
                      control={control}
                      render={({ field }) => (
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger className="w-full focus:ring-2 bg-inherit border-gray-200 dark:border-slate-700 focus:ring-indigo-500 transition-colors duration-200">
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent className="bg-white dark:bg-slate-900 border-gray-200 dark:border-slate-700">
                            {timeLine.map((each) => (
                              <SelectItem key={each.value} value={each.value}>
                                {each.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="message"
                    className="flex items-center gap-1 cursor-pointer text-foreground font-medium"
                  >
                    Project Details<span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me about your project goals, target audience, and any specific requirements (minimum 100 characters)..."
                    {...register("message")}
                    className={`bg-inherit ${
                      errors.message
                        ? "border-destructive"
                        : "border-gray-200 dark:border-slate-700"
                    } focus:ring-2 focus:ring-indigo-500 transition-colors duration-200`}
                  />
                  {errors.message ? (
                    <p className="text-sm text-destructive mt-1">
                      {errors.message.message}
                    </p>
                  ) : (
                    <p className="text-xs text-muted-foreground mt-1">
                      Please provide as much detail as possible about your
                      project needs, timeline, and budget.
                    </p>
                  )}
                </div>

                {serverError && (
                  <div className="p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-300 rounded-md flex items-center gap-2">
                    <Icons.alertCircle className="w-4 h-4" />
                    {serverError}
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={!isValid || isSubmitting || !isDirty}
                  whileHover={!isValid || !isDirty ? {} : { scale: 1.02 }}
                  whileTap={!isValid || !isDirty ? {} : { scale: 0.98 }}
                  className={cn(
                    "w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:from-indigo-700 hover:to-blue-700",
                    (!isValid || isSubmitting || !isDirty) &&
                      "opacity-70 cursor-not-allowed hover:from-indigo-600 hover:to-blue-600"
                  )}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Send Message <Icons.send className="w-4 h-4" />
                    </span>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="border-0 p-0 max-w-md overflow-hidden">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl text-center relative"
          >
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-indigo-500/10 rounded-full blur-xl"></div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex justify-center mb-4"
            >
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                <Icons.checkCircle className="w-12 h-12 text-green-500" />
              </div>
            </motion.div>

            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Message Sent Successfully!
              </DialogTitle>
              <DialogDescription className="text-gray-600 dark:text-gray-300">
                Thank you for reaching out. I'll review your message and get
                back to you within 24 hours. In the meantime, feel free to
                explore more of my work or check out my blog for insights.
              </DialogDescription>
            </DialogHeader>

            <motion.button
              onClick={() => setShowSuccessDialog(false)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition-colors w-full"
            >
              Close
            </motion.button>
          </motion.div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
