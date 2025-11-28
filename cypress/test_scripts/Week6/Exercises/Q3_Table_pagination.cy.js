
// describe('Table Pagination Test Suite', () => {
//     beforeEach(() => {
//         cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers');
//     });

//     it('Table Pagination Test Case', () => {
//         cy.get('table tbody tr td:nth-child(1)').each(($el, index, $list) => {
//             var fruitName = $el.text();
//             if(fruitName.includes('Potato')){
//                 cy.get('table tbody tr td:nth-child(1)').eq(index).next().then((price)=>{
//                     const fruitPrice = price.text();
//                     const fruitDiscountedPrice = price.next().text();
//                     expect(fruitPrice).equal('34')
//                     expect(fruitDiscountedPrice).equal('22')
//                 });
//             }
            
//     });
//     cy.log('Table Pagination Test Case Executed Successfully');
// })
// });


describe('Table Pagination Test Suite', () => {
    beforeEach(() => {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers');
    });
  
    it('Finds Rice across pages and validates row data', () => {
      const item = 'Carrot';
      const expectedPrice = '34';
      const expectedDiscount = '12';
  
      function checkCurrentPage() {
        let found = false;
  
        cy.get('table tbody tr td:nth-child(1)').each(($el, index) => {
          if ($el.text().includes(item)) {
            found = true;
            cy.get('table tbody tr td:nth-child(1)')
              .eq(index)
              .next()
              .then($priceCell => {
                const price = $priceCell.text();
                const discount = $priceCell.next().text();
                expect(price).to.equal(expectedPrice);
                expect(discount).to.equal(expectedDiscount);
              });
            return false; // stop iterating
          }
        }).then(() => {
          if (!found) {
            // try next numeric page after active
            cy.get('ul.pagination li.active')
              .next('li')
              .then($nextLi => {
                if ($nextLi.length) {
                  cy.wrap($nextLi).find('a[role="button"]').click();
                  cy.get('table tbody tr').should('exist'); // wait for refresh
                  checkCurrentPage(); // repeat on next page
                } else {
                  // optionally fallback to Next arrow
                  cy.get('ul.pagination a[aria-label="Next"]').parent('li').then($nextArrowLi => {
                    if (!$nextArrowLi.hasClass('disabled')) {
                      cy.wrap($nextArrowLi).find('a[aria-label="Next"]').click();
                      cy.get('table tbody tr').should('exist');
                      checkCurrentPage();
                    } else {
                      throw new Error(`${item} not found on any page`);
                    }
                  });
                }
              });
          }
        });
      }
  
      checkCurrentPage();
    });
  });
  
  