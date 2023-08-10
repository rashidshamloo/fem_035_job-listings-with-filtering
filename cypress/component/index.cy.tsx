// components
import JobListing from '@/app/components/JobListing';
import Filters from '@/app/components/Filters';

// providers
import Providers from '@/lib/Providers';

// test data
import { testJob1 } from '../testData/testData';

it('Testing if the "Filters" component renders correctly', () => {
  cy.mount(
    <Providers>
      <Filters filters={['filter1', 'filter2']} />
    </Providers>
  );
  cy.get('button').contains('Clear').should('exist');
  cy.contains('filter1').should('exist');
  cy.contains('filter2').should('exist');
  cy.get('button').then((buttons) => expect(buttons.length).to.eq(3));
});

it('Testing if the "JobListing" component renders correctly', () => {
  cy.mount(
    <Providers>
      <JobListing job={testJob1} />
    </Providers>
  );
  cy.get('a').contains('testPosition1').should('exist');
  cy.get('button').contains('testRole1').should('exist');
  cy.get('button').contains('testLevel1').should('exist');
  cy.get('button').contains('testLang1_1').should('exist');
  cy.get('button').contains('testLang1_2').should('exist');
  cy.get('button').contains('testTool1_1').should('exist');
  cy.get('button').contains('testTool1_2').should('exist');
  cy.contains('testCompany1').should('exist');
  cy.contains('testTime1').should('exist');
  cy.contains('testContract1').should('exist');
  cy.contains('testLocation1').should('exist');
  cy.contains('NEW!').should('exist');
  cy.contains('FEATURED').should('exist');
  cy.get('img').should('exist');
});
