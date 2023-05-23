/**
 * Класс TransactionsWidget отвечает за
 * открытие всплывающих окон для
 * создания нового дохода или расхода
 * */

class TransactionsWidget {
  /**
   * Устанавливает полученный элемент
   * в свойство element.
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor( element ) {
    if (!element) {
      throw new Error('Пустое значение');
    } else {
      this.element = element;
    }
    this.registerEvents();
  }
  /**
   * Регистрирует обработчики нажатия на
   * кнопки «Новый доход» и «Новый расход».
   * При нажатии вызывает Modal.open() для
   * экземпляра окна
   * */
  registerEvents() {
    //income
    const createIncomeButton = document.querySelector('.create-income-button');

    createIncomeButton.addEventListener('click', elem => {
      elem.preventDefault();
      App.getModal("newIncome").open();
    });
    //expense
    const createExpenseButton = document.querySelector('.create-expense-button');

    createExpenseButton.addEventListener('click', elem => {
      elem.preventDefault();
      App.getModal("newExpense").open();
    });
  }
}
