import React from 'react';
import { createRoot } from 'react-dom/client';
import LicUsage from './components/LicUsage';

const container = document.getElementById('app-root')!
const root = createRoot(container)
root.render(<LicUsage />)