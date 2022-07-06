export const formatPrice = (price) => {
  let newNumber = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price / 100);
  return newNumber;
};

export const time = (duration) => {
  let hours = duration / 60;
  let minutes = duration % 60;

  if (hours < 1) {
    return `${minutes}mins`;
  }
  if (hours === 1) {
    return `${hours}hr : ${minutes}mins`;
  }
  if (minutes === 0) {
    return `${hours}hrs`;
  }
  return `${hours}hrs : ${minutes}mins`;
};
