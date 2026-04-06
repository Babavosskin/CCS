'use client'

import {
  Heart, Home, Users, Clock, Utensils, Car, Pill, Brain, CheckCircle, Phone, ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import Reveal from '../../components/ui/Reveal';

const services = [
  {
    icon: Heart,
    title: 'Personal Care',
    description: 'Our trained caregivers provide compassionate assistance with daily living activities to help maintain dignity and independence.',
    features: ['Bathing and personal hygiene', 'Dressing assistance', 'Grooming and hair care', 'Mobility support', 'Toileting assistance', 'Skin and nail care'],
    image: '/images/services/Personal%20Care.jpg',
    imageAlt: 'Lady cutting grandma\'s hair at home providing personal grooming care',
    imagePosition: 'object-top',
    accent: 'bg-blue-50 text-brand-blue-700',
  },
  {
    icon: Home,
    title: 'Companion Care',
    description: 'Meaningful companionship that promotes emotional well-being and social engagement for your loved ones.',
    features: ['Conversation and social interaction', 'Playing games and puzzles', 'Reading together', 'Accompaniment to appointments', 'Light housekeeping', 'Meal planning and preparation'],
    image: '/images/services/Companion%20Care.jpg',
    imageAlt: 'Group of people playing cards together enjoying companion care activities',
    imagePosition: 'object-[30%_center]',
    accent: 'bg-green-50 text-brand-green-600',
  },
  {
    icon: Users,
    title: 'Respite Care',
    description: 'Temporary relief for family caregivers, allowing them to rest while ensuring quality care continues.',
    features: ['Short-term care coverage', 'Emergency care needs', 'Vacation coverage', 'Weekend relief', 'Overnight care', 'Flexible scheduling'],
    image: '/images/services/Respite%20Care.jpg',
    imageAlt: 'Person sleeping peacefully receiving respite care at home',
    imagePosition: 'object-center',
    accent: 'bg-teal-50 text-teal-700',
  },
  {
    icon: Clock,
    title: 'Hourly & Live-In Care',
    description: 'Flexible care options ranging from a few hours a week to around-the-clock live-in assistance.',
    features: ['Minimum 4-hour visits', 'Full-day care options', '24/7 live-in care', 'Night shift coverage', 'Weekend care', 'Holiday coverage'],
    image: '/images/services/Hourly%20Care.jpg',
    imageAlt: 'Caregiver mopping floor providing hourly cleaning and home care services',
    imagePosition: 'object-[40%_center]',
    accent: 'bg-indigo-50 text-indigo-700',
  },
  {
    icon: Utensils,
    title: 'Meal Preparation',
    description: 'Nutritious meal planning and preparation tailored to dietary needs and personal preferences.',
    features: ['Meal planning', 'Grocery shopping', 'Cooking and preparation', 'Special diet accommodations', 'Feeding assistance', 'Kitchen cleanup'],
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1400&q=80',
    imageAlt: 'Caregiver preparing nutritious meals in a home kitchen for client dietary needs',
    imagePosition: 'object-center',
    accent: 'bg-amber-50 text-amber-700',
  },
  {
    icon: Car,
    title: 'Transportation',
    description: 'Safe and reliable transportation to appointments, errands, and social activities.',
    features: ['Medical appointments', 'Grocery shopping', 'Social outings', 'Religious services', 'Family visits', 'Recreational activities'],
    image: '/images/services/Transportation.jpg',
    imageAlt: 'Caregiver helping autistic person get into car for safe transportation',
    imagePosition: 'object-center',
    accent: 'bg-sky-50 text-sky-700',
  },
  {
    icon: Pill,
    title: 'Medication Reminders',
    description: 'Assistance with medication management to ensure proper timing and dosage.',
    features: ['Medication reminders', 'Prescription pickup', 'Organizing pill boxes', 'Monitoring intake', 'Communication with pharmacy', 'Family updates'],
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1400&q=80',
    imageAlt: 'Caregiver organizing medications and providing reminders for proper medication management',
    imagePosition: 'object-center',
    accent: 'bg-rose-50 text-rose-700',
  },
];

export default function Services() {
  return (
    <Layout>
      <div className="min-h-screen bg-white">

        <section className="bg-brand-navy py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" aria-hidden="true">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-green-500 rounded-full transform -translate-x-1/2 translate-y-1/2" />
          </div>
          <Reveal className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 text-brand-green-300 font-semibold text-sm mb-3">
              <span className="w-8 h-px bg-brand-green-300" aria-hidden="true" />
              What We Offer
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Our Services</h1>
            <p className="text-blue-100 max-w-2xl leading-relaxed">
              Comprehensive in-home personal care delivered by trained Personal Support Specialists — all according to an authorized Service Plan tailored to each member.
            </p>
          </Reveal>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
            {services.map((service, index) => {
              const isEven = index % 2 === 1;
              return (
                <div
                  key={service.title}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                  <Reveal direction={isEven ? 'right' : 'left'} className={`relative ${isEven ? 'lg:order-2' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        width={600}
                        height={420}
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        quality={70}
                        className={`w-full h-[380px] object-cover ${service.imagePosition ?? 'object-center'}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/20 to-transparent" />
                    </div>
                    <div className={`absolute -bottom-5 ${isEven ? '-left-5' : '-right-5'} w-16 h-16 rounded-2xl shadow-lg flex items-center justify-center ${service.accent}`} aria-hidden="true">
                      <service.icon className="w-8 h-8" />
                    </div>
                  </Reveal>

                  <Reveal direction={isEven ? 'left' : 'right'} delay={100} className={isEven ? 'lg:order-1' : ''}>
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 ${service.accent}`} aria-hidden="true">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-4">{service.title}</h2>
                    <p className="text-gray-700 leading-relaxed mb-7 text-lg">{service.description}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2.5 bg-gray-50 rounded-lg px-3 py-2">
                          <CheckCircle className="w-4 h-4 text-brand-green-500 flex-shrink-0" aria-hidden="true" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </section>

        <section className="py-20 bg-gray-50 border-t border-gray-100" aria-labelledby="services-cta-heading">
          <Reveal>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="inline-flex items-center gap-2 text-brand-green-700 font-semibold text-sm mb-3">
                <span className="w-8 h-px bg-brand-green-500" aria-hidden="true" />
                Get Started
                <span className="w-8 h-px bg-brand-green-500" aria-hidden="true" />
              </div>
              <h2 id="services-cta-heading" className="text-3xl sm:text-4xl font-bold text-brand-navy mb-4">Ready to Begin?</h2>
              <p className="text-gray-600 mb-10 leading-relaxed">
                Contact us today for a free consultation. We will create a personalized care plan to meet your family's unique needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/request-care"
                  className="inline-flex items-center justify-center gap-2 bg-brand-navy hover:bg-brand-blue-800 text-white px-8 py-4 rounded-full font-semibold text-sm transition-colors shadow-lg"
                >
                  Request Care Services <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <a
                  href="tel:+12072528470"
                  className="inline-flex items-center justify-center gap-2 border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white px-8 py-4 rounded-full font-semibold text-sm transition-all duration-200"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" /> (207) 252-8470
                </a>
              </div>
            </div>
          </Reveal>
        </section>

      </div>
    </Layout>
  );
}
