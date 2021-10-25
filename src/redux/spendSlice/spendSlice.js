import { createSlice } from "@reduxjs/toolkit";

export const spendSlice = createSlice({
  name: "spends",
  initialState: {
    items: [
      {
        id: 1,
        name: "Yacht",
        price: 7500000,
        img: "https://neal.fun/spend/images/yacht.jpg",
      },
      {
        id: 2,
        name: "Formula 1 Car",
        price: 15000000,
        img: "https://neal.fun/spend/images/formula-1-car.jpg",
      },
      {
        id: 3,
        name: "M1 Abrams",
        price: 8000000,
        img: "https://neal.fun/spend/images/m1-abrams.jpg",
      },
      {
        id: 4,
        name: "Mansion",
        price: 45000000,
        img: "https://neal.fun/spend/images/mansion.jpg",
      },
      {
        id: 5,
        name: "Gaming Console",
        price: 299,
        img: "https://neal.fun/spend/images/gaming-console.jpg",
      },
      {
        id: 6,
        name: "Airpods",
        price: 199,
        img: "https://neal.fun/spend/images/airpods.jpg",
      },
      {
        id: 7,
        name: "Boeing 747",
        price: 148000000,
        img: "https://neal.fun/spend/images/boeing-747.jpg",
      },
      {
        id: 8,
        name: "Rolex",
        price: 15000,
        img: "https://neal.fun/spend/images/rolex.jpg",
      },
      {
        id: 9,
        name: "Drone",
        price: 350,
        img: "https://neal.fun/spend/images/drone.jpg",
      },
      {
        id: 10,
        name: "Bike",
        price: 800,
        img: "https://neal.fun/spend/images/bike.jpg",
      },
    ],
    basket: [],
    totalPrice: 1000000000,
    spentPrice: 0,
  },
  reducers: {
    addToBasket: (state, action) => {
      const { id, name, price , count } = action.payload;
      const addItem = state.basket.find((i) => i.id === id);
      if (addItem) {
        const items = state.basket.map((i) =>
          i.id === id
            ? { ...i, count: i.count + count, price: i.price + price * count }
            : i
        );
        state.basket = items;
      } else {
        state.basket.push({ id, name, price: price * count, count });
      }
      state.totalPrice -= count * price;
      state.spentPrice += count * price;
    },
    removeBasket: (state, action) => {
      const { id,price } = action.payload;

      const item = state.basket.find((i) => i.id === id)
      const filteredItems = state.basket.filter((i) => i.id !== id);

      if (item) {
        const basketItems = state.basket.map((i) => 
          i.id === id  ? { ...i, count: i.count - 1 } : i );
         state.basket=basketItems; 

      } 
        state.basket.map((i) => i.count === 0 && (state.basket = filteredItems));
        state.totalPrice+=price;
        state.spentPrice-=price;
      }
    },
  },
)
export const { addToBasket, removeBasket } = spendSlice.actions;
export default spendSlice.reducer;
