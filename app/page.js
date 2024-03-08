"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';


export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 }
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const sections = [
    {
      title: "Welcome to the forefront of sustainable forest management and conservation",
      content: "Where cutting-edge technology meets environmental stewardship. \n Our approach leverages Lidar data, revolutionizing how we understand and protect our precious forest ecosystems. \n Lidar, which stands for Light Detection and Ranging, enables us to create detailed, three-dimensional maps of forested areas with unparalleled accuracy. \n By utilizing Lidar technology, we can precisely measure the height, structure, and density of vegetation, allowing for a comprehensive analysis of forest health. \n Our forest management and conservation strategies are rooted in this advanced Lidar data, empowering us to make informed decisions for sustainable practices. \n From identifying areas at risk of deforestation to monitoring the impact of climate change on tree health, Lidar data provides invaluable insights.",
      image: "/lidar-popescu.jpg",
      width: 600,
      height: 300,
    },
    {
      title: "Key Benefits of Lidar in Forest Management and Conservation",
      content: "Precision Mapping: Lidar enables us to create high-resolution, detailed maps, facilitating precise identification of forest features and characteristics. \n Biodiversity Monitoring: By analyzing Lidar data, we can assess biodiversity by mapping different vegetation layers and identifying habitat structures crucial for various species. \n Carbon Sequestration: Lidar aids in estimating carbon stocks by measuring biomass and tree density accurately, contributing to efforts aimed at mitigating climate change. Deforestation Detection: Timely detection of deforestation or illegal logging activities is possible through Lidar monitoring, enabling rapid response and intervention. Fire Risk Assessment: Lidar data assists in evaluating fire risk by assessing fuel loads and identifying areas susceptible to wildfires, facilitating proactive fire management. Ecosystem Health Monitoring: Lidar allows us to monitor changes in the forest ecosystem over time, helping to identify stressors, disease outbreaks, or invasive species. Our commitment to sustainable forest management is strengthened by the integration of Lidar technology. By harnessing the power of precise data, we pave the way for a future where forests thrive, biodiversity flourishes, and ecosystems remain resilient in the face of global challenges. Join us in embracing the next frontier of forest management and conservation, where innovation and environmental responsibility converge for a greener tomorrow.",
      image: "flps.jpg",
      width: 400,
      height: 500,
    },
    {
      title: "Forest Management and Conservation",
      content: "Improve forest management practices by accurately identifying and mapping dead wood. This information can help in implementing targeted conservation efforts and sustainable forestry practices. Develop algorithms that not only distinguish between healthy and dead wood but also provide insights into the reasons behind tree mortality, such as diseases, pests, or environmental factors. Develop a system that integrates LiDAR data with other remote sensing technologies, such as satellite imagery and drones, to create a comprehensive and real-time forest health monitoring solution. Create a user-friendly interface that translates LiDAR data into actionable insights, providing clear recommendations for forest management based on the identified dead wood patterns.",
      image: "image.png",
      width: 600,
      height: 500,
    },
    {
      title: "Integration with Carbon Offset Programs",
      content: "Integrate the dead wood identification data with carbon offset programs, helping companies and governments quantify their contributions to carbon sequestration through forest conservation. Offer a service that verifies and certifies the impact of forest conservation efforts on carbon offset programs, providing a valuable tool for entities aiming to achieve carbon neutrality.",
      image: "Screenshot.png",
      width: 600,
      height: 500,
    },
    {
      title: "International Environmental Compliance Solutions",
      content: "Develop a system that uses LiDAR data to ensure compliance with international environmental agreements related to forest conservation and biodiversity. Provide consulting services and software solutions to countries and organizations striving to meet their commitments under international environmental agreements.",
      image: "logo2.webp",
      width: 600,
      height: 600,
    },
    
    {
      title: "Global Forest Health Monitoring Platform",
      content: "Innovation: Develop a cloud-based platform that uses LiDAR data to monitor forest health globally, allowing stakeholders from different countries to access real-time information. Business Idea: Offer a subscription-based service to governments, environmental agencies, and forestry companies worldwide, providing them with a comprehensive tool for managing and conserving their forests.",
      image: "drone.webp",
      width: 600,
      height: 600,
    },
    {
      title: "Cross-Border Collaboration for Forest Conservation",
      content: "Innovation: Implement a collaborative framework that allows countries to share and analyze LiDAR data collectively, fostering international cooperation for forest conservation efforts. Business Idea: Act as a facilitator for cross-border partnerships, offering consulting services and technology solutions to countries interested in jointly addressing global forest health challenges.",
      image: "DataToModel-3.svg",
      width: 600,
      height: 600,
    },
    {
      title: "AI-Driven Global Forest Health Prediction",
      content: "Innovation: Use artificial intelligence to analyze historical LiDAR data, satellite imagery, and climate data to predict and model future global forest health trends. Business Idea: Provide predictive analytics as a service to international organizations, governments, and NGOs, helping them proactively address potential threats to global forests.",
      image: "circle.svg",
      width: 600,
      height: 600,
    },
    {
      title: "Customized LiDAR Solutions for Different Ecosystems",
      content: "Innovation: Tailor the dead wood identification algorithms to suit various ecosystems around the world, considering different tree species and environmental conditions. Business Idea: Develop and sell specialized LiDAR hardware and software packages optimized for specific global regions, catering to the unique characteristics of each ecosystem.",
    },
    {
      title: "",
      content: "",
    },
    {
      title: "",
      content: "",
    },
    {
      title: "",
      content: "",
    },
    {
      title: "",
      content: "",
    },
    {
      title: "",
      content: "",
    },
    {
      title: "",
      content: "",
    },
    {
      title: "",
      content: "",
    },
    {
      title: "",
      content: "",
    },
    {
      title: "",
      content: "",
    },
    {
      title: "",
      content: "",
    },
    {
      title: "",
      content: "",
    },
    {
      title: "",
      content: "",
    },

  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="space-y-10 w-full text-center"
      >
        <div className='flex items-center justify-center'>
          <div >
            <motion.div variants={itemVariants} className="my-5">
              <Image
                src="/logo.webp"
                alt="Decay Detectives Logo"
                width={200}
                height={200}
                className="rounded-full"
              />
            </motion.div>
          </div>
          <div>
            <motion.h1 variants={itemVariants} className="text-white text-6xl font-bold">
              Decay Detectives
            </motion.h1>
          </div>
          <div>
            <motion.div variants={itemVariants} className="my-5">
              <Image src="https://www.earthdata.nasa.gov/s3fs-public/2022-02/Air-Quality-Transparent-Blue.gif?VersionId=z3k6nWjVZXyNXN30iMu4GZnVDBVqHYZ0" 
              alt="Air Quality" 
              width={200}
              height={200}
              className="rounded-full"
              />
            </motion.div>
          </div>
        </div>

        
        <motion.h4 variants={itemVariants} className="text-white text-3xl">
          Identification and classification of dead words and healthy woods using LiDAR Dataset
        </motion.h4>
        {sections.map((section, index) => (
          <motion.div key={index} variants={itemVariants} className="flex items-start space-x-4">
            <div className="flex-1">
              <h2 className="text-white text-2xl font-bold">{section.title}</h2>
              <p className="text-white text-lg">{section.content}</p>
            </div>
            {section.image && (
              <Image src={section.image}
                alt={section.title || "Image"}
                width={section.width || 200}
                height={section.height || 200}
              />
            )}
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
