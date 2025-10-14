import { useState } from 'react';
import Link from 'next/link';
import AdminLayout from '../../../components/AdminLayout';
import mysql from 'mysql2/promise';

export default function Posts({ initialPosts }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [posts, setPosts] = useState(initialPosts);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = async (postId) => {
    if (!confirm('Are you sure you want to delete this post?')) return;

    try {
      const response = await fetch(`/api/posts/${postId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setPosts(posts.filter(post => post.id !== postId));
      } else {
        const errorMessage = await response.json();
        console.error('Failed to delete the post:', errorMessage.message);
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div className='bg-[#111827f7]'>
    <AdminLayout>
      <div className="container mx-auto pt-[100px]">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">Blog Posts</h1>
          <Link href="/admin/posts/new" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            New Post
          </Link>
        </div>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPosts.map((post) => (
                <tr key={post.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{post.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{post.category_name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{post.created_at}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      post.published ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {post.published ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Link href={`/admin/posts/${post.id}/edit`} className="text-blue-600 hover:text-blue-900 mr-4">
                      Edit
                    </Link>
                    <Link href={`/blog/${post.slug}`} className="text-green-600 hover:text-green-900 mr-4">
                     view
                    </Link>
                    <button onClick={() => handleDelete(post.id)} className="text-red-600 hover:text-red-900">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const connection = await mysql.createPool({
      host: process.env.DB_HOST,
      port: process.env.DATABASE_PORT || 3306,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });

    const [posts] = await connection.execute(`
      SELECT 
        p.*, 
        COALESCE(c.name, 'Uncategorized') AS category_name
      FROM blog_posts p
      LEFT JOIN blog_categories c ON p.category_id = c.id
      ORDER BY p.created_at DESC
    `);

    const formattedPosts = posts.map(post => ({
      ...post,
      created_at: post.created_at ? new Date(post.created_at).toISOString().split('T')[0] : null,
      updated_at: post.updated_at ? new Date(post.updated_at).toISOString().split('T')[0] : null,
      scheduled_for: post.scheduled_for ? new Date(post.scheduled_for).toISOString() : null,
    }));

    return { props: { initialPosts: formattedPosts } };
  } catch (error) {
    console.error('Database error:', error);
    return { props: { initialPosts: [] } };
  }
}
