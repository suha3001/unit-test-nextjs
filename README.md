# Next.js + Jest

This example shows how to configure Jest to work with Next.js.

This includes Next.js' built-in support for Global CSS, CSS Modules and TypeScript. This example also shows how to use Jest with the App Router and React Server Components.

> **Note:** Since tests can be co-located alongside other files inside the App Router, we have placed those tests in `app/` to demonstrate this behavior (which is different than `pages/`). You can still place all tests in `__tests__` if you prefer.

## Deploy your own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-jest&project-name=with-jest&repository-name=with-jest)

## How to Use

Quickly get started using [Create Next App](https://github.com/vercel/next.js/tree/canary/packages/create-next-app#readme)!

In your terminal, run the following command:

```bash
npx create-next-app --example with-jest with-jest-app
```

```bash
yarn create next-app --example with-jest with-jest-app
```

```bash
pnpm create next-app --example with-jest with-jest-app
```

## Running Tests

```bash
npm run test 
npm run test -- --coverage
```

### Coverage report

File             |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-----------------|----------|----------|----------|----------|-------------------|
All files        |    85.71 |      100 |       75 |    85.71 |                   |
 components      |      100 |      100 |      100 |      100 |                   |
  Header.js      |      100 |      100 |      100 |      100 |                   |
 pages           |    75.61 |      100 |    66.67 |    75.61 |                   |
  index.js       |    75.61 |      100 |    66.67 |    75.61 |                34 |

> **Note:** รายงาน Coverage ดป็นรายงานแสดงข้อมูลการครอบคลุมของโค้ดในการทดสอบ โดยจะแบ่งข้อมูลออกเป็นส่วนต่างๆ และแสดงรายละเอียดเปอร์เซ็นต์การครอบคลุมของแต่ละส่วน ตารางนี้ช่วยให้เข้าใจว่ามีส่วนใดของโค้ดที่ยังไม่ได้รับการทดสอบและต้องการการทดสอบเพิ่มเติม
>1. File: ชื่อไฟล์หรือโฟลเดอร์ของโค้ดที่ถูกทดสอบ
>2. % Stmts: เปอร์เซ็นต์ของ statements ที่ถูกทดสอบ (statements coverage)
>3. % Branch: เปอร์เซ็นต์ของ branches ที่ถูกทดสอบ (branches coverage) เช่น if-else, switch-case
>4. % Funcs: เปอร์เซ็นต์ของฟังก์ชันที่ถูกทดสอบ (functions coverage)
>5. % Lines: เปอร์เซ็นต์ของบรรทัดโค้ดที่ถูกทดสอบ (lines coverage)
>6. Uncovered Line #s: หมายเลขบรรทัดที่ยังไม่ได้ทดสอบ


