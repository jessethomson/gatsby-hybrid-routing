import React from 'react'
import { Link, Router } from '@reach/router'

import Layout from '../components/layout'
import uuid from 'uuid'

const articles = []
for (let i = 0; i < 8; i++) {
  articles.push(uuid())
}

const ArticlesPage = () => (
  <Layout>
    <Router>
      <ArticleList path="/articles" articles={articles} />
      <Article path="/articles/:articleId" />
    </Router>
  </Layout>
)

const ArticleList = ({ articles }) => (
  <ul>
    {articles.map((id, index) => (
      <li key={id}>
        <Link to={`/articles/${id}`}>Article {index + 1}</Link>
      </li>
    ))}
  </ul>
)

const Article = ({ articleId }) => <div>This is an article: {articleId}</div>

export default ArticlesPage
