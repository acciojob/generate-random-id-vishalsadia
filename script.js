function makeid(l) {
  if (typeof l !== 'number' || l <= 0 || l > 1000 || !Number.isInteger(l)) {
    throw new Error('Invalid input: Please provide a positive integer less than or equal to 1000.');
  }

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < l; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}
// // Do not change the code below.
// const l = prompt("Enter a number.");
// alert(makeid(l)); 
