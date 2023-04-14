async function getMyName() {
    return Promise.resolve('강승현');
  }
  
  const result = getMyName();
  
  result.then((myName) => {
    console.log(myName);
  });