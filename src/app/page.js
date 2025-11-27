"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import ContentstackLivePreview from "@contentstack/live-preview-utils";

/*import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"*/
function Button(props) {
  // Destructure props, removing TypeScript types
  const { variant = "solid", size = "md", className = "", children, ...rest } = props;
  // Use original class name logic
  const combinedClasses = [
      "cs-btn",
      variant === "outline" ? "cs-btn--outline" : "cs-btn--solid",
      size === "lg" ? "cs-btn--lg" : "cs-btn--md",
      className,
  ].join(" ");
  return (
      <button
          {...rest}
          className={combinedClasses}
      >
          {children}
      </button>
  );
}

function Badge({ children, className = "" }) {
  return <span className={["cs-badge", className].join(" ")}>{children}</span>
}

function Card({ children, className = "" }) {
  return <div className={["cs-card", className].join(" ")}>{children}</div>
}

function CardContent({ children, className = "" }) {
  return <div className={["cs-card-content", className].join(" ")}>{children}</div>
}

export function App() {
  return (
      <div className="min-h-screen bg-gray-50 p-6 font-inter">
          <script src="https://cdn.tailwindcss.com"></script>
          <style>{`
              @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
              .font-inter { font-family: 'Inter', sans-serif; }
              /* Minimal CSS definitions for original class names */
              .cs-btn {
                  @apply font-semibold rounded-lg transition-all duration-200 cursor-pointer shadow-md;
              }
              .cs-btn--solid {
                  @apply bg-blue-600 text-white hover:bg-blue-700;
              }
              .cs-btn--outline {
                  @apply bg-transparent text-blue-600 border border-blue-600 hover:bg-blue-50;
              }
              .cs-btn--md {
                  @apply py-2 px-4 text-sm;
              }
              .cs-btn--lg {
                  @apply py-3 px-6 text-base;
              }
              .cs-badge {
                  @apply inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800;
              }
              .cs-card {
                  @apply bg-white shadow-xl rounded-xl p-6 max-w-sm mx-auto;
              }
              .cs-card-content {
                  @apply pt-4 text-gray-700;
              }
          `}</style>
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Basic JSX Translation</h1>
          <Card className="mb-4">
              <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-bold">Component Card</h2>
                  <Badge>New</Badge>
              </div>
              <CardContent>
                  <p className="mb-4">
                      This uses the minimal translated component structure with the original custom class names.
                  </p>
                  <div className="space-y-3">
                      <Button size="lg" onClick={() => console.log('Large Click')}>
                          Large Solid
                      </Button>
                      <Button variant="outline" size="md" onClick={() => console.log('Outline Click')}>
                          Medium Outline
                      </Button>
                  </div>
              </CardContent>
          </Card>
      </div>
  );
}


import { ArrowRight, Check, Star, Users, Zap, Shield, Globe, ChevronDown } from "lucide-react"
import React from 'react';
import { fetchHomePage, initializeLP } from "./sdk";
initializeLP();

export default function ContentstackPage() {
  let [entry , setEntry]  = useState({});
  useEffect(() => {
    async function run(){
      let res =await fetchHomePage();
      setEntry(res)
    }
    run()

    ContentstackLivePreview.onEntryChange = async function(){
      let res = await fetchHomePage();
      setEntry(res);
    }
    return () => {
      ContentstackLivePreview.onEntryChange = () => {};
      setEntry({})
    }

  },[])
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">CS</span>
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900">Contentstack</span>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Platform
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Solutions
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Resources
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Pricing
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Company
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-700 hover:text-blue-600">
                Sign In
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Start Free Trial</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating geometric shapes */}
          <div
            className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-bounce"
            style={{ animationDelay: "0s", animationDuration: "3s" }}
          ></div>
          <div
            className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-lg opacity-30 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-40 left-1/4 w-12 h-12 bg-green-200 rounded-full opacity-25 animate-bounce"
            style={{ animationDelay: "2s", animationDuration: "4s" }}
          ></div>
          <div
            className="absolute top-1/3 right-1/3 w-8 h-8 bg-orange-200 rotate-45 opacity-20 animate-spin"
            style={{ animationDuration: "8s" }}
          ></div>

          {/* Animated grid pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3B82F6" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 animate-pulse">
                  <Star className="w-3 h-3 mr-1" />
                  #1 Headless CMS Platform
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  {entry.title && entry.title}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {entry.description && entry.description}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 transform hover:scale-105 transition-all duration-200"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent transform hover:scale-105 transition-all duration-200"
                >
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  Free 30-day trial
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  No credit card required
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 border border-gray-200 transform hover:scale-105 transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">Content Management</h3>
                    <Badge className="bg-green-100 text-green-700 animate-pulse">Live</Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gradient-to-r from-blue-200 to-purple-200 rounded animate-pulse"></div>
                    <div
                      className="h-4 bg-gradient-to-r from-green-200 to-blue-200 rounded w-3/4 animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                    <div
                      className="h-4 bg-gradient-to-r from-purple-200 to-pink-200 rounded w-1/2 animate-pulse"
                      style={{ animationDelay: "1s" }}
                    ></div>
                  </div>
                  <div className="flex space-x-2 pt-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                      <Globe className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                      <Zap className="w-4 h-4 text-purple-600" />
                    </div>
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                      <Shield className="w-4 h-4 text-green-600" />
                    </div>
                  </div>
                </div>

                <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-ping"></div>
                <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-30 animate-pulse"></div>
              </div>

              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
              <div
                className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-15 blur-2xl animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>

              <svg
                className="absolute top-10 right-10 w-6 h-6 text-blue-400 opacity-30 animate-bounce"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                  clipRule="evenodd"
                />
              </svg>

              <svg
                className="absolute bottom-10 left-10 w-8 h-8 text-purple-400 opacity-25 animate-spin"
                style={{ animationDuration: "6s" }}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-32 h-32 bg-blue-100 rounded-full opacity-10 animate-pulse"></div>
          <div
            className="absolute bottom-20 left-10 w-24 h-24 bg-purple-100 rounded-lg opacity-15 animate-bounce"
            style={{ animationDuration: "4s" }}
          ></div>

          {/* Subtle grid overlay */}
          <svg className="absolute inset-0 w-full h-full opacity-3" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="#3B82F6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Why leading brands choose Contentstack</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deliver exceptional digital experiences with the most flexible and scalable headless CMS platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-gray-200 hover:shadow-xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-2 group">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Lightning Fast</h3>
                <p className="text-gray-600 leading-relaxed">
                  Built for speed with global CDN, optimized APIs, and edge computing for instant content delivery
                  worldwide.
                </p>
                <div className="w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500 mt-4"></div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-xl hover:border-purple-200 transition-all duration-300 transform hover:-translate-y-2 group">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Omnichannel Ready</h3>
                <p className="text-gray-600 leading-relaxed">
                  Publish content across web, mobile, IoT, and any digital touchpoint with a single source of truth.
                </p>
                <div className="w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-500 mt-4"></div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-xl hover:border-green-200 transition-all duration-300 transform hover:-translate-y-2 group">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise Security</h3>
                <p className="text-gray-600 leading-relaxed">
                  SOC 2 Type II certified with advanced security features, compliance, and governance controls.
                </p>
                <div className="w-0 h-1 bg-gradient-to-r from-green-500 to-teal-500 group-hover:w-full transition-all duration-500 mt-4"></div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-xl hover:border-orange-200 transition-all duration-300 transform hover:-translate-y-2 group">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Developer Friendly</h3>
                <p className="text-gray-600 leading-relaxed">
                  RESTful APIs, GraphQL, SDKs, and extensive documentation for seamless developer experience.
                </p>
                <div className="w-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-500 mt-4"></div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-xl hover:border-red-200 transition-all duration-300 transform hover:-translate-y-2 group">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Content Workflows</h3>
                <p className="text-gray-600 leading-relaxed">
                  Advanced publishing workflows, content versioning, and collaboration tools for content teams.
                </p>
                <div className="w-0 h-1 bg-gradient-to-r from-red-500 to-pink-500 group-hover:w-full transition-all duration-500 mt-4"></div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-xl hover:border-teal-200 transition-all duration-300 transform hover:-translate-y-2 group">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <ChevronDown className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Scalable Architecture</h3>
                <p className="text-gray-600 leading-relaxed">
                  Auto-scaling infrastructure that grows with your business, handling millions of API calls
                  effortlessly.
                </p>
                <div className="w-0 h-1 bg-gradient-to-r from-teal-500 to-blue-500 group-hover:w-full transition-all duration-500 mt-4"></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Logos */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-1/4 w-16 h-16 bg-blue-200 rounded-full opacity-10 animate-pulse"></div>
          <div
            className="absolute bottom-10 right-1/4 w-20 h-20 bg-purple-200 rounded-lg opacity-10 animate-bounce"
            style={{ animationDuration: "5s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600 font-medium">Trusted by 500+ leading brands worldwide</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {["Microsoft", "Spotify", "Holiday Inn", "Cisco", "Mastercard", "American Express"].map(
              (company, index) => (
                <div key={company} className="text-center group">
                  <div className="h-12 bg-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-400 transition-all duration-300 transform hover:scale-105 opacity-60 hover:opacity-100">
                    <span className="text-gray-600 font-semibold text-sm group-hover:text-gray-800">{company}</span>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full opacity-5 animate-pulse"></div>
          <div
            className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-lg opacity-10 animate-bounce"
            style={{ animationDuration: "3s" }}
          ></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white rounded-full opacity-5 animate-ping"></div>

          {/* Animated wave pattern */}
          <svg
            className="absolute bottom-0 left-0 w-full h-20 opacity-10"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              fill="currentColor"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              fill="currentColor"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Ready to transform your digital experiences?</h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              Join thousands of developers and content creators who trust Contentstack to power their digital
              experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 transform hover:scale-105 transition-all duration-200"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent transform hover:scale-105 transition-all duration-200"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="footer-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="2" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#footer-pattern)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className = "text-white font-bold text-sm">CS</span>
                </div>
                <span className="ml-2 text-xl font-bold">Contentstack</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                The headless CMS that enables enterprises to build and deliver digital experiences at scale.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    Headless CMS
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    Content Delivery
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    APIs & SDKs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    Security
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    Case Studies
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    Partners
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 Contentstack. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
