'use client';
import { Suspense } from 'react';
import PaymentRedirect from '@/components/Payment/PaymentRedirect';

export default function Page() {
  return (
    <Suspense>
      <PaymentRedirect />
    </Suspense>
  );
}

