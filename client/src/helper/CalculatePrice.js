export const calculateTotalPrice = () => {
    const { prices, userData } = flightData;
    let totalPrice = 0;

    userData.passengers.forEach((passenger) => {
      totalPrice += prices[passenger.category] * passenger.count;
    });

    return totalPrice;
  };