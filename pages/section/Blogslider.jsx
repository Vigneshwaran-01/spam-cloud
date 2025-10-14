// Optimized Blogslider with performance best practices
import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Optimized loading skeleton component
const BlogCardSkeleton = () => (
  <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 animate-pulse">
    <div className="w-full h-56 bg-slate-200"></div>
    <div className="p-6 space-y-4">
      <div className="flex items-center gap-2">
        <div className="h-6 w-20 bg-slate-200 rounded-full"></div>
      </div>
      <div className="space-y-2">
        <div className="h-6 bg-slate-200 rounded w-3/4"></div>
        <div className="h-6 bg-slate-200 rounded w-1/2"></div>
      </div>
      <div className="h-4 bg-slate-200 rounded w-24"></div>
      <div className="space-y-2">
        <div className="h-4 bg-slate-200 rounded"></div>
        <div className="h-4 bg-slate-200 rounded w-5/6"></div>
      </div>
      <div className="h-8 bg-slate-200 rounded w-24"></div>
    </div>
  </div>
);

function Blogslider() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    
    async function fetchPosts() {
      try {
        const res = await fetch('/api/blogslider', {
          headers: {
            'Accept': 'application/json',
            'Cache-Control': 'max-age=300' // 5 minutes cache
          }
        });
        
        if (!res.ok) throw new Error('Failed to fetch');
        
        const data = await res.json();
        
        if (isMounted) {
          setPosts(data.posts || []);
          setError(null);
        }
      } catch (error) {
        console.error('Failed to fetch posts:', error);
        if (isMounted) {
          setError(error.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchPosts();
    
    return () => {
      isMounted = false;
    };
  }, []);

  // Memoized date formatter for performance
  const formatDate = useCallback((dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  }, []);

  // Memoized category extraction
  const getCategoryFromTitle = useCallback((title) => {
    if (title.toLowerCase().includes('security')) return 'Email Security';
    if (title.toLowerCase().includes('spam')) return 'Spam Protection';
    if (title.toLowerCase().includes('ssl')) return 'Web Security';
    return 'Technology';
  }, []);

  // Memoized swiper configuration
  const swiperConfig = useMemo(() => ({
    modules: [Navigation, Pagination],
    spaceBetween: 32,
    navigation: {
      nextEl: '.blog-swiper-button-next',
      prevEl: '.blog-swiper-button-prev',
    },
    pagination: { 
      clickable: true,
      dynamicBullets: true,
      el: '.blog-swiper-pagination'
    },
    speed: 600,
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  }), []);

  if (loading) {
    return (
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <BlogCardSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center py-16">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Unable to load blog posts</h3>
          <p className="text-gray-600">Please try again later</p>
        </div>
      </div>
    );
  }

  if (!posts.length) {
    return (
      <div className="flex items-center justify-center py-16">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No blog posts available</h3>
          <p className="text-gray-600">Check back soon for new content</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      <Swiper {...swiperConfig} className="!pb-12 swiper-equal-height">
        {posts.map((post) => (
          <SwiperSlide key={post.id}>
            <article className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full group flex flex-col">
              {/* Image Container with Lazy Loading */}
              <div className="relative h-56 overflow-hidden bg-slate-100">
                {post.featured_image ? (
                  <Image
                    src={post.featured_image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    priority={false}
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                    <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-500 text-white shadow-lg">
                    {getCategoryFromTitle(post.title)}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-3">
                  <time className="text-sm font-medium text-slate-500" dateTime={post.created_at}>
                    {formatDate(post.created_at)}
                  </time>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                  {post.title}
                </h3>
                
                {post.excerpt && (
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                )}
                
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors duration-200 group/link mt-auto"
                  prefetch={false}
                >
                  READ MORE
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom Navigation */}
      <div className="blog-swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-all duration-200 cursor-pointer">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </div>
      
      <div className="blog-swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-all duration-200 cursor-pointer">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
      
      {/* Custom Pagination */}
      <div className="blog-swiper-pagination flex justify-center mt-8"></div>
    </div>
  );
}

export default Blogslider;
