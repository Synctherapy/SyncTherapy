import Header from '@/components/Header';
import Footer from '@/components/Footer';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

async function getHomeContent() {
  const contentDir = path.join(process.cwd(), 'content/pages');
  const filePath = path.join(contentDir, 'home.md');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(fileContent);
  return { content, data };
}

export default async function Home() {
  const { content } = await getHomeContent();

  return (
    <div className="min-h-screen flex flex-col pt-[72px]">
      <Header />
      <main className="flex-grow">
        {/* Render raw HTML from MD content */}
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </main>
      <Footer />
    </div>
  );
}
