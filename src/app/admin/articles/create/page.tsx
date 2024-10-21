import React, { useState } from 'react';
import axios from 'axios';

const CreateArticlePage = () => {
  const [formData, setFormData] = useState({
    titleFa: '',
    titleEn: '',
    contentFa: '',
    contentEn: '',
    image: null,
    thumbnail: '',
    visibility: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData({ ...formData, image: e.target.files[0] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const articleData = new FormData();
    articleData.append('titleFa', formData.titleFa);
    articleData.append('titleEn', formData.titleEn);
    articleData.append('contentFa', formData.contentFa);
    articleData.append('contentEn', formData.contentEn);
    if (formData.image) articleData.append('image', formData.image);

    try {
      await axios.post('/api/articles', articleData);
      // handle success (e.g., redirect to articles list)
    } catch (error) {
      console.error('Error creating article:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>ایجاد مقاله جدید</h1>
      <label>عنوان فارسی</label>
      <input type="text" name="titleFa" value={formData.titleFa} onChange={handleChange} required />
      
      <label>عنوان انگلیسی</label>
      <input type="text" name="titleEn" value={formData.titleEn} onChange={handleChange} required />
      
      <label>محتوای فارسی</label>
      <textarea name="contentFa" value={formData.contentFa} onChange={handleChange} required />
      
      <label>محتوای انگلیسی</label>
      <textarea name="contentEn" value={formData.contentEn} onChange={handleChange} required />
      
      <label>عکس مقاله</label>
      <input type="file" name="image" onChange={handleFileChange} required />
      
      <label>نمایش</label>
      <input
        type="checkbox"
        name="visibility"
        checked={formData.visibility}
        onChange={(e) => setFormData({ ...formData, visibility: e.target.checked })}
      />
      
      <button type="submit">ایجاد</button>
    </form>
  );
};

export default CreateArticlePage;
