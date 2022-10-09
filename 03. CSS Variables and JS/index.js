const inputs = document.querySelectorAll('.controls input')

// inputs.forEach(input => input.addEventListener('change',(e)=>{
//     const suffix = e.target.dataset.sizing || '';
//     document.documentElement.style.setProperty(`--${e.target.name}`,e.target.value+suffix)

// }))

// inputs.forEach(input => input.addEventListener('mousemove',(e)=>{
//     const suffix = e.target.dataset.sizing || '';
//     document.documentElement.style.setProperty(`--${e.target.name}`,e.target.value+suffix)
// }))

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  }

  inputs.forEach(input => input.addEventListener('change', handleUpdate));
  inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));