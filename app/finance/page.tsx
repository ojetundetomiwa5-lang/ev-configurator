"use client";

import { useState } from "react";
import Link from "next/link";

export default function FinancePage() {
  const [price, setPrice] = useState(74990);
  const [downPayment, setDownPayment] = useState(10000);
  const [interestRate, setInterestRate] = useState(5);
  const [years, setYears] = useState(5);

  const loanAmount = price - downPayment;
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = years * 12;

  const monthlyPayment =
    monthlyRate === 0
      ? loanAmount / numberOfPayments
      : (loanAmount *
          monthlyRate *
          Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="mx-auto max-w-4xl">

        <Link href="/" className="text-gray-400 hover:text-white">
          ← Back to Home
        </Link>

        <h1 className="mt-8 text-center text-5xl font-bold">
          Tesla Financing Calculator
        </h1>

        <p className="mt-4 text-center text-gray-400">
          Estimate your monthly payment before ordering your Tesla.
        </p>

        <div className="mt-12 space-y-6 rounded-2xl bg-gray-900 p-8">

          <div>
            <label className="block mb-2">Vehicle Price ($)</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full rounded-lg bg-black border border-gray-700 p-4"
            />
          </div>

          <div>
            <label className="block mb-2">Down Payment ($)</label>
            <input
              type="number"
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              className="w-full rounded-lg bg-black border border-gray-700 p-4"
            />
          </div>

          <div>
            <label className="block mb-2">Interest Rate (%)</label>
            <input
              type="number"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full rounded-lg bg-black border border-gray-700 p-4"
            />
          </div>

          <div>
            <label className="block mb-2">Loan Term (Years)</label>

            <select
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full rounded-lg bg-black border border-gray-700 p-4"
            >
              <option value={3}>3 Years</option>
              <option value={4}>4 Years</option>
              <option value={5}>5 Years</option>
              <option value={6}>6 Years</option>
              <option value={7}>7 Years</option>
            </select>
          </div>

          <div className="rounded-xl bg-white p-8 text-center text-black">
            <h2 className="text-3xl font-bold">
              Estimated Monthly Payment
            </h2>

            <p className="mt-6 text-5xl font-bold">
              ${monthlyPayment.toFixed(2)}
            </p>

            <p className="mt-4 text-gray-600">
              Loan Amount: ${loanAmount.toLocaleString()}
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}