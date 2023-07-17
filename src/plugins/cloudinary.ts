interface IUploadResponse {
  url: string;
}

export enum ECloudinaryFolder {
  Characters = 'characters',
  Objects = 'objects',
  Games = 'games',
}

export const uploadImage = async (
  image: File,
  folder: ECloudinaryFolder
): Promise<IUploadResponse> => {
  const formData = new FormData();
  formData.append('file', image);
  formData.append('upload_preset', 'oadh3tc2');
  formData.append('folder', folder);

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

export const useCloudinary = () => ({
  uploadImage,
});
