const testInput = `Monkey 0:
Starting items: 79, 98
Operation: new = old * 19
Test: divisible by 23
  If true: throw to monkey 2
  If false: throw to monkey 3

Monkey 1:
Starting items: 54, 65, 75, 74
Operation: new = old + 6
Test: divisible by 19
  If true: throw to monkey 2
  If false: throw to monkey 0

Monkey 2:
Starting items: 79, 60, 97
Operation: new = old * old
Test: divisible by 13
  If true: throw to monkey 1
  If false: throw to monkey 3

Monkey 3:
Starting items: 74
Operation: new = old + 3
Test: divisible by 17
  If true: throw to monkey 0
  If false: throw to monkey 1`;

const input = `Monkey 0:
Starting items: 52, 60, 85, 69, 75, 75
Operation: new = old * 17
Test: divisible by 13
  If true: throw to monkey 6
  If false: throw to monkey 7

Monkey 1:
Starting items: 96, 82, 61, 99, 82, 84, 85
Operation: new = old + 8
Test: divisible by 7
  If true: throw to monkey 0
  If false: throw to monkey 7

Monkey 2:
Starting items: 95, 79
Operation: new = old + 6
Test: divisible by 19
  If true: throw to monkey 5
  If false: throw to monkey 3

Monkey 3:
Starting items: 88, 50, 82, 65, 77
Operation: new = old * 19
Test: divisible by 2
  If true: throw to monkey 4
  If false: throw to monkey 1

Monkey 4:
Starting items: 66, 90, 59, 90, 87, 63, 53, 88
Operation: new = old + 7
Test: divisible by 5
  If true: throw to monkey 1
  If false: throw to monkey 0

Monkey 5:
Starting items: 92, 75, 62
Operation: new = old * old
Test: divisible by 3
  If true: throw to monkey 3
  If false: throw to monkey 4

Monkey 6:
Starting items: 94, 86, 76, 67
Operation: new = old + 1
Test: divisible by 11
  If true: throw to monkey 5
  If false: throw to monkey 2

Monkey 7:
Starting items: 57
Operation: new = old + 2
Test: divisible by 17
  If true: throw to monkey 6
  If false: throw to monkey 2`;

const notes = input.split("\n\n").map((monkey) => {
  const [id, items, operation, test, ifTrue, ifFalse] = monkey.split("\n");
  return {
    items: items.match(/\d+/g).map(Number),
    operation,
    test: test + ifTrue + ifFalse,
    divider: +test.split(" ").slice(-1),
  };
});

const worryDivider = 1;
const modulo = notes.reduce((acc, cur) => acc * cur.divider, 1);

const getOperationFn = (operation) => {
  const splitedString = operation.split(" ");
  const operand1 = splitedString[3];
  const operator = splitedString[4];
  const operand2 = splitedString[5];
  switch (operator) {
    case "+":
      return (inspectedItem) =>
        Math.floor(
          ((operand1 === "old" ? inspectedItem : +operand1) +
            (operand2 === "old" ? inspectedItem : +operand2)) /
            worryDivider
        ) % modulo;
    case "*":
      return (inspectedItem) =>
        Math.floor(
          ((operand1 === "old" ? inspectedItem : +operand1) *
            (operand2 === "old" ? inspectedItem : +operand2)) /
            worryDivider
        ) % modulo;

    default:
      throw new Error("operator not supported");
  }
};

const getTestFn = (test) => {
  const [divider, option1, option2] = test.match(/\d+/g);
  return (value) => (value % divider ? +option2 : +option1);
};

const getThrowFn = (monkeyArr) => (monkey, item) =>
  monkeyArr[monkey].itemQueue.push(item);

const buildMonkey = (monkey, monkeyArr) => {
  return {
    itemToInspect: null,
    nbOfInspectedItem: 0,
    itemQueue: [...monkey.items],
    operation: getOperationFn(monkey.operation),
    test: getTestFn(monkey.test),
    throwItem: getThrowFn(monkeyArr),
    handleItems() {
      if (!this.itemQueue.length) return;
      this.nbOfInspectedItem += this.itemQueue.length;
      [...this.itemQueue].forEach(() => this.inspectItem());
    },
    inspectItem() {
      this.itemToInspect = this.itemQueue.shift();
      this.itemToInspect = this.operation(this.itemToInspect);
      const throwTo = this.test(this.itemToInspect);
      this.throwItem(throwTo, this.itemToInspect);
    },
  };
};

const monkeys = [];

notes.forEach((monkey) => {
  monkeys.push(buildMonkey(monkey, monkeys));
});

for (let i = 0; i < 10000; i++) {
  monkeys.forEach((monkey) => monkey.handleItems());
}

const monkeyBusinessLevel = monkeys
  .map((monkey) => monkey.nbOfInspectedItem)
  .sort((a, b) => a - b)
  .slice(-2)
  .reduce((acc, cur) => acc * cur);

console.log(monkeyBusinessLevel);
