import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'moment-timezone';
import { Container, Row } from "react-bootstrap";

function Datepicker() {
    const [selectedDate, setSelectedDate] = useState();

    return (
        <Container>
            <Row>
                <DatePicker
                    selected={selectedDate}
                    onChange={date => setSelectedDate(date)}
                    maxDate={new Date()}
                    isClearable
                    showYearDropdown
                    scrollableYearDropdown
                />
            </Row>
        </Container>
    );
}

export default Datepicker;