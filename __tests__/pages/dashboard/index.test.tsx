import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";  // สำหรับ matchers เช่น `toHaveTextContent`
import  { fetchPosts, subtract, DashboardIndexPage } from "@/pages/dashboard";

// jest.mock('@/pages/dashboard', () => ({
//     ...jest.requireActual('@/pages/dashboard'),
//     fetchPosts: jest.fn(),
// }));

describe('Dashboard page', () => {
    it('Should render properly', () => {
        render(<DashboardIndexPage />);
        const header = screen.getByRole('heading'); // ค้นหาคอมโพเนนต์ที่มีบทบาทเป็น heading
        const headerText = 'Dashboard Index Page'; // ข้อความที่คาดหวัง

        // ตรวจสอบว่าข้อความของ header ตรงกับที่คาดหวัง
        expect(header).toHaveTextContent(headerText);
    });

    it('ปุ่มกดยืนยัน', () => {
        render(<DashboardIndexPage/>);

        const buttonElement = screen.getByTestId('button-confirm');

        expect(buttonElement).toBeDisabled();

        // fireEvent.click(buttonElement);

        // expect(fetchPosts).toHaveBeenCalled();
    });

    it('ข้อความสีฟ้า', () => {
        render(<DashboardIndexPage/>);

        const pElement = screen.getByTestId('paragraph-blue');

        expect(pElement).toHaveClass('text-blue');
    });

    it('คำอธิบาย', () => {
        render(<DashboardIndexPage/>);

        const pElement = screen.getByTestId('paragraph-description');

        expect(pElement).toHaveClass('decription-hl')
    });

    it('Must substract properly', async () => {
        expect(subtract(1, 2)).toBe(-1)
    })
      
    it('value', () => {
        render(<DashboardIndexPage/>);
        const textInput = screen.getByTestId("input-text");
        expect(textInput).toHaveValue();
    })
});
