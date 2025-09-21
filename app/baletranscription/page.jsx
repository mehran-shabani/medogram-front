'use client';
import { Suspense } from 'react';
import BalePaymentRedirect from '@/components/Payment/baletranscription';

export default function Page() {
  return (
    <Suspense>
      <BalePaymentRedirect />
    </Suspense>
  );
}

