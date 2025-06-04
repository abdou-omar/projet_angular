import dotenv from 'dotenv';
dotenv.config(); 
import { dbConnect } from '../configs/database.config';
import { OrderModel } from '../models/order.model';
import { Types } from 'mongoose';
import { OrderStatus } from '../constants/order_status';

// Exemple de données de test — à adapter selon ta base
const sample_orders = [
  {
    name: 'John Doe',
    address: '123 Main St, Cityville',
    addressLatLng: { lat: '45.4215', lng: '-75.6972' },
    paymentId: 'PAY12345',
    totalPrice: 59.99,
    items: [
      {
        food: {
          name: 'Pizza',
          price: 19.99,
          tags: ['FastFood', 'Lunch'],
          favorite: false,
          stars: 4.5,
          imageUrl: 'assets/images/food-1.jpg',
          origins: ['Italy'],
          cookTime: '30-40'
        },
        price: 19.99,
        quantity: 1
      },
      {
        food: {
          name: 'Burger',
          price: 10,
          tags: ['FastFood'],
          favorite: true,
          stars: 4.0,
          imageUrl: 'assets/images/food-2.jpg',
          origins: ['USA'],
          cookTime: '10-15'
        },
        price: 10,
        quantity: 2
      }
    ],
    status: OrderStatus.NEW,
    user: new Types.ObjectId() // ⚠️ À remplacer par un vrai utilisateur si possible
  }
];

async function seedOrders() {
  try {
    await dbConnect();

    await OrderModel.deleteMany({});
    await OrderModel.insertMany(sample_orders);

    console.log('Orders seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding orders:', error);
    process.exit(1);
  }
}

seedOrders();
