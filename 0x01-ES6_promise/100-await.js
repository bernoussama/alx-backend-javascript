import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let value = {};
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    value = {
      photo,
      user,
    };
  } catch (e) {
    value = {
      photo: null,
      user: null,
    };
  }

  return value;
}
