"use client";

import React, { useState } from 'react'
import Loading from '../../loading';

export default function page() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div>
    {isLoading ? <Loading /> : <p>Dashboard Analytics</p>}
  </div>
  )
}
