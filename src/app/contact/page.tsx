"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Container } from "@/components/ui/Container";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";

const contactSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().optional(),
  practiceArea: z.string().min(1, "Please select a practice area"),
  message: z.string().min(10, "Please provide more details about your inquiry"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const practiceAreaOptions = [
  { value: "", label: "Select a practice area" },
  { value: "corporate-law", label: "Corporate Law" },
  { value: "mergers-acquisitions", label: "Mergers & Acquisitions" },
  { value: "real-estate", label: "Real Estate" },
  { value: "intellectual-property", label: "Intellectual Property" },
  { value: "litigation", label: "Litigation" },
  { value: "banking-finance", label: "Banking & Finance" },
  { value: "other", label: "Other" },
];

const offices = [
  {
    city: "New York",
    address: "350 Fifth Avenue, Suite 4500",
    addressLine2: "New York, NY 10118",
    phone: "+1 (555) 123-4000",
    email: "newyork@advokata.com",
  },
  {
    city: "Washington, DC",
    address: "1200 Pennsylvania Avenue NW",
    addressLine2: "Washington, DC 20004",
    phone: "+1 (555) 123-4100",
    email: "dc@advokata.com",
  },
  {
    city: "London",
    address: "30 St Mary Axe",
    addressLine2: "London, EC3A 8BF",
    phone: "+44 20 7123 4000",
    email: "london@advokata.com",
  },
];

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy pt-32 pb-20">
        <Container>
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Ready to discuss your legal needs? Our attorneys are here to help.
              Contact us to schedule a confidential consultation or learn more
              about how we can assist you.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-ivory">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card hover={false}>
                <CardContent className="p-8">
                  <h2 className="font-heading text-2xl font-bold text-navy mb-6">
                    Request a Consultation
                  </h2>

                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h3 className="font-heading text-2xl font-bold text-navy mb-2">
                        Thank You!
                      </h3>
                      <p className="text-charcoal/70 mb-6">
                        We have received your inquiry and will be in touch within
                        one business day.
                      </p>
                      <Button
                        variant="secondary"
                        onClick={() => setIsSubmitted(false)}
                      >
                        Submit Another Inquiry
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <Input
                          id="firstName"
                          label="First Name *"
                          placeholder="John"
                          {...register("firstName")}
                          error={errors.firstName?.message}
                        />
                        <Input
                          id="lastName"
                          label="Last Name *"
                          placeholder="Doe"
                          {...register("lastName")}
                          error={errors.lastName?.message}
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <Input
                          id="email"
                          type="email"
                          label="Email Address *"
                          placeholder="john.doe@company.com"
                          {...register("email")}
                          error={errors.email?.message}
                        />
                        <Input
                          id="phone"
                          type="tel"
                          label="Phone Number *"
                          placeholder="(555) 123-4567"
                          {...register("phone")}
                          error={errors.phone?.message}
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <Input
                          id="company"
                          label="Company/Organization"
                          placeholder="Acme Corporation"
                          {...register("company")}
                        />
                        <Select
                          id="practiceArea"
                          label="Practice Area *"
                          options={practiceAreaOptions}
                          {...register("practiceArea")}
                          error={errors.practiceArea?.message}
                        />
                      </div>

                      <Textarea
                        id="message"
                        label="How can we help you? *"
                        placeholder="Please describe your legal matter or inquiry..."
                        rows={5}
                        {...register("message")}
                        error={errors.message?.message}
                      />

                      <p className="text-sm text-charcoal/60">
                        By submitting this form, you agree to our{" "}
                        <a href="/privacy" className="text-gold hover:underline">
                          Privacy Policy
                        </a>
                        . All communications are confidential.
                      </p>

                      <Button
                        type="submit"
                        variant="gold"
                        size="lg"
                        className="w-full sm:w-auto"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Submitting..."
                        ) : (
                          <>
                            Submit Inquiry
                            <Send className="h-5 w-5 ml-2" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <Card hover={false}>
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-bold text-navy mb-4">
                    Quick Contact
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center">
                        <Phone className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <p className="text-sm text-charcoal/60">Main Line</p>
                        <a
                          href="tel:+15551234000"
                          className="font-medium text-navy hover:text-gold transition-colors"
                        >
                          (555) 123-4000
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center">
                        <Mail className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <p className="text-sm text-charcoal/60">Email</p>
                        <a
                          href="mailto:info@advokata.com"
                          className="font-medium text-navy hover:text-gold transition-colors"
                        >
                          info@advokata.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center">
                        <Clock className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <p className="text-sm text-charcoal/60">Office Hours</p>
                        <p className="font-medium text-navy">
                          Mon-Fri: 9:00 AM - 6:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Offices */}
              <Card hover={false}>
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-bold text-navy mb-4">
                    Our Offices
                  </h3>
                  <div className="space-y-6">
                    {offices.map((office) => (
                      <div
                        key={office.city}
                        className="pb-6 border-b border-silver/20 last:border-0 last:pb-0"
                      >
                        <h4 className="font-semibold text-navy mb-2">
                          {office.city}
                        </h4>
                        <div className="space-y-2 text-sm text-charcoal/70">
                          <div className="flex items-start gap-2">
                            <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gold" />
                            <div>
                              <p>{office.address}</p>
                              <p>{office.addressLine2}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-gold" />
                            <a
                              href={`tel:${office.phone}`}
                              className="hover:text-gold transition-colors"
                            >
                              {office.phone}
                            </a>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-gold" />
                            <a
                              href={`mailto:${office.email}`}
                              className="hover:text-gold transition-colors"
                            >
                              {office.email}
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Emergency */}
              <div className="bg-navy rounded-lg p-6 text-white">
                <h3 className="font-heading text-lg font-bold mb-2">
                  Urgent Matters
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  For time-sensitive legal matters, our attorneys are available
                  24/7.
                </p>
                <a
                  href="tel:+15551234999"
                  className="inline-flex items-center text-gold font-medium hover:text-gold-light transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  (555) 123-4999
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-navy/10 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="h-12 w-12 text-navy/30 mx-auto mb-4" />
          <p className="text-charcoal/50">
            Interactive map would be displayed here
          </p>
        </div>
      </section>
    </>
  );
}
