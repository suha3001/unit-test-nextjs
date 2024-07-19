import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";  // สำหรับ matchers เช่น `toHaveTextContent`
import DashboardIndexPage from "@/pages/dashboard";

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

        const buttonElement = screen.getByRole('button');

        expect(buttonElement).toBeDisabled();
    });

    it('ข้อความสีฟ้า', () => {
        render(<DashboardIndexPage/>);

        const pElement = screen.getByTestId('paragraph-blue');

        expect(pElement).toHaveClass('text-blue');
    });
});
