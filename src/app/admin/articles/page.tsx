import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ArticleListPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const { data } = await axios.get('/api/articles');
      setArticles(data);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  const deleteArticle = async (id: string) => {
    try {
      await axios.delete(`/api/articles/${id}`);
      fetchArticles();
    } catch (error) {
      console.error('Error deleting article:', error);
    }
  };

  return (
    <div>
      <h1>لیست مقالات</h1>
      <table>
        <thead>
          <tr>
            <th>تصویر</th>
            <th>عنوان</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {articles.length === 0 ? (
            <tr>
              <td colSpan={3}>هنوز مقاله‌ای وارد نشده است</td>
            </tr>
          ) : (
            articles.map((article) => (
              <tr key={article._id}>
                <td>
                  <img src={article.thumbnail} alt={article.title.fa} width="50" />
                </td>
                <td>{article.title.fa}</td>
                <td>
                  <a href={`/admin/articles/edit/${article._id}`}>ویرایش</a>
                  <button onClick={() => deleteArticle(article._id)}>حذف</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ArticleListPage;
