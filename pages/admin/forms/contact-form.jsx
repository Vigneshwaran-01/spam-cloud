import React, { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import FormAdmin from '../../../components/FormAdmin';
import Link from 'next/link';

export default function MobileAppForms() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submissions, setSubmissions] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [dateFilter, setDateFilter] = useState({
    startDate: '',
    endDate: ''
  });

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

  const fetchSubmissions = useCallback(async (page = 1) => {
    setIsFetching(true);
    setError(null);
    try {
      let url = `/api/admin/forms/contact-submissions?page=${page}&limit=10`;
      
      // Add date filter if provided
      if (dateFilter.startDate && dateFilter.endDate) {
        url += `&startDate=${dateFilter.startDate}&endDate=${dateFilter.endDate}`;
      }

      const res = await fetch(url);
      const data = await res.json();
      
      if (!res.ok) throw new Error(data.message || 'Failed to fetch submissions');
      
      setSubmissions(data.data);
      setTotalPages(data.pagination.totalPages);
      setCurrentPage(data.pagination.page);
    } catch (err) {
      console.error('Fetch error:', err);
      setError(err.message);
    } finally {
      setIsFetching(false);
    }
  }, [dateFilter]);

  const handleDateFilterChange = (e) => {
    const { name, value } = e.target;
    setDateFilter(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const applyDateFilter = () => {
    setCurrentPage(1);
    fetchSubmissions(1);
  };

  const clearDateFilter = () => {
    setDateFilter({
      startDate: '',
      endDate: ''
    });
    setCurrentPage(1);
    fetchSubmissions(1);
  };

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    if (user) {
      fetchSubmissions(currentPage);
    }
  }, [user, currentPage]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='bg-[#111827f7]'>
      <FormAdmin>
        <div className="container mx-auto p-[100px]">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-bold p-2 text-white">Contact Form Submissions</h2>
            <Link href="/admin/forms" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Back to Forms
            </Link>
          </div>

          {/* Date Filter Section */}
          <div className="bg-white p-4 rounded-lg shadow mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  value={dateFilter.startDate}
                  onChange={handleDateFilterChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                <input
                  type="date"
                  name="endDate"
                  value={dateFilter.endDate}
                  onChange={handleDateFilterChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="flex items-end gap-2">
                <button
                  onClick={applyDateFilter}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Apply Filter
                </button>
                <button
                  onClick={clearDateFilter}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                >
                  Clear
                </button>
              </div>
            </div>
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}
          
          {isFetching ? (
            <div className="flex justify-center items-center h-64">
              <div>Loading submissions...</div>
            </div>
          ) : (
            <>
              <div className="bg-white rounded-lg shadow overflow-hidden mb-4">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {submissions.length > 0 ? (
                        submissions.map((submission) => (
                          <tr key={submission.id || submission.submission_date}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{submission.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{submission.email}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{submission.phone}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{submission.subject}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{submission.company}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{submission.service}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 max-w-xs truncate">
                              {submission.message}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {new Date(submission.submission_date).toLocaleString()}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="8" className="px-6 py-4 text-center text-sm text-gray-500">
                            No submissions found
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Pagination */}
              <div className="flex justify-between items-center mt-4">
                <div>
                  <span className="text-sm text-white">
                    Showing page {currentPage} of {totalPages}
                  </span>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded ${currentPage === 1 ? 'bg-gray-200 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => setCurrentPage(prev => prev + 1)}
                    disabled={currentPage >= totalPages}
                    className={`px-4 py-2 rounded ${currentPage >= totalPages ? 'bg-gray-200 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
                  >
                    Next
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </FormAdmin>
    </div>
  );
}