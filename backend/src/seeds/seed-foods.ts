import dotenv from 'dotenv';
dotenv.config(); 

import { dbConnect } from '../configs/database.config';
import { FoodModel } from '../models/food.model';
import { sample_foods } from '../data';

// Fonction principale
async function seedFoods() {
  try {
    await dbConnect();

    // Supprime les anciens enregistrements pour éviter doublons
    await FoodModel.deleteMany({});

    // Insère les nouveaux
    await FoodModel.insertMany(sample_foods);

    console.log('Foods seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding foods:', error);
    process.exit(1);
  }
}

seedFoods();
