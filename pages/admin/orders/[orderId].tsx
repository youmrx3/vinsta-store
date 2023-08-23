
import { Box, Typography } from "@mui/material"
import clsx from "clsx"
import { useAppSelector } from "@vinstacore/store/clientHooks"
import { orderSelector } from "@vinstacore/store/selectors"
import ShippingCard from "@adminapp/modules/orders/components/ShippingCard"
import ItemsList from "@adminapp/modules/orders/components/ItemsList"
import { useLoadOrderIdParam } from "@vinstacore/hooks/useOrder"

function OrderDetaillsPage() {

    const {orderId} = useLoadOrderIdParam() 

    const order = useAppSelector(state => orderSelector({ ...state, orderId:orderId }))


    const className = clsx([
        "p-4 flex flex-col justify-evenly items-center h-screen md:flex-row"
    ])

    if (order === undefined) {
        return (
            <Typography variant="h4">Error Occured</Typography>
        )
    }

    return (
        <Box className={className}>


            <ShippingCard address={order.shipping} status={order.header.status} />

            <ItemsList items={order.items} />

        </Box>
    )
}


export default OrderDetaillsPage