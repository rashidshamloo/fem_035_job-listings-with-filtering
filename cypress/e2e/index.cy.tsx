// redux toolkit - filters
import { filtersSlice } from '@/lib/redux/slices/filtersSlice/filtersSlice';
const addFilter = filtersSlice.actions.add;
const removeFilter = filtersSlice.actions.remove;
const clearFilters = filtersSlice.actions.clear;

// redux toolkit - jobs
import { fetchJobs } from '@/lib/redux/slices/jobsSlice/thunks';

// test data
import { testJob1, testJob2 } from '../testData/testData';

describe('Testing Redux store and actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  describe('Testing "filters"', () => {
    it('Testing the "add" action ', () => {
      cy.window()
        .its('Cypress')
        .its('store')
        .invoke('dispatch', addFilter('testFilter'));
      cy.window()
        .its('Cypress')
        .its('store')
        .invoke('getState')
        .its('filters')
        .its('filters')
        .should('contain', 'testFilter');
    });
    it('Testing the "remove" action ', () => {
      cy.window()
        .its('Cypress')
        .its('store')
        .invoke('dispatch', addFilter('testFilter'));
      cy.window()
        .its('Cypress')
        .its('store')
        .invoke('dispatch', removeFilter('testFilter'));
      cy.window()
        .its('Cypress')
        .its('store')
        .invoke('getState')
        .its('filters')
        .its('filters')
        .should('not.contain', 'testFilter');
    });
    it('Testing the "clear" action ', () => {
      cy.window()
        .its('Cypress')
        .its('store')
        .then((store) => {
          cy.wrap(store).invoke('dispatch', addFilter('testFilter1'));
          cy.wrap(store).invoke('dispatch', addFilter('testFilter2'));
        });
      cy.window()
        .its('Cypress')
        .its('store')
        .invoke('dispatch', clearFilters());
      cy.window()
        .its('Cypress')
        .its('store')
        .invoke('getState')
        .its('filters')
        .its('filters')
        .should('not.contain', 'testFilter');
    });
  });

  describe('Testing "jobs"', () => {
    it('Testing the "fetchJobs" thunk/action ', () => {
      cy.intercept(
        {
          method: 'GET',
          url: '/api',
        },
        [testJob1]
      ).as('fetchJobs');
      cy.window()
        .its('Cypress')
        .its('store')
        .invoke('dispatch', fetchJobs(new AbortController().signal));
      cy.window()
        .its('Cypress')
        .its('store')
        .invoke('getState')
        .its('jobs')
        .its('jobs')
        .then((jobs) => expect(jobs[0].id).to.eq(1));
    });
  });
});

describe('Testing adding and removing filters', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.intercept(
      {
        method: 'GET',
        url: '/api',
      },
      [testJob1, testJob2]
    ).as('fetchJobs');
    cy.window()
      .its('Cypress')
      .its('store')
      .invoke('dispatch', fetchJobs(new AbortController().signal));
  });
  it('Testing if "filters" is initially empty', () => {
    cy.window()
      .its('Cypress')
      .its('store')
      .invoke('getState')
      .its('filters')
      .its('filters')
      .then((filters) => expect(filters.length).to.eq(0));
  });
  it('Testing adding a filter by clicking on it', () => {
    cy.contains('testRole1').trigger('click');
    cy.window()
      .its('Cypress')
      .its('store')
      .invoke('getState')
      .its('filters')
      .its('filters')
      .then((filters) => expect(filters.includes('testRole1')).to.eq(true));
  });
  it('Testing adding a second filter by clicking on it', () => {
    cy.contains('testRole1').trigger('click');
    cy.contains('testLevel1').trigger('click');
    cy.window()
      .its('Cypress')
      .its('store')
      .invoke('getState')
      .its('filters')
      .its('filters')
      .then((filters) =>
        expect(
          filters.includes('testRole1') && filters.includes('testLevel1')
        ).to.eq(true)
      );
  });
  it('Testing removing a filter by clicking the "X" button', () => {
    cy.contains('testRole1').trigger('click');
    cy.contains('testRole1').first().siblings().first().trigger('click');
    cy.window()
      .its('Cypress')
      .its('store')
      .invoke('getState')
      .its('filters')
      .its('filters')
      .then((filters) => expect(filters.length).to.eq(0));
  });
  it('Testing clearing all filters by clicking "clear"', () => {
    cy.contains('testRole1').trigger('click');
    cy.contains('testLevel1').trigger('click');
    cy.contains('Clear').trigger('click');
    cy.window()
      .its('Cypress')
      .its('store')
      .invoke('getState')
      .its('filters')
      .its('filters')
      .then((filters) => expect(filters.length).to.eq(0));
  });
});

describe('Testing Whether the correct job listings are shown for each filter', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.intercept(
      {
        method: 'GET',
        url: '/api',
      },
      [testJob1, testJob2]
    ).as('fetchJobs');
    cy.window()
      .its('Cypress')
      .its('store')
      .invoke('dispatch', fetchJobs(new AbortController().signal));
  });
  it('Testing using "testRole1" filter. test item #2 should not be shown.', () => {
    cy.contains('testRole1').trigger('click');
    cy.contains('testPosition1').should('exist');
    cy.contains('testPosition2').should('not.exist');
  });
  it('Testing using "testRole2" filter. test item #1 should not be shown.', () => {
    cy.contains('testRole2').trigger('click');
    cy.contains('testPosition1').should('not.exist');
    cy.contains('testPosition2').should('exist');
  });
});
