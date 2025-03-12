import { generateMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import Home from "@/components/Home";
import React from "react";

export const metadata: Metadata = generateMetadata({
  title: "Knowcrunch - Professional digital marketing courses & training",
  description: "Knowcrunch is offering high-level professional digital & social media marketing training & education in a class or via video-on-demand e-learning.",
  canonical: `/`,
  image: `icons/Hero.webp`,


})

const HomePage: React.FC = () => {
  return (<Home />)
}

export default HomePage;
