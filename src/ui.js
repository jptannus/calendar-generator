module.exports = {
  setupCopyButtons: () => {
    const copyTextareaBtn = document.querySelector('.js-textareacopybtn');
    
    copyTextareaBtn.addEventListener('click', function(event) {
      const copyTextarea = document.querySelector('.js-copytextarea');
      const svg = document.querySelector('.svg-calendar');
      copyTextarea.textContent = svg.outerHTML;
      copyTextarea.focus();
      copyTextarea.select();
    
      try {
        const msg = document.execCommand('copy') ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
      } catch (err) {
        console.log('Oops, unable to copy');
      }
    });
  },
};