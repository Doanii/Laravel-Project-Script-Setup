import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
// @ts-ignore
import { Button, Input } from '@doanii/ui';

export default function Dashboard() {
  return (
    <AppLayout
      title="Dashboard"
      renderHeader={() => (
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Dashboard
        </h2>
      )}
    >
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg flex flex-col p-4">
            <Button variant="danger" className="bg-red-500">
                Test button
            </Button>
            <Input type="text" label="Email:" required error="Email is verplicht" placeholder="Email:" />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
