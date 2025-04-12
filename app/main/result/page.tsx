"use client";

import { createClient } from "@/app/utils/supabase/client";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

interface ResultType {
  Name: string;
  Father: string;
  Obtained: number;
  Total: number;
  Position: string;
  Level: string;
}

export default function Result() {
  const [CNIC, setCNIC] = useState<string>("");
  const [Roll, setRoll] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [result, setResult] = useState<ResultType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!CNIC.trim() || !Roll.trim()) {
      setError("Please fill out both fields.");
      return;
    }

    if (CNIC.length !== 13) {
      setError("CNIC must be exactly 13 digits.");
      return;
    }

    setError(""); // Clear previous errors
    setLoading(true); // Start loading

    try {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("Result_Table") // Ensure this is the correct table name
        .select("*")
        .eq("CNIC", CNIC)
        .eq("Roll", Roll)
        .single(); // Fetch a single record

      if (error || !data) {
        toast.error("No record found.");
      } else {
        toast.success("Submitted Successfully");
        setResult(data as ResultType);
      }
    } catch (err) {
      console.error("Error fetching result:", err); // Fix: Using err
      toast.error("Something went wrong!");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <div className="flex justify-center">
          <Image
            src="/logo1.jpg"
            alt="School Logo"
            width={120}
            height={120}
            className="rounded-full"
          />
        </div>

        <h2 className="text-lg font-bold text-center mb-4 text-blue-800">
          Check Result
        </h2>

        <form onSubmit={handleSubmit}>
          <label className="block mb-2 text-sm font-semibold">
            CNIC / B-Form:*
          </label>
          <input
            type="text"
            placeholder="Enter your CNIC"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={CNIC}
            onChange={(e) => setCNIC(e.target.value)}
          />

          <label className="block mt-4 mb-2 text-sm font-semibold">
            Roll No: *
          </label>
          <input
            type="text"
            placeholder="Enter your Roll No"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={Roll}
            onChange={(e) => setRoll(e.target.value)}
          />

          {error && <p className="text-red-600 text-sm mt-1">{error}</p>}

          <button
            type="submit"
            className="mt-2 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? "Loading..." : "Get Result"}
          </button>
        </form>

        {result && (
          <div className="flex flex-col items-center my-8">
            <p>Name: {result.Name}</p>
            <p>Father&apos;s Name: {result.Father}</p> {/* Fix: Using &apos; */}
            <p>Obtained Marks: {result.Obtained}</p>
            <p>Total Marks: {result.Total}</p>
            <p>Position: {result.Position}</p>
            <p>Level: {result.Level}</p>
            <p>🎉🎊🪘</p>
          </div>
        )}
      </div>
    </div>
  );
}
