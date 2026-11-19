export const formatPrice = (price) =>
  `R ${Number(price).toLocaleString("en-ZA")}`;

export const formatMileage = (km) => `${Number(km).toLocaleString("en-ZA")} km`;
