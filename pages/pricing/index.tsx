import React from 'react';
import Link from 'next/link';
import { MainLayout } from '../../components/layouts/MainLayout'

export default function index(){
  return (
    <MainLayout>
      <h1>Pricing - Page</h1>
      <Link href="/" className="card">
      <h2>ir al Home Page</h2>
      </Link>
    </MainLayout>
  )
}
