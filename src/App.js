import React from 'react';
import Header from "./features/header/Header";
import Posts from "./features/posts/Posts";
import Subreddits from "./features/subreddits/Subreddits";
import './App.scss';

function App() {
    return (
        <>
            <header className="g-col-12">
                <Header />
            </header>
            <div className="mt-4 container grid">
                <main className="g-col-8">
                    <Posts />
                </main>
                <aside className="g-col-4">
                    <Subreddits />
                </aside>
            </div>
        </>
    );
}

export default App;
