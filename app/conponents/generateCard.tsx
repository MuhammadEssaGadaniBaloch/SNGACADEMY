"use client";

import { createClient } from "@/app/utils/supabase/client";
import { useState, useRef } from "react";
import toast from "react-hot-toast";

import QRCode from "react-qr-code";

// TypeScript Interface for Admit Card Data
interface AdmitCardData {
  Name: string;
  Roll: string;
  City: string;
  Center: string;
  Campus: string;
  Schedule: string;
  Batch: string;
  CNIC: string;
  Picture?: string;
}

export default function Verfy() {
  const [CNIC, setCNIC] = useState<string>("");
  const [roll, setRoll] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [admitData, setAdmitData] = useState<AdmitCardData | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Handle Submit with Proper Type
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!CNIC.trim() || !roll.trim()) {
      setError("Both fields are required!");
      return;
    }
    if (CNIC.length !== 13) {
      setError("CNIC must be exactly 13 digits.");
      return;
    }

    setError("");
    setLoading(true);
    const supabase = createClient();

    const { data, error } = await supabase
      .from("Card_Table")
      .select("*")
      .eq("CNIC", CNIC)
      .eq("Roll", roll)
      .single();

    setLoading(false);

    if (error || !data) {
      toast.error("No record found.");
    } else {
      toast.success("Submitted Successfully");
      setAdmitData(data as AdmitCardData);
    }
  };

  // Print Function
  const handlePrint = () => {
    const printContent = document.getElementById("print-area");
    if (printContent) {
      const originalContent = document.body.innerHTML;
      document.body.innerHTML = printContent.innerHTML;
      window.print();
      document.body.innerHTML = originalContent;
      window.location.reload();
    }
  };

  return (
    <div> 
    <br/>
    <br/>

  
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Input Form */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 no-print">
        <div className="flex justify-center">
          <img src="/logo1.jpg" alt="School Logo" width={120} height={120} className="rounded-full" />
        </div>
        <h2 className="text-lg font-bold text-center mb-4 text-blue-800">Download Admit Card</h2>

        <form onSubmit={handleSubmit}>
          <label className="block mb-2 text-sm font-semibold">CNIC / B-Form *</label>
          <input
            type="text"
            placeholder="Enter your CNIC"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={CNIC}
            onChange={(e) => setCNIC(e.target.value)}
          />
          <label className="block mt-4 mb-2 text-sm font-semibold">Roll No *</label>
          <input
            type="text"
            placeholder="Enter your Roll No"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={roll}
            onChange={(e) => setRoll(e.target.value)}
          />
          {error && <p className="text-red-600 text-sm mt-1">{error}</p>}

          <button
            type="submit"
            className="mt-2 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? "Loading..." : "Get Card"}
          </button>
        </form>
      </div>

      {/* Admit Card */}
      {admitData && (
        <div className="flex flex-col items-center my-24">
          <div id="print-area" ref={cardRef} className="relative w-[4.38in] h-[3.01in] bg-white border-b-6 border-blue-400 rounded-md shadow-md p-2 print-card">
            <div className="flex">
              <div className="flex-1">
                <div className="w-12 h-12 mb-4">
                  <img src="/logo1.jpg" alt="Logo" width={48} height={48} />
                </div>
                <InfoRow label="Name" value={admitData.Name} />
                <InfoRow label="Roll No" value={admitData.Roll} />
                <InfoRow label="City" value={admitData.City} />
                <InfoRow label="Center" value={admitData.Center} />
                <InfoRow label="Campus" value={admitData.Campus} />
                <InfoRow label="Days / Time" value={admitData.Schedule} />
                <InfoRow label="Batch" value={admitData.Batch} />
              </div>

              <div className="ml-2">
                <div className="w-16 h-20 border-2 border-gray-200 overflow-hidden">
                  {admitData.Picture ? (
                    <img src={admitData.Picture} alt="Student" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                      <span className="text-gray-400">Photo</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center mt-2">
              <QRCode value={`${admitData.CNIC}-${admitData.Roll}-${admitData.Name}`} size={40} level="H" />
            </div>

            <div className="text-center text-xs text-gray-600 mt-2">
              <p>Shaheed Nasrullah Gadani Academy</p>
              <p>for English Grammar, Basic Science & Basic Mathematics</p>
            </div>
          </div>

          {/* Print Button */}
          <div className="mt-4 flex gap-2">
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700" onClick={handlePrint}>
              Print Card
            </button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}

// Helper Component
function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-xs">
      <span className="text-cyan-500 font-semibold">{label}:</span> <span className="text-gray-800">{value}</span>
    </div>
  );
}
