import React, {Suspense, lazy} from 'react'
import Loading from './ui/Loading';

const Main = lazy(() => import('./Main'));

const Intro = () => {
    return (
        <div>
    <Suspense fallback={<Loading/>}>
               <Main />
    </Suspense>
        </div>
    )
}

export default Intro
