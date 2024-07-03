
"use client"
import Teste from '@/app/components/Teste';
import { Suspense } from 'react';
import { InfoContext } from '../context/InfoContext';


const Main = () => {
    return <Suspense fallback="loading...">
        <InfoContext>

            <Teste />
        </InfoContext>
    </Suspense>;
}
export default Main