describe('Command Line - cypress run options', () => {

    it('should utilize different env variables and fail to show the screenshot', () => {

        cy.visit(Cypress.env('url'));

        cy.get('.DocSearch').click();

        cy.contains('blah').should('exist');

    });

});

// options (abbreviated vs. full name)*
// -b --browser*
// -c --config*
// -C --config-file*
// -e --env (environment variables)*
// -q --quiet*
// -s --spec*
// -r --reporter*
// --record*
// --headed / --headless*