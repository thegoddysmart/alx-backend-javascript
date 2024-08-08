import uploadPhoto from './utils';
import createUser from './utils';

export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto('some_photo.jpg');
    const user = await createUser();
    return { photo, user };
  } catch {
    return { photo: null, user: null };
  }
}
