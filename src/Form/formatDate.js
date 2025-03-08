export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("pl-PL", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
};
