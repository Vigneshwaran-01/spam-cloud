import React, { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar';
import Pagination from '../../components/Pagination';
import { BackgroundBeams } from "../../components/ui/background-beams";
import fadeIn from 'react-animations/lib/fade-in';
import slideInUp from 'react-animations/lib/slide-in-up';
import slideInDown from 'react-animations/lib/slide-in-down';
import tada from 'react-animations/lib/tada';
import zoomInDown from 'react-animations/lib/zoom-in-down';
import slideInLeft from 'react-animations/lib/slide-in-left';
import { StyleSheet, css } from "aphrodite";
import Head from 'next/head';
import { blogSchema } from '../../lib/data/schema';

const styles = StyleSheet.create({
  fadeIn: {
    animationName: fadeIn,
    animationDuration: '2s',
  },
  slideInUp: {
    animationName: slideInUp,
    animationDuration: '2s',
  },
  slideInDown: {
    animationName: slideInDown,
    animationDuration: '2s',
  },
  tada: {
    animationName: tada,
    animationDuration: '15s',
  },
  zoomInDown: {
    animationName: zoomInDown,
    animationDuration: '4s',
  },
  slideInLeft: {
    animationName: slideInLeft,
    animationDuration: '4s',
  },
});

function BlogIndex({ initialData }) {
  const [posts, setPosts] = useState(initialData?.posts || []);
  const [pagination, setPagination] = useState(initialData?.pagination || {
    currentPage: 1,
    totalPages: 0,
    totalPosts: 0,
    hasMore: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isClient, setIsClient] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const fetchPosts = async (page = 1, search = '') => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `/api/posts?page=${page}&search=${encodeURIComponent(search)}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      const data = await response.json();
      setPosts(data.posts || []);
      setPagination(data.pagination || {
        currentPage: page,
        totalPages: 0,
        totalPosts: 0,
        hasMore: false
      });
    } catch (err) {
      console.error('Error fetching posts:', err);
      setError(err.message);
      setPosts([]);
      setPagination({
        currentPage: 1,
        totalPages: 0,
        totalPosts: 0,
        hasMore: false
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    fetchPosts(1, term);
  };

  const handlePageChange = (page) => {
    fetchPosts(page, searchTerm);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div>
      <Head>
       <title>blogs - Spam Cloud</title>
              <meta name="description" content="Read the latest blog posts from Spam Cloud on email security, spam protection, and digital safety tips." />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <link rel="canonical" href="https://spamcloud.in/blog" />
              <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content='blogs - Spam Cloud' />
        <meta property="og:description" content="Read the latest blog posts from Spam Cloud on email security, spam protection, and digital safety tips." />
        <meta property="og:url" content="https://spamcloud.in/blog" />
        <meta property="og:site_name" content="Sixth Star Technologies" />
        <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
                      />
      </Head>
      {error && (
        <div>
          <h1>Error loading data</h1>
          <p>{error}</p>
        </div>
      )}
      <section className="about-banner-sec">
        <div className="h-[30rem] w-full rounded-md bg-950 relative flex flex-col items-center justify-center antialiased">
          <div className="max-w-2xl mx-auto p-4">
            <h1 className={isClient ? css(styles.slideInUp) : ''}>
              Blog
            </h1>
          </div>
          <BackgroundBeams />
        </div>
      </section>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto mb-8">
          <SearchBar onSearch={handleSearch} />
        </div>

        {isLoading ? (
          <div className="text-center py-8">Loading...</div>
        ) : (
          <>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map(post => (
                <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  {post.featured_image ? (
                    <img
                      src={post.featured_image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/800x400';
                      }}
                    />
                  ) : (
                    <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">No image available</span>
                    </div>
                  )}
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                    <div className="text-gray-600 text-sm mb-2">
                      {formatDate(post.created_at)}
                    </div>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <a
                      href={`/blog/${post.slug}`}
                      className="text-blue-500 hover:underline"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {posts.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No posts found.
              </div>
            )}

            {pagination.totalPages > 1 && (
              <Pagination
                currentPage={pagination.currentPage}
                totalPages={pagination.totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/posts`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    
    const data = await response.json();
    
    return {
      props: {
        initialData: data
      }
    };
  } catch (error) {
    console.error('Error fetching initial data:', error);
    return {
      props: {
        initialData: {
          posts: [],
          pagination: {
            currentPage: 1,
            totalPages: 0,
            totalPosts: 0,
            hasMore: false
          }
        }
      }
    };
  }
}

export default BlogIndex;