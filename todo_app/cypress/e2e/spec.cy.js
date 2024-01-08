describe('ToDoApp', () => {
    it('Displays Tasks', () => {
      cy.visit('http://localhost:3000');
  
      cy.get('[data-testid="ToDoList"]')
        
        cy.contains('Read SpringBoot');
  
      cy.get('[data-testid="RemoveCompleted"]')
        .click();
  
      cy.get('[data-testid="ToDoList"]')
        .should('have.value', 'Nothing to do buddy. Sleep!!');
  
      
    });
  });