import { MainLayout } from '../components/layouts/MainLayout';
import Link from 'next/link';
import { DarkLayout } from '../components/layouts/DarkLayout';

export default function About() {
  return (
    <>
        <h1 >About Page</h1>
        <h1 className="title">
          ir a <Link href="/">HOME</Link>
        </h1>
    </>
  )
}

About.getLayout = function getLayout(page: JSX.Element) {
  return (
  <MainLayout>
    <DarkLayout>
      {page}
    </DarkLayout>
  </MainLayout>
  )
}
