import { useState } from 'react';
import Link from 'next/link';
import AdminLayout from '../../../components/AdminLayout';
import slugify from 'slugify';

export default function NewCategory() {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const slug = slugify(name, { lower: true });

    try {
      const response = await fetch('/api/admin/categories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, slug }),
      });

      const data = await response.json();

      if (response.ok) {
        setName('');
        setError('');
        setSuccess('Category created successfully');
      } else {
        setError(data.message || 'Failed to create category');
        setSuccess('');
      }
    } catch (error) {
      console.error('Error creating category:', error);
      setError('An unexpected error occurred');
      setSuccess('');
    }
  };

  return (
    <div className='bg-[#111827f7] min-h-screen'>
      <AdminLayout>
        <div className="container mt-4 pt-[80px]">
          <h1 className="h4 mb-3 text-white">New Category</h1>
          {error && <div className="alert alert-danger">{error}</div>}
          {success && <div className="alert alert-success">{success}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label text-white">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary" style={{ color: 'black' }}>
              Create Category
            </button>
          </form>
          <Link href="/admin/categories" className="btn btn-secondary mt-3">Back to Categories</Link>
        </div>
      </AdminLayout>
    </div>
  );
}
