import React, { useState } from 'react';
import axios from 'axios';

const CreateProductPage: React.FC = () => {
  const [title, setTitle] = useState({ en: '', fa: '' });
  const [description, setDescription] = useState({ en: '', fa: '' });
  const [price, setPrice] = useState<number>(0);
  const [images, setImages] = useState<File[]>([]);
  const [thumbnail, setThumbnail] = useState<number>(0); // Index of the thumbnail image
  const [visibility, setVisibility] = useState<boolean>(true);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages([...e.target.files]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      images.forEach((image, index) => formData.append(`images[${index}]`, image));
      formData.append('thumbnail', images[thumbnail].name);
      formData.append('title[en]', title.en);
      formData.append('title[fa]', title.fa);
      formData.append('description[en]', description.en);
      formData.append('description[fa]', description.fa);
      formData.append('price', price.toString());
      formData.append('visibility', visibility.toString());

      await axios.post('/api/products/create', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      // Handle success (e.g., show a success message or redirect)
    } catch (error) {
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>عنوان محصول (فارسی)</label>
        <input
          type="text"
          value={title.fa}
          onChange={(e) => setTitle({ ...title, fa: e.target.value })}
          required
        />
      </div>
      <div>
        <label>Title (English)</label>
        <input
          type="text"
          value={title.en}
          onChange={(e) => setTitle({ ...title, en: e.target.value })}
          required
        />
      </div>
      <div>
        <label>قیمت</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
          required
        />
      </div>
      <div>
        <label>توضیحات محصول (فارسی)</label>
        <textarea
          value={description.fa}
          onChange={(e) => setDescription({ ...description, fa: e.target.value })}
          required
        />
      </div>
      <div>
        <label>Description (English)</label>
        <textarea
          value={description.en}
          onChange={(e) => setDescription({ ...description, en: e.target.value })}
          required
        />
      </div>
      <div>
        <label>تصاویر محصول (حداکثر ۴ تصویر)</label>
        <input type="file" multiple accept="image/*" onChange={handleImageUpload} />
      </div>
      <div>
        <label>انتخاب تصویر نمایه (Thumbnail)</label>
        <select
          value={thumbnail}
          onChange={(e) => setThumbnail(parseInt(e.target.value))}
        >
          {images.map((_, index) => (
            <option key={index} value={index}>
              Image {index + 1}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>وضعیت نمایش</label>
        <select value={visibility ? '1' : '0'} onChange={(e) => setVisibility(e.target.value === '1')}>
          <option value="1">نمایش</option>
          <option value="0">عدم نمایش</option>
        </select>
      </div>
      <button type="submit">ثبت محصول</button>
    </form>
  );
};

export default CreateProductPage;

