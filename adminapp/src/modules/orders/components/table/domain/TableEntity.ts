import { Repository } from "@vinstacore";
import mockOrders from "../../../tests/MockOrders";

interface RowData {
    value: string;
}


function orderToRowData(orderHeader: Repository.OrderHeader): RowData[] {
    return [
        { value: orderHeader.id },
        { value: orderHeader.createdAt },
        { value: orderHeader.status },
        { value: orderHeader.total.toString() },
    ]
}


function mockOrderRows(): Repository.OrderHeader[] {

    const orders = mockOrders.map(raw => {
        return raw.header
    })

    return orders
}

export { mockOrderRows, orderToRowData }