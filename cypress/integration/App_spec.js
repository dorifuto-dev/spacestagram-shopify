describe('Spacestagram - User Flows', () => {

  beforeEach(() => {
    cy.intercept('GET', 'https://api.nasa.gov/planetary/apod**', {fixture: 'images.json'})
    cy.visit('http://localhost:3000/') 
  })

  it('Should have a default homepage URL', () => {
    cy.url('http://localhost:3000/')
  })

  it('Should display a list of Astronomy images on the landing page', () => {
    cy.get(':nth-child(1) > .image-card-header > .image-card-link > .image-card-title')
      .contains('Postcard from the South Pole')
    cy.get(':nth-child(2) > .image-card-header > .image-card-link > .image-card-title')
      .contains('Comet Leonard Before Star Cluster M3')
    cy.get(':nth-child(2) > .image-card-footer > .image-card-date')
      .contains('December 12, 2021')
  })

  it('As a user, I should be able to like and unlike images', () => {
    cy.get(':nth-child(1) > .image-card-footer > .like-button > .unliked-icon')
      .click()
    cy.get('.liked-icon')
      .should('exist')
    cy.get(':nth-child(1) > .image-card-footer > .like-button > .unliked-icon')
      .should('not.exist')
    cy.get('.liked-icon')
      .click()
    cy.get(':nth-child(1) > .image-card-footer > .like-button > .unliked-icon')
      .should('exist')
    cy.get('.liked-icon')
      .should('not.exist')
  })

  it('As a user, when I like a photo on the mainpage, then view that photo\'s details, it is still liked', () => {
    cy.get(':nth-child(1) > .image-card-footer > .like-button > .unliked-icon')
      .click()
    cy.get(':nth-child(1) > .image-card-header > .image-card-link > .image-card-photo')
      .click()
    cy.get('.detail-liked-icon')
      .should('exist')
      .click()
    cy.get('.detail-unliked-icon')
      .should('exist')
    cy.get('.detail-liked-icon')
      .should('not.exist')
  })

  it('As a user, when I click on an image, I can view the image description', () => {
    cy.get(':nth-child(1) > .image-card-header > .image-card-link > .image-card-photo')
      .click()
    cy.url('http://localhost:3000/20211211')
    cy.get('.detail-card-synopsis')
      .contains('From this vantage point about three quarters of a mile from planet Earth\'s geographic South Pole, the December 4 eclipse of the Sun was seen as a partial eclipse. At maximum the New Moon blocked 90 percent of the solar disk. Of course, crews at the South Pole Telescope (left) and BICEP telescope (right) climbed to the roof of Amundsen-Scott station\'s Dark Sector Laboratory to watch. Centered near the local eclipse maximum, the composite timelapse view features an image of the Sun traversing cold antarctic skies taken every four minutes. Left to right along the roof line it also features the raised arms of Brandon Amat, Aman Chokshi, Cheng Zhang, James Bevington and Allen Foster.')
    cy.get('.detail-card-copyright')
      .contains('Aman Chokshi')
  })

  it('As a user, when I am on a detail page, I can click the arrow icon to return home', () => {
    cy.get(':nth-child(2) > .image-card-header > .image-card-link > .image-card-photo')
      .click()
    cy.url('http://localhost:3000/20211212')
    cy.get('.go-back-icon')
      .click()
    cy.url('http://localhost:3000/')
    cy.get('.detail-card-synopsis')
      .should('not.exist')
  })
})

// cy.intercept('https://api.nasa.gov/planetary/apod?start_date=2021-12-11&end_date=2021-12-25&api_key=MEDNcZSPhOUJrNsjUhQdxSthGKcS3Pe0qeIx3OdR**')