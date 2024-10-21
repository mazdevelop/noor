import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const EditProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [formData, setFormData] = useState({
    titleFa: '',
    titleEn: '',
    descriptionFa: '',
    descriptionEn: '',
    images: [],
    thumbnail: '',
    visibility: true,
  });

  useEffect(() => {
    if (id) {
      fetchProduct(id as string);
    }
  }, [id]);

  const fetchProduct = async (id: string) => {
    try {
      const { data } = await axios.get(`/api/products/${id}`);
      setFormData({
        titleFa: data.title.fa,
        titleEn: data.title.en,
        descriptionFa: data.description.fa,
        descriptionEn: data.description.en,
        images: data.images,
        thumbnail: data.thumbnail,
        visibility: data.visibility,
      });
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newImages = Array.from(e.target.files).map(file => URL.createObjectURL(file));
      setFormData({ ...formData, images: newImages });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const productData = new FormData();
    productData.append('titleFa', formData.titleFa);
    productData.append('titleEn', formData.titleEn);
    productData.append('descriptionFa', formData.descriptionFa);
    productData.append('descriptionEn', formData.descriptionEn);
    formData.images.forEach((image) => productData.append('images', image));
    productData.append('thumbnail', formData.thumbnail);
    productData.append('visibility', String(formData.visibility));

    try {
      await axios.put(`/api/products/${id}`, productData);
      // handle success (e.g., redirect to products list)
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>ویرایش محصول</h1>
      <label>عنوان فارسی</label>
      <input type="text" name="titleFa" value={formData.titleFa} onChange={handleChange} required />
      
      <label>عنوان انگلیسی</label>
      <input type="text" name="titleEn" value={formData.titleEn} onChange={handleChange} required />
      
      <label>توضیحات فارسی</label>
      <textarea name="descriptionFa" value={formData.descriptionFa} onChange={handleChange} required />
      
      <label>توضیحات انگلیسی</label>
      <textarea name="descriptionEn" value={formData.descriptionEn} onChange={handleChange} required />
      
      <label>عکس‌ها</label>
      <input type="file" name="images" onChange={handleFileChange} multiple />
      
      <label>نمایش</label>
      <input
        type="checkbox"
        name="visibility"
        checked={formData.visibility}
        onChange={(e) => setFormData({ ...formData, visibility: e.target.checked })}
      />
      
      <button type="submit">ویرایش</button>
    </form>
  );
};

export default EditProductPage;
