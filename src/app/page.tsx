import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Welcome home!</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
      <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
      <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>
    </>
  );
}

// page.tsx file inside the app folder automatically maps your site's root URL
