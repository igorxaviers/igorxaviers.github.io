import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ProfilePicture() {
  const [profileImage, setProfileImage] = useState('');

  useEffect(() => {
    const fetchProfileImage = async () => {
      try {
        const response = await fetch('https://api.github.com/users/igorxaviers');
        const data = await response.json();
        setProfileImage(data.avatar_url);
      } catch (error) {
        console.error('Erro ao buscar imagem do perfil:', error);
      }
    };

    fetchProfileImage();
  }, []);

  return (
    <div className="flex justify-center items-center">
      {profileImage && (
        <div className="rounded-lg border-4 border-primary">
          <Image
           
            src={profileImage}
            alt="Foto de perfil do GitHub"
            fill
            className={`rounded-2xl object-cover`}
            priority
          />
        </div>
      )}
    </div>
  );
} 