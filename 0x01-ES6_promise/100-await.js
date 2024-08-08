import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const [photo, user] = await Promise.all([
      uploadPhoto().catch(() => null),
      createUser().catch(() => null),
    ]);

    return {
      photo: photo || null,
      user: user || null,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
