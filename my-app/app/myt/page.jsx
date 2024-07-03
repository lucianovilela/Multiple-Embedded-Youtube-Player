
"use client"
import Teste from '@/app/components/Teste';
import { Suspense } from 'react';
import { InfoContext } from '../context/InfoContext';
import NavBar from '../components/NavBar';


const Main = () => {
    return <Suspense fallback="loading...">
        <InfoContext>
            <NavBar />

            <Teste />

        </InfoContext>
    </Suspense>;
}
export default Main