import React, { useState, useEffect } from 'react';
import { FaChartLine } from 'react-icons/fa';

const SalesVelocityWidget = () => {
  const [metrics, setMetrics] = useState({
    totalOpportunities: 0,
    winRate: 0,
    avgCycleTime: 0,
    avgDealSize: 0,
    salesVelocity: 0
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await fetch('/api/sales-velocity', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        const data = await response.json();
        
        if (data.success) {
          setMetrics(data.data);
        }
      } catch (error) {
        console.error('Error fetching sales velocity:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMetrics();
  }, []);

  if (isLoading) {
    return (
      <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] animate-pulse">
        <div className="h-6 bg-slate-100 rounded w-1/3 mb-4"></div>
        <div className="grid grid-cols-3 gap-4">
          <div className="h-16 bg-slate-50 rounded-2xl"></div>
          <div className="h-16 bg-slate-50 rounded-2xl"></div>
          <div className="h-16 bg-slate-50 rounded-2xl"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-xl hover:border-teal-100 transition-all duration-300">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-base md:text-lg font-black text-slate-900 uppercase tracking-tight">
            Sales Velocity
          </h2>
          <p className="text-[11px] text-slate-500 font-medium">Pipeline speed & revenue efficiency</p>
        </div>
        <div className="p-2 rounded-xl bg-teal-50 text-[#0D9488]">
          <FaChartLine size={16} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-slate-50/50 rounded-2xl p-3 border border-slate-100 flex flex-col items-center justify-center text-center">
          <p className="text-[9px] text-slate-400 font-black uppercase tracking-[0.1em] mb-1">Opportunities</p>
          <p className="text-lg font-black text-slate-900">{metrics.totalOpportunities}</p>
        </div>
        <div className="bg-slate-50/50 rounded-2xl p-3 border border-slate-100 flex flex-col items-center justify-center text-center">
          <p className="text-[9px] text-slate-400 font-black uppercase tracking-[0.1em] mb-1">Win Rate</p>
          <p className="text-lg font-black text-slate-900">{metrics.winRate}%</p>
        </div>
        <div className="bg-slate-50/50 rounded-2xl p-3 border border-slate-100 flex flex-col items-center justify-center text-center">
          <p className="text-[9px] text-slate-400 font-black uppercase tracking-[0.1em] mb-1">Cycle Time</p>
          <p className="text-lg font-black text-slate-900">{metrics.avgCycleTime} <span className="text-[10px] text-slate-400">Days</span></p>
        </div>
        <div className="bg-slate-50/50 rounded-2xl p-3 border border-slate-100 flex flex-col items-center justify-center text-center">
          <p className="text-[9px] text-slate-400 font-black uppercase tracking-[0.1em] mb-1">Avg Deal Size</p>
          <p className="text-base font-black text-slate-900">₹{metrics.avgDealSize}</p>
        </div>
      </div>

      <div className="bg-[#0D9488] text-white rounded-2xl p-4 flex justify-between items-center">
        <div>
          <p className="text-[9px] font-black uppercase tracking-widest opacity-80 mb-1">Calculated Sales Velocity</p>
          <p className="text-2xl font-black">₹{metrics.salesVelocity} <span className="text-sm opacity-70">/ Day</span></p>
        </div>
        <div className="text-xs font-bold opacity-80">
          Higher is better
        </div>
      </div>
    </div>
  );
};

export default SalesVelocityWidget;
