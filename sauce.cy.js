describe('test', () => {
/* Заход на сайт */
    beforeEach('Заход на сайт', () => {
    cy.visit('https://wiki.teamfortress.com/wiki/Main_Page')
  })

  /* Тестирование регистрации */
  it('Тестирование регистрации на сайте', () => {

    const login = 'mylogin2';
    const password = 'mypassword2';

    cy.get('a').contains('Log out').click()
    cy.get('a').contains('Create account').click()
    /* Данный код работает но каптча мешает подтверждению данных */
    cy.get('input[id="wpName2"]').type(login)
    cy.get('input[id="wpPassword2"]').type(password)
    cy.get('input[id="wpRetype"]').type(password)
    cy.get('button').contains('Create your account').click()
  })

/* Тестирование авторизации */
  beforeEach('Тестирование авторизации', () => {

    const login = 'mylogin2';
    const password = 'mypassword2';

    cy.get('a').contains('Log in').click()
    cy.get('input[id="wpName1"]').type(login)
    cy.get('input[id="wpPassword1"]').type(password)
    cy.get('button[id="wpLoginAttempt"]').click()
  }) 
/* Проверка строчки ввода в шапке сайта и страницы персонажа */
  it('Тестирование строчки ввода и страницы персонажа', () => {

    const character = 'Scout';
    cy.get('input[name="search"]').type(character)
    cy.get('input[name="go"]').click()
    cy.get('span').contains('Click to listen').click()
    cy.get('span').contains('Bio').click()
    cy.get('a[title="Meet the Scout"]').contains('Meet the Scout').click()
    cy.get('iframe').click()
  })


/* Тестирование страницы history */
  it('Тест страницы history', () => {

    const year = '2013'

    cy.get('a').contains('View history').click({force: true})
    cy.get('input[id="year"]').type(year)
    cy.get('option[value="6"]').click({force: true})
    cy.get('input[value="Show"]').click()
    cy.get('input[id="mw-oldid-993419"]').click()
    cy.get('input[value="Compare selected revisions"]:first').click()

  })


/* Тестирование страницы Contributions в авторизовавшимся аккаунте */
  it('Страница Contributions', () => {
    
    const first_date = '2013-3-13'
    const last_date = '2013-12-9'

    cy.get('a').contains('Contributions').click()
    cy.get('option[value="1"]').click({force: true})
    cy.get('label').contains('Invert selection').click()
    cy.get('label').contains('Associated namespace').click()
    cy.get('label').contains('Only show edits that are latest revisions').click()
    cy.get('label').contains('Only show edits that are page creations').click()
    cy.get('input[value="Search"]').click()
  })

    it('Создание и просмотр своей темы', () => {
    
    const Subject = 'Test'
    const Description = 'Test'

    cy.get('a').contains('Talk').click()
    cy.get('a').contains('Add topic').click({force: true})
    cy.get('input[name="wpSummary"]').type(Subject)
    cy.get('textarea[name="wpTextbox1"]').type(Description)
    cy.get('input[id="wpPreview"]').click()
  })

})
