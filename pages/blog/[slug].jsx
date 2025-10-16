import React, { useState, useEffect, useMemo } from 'react';
import mysql from 'mysql2/promise';
import Head from 'next/head';
import { BackgroundBeams } from "../../components/ui/background-beams";
import fadeIn from 'react-animations/lib/fade-in';
import slideInUp from 'react-animations/lib/slide-in-up';
import slideInDown from 'react-animations/lib/slide-in-down';
import tada from 'react-animations/lib/tada';
import zoomInDown from 'react-animations/lib/zoom-in-down';
import slideInLeft from 'react-animations/lib/slide-in-left';
import { StyleSheet, css } from "aphrodite";
import Link from 'next/link';

const styles = StyleSheet.create({
  fadeIn: { animationName: fadeIn, animationDuration: '2s' },
  slideInUp: { animationName: slideInUp, animationDuration: '2s' },
  slideInDown: { animationName: slideInDown, animationDuration: '2s' },
  tada: { animationName: tada, animationDuration: '15s' },
  zoomInDown: { animationName: zoomInDown, animationDuration: '4s' },
  slideInLeft: { animationName: slideInLeft, animationDuration: '4s' },
});

function BlogPost({ post, relatedPosts }) {
  const [isClient, setIsClient] = useState(false);
  const [headings, setHeadings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [processedContent, setProcessedContent] = useState('');
  const [readProgress, setReadProgress] = useState(0);

  useEffect(() => {
    setIsClient(true);

    // Extract H2 headings from post content and inject anchor ids for deep linking
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = post.content || '';
    const h2Elements = tempDiv.querySelectorAll("h2");
    const extractedHeadings = Array.from(h2Elements).map((h2, index) => {
      const id = `heading-${index}`;
      h2.setAttribute('id', id);
      return h2.innerText;
    });
    setHeadings(extractedHeadings);
    setProcessedContent(tempDiv.innerHTML);

    // Simulate loading delay for related posts
    const t = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    // Reading progress handler
    const handleScroll = () => {
      const article = document.getElementById('blog-article');
      if (!article) return;
      const rect = article.getBoundingClientRect();
      const total = article.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY - (article.offsetTop || 0);
      const progress = Math.max(0, Math.min(100, (scrolled / Math.max(total, 1)) * 100));
      setReadProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(t);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [post.content]);

  if (!post) return <div>Post not found</div>;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const readingTime = useMemo(() => {
    if (!post?.content) return 0;
    // Server-safe: strip HTML tags without using document
    const text = (post.content || '').replace(/<[^>]*>/g, ' ');
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / 200)); // ~200 wpm
  }, [post?.content]);

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>

      {/* Hero - enterprise style */}
      <section className="about-banner-sec">
        <div className="relative w-full">
          <div className="relative w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-black">
            <div className="max-w-6xl mx-auto px-4 py-14 md:py-20">
              <div className="text-slate-300 text-sm mb-4">
                <a href="/" className="hover:underline">Home</a> <span className="opacity-70">/</span> <a href="/blog" className="hover:underline">Blog</a>
              </div>
              <h1 className={`text-white text-3xl md:text-5xl font-extrabold tracking-tight leading-tight ${isClient ? css(styles.slideInUp) : ''}`}>{post.title}</h1>
              {post.excerpt && (
                <p className="mt-4 max-w-3xl text-slate-300 text-base md:text-lg">{post.excerpt}</p>
              )}
              <div className="mt-6 flex flex-wrap items-center gap-4 text-slate-200/90 text-sm">
                <span className="inline-flex items-center gap-2">
                  <svg className="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3M5 11h14M5 19h14M5 11a2 2 0 012-2h10a2 2 0 012 2M5 19a2 2 0 002 2h10a2 2 0 002-2"/></svg>
                  {formatDate(post.created_at)}
                </span>
                <span className="opacity-60">•</span>
                <span>{readingTime} min read</span>
                <a href="#blog-article" className="ml-auto inline-flex items-center gap-2 rounded-md bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-4 py-2 transition-colors">Read Article
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>
            <BackgroundBeams />
          </div>
          {/* Reading progress bar */}
          <div className="h-1 w-full bg-slate-800">
            <div style={{ width: `${readProgress}%` }} className="h-full bg-emerald-500 transition-[width] duration-150"></div>
          </div>
        </div>
      </section>

      {/* Main Layout */}
      <div className="max-w-8xl  grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 px-4 py-12">
        
        {/* Table of Contents (Left) */}
        <aside className="md:col-span-3 hidden md:block p-6 bg-gradient-to-br from-blue-800 via-blue-600 to-blue-400 border border-blue-300 rounded-xl sticky top-24 h-max shadow-xl">
          <div className=''>
            <h3 className="font-bold text-white mb-6 text-lg tracking-tight">Table of Contents</h3>
            <ul className="space-y-3 text-sm">
              {headings.length > 0 ? (
                headings.map((heading, index) => (
                  <li key={index}>
                    <a href={`#heading-${index}`} className="text-blue-100 hover:text-white transition-colors duration-200 block py-1 px-2 rounded hover:bg-white/10">{heading}</a>
                  </li>
                ))
              ) : (
                <li className="text-blue-100">No headings available</li>
              )}
            </ul>
            <div className="mt-6 p-4 bg-white/10 border border-white/20 rounded-lg post-share backdrop-blur-sm">
              <h4 className="font-semibold text-white mb-3">Share this post</h4>
              <div className="flex space-x-4 icon">
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-colors duration-200"><i className="fa-brands fa-facebook text-lg"></i></a>
                <a href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${post.title}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-colors duration-200"><i className="fa-brands fa-x-twitter text-lg"></i></a>
                <a href={`https://www.linkedin.com/shareArticle?url=${shareUrl}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-colors duration-200"><i className="fa-brands fa-linkedin text-lg"></i></a>
                <a href={`https://api.whatsapp.com/send?text=${post.title} - ${shareUrl}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-300 transition-colors duration-200"><i className="fa-brands fa-whatsapp text-lg"></i></a>
              </div>
            </div>
          </div>
        </aside>

        {/* Blog Content (Middle) */}
        <article id="blog-article" className="md:col-span-8 px-[20px] py-[20px] relative">
          {/* Floating share bar on desktop */}
          <div className="hidden lg:flex flex-col gap-3 absolute -left-16 top-0">
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm grid place-items-center text-blue-600"><i className="fa-brands fa-facebook"></i></a>
            <a href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${post.title}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm grid place-items-center text-blue-400"><i className="fa-brands fa-x-twitter"></i></a>
            <a href={`https://www.linkedin.com/shareArticle?url=${shareUrl}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm grid place-items-center text-blue-700"><i className="fa-brands fa-linkedin"></i></a>
          </div>

          <div className="text-gray-600 mb-6 flex items-center gap-3">
            <span className="inline-flex items-center gap-2">
              <svg className="w-4 h-4 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3M5 11h14M5 19h14M5 11a2 2 0 012-2h10a2 2 0 012 2M5 19a2 2 0 002 2h10a2 2 0 002-2"/></svg>
              {formatDate(post.created_at)}
            </span>
            <span className="text-slate-400">•</span>
            <span>{readingTime} min read</span>
          </div>
          <div className="prose prose-slate max-w-none prose-headings:scroll-mt-28" dangerouslySetInnerHTML={{ __html: processedContent }} />
          <div className="container mx-auto px-6 py-8 shadow-sm rounded-xl mt-8 border border-slate-200 bg-white">
            <h3 className="text-2xl font-bold mb-4">About the Author</h3>
            <p className="text-gray-700">Written by {post.author || 'Guest Author'}.</p>
            <p className='text-gray-700'>{post.author_bio}</p>
          </div>

          <div className="container mx-auto px-6 py-8 text-center shadow-sm rounded-xl mt-8 bg-slate-900 text-white">
            <h3 className="text-2xl font-bold">Stay updated</h3>
            <p className="opacity-90">Subscribe for new posts and insights.</p>
            <div className="mt-4 flex items-center justify-center">
              <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-l-md border border-slate-700 bg-slate-800 placeholder-slate-400 text-white" />
              <button className="px-6 py-2 rounded-r-md bg-emerald-500 text-black font-semibold">Subscribe</button>
            </div>
          </div>
        </article>

        {/* Related Articles (Right)
        <aside className="md:col-span-4 space-y-4 h-max sticky top-24">
          <div className='post-art-con p-6 bg-white border border-slate-200 rounded-xl shadow-sm'>
            <h3 className="text-xl font-semibold mb-4 text-slate-900">Related Articles</h3>
            {isLoading ? (
              <div className="text-slate-600">Loading related articles...</div>
            ) : relatedPosts.length > 0 ? (
              <ul className="space-y-4">
                {relatedPosts.map((related) => (
                  <li key={related.id}>
                    <Link href={`/blog/${related.slug}`} className="group block">
                      <div className="text-slate-900 font-semibold group-hover:text-emerald-600">{related.title}</div>
                      <div className="text-slate-500 text-sm">{formatDate(related.created_at)}</div>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-slate-600">No related articles</div>
            )}
          </div>
          <div className="p-6 bg-slate-900 text-white rounded-xl shadow-sm">
            <h4 className="font-semibold text-lg">Need help with email security?</h4>
            <p className="opacity-90 text-sm mt-1">Talk to us about protecting users and data.</p>
            <a href="/contact" className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-md bg-emerald-500 text-black font-semibold">Contact Us
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
            </a>
          </div>
        </aside> */}
      </div>

      {/* Bottom navigation */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="/blog" className="inline-flex items-center justify-center px-4 py-3 rounded-lg border border-slate-200 hover:border-slate-300 text-slate-700">← Back to Blog</a>
          <a href="#top" className="inline-flex items-center justify-center px-4 py-3 rounded-lg border border-slate-200 hover:border-slate-300 text-slate-700">Back to Top ↑</a>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const pool = mysql.createPool({
      host: process.env.DB_HOST,
      port: process.env.DATABASE_PORT,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      ssl: process.env.DATABASE_SSL === 'true',
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });

    const connection = await pool.getConnection();

    // Fetch current post
    const [posts] = await connection.execute('SELECT * FROM blog_posts WHERE slug = ? AND published = 1', [params.slug]);

    if (posts.length === 0) {
      return { notFound: true };
    }

    const post = posts[0];


    // Fetch related articles (same category, excluding the current post, sorted by latest)
    const [relatedPosts] = await connection.execute(
      'SELECT * FROM blog_posts WHERE category_id = ? AND slug != ? AND published = 1 ORDER BY created_at DESC LIMIT 5',
      [post.category_id, post.slug]
    );


    await connection.release();

    return {
      props: {
        post: JSON.parse(JSON.stringify(post)),
        relatedPosts: JSON.parse(JSON.stringify(relatedPosts)),
      },
    };
  } catch (error) {
    console.error('Database error:', error.message);
    return { notFound: true };
  }
}

export default BlogPost;