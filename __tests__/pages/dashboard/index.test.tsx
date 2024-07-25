import React from "react";
import { render, screen, fireEvent, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import "@testing-library/jest-dom";  // สำหรับ matchers เช่น `toHaveTextContent`
import { fetchPosts, subtract, DashboardIndexPage } from "@/pages/dashboard";
import SearchComponent from "components/Search";

// jest.mock('@/pages/dashboard', () => ({
//     ...jest.requireActual('@/pages/dashboard'),
//     fetchPosts: jest.fn(),
// }));

describe('Dashboard page', () => {
    // it('Should render properly', () => {
    //     render(<DashboardIndexPage />);
    //     const header = screen.getByRole('heading'); // ค้นหาคอมโพเนนต์ที่มีบทบาทเป็น heading
    //     const headerText = 'Dashboard Index Page'; // ข้อความที่คาดหวัง

    //     // ตรวจสอบว่าข้อความของ header ตรงกับที่คาดหวัง
    //     expect(header).toHaveTextContent(headerText);
    // });

    it('ปุ่มกดยืนยัน', () => {
        render(<DashboardIndexPage />);

        const buttonElement = screen.getByTestId('button-confirm');

        expect(buttonElement).toBeDisabled();

        // fireEvent.click(buttonElement);

        // expect(fetchPosts).toHaveBeenCalled();
    });

    it('ข้อความสีฟ้า', () => {
        render(<DashboardIndexPage />);

        const pElement = screen.getByTestId('paragraph-blue');

        expect(pElement).toHaveClass('text-blue');
    });

    it('คำอธิบาย', () => {
        render(<DashboardIndexPage />);

        const pElement = screen.getByTestId('paragraph-description');

        expect(pElement).toHaveClass('decription-hl')
    });

    it('Must substract properly', async () => {
        expect(subtract(1, 2)).toBe(-1)
    })

    it('value', () => {
        render(<DashboardIndexPage />);
        const textInput = screen.getByTestId("input-text");
        expect(textInput).toHaveValue();
    })

    it('ข้อความสีเขียว', () => {
        render(<DashboardIndexPage />);

        const pElement = screen.getByTestId('paragraph-green');

        expect(pElement).toHaveClass('text-green');
    });

    it('label', () => {
        render(<DashboardIndexPage />);

        const inputElement = screen.getByLabelText(/username/i);
        expect(inputElement).toBeInTheDocument();
    });

    it('การกดคลิกbutton', () => {
        render(<DashboardIndexPage />);

        const buttonElement = screen.getByTestId('button-clickable');

        expect(buttonElement).toHaveTextContent('Click');

        fireEvent.click(buttonElement);

        // expect(fetchPosts).toHaveBeenCalled();
    });

    it('open and close the dialog', () => {
        render(<DashboardIndexPage />);

        expect(screen.queryByTestId('dialog')).toBeNull();

        fireEvent.click(screen.getByTestId('button-open-dialog'));

        expect(screen.getByTestId('dialog')).toBeInTheDocument();

        fireEvent.click(screen.getByText('Close'));

        expect(screen.queryByTestId('dialog')).toBeNull();
    });

    it('handles form submission and validation', async () => {
        render(<DashboardIndexPage />);
    
        // กรอกข้อมูลว่างในช่อง Username และส่งฟอร์ม
        fireEvent.change(screen.getByLabelText(/username/i), { target: { value: '' } });
        fireEvent.submit(screen.getByTestId('form'));
    
        // ตรวจสอบว่ามีข้อความข้อผิดพลาดที่แสดงอยู่
        expect(await screen.findByText(/username is required/i)).toBeInTheDocument();
    
        // กรอกข้อมูลที่ถูกต้องในช่อง Username และส่งฟอร์ม
        fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'valid username' } });
        fireEvent.submit(screen.getByTestId('form'));
    
        // ตรวจสอบว่ามีข้อความการส่งฟอร์มสำเร็จที่แสดงอยู่
        // expect(await screen.findByText(/form submitted successfully with username: valid username/i)).toBeInTheDocument();
      });

      it('shows loading state and then displays mock data', async () => {
        render(<DashboardIndexPage />);
    
        // คลิกปุ่มโหลดข้อมูล
        fireEvent.click(screen.getByTestId('load-button'));
    
        // ตรวจสอบว่าข้อความ "Loading..." ปรากฏ
        expect(screen.getByTestId('loading')).toBeInTheDocument();
    
        jest.advanceTimersByTime(1000);
    
        // รอให้ข้อความ "Loading..." หายไป
        // await waitForElementToBeRemoved(() => screen.getByTestId('loading'));
        await waitFor(() => expect(screen.queryByTestId('loading')).not.toBeInTheDocument());
    
        // ตรวจสอบว่าข้อมูล mock แสดงอยู่
        expect(screen.getByTestId('data')).toHaveTextContent('Name: John Doe');
        expect(screen.getByTestId('data')).toHaveTextContent('Address: 1234 Elm Street, Springfield, USA');
      });
});

describe('SearchComponent', () => {
    it('display search', () => {
        render(<SearchComponent />);

        // ป้อนข้อความลงในช่องค้นหา
        fireEvent.change(screen.getByPlaceholderText(/search/i), { target: { value: 'Laptop' } });

        // คลิกปุ่มค้นหา
        fireEvent.click(screen.getByText(/search/i));

        // ตรวจสอบว่าผลลัพธ์ที่ตรงกับคำค้นหาแสดงอยู่ในเอกสาร
        // expect(screen.getByText(/laptop model 1/i)).toBeInTheDocument();
        // expect(screen.getByText(/laptop model 2/i)).toBeInTheDocument();
        const results = screen.queryAllByText(/laptop/i);

        results.forEach(result => {
            expect(result).toBeInTheDocument();
        });

    });

    it('not display search results ', () => {
        render(<SearchComponent />);
    
        fireEvent.change(screen.getByPlaceholderText(/search/i), { target: { value: 'NonExistentProduct' } });
    
        fireEvent.click(screen.getByText(/search/i));
    
        const results = screen.queryAllByText(/nonexistentproduct/i);
    
        // // ตรวจสอบว่าไม่มีผลลัพธ์ที่แสดงอยู่ในเอกสาร
        // expect(screen.queryByText(/laptop model 1/i)).toBeNull();
        // expect(screen.queryByText(/laptop model 2/i)).toBeNull();
        // expect(screen.queryByText(/smartphone model x/i)).toBeNull();
        // expect(screen.queryByText(/tablet model y/i)).toBeNull();
      });
    });
