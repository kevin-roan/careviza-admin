import { faker } from '@faker-js/faker'

export const users = Array.from({ length: 20 }, () => {
  const firstName = faker.person.firstName()
  const lastName = faker.person.lastName()
  return {
    id: faker.string.uuid(),
    firstName,
    lastName,
    fullName: `${firstName} ${lastName}`,
    phoneNumber: faker.phone.number({ style: 'international' }),
    email: faker.internet.email({ firstName }).toLocaleLowerCase(),
    education: faker.helpers.arrayElement([
      'BSc Nursing',
      'GNM (General Nursing and Midwifery)',
      'ANM (Auxiliary Nurse and Midwife)',
      'MSc Nursing',
      'Post Basic BSc Nursing',
    ]),
    experience: faker.number.int({ min: 0, max: 15 }),
    department: faker.helpers.arrayElement([
      'Emergency Department',
      'Intensive Care Unit (ICU)',
      'Pediatrics',
      'Cardiology',
      'Orthopedics',
      'Oncology',
      'General Ward',
      'Operation Theatre',
      'Neonatal ICU',
      'Psychiatry',
    ]),
    expectedSalary: faker.number.int({ min: 25000, max: 80000 }),
    status: faker.helpers.arrayElement([
      'active',
      'inactive',
      'pending',
      'suspended',
    ]),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  }
})
