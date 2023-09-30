'use client';

import { useState } from 'react';

export default function Home() {
  const [file, setFile] = useState('');

  const onSubmitForm = async (e) => {
    e.preventDefault();
    console.log(file);
    const data = new FormData();
    data.set('file', file);
    let result = await fetch('/api/upload', {
      method: 'POST',
      body: data,
    });

    result = await result.json();

    console.log(result);

    if (result.success) {
      alert('File Uploaded');
    }
  };
  return (
    <main style={{ textAlign: 'center' }}>
      <h1>Image Upload</h1>
      <form onSubmit={onSubmitForm}>
        <input
          type="file"
          name="file"
          onChange={(e) => setFile(e.target.files?.[0])}
        />
        <button type="submit">Upload Image</button>
      </form>
    </main>
  );
}
