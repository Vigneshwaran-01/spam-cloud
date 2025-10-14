import React, { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import FormAdmin from '../../../components/FormAdmin';
import Link from 'next/link';

export default function FormsDashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formStats, setFormStats] = useState({
    contactSubmissions: 0,
    homeSubmissions: 0,
    lastUpdated: null
  });
  const [isFetchingStats, setIsFetchingStats] = useState(false);

  const checkAuth = useCallback(async () => {
    try {
      const res = await fetch('/api/auth/check');
      const data = await res.json();
      if (!res.ok) throw new Error('Not authenticated');
      setUser(data.user);
    } catch (error) {
      console.error('Auth check failed:', error);
      router.push('/admin/login');
    } finally {
      setLoading(false);
    }
  }, [router]);

  const fetchSubmissionCount = async (endpoint) => {
    try {
      const res = await fetch(`${endpoint}?limit=1`);
      const data = await res.json();
      return data.success ? data.pagination.total : 0;
    } catch (error) {
      console.error(`Error fetching count from ${endpoint}:`, error);
      return 0;
    }
  };

  const fetchFormStats = useCallback(async () => {
    setIsFetchingStats(true);
    try {
      const [homeCount, contactCount,
       ] = await Promise.all([
        fetchSubmissionCount('/api/admin/forms/contact-submissions'),
        fetchSubmissionCount('/api/admin/forms/home-submissions'),
      ]);

      setFormStats({
        contactSubmissions: contactCount,
        homeSubmissions: homeCount,
        lastUpdated: new Date().toLocaleString()
      });
    } catch (error) {
      console.error('Error fetching form stats:', error);
    } finally {
      setIsFetchingStats(false);
    }
  }, []);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    if (user) {
      fetchFormStats();
    }
  }, [user, fetchFormStats]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const forms = [
    {
      id: 'Contact',
      title: 'Contact Forms',
      description: 'View submissions from Contact inquiries',
      link: '/admin/forms/contact-form',
      count: formStats.homeSubmissions,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 'Home',
      title: 'Home Forms',
      description: 'View submissions From Home form inquiries',
      link: '/admin/forms/home-form',
      count: formStats.contactSubmissions,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
  ];
 

  return (
    <div className='bg-[#111827f7]'>
      <FormAdmin>
        <div className="container mx-auto p-[100px]">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white">Forms Management</h2>
            <div className="text-sm text-white">
              Last updated: {formStats.lastUpdated || 'Never'}
            </div>
          </div>

          {isFetchingStats && (
            <div className="mb-4 p-3 bg-blue-50 text-blue-700 rounded">
              Loading form statistics...
            </div>
          )}
            
            <div className='max-h-[calc(100vh-200px)] overflow-y-auto pr-2'>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {forms.map((form) => (
              <Link key={form.id} href={form.link} passHref>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-blue-500">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      {form.icon}
                    </div>
                    <div className="flex-1">
                      <h5 className="text-xl font-semibold mb-1 text-left truncate">{form.title}</h5>
                      <span className="text-gray-600 mb-3 text-left truncate-text1 ">{form.description}</span>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">
                          {form.count.toLocaleString()} submissions
                        </span>
                        <span className="text-blue-500 hover:text-blue-700 font-medium">
                          View →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          </div>

          <div className="mt-8 bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button 
                onClick={() => router.push('/admin/forms/contact-form')}
                className="p-4 bg-gray-50 hover:bg-gray-100 rounded-lg text-left transition-colors"
              >
                <div className="font-medium">Go to Contact Forms</div>
                <div className="text-sm text-gray-500">View all mobile app inquiries</div>
              </button>
              <button 
                onClick={() => router.push('/admin/forms/home-form')}
                className="p-4 bg-gray-50 hover:bg-gray-100 rounded-lg text-left transition-colors"
              >
                <div className="font-medium">Go to Home Forms</div>
                <div className="text-sm text-gray-500">View all contact submissions</div>
              </button>
            </div>
          </div>
        </div>
      </FormAdmin>
    </div>
  );
}