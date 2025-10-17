// export default Mission;
import React, { useState, useEffect } from "react";
// Import Realtime Database functions instead of Firestore ones
import { ref, get } from "firebase/database";
import { database } from "../firebase.jsx"; // Ensure this path is correct

import Navbar from "./Saadullah/Navbar";
import Footer from "./Saadullah/Footer";

function Mission() {
  const [missionData, setMissionData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMissionData = async () => {
      try {
        // Create a reference to the 'missionStatement' key in your database
        const missionRef = ref(database, "missionStatement");

        // Fetch the data at that reference
        const snapshot = await get(missionRef);

        if (snapshot.exists()) {
          // Get the data using snapshot.val()
          const dataArray = snapshot.val();

          // Filter out the initial 'null' value from your array
          const filteredData = dataArray.filter((item) => item !== null);

          if (filteredData.length > 0) {
            // Set the first valid object from the array into state
            setMissionData(filteredData[0]);
          } else {
            setError(
              "Mission statement data is empty or not formatted correctly."
            );
          }
        } else {
          setError("Mission statement not found in the database.");
        }
      } catch (err) {
        setError("Failed to fetch data. Please try again later.");
        console.error("Firebase fetch error:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMissionData();
  }, []);

  const renderContent = () => {
    if (isLoading) {
      return (
        <p className="text-center text-lg animate-pulse">Loading Mission...</p>
      );
    }
    if (error) {
      return <p className="text-center text-lg text-red-500">{error}</p>;
    }
    if (missionData) {
      return Object.keys(missionData)
        .sort()
        .map((key) => <p key={key}>{missionData[key]}</p>);
    }
    return null;
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-text">
      <Navbar />
      <main className="flex-grow container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto bg-white/5 p-8 md:p-12 rounded-xl shadow-2xl border border-white/10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-heading text-center mb-12">
            Our Mission
          </h1>
          <div className="space-y-6 text-lg md:text-xl leading-relaxed">
            {renderContent()}
          </div>
          <div className="mt-16 text-right">
            <p className="text-xl font-bold text-heading">
              {" "}
              Muhammad Saadullah
            </p>
            <p className="font-serif italic text-2xl text-text/80 my-2">
              Saadullah
            </p>
            <p className="font-semibold">CEO, Aicyro Solutions</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Mission;
