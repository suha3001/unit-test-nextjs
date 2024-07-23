# Screen

**screen** เป็นตัวช่วยที่มาจาก Testing Library (@testing-library/react) ซึ่งใช้สำหรับการทดสอบองค์ประกอบใน React. `screen` ให้เราสามารถเข้าถึงและโต้ตอบกับ DOM ที่ถูกสร้างขึ้นโดยการเรียก `render` โดยไม่ต้องอ้างถึง container ที่เป็นรากของการเรนเดอร์.

## ประโยชน์ของการใช้ screen
ทำให้การทดสอบง่ายขึ้น: คุณไม่จำเป็นต้องเก็บผลลัพธ์ของ `render` และใช้สำหรับค้นหาองค์ประกอบ
เพิ่มความชัดเจน: การใช้ `screen` ช่วยให้การทดสอบอ่านง่ายและชัดเจนขึ้น
ปฏิบัติตามแนวปฏิบัติที่ดี: เป็นแนวทางที่แนะนำในการเขียนการทดสอบด้วย Testing Library

## ฟังก์ชันหลักของ `screen`
`screen` ให้ฟังก์ชันหลายอย่างที่สามารถใช้ในการค้นหาองค์ประกอบใน DOM เช่น:
  1. `getBy...`: ค้นหาองค์ประกอบทันที ถ้าไม่พบจะเกิดข้อผิดพลาด
  2. `findBy...`: ค้นหาองค์ประกอบแบบอะซิงโครนัส รอจนกว่าองค์ประกอบจะปรากฏใน DOM ถ้าไม่พบจะเกิดข้อผิดพลาด เช่น การเรียก API หรือการเปลี่ยนแปลงสถานะ
  3. `queryBy...`: ค้นหาองค์ประกอบทันที ถ้าไม่พบจะไม่เกิดข้อผิดพลาด แต่จะคืนค่า null

**เวอร์ชันที่คืนค่าหลายองค์ประกอบ**: `getAllBy...`, `findAllBy...`, และ `queryAllBy...`

### 1. getByText
  - ค้นหาองค์ประกอบที่มีข้อความตรงกับที่ระบุ
  - ตัวอย่าง:
    ```tsx
      <h1>Hello, World!</h1>;

      const greetingElement = screen.getByText(/hello, world!/i);
      expect(greetingElement).toBeInTheDocument();
    ```
### 2. getByRole
  - ค้นหาองค์ประกอบโดยใช้บทบาท (role)
  - ตัวอย่าง:
    ```tsx
      <button type="submit">Submit</button>;

      const buttonElement = screen.getByRole('button', { name: /submit/i });
      expect(buttonElement).toBeInTheDocument();
    ```
### 3. getByLabelText
  - ค้นหาองค์ประกอบที่สัมพันธ์กับ label โดยใช้ `htmlFor` หรือ `aria-label`
  - ตัวอย่าง:
    ```tsx
      <form>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
      </form>

      const inputElement = screen.getByLabelText(/username/i);
      expect(inputElement).toBeInTheDocument();
    ```
### 4. getByPlaceholderText
  - ค้นหาองค์ประกอบที่มีข้อความตัวอย่าง (placeholder)
  - ตัวอย่าง:
    ```tsx
      <input placeholder="Search..." />;

      const inputElement = screen.getByPlaceholderText(/search.../i);
      expect(inputElement).toBeInTheDocument();
    ```
### 5. getByTestId
  - ค้นหาองค์ประกอบโดยใช้ data-testid attribute
  - ตัวอย่าง:
    ```tsx
      <div data-testid="custom-element">Custom Element</div>;

      const element = screen.getByTestId('custom-element');
      expect(element).toBeInTheDocument();
    ```