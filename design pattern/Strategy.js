// strategy
const bounsType =  {
  salary: ({ salary, hour }) => salary,
  performanceBonus: ({ salary, hour }) => salary * 0.2,
  yearEndBonuses: ({ salary, hour }) => salary * 3,
  QuarterBonus: ({ salary, hour }) => salary * 1,
  overtime: ({ salary, hour }) => 500 * hour,
  holidayBonus: 3000,
  birthdayBouns: 8000,
}

// computed
function calcAmount (staff) {
  let total = 0
  staff.bounsType.forEach(type => {
    if (typeof bounsType[type] === 'number') total += bounsType[type]
    else total += bounsType[type](staff)
  })

  return total
}

// staff instance
staffOne = {
  salary: 50000,
  hour: 0,
  bounsType: [
    'salary',
    'yearEndBonuses',
    'holidayBonus',
    'birthdayBouns',
  ]
}

const annualSalary = calcAmount(staffOne)