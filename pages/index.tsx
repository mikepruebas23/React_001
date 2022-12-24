import { MainLayout } from '../components/layouts/MainLayout';
import Link from 'next/link';

export default function Home() {
  return (
    <MainLayout>
      <h1>Index Page</h1>
      <Link href="/about" className="card">
        <h2>ir a About Page</h2>
      </Link>
    </MainLayout>
  )
}
