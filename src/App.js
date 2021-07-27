import { Router } from "@reach/router";

import Posts from './components/posts.js'
import Post from './components/post.js'

function App() {
  return (
    <Router>
      <Posts path="/" />
      <Post path="/posts/:id" />
    </Router>
  );
}

export default App;