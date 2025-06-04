import { dbConnect } from '../configs/database.config';
import { UserModel } from '../models/user.model';  // adapte le chemin selon ton projet

const sample_users = [
  {
    name: 'John Doe',
    email: 'john@gmail.com',
    password: '12345',
    address: 'Toronto On',
    isAdmin: true,
  },
  {
    name: 'Jane Doe',
    email: 'Jane@gmail.com',
    password: '12345',
    address: 'Shanghai',
    isAdmin: false,
  },
];

async function seedUsers() {
  try {
    await dbConnect();

    // Optionnel: vide la collection users avant d'insérer pour éviter doublons
    await UserModel.deleteMany({});

    // Insère les utilisateurs
    await UserModel.insertMany(sample_users);

    console.log('Users seeded successfully');
    process.exit(0); // quitte le script
  } catch (error) {
    console.error('Error seeding users:', error);
    process.exit(1);
  }
}

seedUsers();
