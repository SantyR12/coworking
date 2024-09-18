import React from 'react';
import AdminPanel from '../components/AdminPanel';

const HomePage: React.FC = () => {
  return (
    <main
      style={{
        backgroundImage: "url('https://www.infobae.com/new-resizer/2fZPZh_KVVGzKXN9Wl3e-RbwjNU=/1200x675/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/UB3QXUUFHJCEFGS3RVPWBV6WBE.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        width: '100vw'               
      }}
    >
      <header className="py-4 text-center bg-gray-100 shadow">
        <h1 className="text-2xl font-bold">Bienvenido a la Plataforma para citas en Psiquiatria</h1>
      </header>
      
      <section className="p-4">
        <AdminPanel /> 
      </section>
    </main>
  );
};

export default HomePage;
