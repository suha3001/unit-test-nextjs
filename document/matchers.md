# Matchers
 ในการทดสอบ UI และฟังก์ชันใน JavaScript/TypeScript, matchers เป็นฟังก์ชันที่ใช้ในการตรวจสอบหรือยืนยันว่าค่าที่ได้รับจากการทดสอบตรงกับค่าที่คาดหวังหรือไม่ Matchers ช่วยให้เราสามารถเขียนการทดสอบที่เข้าใจง่ายและอ่านออกได้ง่าย


## ประเภทของ Matchers
### 1. Equality Matchers
- ตรวจสอบความเท่าเทียมของค่าที่คาดหวัง
- ตัวอย่าง:
    ```javascript
        expect(value).toBe(expected);  // ตรวจสอบว่าค่าที่ได้รับเหมือนกับค่าที่คาดหวัง
        expect(value).toEqual(expected);  // ใช้สำหรับตรวจสอบความเท่าเทียมของอ็อบเจ็กต์หรืออาเรย์
    ```
### 2. Truthiness Matchers
- ตรวจสอบว่าอะไรบางอย่างเป็นจริงหรือไม่
- ตัวอย่าง:
    ```javascript
        expect(value).toBeTruthy();  // ตรวจสอบว่า value เป็น true หรือไม่
        expect(value).toBeFalsy();  // ตรวจสอบว่า value เป็น false หรือไม่
    ```
### 3. Nullish Matchers
- ตรวจสอบว่าเป็น null หรือ undefined หรือไม่
- ตัวอย่าง:
    ```javascript
        expect(value).toBeNull();  // ตรวจสอบว่า value เป็น null หรือไม่
        expect(value).toBeUndefined();  // ตรวจสอบว่า value เป็น undefined หรือไม่
        expect(value).toBeDefined();  // ตรวจสอบว่า value ไม่เป็น undefined
    ```
### 4. Number Matchers
- ตรวจสอบค่าตัวเลข
- ตัวอย่าง:
    ```javascript
        expect(value).toBeGreaterThan(number);  // ตรวจสอบว่ามากกว่าหมายเลขที่กำหนด
        expect(value).toBeLessThan(number);  // ตรวจสอบว่าต่ำกว่าหมายเลขที่กำหนด
        expect(value).toBeCloseTo(number, precision);  // ตรวจสอบว่าค่ามีความใกล้เคียงกับหมายเลขที่กำหนด
    ```
### 5. String Matchers
- ตรวจสอบสตริง
- ตัวอย่าง:
    ```javascript
        expect(string).toMatch(regex);  // ตรวจสอบว่า string ตรงกับ regex หรือไม่
### 6. Array Matchers
- ตรวจสอบอาเรย์
- ตัวอย่าง:
    ```javascript
        expect(array).toContain(item);  // ตรวจสอบว่า array มี item หรือไม่
    ```
### 7. DOM Matchers
- ใช้ในการทดสอบการทำงานขององค์ประกอบใน DOM
- ตัวอย่าง:
    ```javascript
        expect(element).toBeInTheDocument();  // ตรวจสอบว่า element อยู่ในเอกสาร DOM
        expect(element).toBeVisible();  // ตรวจสอบว่า element มองเห็นได้
        expect(element).toHaveTextContent(text);  // ตรวจสอบว่า element มีเนื้อหาที่กำหนด
    ```

## Matchers อื่นๆ เพิ่มเติม

### 1. toBeDisabled 
  - ตรวจสอบว่าองค์ประกอบนั้นถูกปิดการใช้งานหรือไม่
  - ตัวอย่าง:
    ```javascript 
    expect(screen.getByRole('button')).toBeDisabled(); 
    ```
### 2. toBeEnabled
  - ตรวจสอบว่าองค์ประกอบนั้นเปิดการใช้งานหรือไม่
  - ตัวอย่าง:
    ```javascript
      expect(screen.getByRole('button')).toBeEnabled();
    ```
### 3. toBeEmptyDOMElement
  - ตรวจสอบว่าองค์ประกอบนั้นไม่มีลูกที่เป็นองค์ประกอบ DOM หรือไม่
  - ตัวอย่าง:
    ```javascript
      expect(screen.getByTestId('empty-div')).toBeEmptyDOMElement();
    ```

### 4. toBeInTheDocument
  - ตรวจสอบว่าองค์ประกอบนั้นอยู่ในเอกสารหรือไม่
  - ตัวอย่าง:
    ```javascript
      expect(screen.getByText('Hello world')).toBeInTheDocument();
    ```
### 5. toBeInvalid
  - ตรวจสอบว่าองค์ประกอบนั้นมีสถานะ invalid หรือไม่
  - ตัวอย่าง:
    ```javascript
      expect(screen.getByLabelText('Email')).toBeInvalid();
    ```
### 6. toBeRequired
  - ตรวจสอบว่าองค์ประกอบนั้นมีแอตทริบิวต์ required หรือไม่
  - ตัวอย่าง:
    ```javascript
      expect(screen.getByLabelText('Username')).toBeRequired();
    ```
### 7. toBeValid
  - ตรวจสอบว่าองค์ประกอบนั้นมีสถานะ valid หรือไม่
  - ตัวอย่าง:
    ```javascript
      expect(screen.getByLabelText('Email')).toBeValid();
    ```
### 8. toBeVisible
  - ตรวจสอบว่าองค์ประกอบนั้นมองเห็นได้หรือไม่
  - ตัวอย่าง:
    ```javascript
      expect(screen.getByText('Visible text')).toBeVisible();
    ```
### 9. toContainElement
  - ตรวจสอบว่าองค์ประกอบหนึ่งประกอบไปด้วยอีกองค์ประกอบหนึ่งหรือไม่
  - ตัวอย่าง:
    ```javascript
      expect(screen.getByTestId('parent')).toContainElement(screen.getByTestId('child'));
    ```
### 10. toContainHTML
  - ตรวจสอบว่าองค์ประกอบหนึ่งประกอบไปด้วย HTML ที่กำหนดหรือไม่
  - ตัวอย่าง:
    ```javascript
      expect(screen.getByTestId('container')).toContainHTML('<span>Text</span>');
    ```
### 11. toHaveAccessibleDescription
  - ตรวจสอบว่าองค์ประกอบนั้นมีคำอธิบายที่เข้าถึงได้ตามที่กำหนดหรือไม่
  - ตัวอย่าง:
    ```javascript
      expect(screen.getByRole('button')).toHaveAccessibleDescription('Submit the form');
    ```
### 12. toHaveAccessibleName
  - ตรวจสอบว่าองค์ประกอบนั้นมีชื่อที่เข้าถึงได้ตามที่กำหนดหรือไม่
  - ตัวอย่าง:
    ```javascript
      expect(screen.getByRole('button')).toHaveAccessibleName('Submit');
    ```
### 13. toHaveAttribute
  - ตรวจสอบว่าองค์ประกอบนั้นมีแอตทริบิวต์ที่กำหนดหรือไม่
  - ตัวอย่าง:
    ```javascript
      expect(screen.getByTestId('image')).toHaveAttribute('src', 'logo.png');
    ```
### 14. toHaveClass
  - ตรวจสอบว่าองค์ประกอบนั้นมีคลาสที่กำหนดหรือไม่
  - ตัวอย่าง:
    ```javascript
      expect(screen.getByTestId('button')).toHaveClass('btn-primary');
    ```
### 15. toHaveFocus
  - ตรวจสอบว่าองค์ประกอบนั้นมีโฟกัสหรือไม่
  - ตัวอย่าง:
    ```javascript
      expect(screen.getByTestId('input')).toHaveFocus();
    ```
### 16. toHaveFormValues
  - ตรวจสอบว่าฟอร์มนั้นมีค่าที่กำหนดหรือไม่
  - ตัวอย่าง:
    ```javascript
      expect(screen.getByTestId('form')).toHaveFormValues({
        username: 'john_doe',
        email: 'john@example.com'
      });
    ```
### 17. toHaveStyle
  - ตรวจสอบว่าองค์ประกอบนั้นมีสไตล์ที่กำหนดหรือไม่
  - ตัวอย่าง:
    ```javascript
      expect(screen.getByTestId('button')).toHaveStyle('background-color: red');
    ```
### 18. toHaveTextContent
  - ตรวจสอบว่าองค์ประกอบนั้นมีเนื้อหาตามที่กำหนดหรือไม่
  - ตัวอย่าง:
    ```javascript
      expect(screen.getByTestId('paragraph')).toHaveTextContent('Hello world');
    ```
### 19. toHaveValue
  - ตรวจสอบว่าองค์ประกอบ input นั้นมีค่าที่กำหนดหรือไม่
  - ตัวอย่าง:
    ```javascript
      expect(screen.getByLabelText('Username')).toHaveValue('john_doe');
    ```
### 20. toHaveDisplayValue
  - ตรวจสอบว่าองค์ประกอบ select หรือ input นั้นแสดงค่าที่กำหนดหรือไม่
  - ตัวอย่าง:
    ```javascript
      expect(screen.getByLabelText('Country')).toHaveDisplayValue('Thailand');
    ```
### 21. toBeChecked
  - ตรวจสอบว่าองค์ประกอบ checkbox หรือ radio นั้นถูกเลือกหรือไม่
  - ตัวอย่าง:
    ```javascript
      expect(screen.getByRole('checkbox')).toBeChecked();
    ```
### 22. toBePartiallyChecked
  - ตรวจสอบว่าองค์ประกอบ checkbox นั้นถูกเลือกบางส่วนหรือไม่
  - ตัวอย่าง:
    ```javascript
      expect(screen.getByRole('checkbox')).toBePartiallyChecked();
    ```
### 23. toHaveErrorMessage
  - ตรวจสอบว่าองค์ประกอบ input นั้นมีข้อความแสดงข้อผิดพลาดตามที่กำหนดหรือไม่
  - ตัวอย่าง:
    ```javascript
      expect(screen.getByLabelText('Email')).toHaveErrorMessage('Invalid email address');
    ```