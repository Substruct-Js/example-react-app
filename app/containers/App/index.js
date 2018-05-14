import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from 'components/Header';
import HomePage from 'containers/HomePage/Loadable';
import AboutPage from 'containers/AboutPage/Loadable';
import BlogPage from 'containers/BlogPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import BlogItem from 'containers/BlogItem/Loadable';
import GalleryPage from 'containers/GalleryPage/Loadable';
import GalleryItem from 'containers/GalleryItem/Loadable';

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/blog" component={BlogPage} />
        <Route exact path="/gallery" component={GalleryPage} />
        <Route exact path="/gallery/:tag" component={GalleryItem} />
        <Route exact path="/blog/:id" component={BlogItem} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
