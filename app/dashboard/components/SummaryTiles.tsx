'use client';
import React from 'react';
import {
  Certificate,
  Notebook,
  DocumentTasks,
  EventSchedule,
  Upgrade,
} from '@carbon/icons-react';

const SummaryCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 mb-6">
      
      {/* Plan Tile */}
      <div className="bg-white shadow rounded-xl p-4 flex flex-col justify-between">
        <div className="flex justify-end">
          <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
            <EventSchedule size={20} />
          </div>
        </div>
        <div className="mt-2">
          <div className="text-sm text-gray-600">Plan: <strong>Corporate</strong></div>
          <div className="text-xs text-gray-500 mt-1">June 30, 2025</div>
          <div className="text-xs text-gray-400">Expiry Date</div>
        </div>
        <div className="mt-auto flex justify-end pt-4">
          <button className="text-sm text-blue-600 hover:underline flex items-center">
            Upgrade <Upgrade className="ml-1" size={16} />
          </button>
        </div>
      </div>

      {/* Reports Generated */}
      <div className="bg-white shadow rounded-xl p-4">
        <div className="flex justify-end">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <DocumentTasks size={20} />
          </div>
        </div>
        <div className="mt-2">
          <div className="text-sm text-gray-600">Reports Generated</div>
          <div className="text-lg font-semibold mt-1">
            300 <span className="text-gray-500 text-sm">Search</span> &nbsp;|&nbsp;
            700 <span className="text-gray-500 text-sm">Batch</span>
          </div>
        </div>
      </div>

      {/* MLS */}
      <div className="bg-white shadow rounded-xl p-4">
        <div className="flex justify-end">
          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
            <Notebook size={20} />
          </div>
        </div>
        <div className="mt-2">
          <div className="text-sm text-gray-600">MLS</div>
          <div className="text-lg font-semibold mt-1">120.5 M</div>
          <div className="text-xs text-gray-500">Properties</div>
        </div>
      </div>

      {/* Public Records */}
      <div className="bg-white shadow rounded-xl p-4">
        <div className="flex justify-end">
          <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
            <Certificate size={20} />
          </div>
        </div>
        <div className="mt-2">
          <div className="text-sm text-gray-600">Public Records</div>
          <div className="text-lg font-semibold mt-1">120.5 M</div>
          <div className="text-xs text-gray-500">Properties</div>
        </div>
      </div>

    </div>
  );
};

export default SummaryCards;
