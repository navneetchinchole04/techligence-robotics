"use client";

import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [contacts, setContacts] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/contact")
      .then((res) => res.json())
      .then((data) => setContacts(data));
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        Admin Dashboard
      </h1>

      <div className="bg-slate-900 rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">
          Contact Inquiries
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-700 text-cyan-400">
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Phone</th>
                <th className="p-4">Message</th>
              </tr>
            </thead>

            <tbody>
              {contacts.map((contact) => (
                <tr
                  key={contact._id}
                  className="border-b border-slate-800 hover:bg-slate-800 transition"
                >
                  <td className="p-4">{contact.name}</td>
                  <td className="p-4">{contact.email}</td>
                  <td className="p-4">{contact.phone}</td>
                  <td className="p-4">{contact.message}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {contacts.length === 0 && (
            <div className="text-center py-8 text-slate-400">
              No inquiries found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}