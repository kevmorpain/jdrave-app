interface IUploadResponse {
  url: string;
}

export const uploadImage = async (image: File): Promise<IUploadResponse> => {
  const formData = new FormData();
  formData.append('file', image);
  formData.append('upload_preset', 'oadh3tc2');
  formData.append('folder', 'characters');

  const response = await fetch(
    'https://api.cloudinary.com/v1_1/jdrave/image/upload',
    {
      method: 'POST',
      body: formData,
    }
  );

  const res = await response?.json();

  return {
    url: res.url,
  };
};
