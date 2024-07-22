## Screen

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