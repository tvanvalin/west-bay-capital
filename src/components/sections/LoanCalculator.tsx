"use client";

import { useState, useMemo } from "react";
import { AnimateIn } from "@/components/AnimateIn";
import { Calculator, ArrowRight } from "lucide-react";
import Link from "next/link";

const RATE_MIN = 10.5;
const ORIGINATION_MIN = 1.0;

export function LoanCalculatorSection() {
  const [loanAmount, setLoanAmount] = useState(3000000);
  const [termMonths, setTermMonths] = useState(12);
  const [rate, setRate] = useState(RATE_MIN);
  const [origination, setOrigination] = useState(ORIGINATION_MIN);

  const results = useMemo(() => {
    const monthlyRate = rate / 100 / 12;
    const monthlyPayment = loanAmount * monthlyRate;
    const totalInterest = monthlyPayment * termMonths;
    const originationFee = loanAmount * (origination / 100);
    const totalCost = totalInterest + originationFee;

    return {
      monthlyPayment,
      totalInterest,
      originationFee,
      totalCost,
    };
  }, [loanAmount, termMonths, rate, origination]);

  const formatCurrency = (n: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(n);

  return (
    <section
      id="calculator"
      className="relative py-24 md:py-32 bg-[var(--color-gray-100)] overflow-hidden"
      aria-labelledby="calculator-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        <AnimateIn>
          <div className="text-center mb-16">
            <span className="text-[var(--color-copper-dark)] text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
              Estimate Your Costs
            </span>
            <h2
              id="calculator-heading"
              className="font-heading text-4xl md:text-5xl font-semibold text-[var(--color-navy)] mb-4"
            >
              Bridge Loan Calculator
            </h2>
            <p className="text-lg text-[var(--color-gray-600)] max-w-2xl mx-auto">
              Get a quick estimate of your monthly payments and total loan costs.
              For a precise quote tailored to your deal, contact our team.
            </p>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10">
            {/* Inputs */}
            <div className="space-y-8 rounded-xl bg-white p-8 md:p-10 border border-[var(--color-gray-200)] shadow-sm">
              <div>
                <div className="flex justify-between mb-2">
                  <label
                    htmlFor="calc-amount"
                    className="text-sm font-medium text-[var(--color-gray-700)]"
                  >
                    Loan Amount
                  </label>
                  <span className="text-sm font-semibold text-[var(--color-navy)]">
                    {formatCurrency(loanAmount)}
                  </span>
                </div>
                <input
                  id="calc-amount"
                  type="range"
                  min={1000000}
                  max={15000000}
                  step={100000}
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full accent-[var(--color-copper)]"
                />
                <div className="flex justify-between text-xs text-[var(--color-gray-500)] mt-1">
                  <span>$1M</span>
                  <span>$15M</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label
                    htmlFor="calc-term"
                    className="text-sm font-medium text-[var(--color-gray-700)]"
                  >
                    Loan Term
                  </label>
                  <span className="text-sm font-semibold text-[var(--color-navy)]">
                    {termMonths} months
                  </span>
                </div>
                <input
                  id="calc-term"
                  type="range"
                  min={6}
                  max={24}
                  step={1}
                  value={termMonths}
                  onChange={(e) => setTermMonths(Number(e.target.value))}
                  className="w-full accent-[var(--color-copper)]"
                />
                <div className="flex justify-between text-xs text-[var(--color-gray-500)] mt-1">
                  <span>6 mo</span>
                  <span>24 mo</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label
                    htmlFor="calc-rate"
                    className="text-sm font-medium text-[var(--color-gray-700)]"
                  >
                    Interest Rate
                  </label>
                  <span className="text-sm font-semibold text-[var(--color-navy)]">
                    {rate.toFixed(2)}%
                  </span>
                </div>
                <input
                  id="calc-rate"
                  type="range"
                  min={RATE_MIN}
                  max={14}
                  step={0.25}
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full accent-[var(--color-copper)]"
                />
                <div className="flex justify-between text-xs text-[var(--color-gray-500)] mt-1">
                  <span>{RATE_MIN}%</span>
                  <span>14%</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label
                    htmlFor="calc-origination"
                    className="text-sm font-medium text-[var(--color-gray-700)]"
                  >
                    Origination Fee
                  </label>
                  <span className="text-sm font-semibold text-[var(--color-navy)]">
                    {origination.toFixed(2)}%
                  </span>
                </div>
                <input
                  id="calc-origination"
                  type="range"
                  min={ORIGINATION_MIN}
                  max={3}
                  step={0.25}
                  value={origination}
                  onChange={(e) => setOrigination(Number(e.target.value))}
                  className="w-full accent-[var(--color-copper)]"
                />
                <div className="flex justify-between text-xs text-[var(--color-gray-500)] mt-1">
                  <span>{ORIGINATION_MIN}%</span>
                  <span>3%</span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="flex flex-col">
              <div className="flex-1 rounded-xl bg-[var(--color-navy)] p-8 md:p-10 text-white">
                <div className="flex items-center gap-3 mb-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-copper)]/20">
                    <Calculator className="h-5 w-5 text-[var(--color-copper-light)]" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold">
                    Estimated Costs
                  </h3>
                </div>

                <div className="space-y-6">
                  <div className="flex justify-between items-end pb-4 border-b border-white/10">
                    <span className="text-white/60 text-sm">
                      Monthly Payment (Interest Only)
                    </span>
                    <span className="font-heading text-2xl font-semibold text-[var(--color-copper-light)]">
                      {formatCurrency(results.monthlyPayment)}
                    </span>
                  </div>
                  <div className="flex justify-between items-end pb-4 border-b border-white/10">
                    <span className="text-white/60 text-sm">
                      Total Interest ({termMonths} mo)
                    </span>
                    <span className="font-heading text-lg font-semibold">
                      {formatCurrency(results.totalInterest)}
                    </span>
                  </div>
                  <div className="flex justify-between items-end pb-4 border-b border-white/10">
                    <span className="text-white/60 text-sm">
                      Origination Fee ({origination}%)
                    </span>
                    <span className="font-heading text-lg font-semibold">
                      {formatCurrency(results.originationFee)}
                    </span>
                  </div>
                  <div className="flex justify-between items-end pt-2">
                    <span className="text-white font-medium">
                      Total Estimated Cost
                    </span>
                    <span className="font-heading text-3xl font-bold text-white">
                      {formatCurrency(results.totalCost)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Link
                  href="/#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-md bg-[var(--color-copper)] px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-[var(--color-copper-dark)] hover:shadow-lg hover:shadow-[var(--color-copper)]/20 w-full"
                >
                  Get Your Custom Quote
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <p className="text-xs text-[var(--color-gray-500)] mt-3">
                  Estimates are for illustration only. Actual terms depend on
                  property type, borrower profile, and market conditions.
                </p>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
