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
      className="py-24 px-4 relative sm:px-6 md:px-12 bg-erix"
    >
      <TopGlow />
      <RandomStars />
      <div className="max-w-7xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          <div>
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
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-start"
              >
                <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-lg mr-4">
                  <Icons.mail className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Email</h3>
                  <Link
                    target="_blank"
                    rel="noopener noreferer"
                    href="mailto:contact@ecodrix.com"
                    className="text-muted-foreground hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    contact@ecodrix.com
                  </Link>
                  <p className="text-sm text-muted-foreground mt-1">
                    Typically respond within 2-4 hours during business days
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-start"
              >
                <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-lg mr-4">
                  <Icons.phone className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Phone</h3>
                  <Link
                    target="_blank"
                    href="tel:+918143963821"
                    className="text-muted-foreground hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    +91 8143963821
                  </Link>
                  <p className="text-sm text-muted-foreground mt-1">
                    Mon-Fri: 9:00 AM - 6:00 PM IST
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-start"
              >
                <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-lg mr-4">
                  <Icons.mapPin className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Location</h3>
                  <p className="text-muted-foreground">
                    Tirupati, Andhra Pradesh, India
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Serving clients worldwide remotely
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-start"
              >
                <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-lg mr-4">
                  <Icons.clock className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">
                    Response Time
                  </h3>
                  <p className="text-muted-foreground">
                    Within 24 hours for all inquiries
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Quick consultations available upon request
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="flex items-start"
              >
                <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-lg mr-4">
                  <Icons.calendar className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">
                    Availability
                  </h3>
                  <p className="text-muted-foreground">
                    Currently accepting new projects
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Book a free 30-minute consultation
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-100 dark:border-indigo-800"
            >
              <h3 className="font-medium text-foreground mb-2">
                What to expect:
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li className="flex items-start">
                  <Icons.check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Initial response within 24 hours</span>
                </li>
                <li className="flex items-start">
                  <Icons.check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Detailed project discussion</span>
                </li>
                <li className="flex items-start">
                  <Icons.check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Transparent pricing and timeline</span>
                </li>
                <li className="flex items-start">
                  <Icons.check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Regular updates throughout the project</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-transparent rounded-xl z-20 p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-bold text-foreground mb-3">
              Send a Message
            </h3>
            <p className="text-muted-foreground mb-6">
              Fill out the form below and I'll get back to you as soon as
              possible.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="name" className="flex items-center gap-1">
                  Name<span className="text-destructive">*</span>
                </Label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Your full name"
                  {...register("name")}
                  className={`bg-erix ${
                    errors.name ? "border-destructive" : ""
                  } focus:ring-2 focus:ring-indigo-500`}
                />
                {errors.name && (
                  <p className="text-sm text-destructive">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email" className="flex items-center gap-1">
                  Email<span className="text-destructive">*</span>
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="your.email@example.com"
                  {...register("email")}
                  className={`bg-erix ${
                    errors.email ? "border-destructive" : ""
                  } focus:ring-2 focus:ring-indigo-500`}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="phone">Phone (Optional)</Label>
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <StyledPhoneInput
                      id="phone"
                      placeholder="+91 9876543210"
                      value={field.value}
                      onChange={field.onChange}
                      className={`bg-erix ${
                        errors.phone
                          ? "border-destructive focus-within:ring-destructive"
                          : ""
                      }`}
                    />
                  )}
                />
                {errors.phone && (
                  <p className="text-sm text-destructive">
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="service" className="flex items-center gap-1">
                  Service Needed<span className="text-destructive">*</span>
                </Label>
                <Controller
                  name="service"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full focus:ring-2 bg-erix focus:ring-indigo-500">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="bg-background">
                        <SelectItem value="web-development">
                          Web Development
                        </SelectItem>
                        <SelectItem value="ecommerce">E-commerce</SelectItem>
                        <SelectItem value="seo">SEO Optimization</SelectItem>
                        <SelectItem value="mobile-app">
                          Mobile App Development
                        </SelectItem>
                        <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                        <SelectItem value="consulting">Consulting</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.service && (
                  <p className="text-sm text-destructive">
                    {errors.service.message}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="budget">Project Budget (Optional)</Label>
                  <Controller
                    name="budget"
                    control={control}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="w-full focus:ring-2 bg-erix focus:ring-indigo-500">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent className="bg-background">
                          <SelectItem value="under-10k">
                            Under ₹10,000
                          </SelectItem>
                          <SelectItem value="10k-50k">
                            ₹10,000 - ₹50,000
                          </SelectItem>
                          <SelectItem value="50k-1l">
                            ₹50,000 - ₹1,00,000
                          </SelectItem>
                          <SelectItem value="1l-5l">
                            ₹1,00,000 - ₹5,00,000
                          </SelectItem>
                          <SelectItem value="over-5l">
                            Over ₹5,00,000
                          </SelectItem>
                          <SelectItem value="not-sure">Not sure yet</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="timeline">Timeline (Optional)</Label>
                  <Controller
                    name="timeline"
                    control={control}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="w-full focus:ring-2 bg-erix focus:ring-indigo-500">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent className="bg-background">
                          <SelectItem value="asap">ASAP</SelectItem>
                          <SelectItem value="2-weeks">
                            Within 2 weeks
                          </SelectItem>
                          <SelectItem value="1-month">
                            Within 1 month
                          </SelectItem>
                          <SelectItem value="3-months">
                            Within 3 months
                          </SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                          <SelectItem value="not-sure">Not sure yet</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="message" className="flex items-center gap-1">
                  Project Details<span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project goals, target audience, and any specific requirements (minimum 100 characters)..."
                  {...register("message")}
                  className={`bg-erix ${
                    errors.message ? "border-destructive" : ""
                  } focus:ring-2 focus:ring-indigo-500`}
                />
                {errors.message ? (
                  <p className="text-sm text-destructive">
                    {errors.message.message}
                  </p>
                ) : (
                  <p className="text-xs text-muted-foreground">
                    Please provide as much detail as possible about your project
                    needs, timeline, and budget. The more information you
                    provide, the better I can understand your requirements.
                  </p>
                )}
              </div>

              {serverError && (
                <div className="p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-300 rounded-md">
                  {serverError}
                </div>
              )}

              <motion.button
                type="submit"
                disabled={!isValid || isSubmitting || !isDirty}
                whileHover={!isValid || !isDirty ? {} : { scale: 1.02 }}
                whileTap={!isValid || !isDirty ? {} : { scale: 0.98 }}
                className={cn(
                  "w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-md",
                  (!isValid || isSubmitting || !isDirty) &&
                    "opacity-70 cursor-not-allowed",
                  isValid &&
                    isDirty &&
                    !isSubmitting &&
                    "hover:from-indigo-700 hover:to-blue-700"
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
                  "Send Message"
                )}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="border-0 p-0 max-w-md">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex justify-center mb-4"
            >
              <Icons.checkCircle className="w-16 h-16 text-green-500" />
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
              className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
            >
              Close
            </motion.button>
          </motion.div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
