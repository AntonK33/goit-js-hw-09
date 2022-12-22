import Notiflix from 'notiflix';

const refs = {
  submitRef: document.querySelector('[class="form"]'),
  delayRef: document.querySelector('[name="delay"]'),
  stepRef: document.querySelector('[name="step"]'),
  amountRef: document.querySelector('[name="amount"]'),
}

refs.submitRef.addEventListener('submit', (e) => {
  e.preventDefault();
  let delay = Number(refs.delayRef.value);
  let step = Number(refs.stepRef.value);
  let amount = Number(refs.amountRef.value);
 
  for (let i = 1; i <= amount; i++) {
    createPromise({ position: i, delay: delay })
    .then(resalt => Notiflix.Notify.success(resalt))
      .catch(error => Notiflix.Notify.failure(error))
    delay += step;
  }

})


function createPromise({position, delay}) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      
  if (shouldResolve) {
    // Fulfill
   resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    // Reject
    reject(`❌ Rejected promise ${position} in ${delay}ms`);
  }
    }, delay);
  })
  
}

