document.addEventListener('DOMContentLoaded', () => {
    // Function to update the total price
    const updateTotalPrice = () => {
      let total = 0;
      document.querySelectorAll('.card').forEach(card => {
        const unitPrice = parseFloat(card.querySelector('.unit-price').textContent.replace('$', '').trim());
        const quantity = parseInt(card.querySelector('.quantity').textContent.trim());
        total += unitPrice * quantity;
      });
      document.querySelector('.total').textContent = `${total.toFixed(2)} $`;
    };
  
    // Function to handle quantity increment
    const handleIncrement = (e) => {
      const quantityElement = e.target.nextElementSibling;
      quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
      updateTotalPrice();
    };
  
    // Function to handle quantity decrement
    const handleDecrement = (e) => {
      const quantityElement = e.target.previousElementSibling;
      if (parseInt(quantityElement.textContent) > 0) {
        quantityElement.textContent = parseInt(quantityElement.textContent) - 1;
        updateTotalPrice();
      }
    };
  
    // Function to handle item deletion
    const handleDelete = (e) => {
      const card = e.target.closest('.card-body');
      card.parentElement.remove();
      updateTotalPrice();
    };
  
    // Function to handle like button toggle
    const handleLikeToggle = (e) => {
      e.target.classList.toggle('liked');
    };
  
    // Adding event listeners to all relevant elements
    document.querySelectorAll('.fa-plus-circle').forEach(button => {
      button.addEventListener('click', handleIncrement);
    });
  
    document.querySelectorAll('.fa-minus-circle').forEach(button => {
      button.addEventListener('click', handleDecrement);
    });
  
    document.querySelectorAll('.fa-trash-alt').forEach(button => {
      button.addEventListener('click', handleDelete);
    });
  
    document.querySelectorAll('.fa-heart').forEach(button => {
      button.addEventListener('click', handleLikeToggle);
    });
  });
  
  // Add some styles for the liked state in the CSS
  const style = document.createElement('style');
  style.innerHTML = `
    .fa-heart.liked {
      color: red;
    }
  `;
  document.head.appendChild(style);
  