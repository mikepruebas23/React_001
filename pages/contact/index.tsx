import Link from 'next/link';
import { MainLayout } from '../../components/layouts/MainLayout';

export default function Contact() {
  return (
    <MainLayout>
      <h1 >Contact Page</h1>
      <h1 className="title">ir a <Link href="/">HOME</Link></h1>
    </MainLayout>
  )
}
